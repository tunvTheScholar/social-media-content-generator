import { z } from "zod";

export const phoneNumberSchema = z.object({
  phoneNumber: z.string().min(1, "Require"),
});

export const accessCodeSchema = z.object({
  accessCode: z.string().min(6).max(6),
});

export type PhoneNumberData = z.infer<typeof phoneNumberSchema>;
export type AccessCodeData = z.infer<typeof accessCodeSchema>;
