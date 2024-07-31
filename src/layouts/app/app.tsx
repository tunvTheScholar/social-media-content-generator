import { Outlet } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  const [phoneNumber] = useLocalStorage(LOCAL_STORAGE_KEYS.PHONE_NUMBER, "");

  if (!phoneNumber) {
    window.location.href = "/auth/login";
  }

  return (
    <>
      <Outlet />
    </>
  );
}
