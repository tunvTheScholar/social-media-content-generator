import { ENDPOINTS } from "../../constants/endpoints";

interface CreateNewAccessCodeRequest {
  phoneNumber: string;
}
export const createNewAccessCode = async ({
  phoneNumber,
}: CreateNewAccessCodeRequest) => {
  try {
    const res = await fetch(ENDPOINTS.CREATE_NEW_ACCESS_CODE, {
      method: "POST",
      body: JSON.stringify({ phoneNumber }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {}
};
