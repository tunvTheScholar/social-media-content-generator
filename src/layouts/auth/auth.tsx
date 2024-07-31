import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  //   children: React.ReactNode;
}
export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <>
      <Outlet />
    </>
  );
}
