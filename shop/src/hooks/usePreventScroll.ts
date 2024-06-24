import { useEffect } from "react";

export const usePreventScroll = (isOpen: boolean) => {
  useEffect(() => {
    let scrollPos = 0;

    if (isOpen) {
      scrollPos = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    }
  }, [isOpen]);
};
