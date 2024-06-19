import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { router } from "@/app/router";
import "@/app/firebase";
import { AppWrapper } from "@/app/wrappers/AppWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </Provider>,
);
