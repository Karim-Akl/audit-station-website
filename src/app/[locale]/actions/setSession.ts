"use server";

import { encrypt } from "@/lib/authSession";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginResponse } from "@/lib/types";

export async function setSession(
  user: LoginResponse | null,
  callbackUrl = DEFAULT_LOGIN_REDIRECT
) {
  // Create the session
  const session = await encrypt({ user });

  // Save the session in a cookie
  cookies().set("session", session, { httpOnly: true });
  
  // Redirect to the home page
  redirect(callbackUrl);
}
