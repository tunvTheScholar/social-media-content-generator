import { ENVS } from "./env";

export const ENDPOINTS = {
  CREATE_NEW_ACCESS_CODE: `${ENVS.REACT_APP_BASE_API_URL}/CreateNewAccessCode`,
  VALIDATE_ACCESS_CODE: `${ENVS.REACT_APP_BASE_API_URL}/ValidateAccessCode`,
};
