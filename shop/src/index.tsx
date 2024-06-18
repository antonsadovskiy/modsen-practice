import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { NotFoundPage } from "./pages/not-found";
import { HomePage } from "@/pages/home";
import { ShopPage } from "@/pages/shop";
import { ProductPage } from "@/pages/product";
import { ContactUsPage } from "@/pages/contact";
import { routes } from "@/constants/routes";
import { Provider } from "react-redux";
import { store } from "@/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route path={"/"} element={<Navigate to={"/home"} />} />
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.shop} element={<ShopPage />} />
      <Route path={routes.contact} element={<ContactUsPage />} />
      <Route path={`${routes.product}/:id`} element={<ProductPage />} />
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
