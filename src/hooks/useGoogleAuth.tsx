import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { LoginResponse, ApiError } from "@/lib/types";

interface Response extends LoginResponse {}

async function googleLoginUser(): Promise<Response> {
  const response = await fetch(
    `https://avitane.brontosolutions.com/social-auth/login/google-oauth2/`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
}

export function useGoogleAuth(): UseMutationResult<Response, ApiError> {
  return useMutation<Response, ApiError, unknown>({
    mutationFn: googleLoginUser,
  });
}
