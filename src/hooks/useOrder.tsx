"use client";
import { ISingleOrder } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export const useOrder = (orderId: string) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const response = await fetch(
        `https://avitane.brontosolutions.com/ecommerce/order/${orderId}/`
      );
      const data = await response.json();
      return data as ISingleOrder;
    },
  });
};
