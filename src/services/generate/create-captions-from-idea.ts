import { ENDPOINTS } from "../../constants/endpoints";
import { IResponse } from "../../types/i-response";

interface ICreateCaptionFromIdeaRequest {
  idea: string;
  topic: string;
}

export const createCaptionsFromIdeas = async (
  data: ICreateCaptionFromIdeaRequest
) => {
  try {
    const res = await fetch(ENDPOINTS.CREATE_CAPTIONS_FROM_IDEA, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return (await res.json()) as IResponse<string[]>;
    }

    throw new Error("Failed to create captions from ideas");
  } catch (error) {
    throw new Error("Failed to create captions from ideas");
  }
};
