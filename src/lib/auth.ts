export type authModalsType =
  | "login"
  | "signup"
  | "verify-login-otp"
  | "verify-signup-otp"
  | "login-with-otp"
  | "forgot-password"
  | "reset-password"
  | "otp-confirmed"
  | "verification-confirmed";

export const authModals = [
  "login",
  "signup",
  "verify-login-otp",
  "verify-signup-otp",
  "login-with-otp",
  "forgot-password",
  "reset-password",
  "otp-confirmed",
  "verification-confirmed",
];

//type guard
export function isAuthType(type: string | null): type is authModalsType {
  return type !== null && authModals.includes(type);
}
