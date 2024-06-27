import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { router } from "@/app/router";
import { AppWrapper } from "@/app/wrappers/AppWrapper";
import { ErrorBoundary } from "@/components/error-boundary";
import { store } from "@/store";

import "./index.css";
import "@/app/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <Provider store={store}>
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </Provider>
  </ErrorBoundary>,
);
