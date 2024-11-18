import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_]{3,16}$/,
    "Only  letters, numbers, and underscores 3-16 characters.",
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type signUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type loginValues = z.infer<typeof loginSchema>;
