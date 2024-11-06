import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { ApiError, signUpFormValues, RegisterResponse } from "@/lib/types";
import { BASE_URL } from "@/lib/constants/constants";

async function registerUser(
  registerDate: signUpFormValues
): Promise<RegisterResponse> {
  const response = await fetch(`${BASE_URL}/avitan/register/web/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerDate),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.message || "Register Failed");
  }

  return response.json();
}

export function useRegister(): UseMutationResult<
  RegisterResponse,
  ApiError,
  signUpFormValues
> {
  return useMutation<RegisterResponse, ApiError, signUpFormValues>({
    mutationFn: registerUser,
  });
}
