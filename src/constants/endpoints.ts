import { ENVS } from "./env";

export const ENDPOINTS = {
  CREATE_NEW_ACCESS_CODE: `${ENVS.REACT_APP_BASE_API_URL}/CreateNewAccessCode`,
  VALIDATE_ACCESS_CODE: `${ENVS.REACT_APP_BASE_API_URL}/ValidateAccessCode`,
  GENERATE_POST_CAPTIONS: `${ENVS.REACT_APP_BASE_API_URL}/GeneratePostCaptions`,
  SAVE_CAPTION: `${ENVS.REACT_APP_BASE_API_URL}/SaveGeneratedContent`,
  UNSAVED_CAPTION: `${ENVS.REACT_APP_BASE_API_URL}/UnSaveContent`,
  GENERATE_IDEAS_FROM_TOPIC: `${ENVS.REACT_APP_BASE_API_URL}/GetPostIdeas`,
};
