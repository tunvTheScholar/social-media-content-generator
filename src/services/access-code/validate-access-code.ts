import { ENDPOINTS } from "../../constants/endpoints";

interface ValidateAccessCodeRequest {
  accessCode: string;
  phoneNumber: string;
}
export const validateAccessCode = async (data: ValidateAccessCodeRequest) => {
  try {
    const res = await fetch(ENDPOINTS.VALIDATE_ACCESS_CODE, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (error) {}
};
