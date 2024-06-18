import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { App } from "@/app/App";
import { NotFoundPage } from "@/pages/not-found";
import { routes } from "@/constants/routes";
import { LoginPage, RegistrationPage } from "@/pages/auth";
import { PrivateRoutes } from "@/app/specific-routes/private-routes";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";
import { ContactUsPage } from "@/pages/contact";
import { CartPage } from "@/pages/cart";
import { ProductPage } from "@/pages/product";
import { AuthRoutes } from "@/app/specific-routes/auth-routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route path={"/"} element={<Navigate to={"/home"} />} />
      <Route path={"*"} element={<NotFoundPage />} />

      <Route element={<AuthRoutes />}>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.registration} element={<RegistrationPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.shop} element={<ShopPage />} />
        <Route path={routes.contact} element={<ContactUsPage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route path={`${routes.product}/:id`} element={<ProductPage />} />
      </Route>
    </Route>,
  ),
);
