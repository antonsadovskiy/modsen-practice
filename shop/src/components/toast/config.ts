import { ComponentType, SVGProps } from "react";

import ErrorIconSVG from "@/assets/svg/toast-error-status.svg";
import InfoIconSVG from "@/assets/svg/toast-info-status.svg";
import SuccessIconSVG from "@/assets/svg/toast-success-status.svg";
import WarningIconSVG from "@/assets/svg/toast-warning-status.svg";
import { ToastStatusType } from "@/store/slices/app/types";

export const toastIcons: Record<
  ToastStatusType,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  success: SuccessIconSVG,
  warning: WarningIconSVG,
  info: InfoIconSVG,
  error: ErrorIconSVG,
};
