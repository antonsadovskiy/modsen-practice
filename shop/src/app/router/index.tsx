import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import { App } from "@/app/App";
import { ErrorFallback } from "@/components/error-boundary/error-fallback";
import { routes } from "@/constants/routes";
import { LoginPage, RegistrationPage } from "@/pages/auth";
import { CartPage } from "@/pages/cart";
import { ContactUsPage } from "@/pages/contact";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { ProductPage } from "@/pages/product";
import { ShopPage } from "@/pages/shop";
import { SuccessfulPurchasePage } from "@/pages/successful-purchase";

import { PrivateRoutes } from "./private-routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />} errorElement={<ErrorFallback />}>
      <Route path={"/"} element={<Navigate to={routes.home} />} />
      <Route path={routes.notFound} element={<NotFoundPage />} />

      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.registration} element={<RegistrationPage />} />

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
