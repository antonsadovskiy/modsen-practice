import { Navigate, Outlet } from "react-router-dom";

import { routes } from "@/constants/routes";
import { useAppSelector } from "@/store/hooks";
import { selectorIsLoggedIn } from "@/store/slices/app";

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={routes.login} />;
};
