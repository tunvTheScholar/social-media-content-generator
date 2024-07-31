import { LOCAL_STORAGE_KEYS } from "../constants/local-storage-keys";

export const clientLocalStorage = {
  phoneNumber: localStorage.getItem(LOCAL_STORAGE_KEYS.PHONE_NUMBER),
  setPhoneNumber: (phoneNumber: string) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PHONE_NUMBER, phoneNumber);
  },
  clearAll: () => {
    localStorage.clear();
  },
};
