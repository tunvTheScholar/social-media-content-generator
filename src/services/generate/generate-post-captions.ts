import { ENDPOINTS } from "../../constants/endpoints";
import { IResponse } from "../../types/i-response";

interface IGeneratePostCaptionsRequest {
  socialNetwork: string;
  subject: string;
  tone: string;
}

export const generatePostCaptions = async (
  data: IGeneratePostCaptionsRequest
) => {
  try {
    const res = await fetch(ENDPOINTS.GENERATE_POST_CAPTIONS, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return (await res.json()) as IResponse<string[]>;
    }
  } catch (error) {
    // handle error here
  }
};
