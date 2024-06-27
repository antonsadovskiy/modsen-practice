import { useEffect } from "react";

export const usePreventScroll = (isOpen: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.body.style.position = isOpen ? "relative" : "";
    document.body.style.height = isOpen ? "100%" : "";
    document.body.style.touchAction = isOpen ? "none" : "";
    document.body.style.setProperty("-ms-touch-action", isOpen ? "none" : "");

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
      document.body.style.setProperty("-ms-touch-action", "");
    };
  }, [isOpen]);
};
