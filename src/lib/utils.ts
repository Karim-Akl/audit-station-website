import { type ClassValue, clsx } from "clsx";
import { signIn } from "next-auth/react";
import { twMerge } from "tailwind-merge";

export const signInWithSSOProvider = (provider: string) => {
  signIn(provider);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
