// Define the request data structure
export interface LoginRequestData {
  username_or_email_or_mobile: string;
  password: string;
}

export interface LoginOtpData {
  identifier: string;
}

export interface verifyOtpData {
  user_id: string;
  otp: string;
}

// Define the response data structure. Adjust according to your actual API response.
export interface LoginResponse {
  id: string;
  username: string;
  email: string;
  user_type: string;
  refresh: string;
  access: string;
  is_staff: boolean;
  image: string;
}

export interface LoginOtpResponse {
  user_id: string;
}

export interface RegisterResponse {
  message: string;
  user: string;
}

// If your API errors have a specific structure, you can define that too
export interface ApiError {
  message: string;
}

export interface signUpFormValues {
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
  password: string;
  confirm_password: string;
}
