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

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<App />}>
      <Route path={"/"} element={<Navigate to={"/home"} />} />
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path={"/home"} element={<HomePage />} />
      <Route path={"/shop"} element={<ShopPage />} />
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
