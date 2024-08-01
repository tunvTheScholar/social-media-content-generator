import { z } from "zod";

export const inspiredTopicSchema = z.object({
  topic: z.string().min(1, "Required").max(225),
});

export type InspiredTopic = z.infer<typeof inspiredTopicSchema>;
