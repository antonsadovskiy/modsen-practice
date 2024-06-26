import { Navigate, useLocation } from "react-router-dom";

import { AdditionalPage } from "@/components/additional-page";
import { routes } from "@/constants/routes";

export const SuccessfulPurchasePage = () => {
  const state = useLocation().state;

  if (!state) {
    return <Navigate to={routes.home} />;
  }

  return (
    <AdditionalPage
      title={"Thank you for purchasing"}
      caption={"You will have your goods soon."}
    />
  );
};
