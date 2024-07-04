import { useAppDispatch } from "@/hooks/useAppDispatch";
import { appActions } from "@/store/slices/app";
import { ToastStatusType } from "@/store/slices/app/types";

type ToastCallbackDataType = { message: string; type: ToastStatusType };

type UseToastTypeReturnType = {
  success: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
};

export const useToast = (): UseToastTypeReturnType => {
  const dispatch = useAppDispatch();

  const toastHandler = (data: ToastCallbackDataType) => {
    dispatch(
      appActions.addToast({
        ...data,
        id: crypto.randomUUID(),
      }),
    );
  };

  return {
    success: (message) => toastHandler({ message, type: "success" }),
    warning: (message) => toastHandler({ message, type: "warning" }),
    info: (message) => toastHandler({ message, type: "info" }),
    error: (message) => toastHandler({ message, type: "error" }),
  };
};
