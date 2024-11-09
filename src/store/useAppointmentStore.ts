import { create } from "zustand";
import { ISingleService } from "@/lib/types/services";

export interface IInitialAppointment {
  start_time: string;
  quantity: number;
  service: ISingleService;
  status: "scheduled";
  employee: null;
  created_by: string | null;
  updated_by: string | null;
}

type Store = {
  selectedDate: string;
  branch: {
    id: string | number;
    name: string;
  } | null;
  addBranch: (branch: { id: string | number; name: string }) => void;
  // addService: (service: ISingleService) => void;
  selectedAppointments: IInitialAppointment[];
  addAppointment: (appointment: IInitialAppointment) => void;
  updateAppointment: (appointment: IInitialAppointment) => void;
  resetValues: () => void;
};

export const useAppointmentStore = create<Store>()((set) => ({
  selectedServices: [],
  selectedAppointments: [],
  selectedDate: "",
  branch: null,
  addBranch: (branch) => set({ branch }),
  addAppointment: (receivedAppointment) =>
    set((state) => {
      const index = state.selectedAppointments.findIndex(
        (appointment) =>
          appointment.service.id === receivedAppointment.service.id
      );
      if (index !== -1) {
        return {
          selectedAppointments: [
            ...state.selectedAppointments.slice(0, index),
            ...state.selectedAppointments.slice(index + 1),
          ],
        };
      } else {
        return {
          selectedAppointments: [
            ...state.selectedAppointments,
            receivedAppointment,
          ],
        };
      }
    }),
  updateAppointment: (receivedAppointment) =>
    set((state) => {
      const updatedAppointments = state.selectedAppointments.map((app) => {
        if (app.service.id === receivedAppointment.service.id)
          return receivedAppointment;
        else return app;
      });
      return {
        selectedAppointments: [...updatedAppointments],
      };
    }),
  resetValues: () => {
    set({ branch: null });
    set({ selectedDate: "" });
    set({ selectedAppointments: [] });
  },
}));
