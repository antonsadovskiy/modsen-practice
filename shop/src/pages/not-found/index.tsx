import { AdditionalPage } from "@/components/additional-page";

export const NotFoundPage = () => (
  <AdditionalPage
    type={"error"}
    title={"404 ERROR"}
    caption={"This page not found;\nback to home and start again"}
  />
);
