import { Navigate, Outlet } from "react-router-dom";

import { routes } from "@/constants/routes";
import { useAppSelector } from "@/store/hooks";
import { selectorIsLoggedIn } from "@/store/slices/app";

export const AuthRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to={routes.home} /> : <Outlet />;
};
