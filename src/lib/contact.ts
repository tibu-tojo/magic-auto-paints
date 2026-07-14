import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine(
      (value) => value.length === 0 || /^[+\d\s()-]{7,30}$/.test(value),
      "Enter a valid phone number",
    ),
  message: z.string().trim().min(10, "Tell us a little more about the repair").max(2000),
  consent: z.literal(true, { error: "Consent is required" }),
});

export type ContactInput = z.infer<typeof contactSchema>;
