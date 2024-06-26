import { useCallback } from "react";

import { CustomSwitch } from "@/components/custom-switch";
import { navigationOptions } from "@/components/header/config";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import { useAppSelector } from "@/store/hooks";
import { selectorAppTheme } from "@/store/slices/app";

import S from "./styled";

type SidebarPropsType = {
  isOpenMenu: boolean;
  onClose: () => void;
  onNavigate: (link: string) => void;
};
export const Sidebar = ({
  isOpenMenu,
  onClose,
  onNavigate,
}: SidebarPropsType) => {
  usePreventScroll(isOpenMenu);
  const { changeTheme } = useChangeTheme();

  const theme = useAppSelector(selectorAppTheme);

  const onCheckedChangeHandler = useCallback(
    (checked: boolean) => {
      changeTheme(checked ? "dark" : "light");
    },
    [changeTheme],
  );
  return (
    <>
      {isOpenMenu && <S.Background onClick={onClose} />}
      <S.SideBar $isOpen={isOpenMenu}>
        {navigationOptions.map((option, index) => (
          <S.NavOption onClick={() => onNavigate(option.link)} key={index}>
            {option.label}
          </S.NavOption>
        ))}
        <CustomSwitch
          checked={theme !== "light"}
          onCheckedChange={onCheckedChangeHandler}
        />
      </S.SideBar>
    </>
  );
};
