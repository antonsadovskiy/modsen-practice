import { CustomSwitch } from "@/components/custom-switch";
import { navigationOptions } from "@/components/header/config";
import { useAppSelector, useChangeTheme, usePreventScroll } from "@/hooks";
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

  const onCheckedChangeHandler = (checked: boolean) => {
    changeTheme(checked ? "dark" : "light");
  };

  return (
    <>
      {isOpenMenu && <S.Background onClick={onClose} />}
      <S.SideBar $isOpen={isOpenMenu}>
        {navigationOptions.map(({ link, label }, index) => (
          <S.NavOption onClick={() => onNavigate(link)} key={index}>
            {label}
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
