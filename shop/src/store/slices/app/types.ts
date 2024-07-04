export type ThemeType = "light" | "dark";

export type ToastStatusType = "success" | "warning" | "info" | "error";

export type ToastType = {
  id: string;
  type: ToastStatusType;
  message: string;
};

export type AppSliceInitialStateType = {
  theme: ThemeType;
  isAppInitialized: boolean;
  toasts: ToastType[];
};
