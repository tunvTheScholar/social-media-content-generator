import { Outlet } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";

interface AuthLayoutProps {
  //   children: React.ReactNode;
}
export default function AuthLayout(props: AuthLayoutProps) {
  const [phoneNumber] = useLocalStorage(LOCAL_STORAGE_KEYS.PHONE_NUMBER, "");

  if (phoneNumber) {
    window.location.href = "/services";
  }

  return (
    <>
      <Outlet />
    </>
  );
}
