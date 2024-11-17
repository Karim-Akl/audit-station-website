import { FormEvent } from "react";
import { BASE_URL } from "@/lib/constants/constants";
interface OnSubmitProps {
  setIsLoading: (loading: boolean) => void;
  toast: {
    success: (message: string) => void;
    warning: (message: string) => void;
    error: (message: string) => void;
  };
  router: {
    push: (path: string) => void;
  };
  locale: string;
  path: string;
}

interface OnSubmitResult {
  loading: boolean;
  success: boolean;
  failed: boolean;
}

export async function onSubmit(
  event: FormEvent<HTMLFormElement>,
  { setIsLoading, toast, router, locale, path }: OnSubmitProps
): Promise<OnSubmitResult> {
  event.preventDefault();
  setIsLoading(true);
  try {
    const formData = new FormData(event.currentTarget);
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.type === "success") {
      toast.success(data.message);
      router.push(`/${locale}/otp`);
      return { loading: false, success: true, failed: false };
    }
    if (data.type === "error") {
      toast.warning(data.message);
      return { loading: false, success: false, failed: true };
    }
  } catch (error) {
    toast.error((error as Error).message);
    return { loading: false, success: false, failed: true };
  } finally {
    setIsLoading(false);
  }
  return { loading: false, success: false, failed: false };
}
