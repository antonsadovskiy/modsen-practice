import { ToastItem } from "@/components/toast/toast-item";
import { useAppSelector } from "@/hooks";
import { selectorAppToasts } from "@/store/slices/app/appSlice";

import S from "./styled";

type ToastPropsType = {
  autoCloseTime?: number;
  position?: "top" | "bottom";
  corner?: "left" | "right";
};

export const Toast = ({
  autoCloseTime = 3000,
  position = "bottom",
  corner = "right",
}: ToastPropsType) => {
  const toasts = useAppSelector(selectorAppToasts);

  return (
    <S.Wrapper $position={position} $corner={corner}>
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          autoCloseTime={autoCloseTime}
          index={index}
          corner={corner}
          {...toast}
        />
      ))}
    </S.Wrapper>
  );
};
