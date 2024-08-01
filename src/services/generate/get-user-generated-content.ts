import { ENDPOINTS } from "../../constants/endpoints";
import { IResponse } from "../../types/i-response";

export interface GeneratedContent {
  id: string;
  topic: string;
  title: string;
  caption: string;
  createdAt: number;
}

export const getUserGeneratedContents = async (phoneNumber: string) => {
  try {
    const res = await fetch(`${ENDPOINTS.GET_USER_GENERATED_CONTENTS}`, {
      method: "POST",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return (await res.json()) as IResponse<GeneratedContent[]>;
    }
  } catch (error) {
    // handle error
  }
};
