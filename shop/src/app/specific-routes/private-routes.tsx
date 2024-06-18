import { useAppSelector } from "@/store/hooks";
import { selectorIsLoggedIn } from "@/store/slices/app";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "@/constants/routes";

export const PrivateRoutes = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to={routes.login} />;
};
