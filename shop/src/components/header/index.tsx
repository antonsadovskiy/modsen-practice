import { BorderBottomLine, Wrapper } from "./styled";
import LogoSVG from "@/assets/svg/logo.svg";
import SearchSVG from "@/assets/svg/search.svg";
import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import { CustomSwitch } from "@/components/custom-switch";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { selectorAppTheme } from "@/store/slices/app/appSelectors";

export const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectorAppTheme);

  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  const onCheckedChangeHandler = useCallback(
    (checked: boolean) => {
      dispatch(appActions.setTheme({ theme: checked ? "dark" : "light" }));
    },
    [dispatch],
  );

  return (
    <Wrapper>
      <div className={"headerContent"}>
        <LogoSVG
          className={"logo"}
          onClick={goHomePageHandler}
          width={290}
          height={32}
        />
        <div className={"actions"}>
          <div className={"link"}>Shop</div>
          <CustomSwitch
            checked={theme !== "light"}
            defaultChecked={theme !== "light"}
            onCheckedChange={onCheckedChangeHandler}
          />
          <SearchSVG />
          <ShoppingCardSVG />
        </div>
      </div>
      <BorderBottomLine />
    </Wrapper>
  );
};
