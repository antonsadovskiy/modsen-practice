import { Navigate, Outlet } from "react-router-dom";

import { routes } from "@/constants/routes";
import { useAppSelector } from "@/store/hooks";
import { selectorIsLoggedIn } from "@/store/slices/user";

export const AuthRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to={routes.home} /> : <Outlet />;
};
