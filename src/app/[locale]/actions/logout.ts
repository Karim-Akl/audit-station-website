"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
  redirect(DEFAULT_LOGIN_REDIRECT);
}

export const logOutAction = async (userStatus: string) => {
  if (userStatus === "authenticated") {
    await logout();
    await signOut();
  } else {
    await logout();
  }
};
