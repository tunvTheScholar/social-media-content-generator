import { ENDPOINTS } from "../../constants/endpoints";
import { IResponse } from "../../types/i-response";

interface IGetPostIdeasRequest {
  topic: string;
  numOfIdeas?: number;
}
export const getPostIdeas = async (data: IGetPostIdeasRequest) => {
  try {
    const res = await fetch(ENDPOINTS.GENERATE_IDEAS_FROM_TOPIC, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const json = await res.json();
    // if (json.success) {
    //   return json.data as IResponse<string[]>;
    // }
    // throw new Error(json.message);
    if (res.ok) {
      return (await res.json()) as IResponse<string[]>;
    }

    throw new Error("Failed to get post ideas");
  } catch (error) {
    throw new Error("Failed to get post ideas");
  }
};
