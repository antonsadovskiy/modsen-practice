import { RefObject, useCallback, useEffect, useRef } from "react";

export const useOutsideClick = (
  callback: () => void,
  isOpen: boolean,
  clickExceptionRef?: RefObject<HTMLElement>,
) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current) {
        if (
          clickExceptionRef?.current &&
          !ref.current.contains(event.target as Node) &&
          clickExceptionRef.current.contains(event.target as Node)
        ) {
          return;
        }
        if (!ref.current.contains(event.target as Node)) {
          callback();
        }
      }
    },
    [callback, clickExceptionRef],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, callback, handleClick]);

  return ref;
};
