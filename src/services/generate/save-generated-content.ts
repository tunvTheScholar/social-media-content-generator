import { ENDPOINTS } from "../../constants/endpoints";
import { IResponse } from "../../types/i-response";

interface ISaveCaptionsRequest {
  phoneNumber: string;
  title: string;
  caption: string;
  topic: string;
}
export const saveGeneratedContent = async (data: ISaveCaptionsRequest) => {
  try {
    const res = await fetch(ENDPOINTS.SAVE_CAPTION, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return (await res.json()) as IResponse<{ captionId: string }>;
    }
  } catch (error) {
    // handle error
  }
};
