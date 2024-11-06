import { useMutation, UseMutationResult } from "@tanstack/react-query";
import {
  LoginRequestData,
  LoginResponse,
  ApiError,
  LoginOtpData,
  verifyOtpData,
  LoginOtpResponse,
} from "@/lib/types";
import { BASE_URL } from "@/lib/constants/constants";

interface LoginMutationParams {
  loginData: LoginRequestData | LoginOtpData | verifyOtpData;
  route: "request-otp" | "login" | "verify-otp";
}

interface Response extends LoginResponse, LoginOtpResponse {}

async function loginUser({
  loginData,
  route,
}: LoginMutationParams): Promise<Response> {
  const response = await fetch(`${BASE_URL}/auth/${route}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
}

export function useLogin(): UseMutationResult<
  Response,
  ApiError,
  LoginMutationParams
> {
  return useMutation<Response, ApiError, LoginMutationParams>({
    mutationFn: loginUser,
  });
}
