import { z } from "zod";

export const signUpDataSchema = z.object({
  first_name: z
    .string({ required_error: "First Name is required" })
    .min(3, { message: "You must be at least 3 characters" }),
  last_name: z
    .string({ required_error: "Last name is required" })
    .min(3, { message: "You must be at least 3 characters" }),
  email: z.string().email("Please enter a valid email address"),
  mobile_number: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be 10 digits"),

  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "You must enter a password" }),
  confirm_password: z
    .string({ required_error: "Confirm password is required" })
    .min(1, { message: "You must enter a password" }),
});

export const loginDataSchema = z.object({
  username_or_email_or_mobile: z
    .string()
    .email("Please enter a valid email address")
    .or(z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits")),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "You must enter a password" }),
});

export const loginOtpDataSchema = z.object({
  identifier: z
    .string()
    .email("Please enter a valid email address")
    .or(z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits")),
});
