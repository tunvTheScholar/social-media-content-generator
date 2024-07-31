import { z } from "zod";

export const generateFormSchema = z.object({
  caption: z.string().min(1, "Required").max(280),
  captionSound: z.string().min(1, "Required"),
});

export type FormValues = z.infer<typeof generateFormSchema>;
