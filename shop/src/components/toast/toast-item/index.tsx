import { createElement, memo, useEffect, useState } from "react";

import { toastIcons } from "@/components/toast/config";
import { useAppDispatch } from "@/hooks";
import { appActions } from "@/store/slices/app";
import { ToastStatusType } from "@/store/slices/app/types";

import S from "./styled";

type ToastItemPropsType = {
  id: string;
  message: string;
  type: ToastStatusType;
  autoCloseTime: number;
  index: number;
  corner: "left" | "right";
};

const ToastItem = memo(
  ({ message, id, type, autoCloseTime, index, corner }: ToastItemPropsType) => {
    const dispatch = useAppDispatch();
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsExiting(true);

        setTimeout(() => {
          dispatch(appActions.deleteToast({ id }));
        }, 300);
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }, [dispatch, id, autoCloseTime]);

    const icon = toastIcons[type];

    return (
      <S.Wrapper
        $type={type}
        $isExiting={isExiting}
        $index={index}
        $corner={corner}
      >
        <S.Icon>{createElement(icon)}</S.Icon>
        <div>{message}</div>
      </S.Wrapper>
    );
  },
);

ToastItem.displayName = "ToastItem";

export { ToastItem };
