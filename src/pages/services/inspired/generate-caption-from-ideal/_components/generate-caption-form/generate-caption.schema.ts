import { z } from "zod";

export const generateCaptionSchema = z.object({
  idea: z.string().min(1, "Required").max(255),
});

export type GenerateCaption = z.infer<typeof generateCaptionSchema>;
