"use client";
import { useState } from "react";
import { PaymentCreateData } from "@/lib/types";

export function useCreateCashPayment(patientId: string) {
  const [paymentData, setPaymentData] = useState<PaymentCreateData>({
    payment_method: null,
    order: 0,
    paid_amount: 0,
    status: "draft",
    payment_reference: "",
    created_by: patientId,
  });
  const handleUpdatePaymentData = (name: string, value: string | number) => {
    setPaymentData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { paymentData, handleUpdatePaymentData };
}
