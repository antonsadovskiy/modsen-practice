import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import { App } from "@/app/App";
import { AuthRoutes } from "@/app/specific-routes/auth-routes";
import { PrivateRoutes } from "@/app/specific-routes/private-routes";
import { routes } from "@/constants/routes";
import { LoginPage, RegistrationPage } from "@/pages/auth";
import { CartPage } from "@/pages/cart";
import { ContactUsPage } from "@/pages/contact";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ProductPage } from "@/pages/product";
import { ShopPage } from "@/pages/shop";
import { SuccessfulPurchasePage } from "@/pages/successful-purchase";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route path={"/"} element={<Navigate to={routes.home} />} />
      <Route path={routes.notFound} element={<NotFoundPage />} />

      <Route element={<AuthRoutes />}>
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.registration} element={<RegistrationPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path={routes.home} element={<HomePage />} />
        <Route
          path={routes.successfulPurchase}
          element={<SuccessfulPurchasePage />}
        />
        <Route path={routes.shop} element={<ShopPage />} />
        <Route path={routes.contact} element={<ContactUsPage />} />
        <Route path={routes.cart} element={<CartPage />} />
        <Route path={`${routes.product}/:id`} element={<ProductPage />} />
      </Route>
    </Route>,
  ),
);
