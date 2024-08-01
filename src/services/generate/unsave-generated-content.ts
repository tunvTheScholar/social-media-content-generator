import { ENDPOINTS } from "../../constants/endpoints";

interface IUnsavedCaption {
  phoneNumber: string;
  captionId: string;
}

export const unsavedGeneratedContent = async (data: IUnsavedCaption) => {
  try {
    const res = await fetch(ENDPOINTS.UNSAVED_CAPTION, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    // handle error
  }
};
