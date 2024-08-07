import { Navigate, Outlet } from "react-router-dom";

import { routes } from "@/constants/routes";
import { useAppSelector } from "@/hooks";
import { selectorIsLoggedIn } from "@/store/slices/user";

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={routes.login} />;
};
