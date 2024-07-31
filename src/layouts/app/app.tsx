import { Link, NavLink, Outlet } from "react-router-dom";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface AppLayoutProps {}
export default function AppLayout(props: AppLayoutProps) {
  const [phoneNumber] = useLocalStorage(LOCAL_STORAGE_KEYS.PHONE_NUMBER, "");

  if (!phoneNumber) {
    window.location.href = "/auth/login";
  }

  return (
    <div className="flex">
      <aside className="w-[200px] p-4 bg-gray-100 h-screen">
        <div className="flex flex-col">
          <NavLink
            to="/services"
            className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "text-blue-400" : ""].join(" ")
            }
          >
            Services
          </NavLink>
          <NavLink
            to="profile"
            className={({ isActive, isPending, isTransitioning }) =>
              [isActive ? "text-blue-400" : ""].join(" ")
            }
          >
            Profile
          </NavLink>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}
