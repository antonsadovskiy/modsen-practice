import { Wrapper } from "./styled";
import LogoSVG from "@/assets/svg/logo.svg";
import SearchSVG from "@/assets/svg/search.svg";
import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import { CustomSwitch } from "@/components/custom-switch";

export const Header = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

  const onCheckedChangeHandler = useCallback((checked: boolean) => {
    setCurrentTheme(checked ? "dark" : "light");
  }, []);

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
            checked={currentTheme !== "light"}
            defaultChecked={currentTheme !== "light"}
            onCheckedChange={onCheckedChangeHandler}
          />
          <SearchSVG />
          <ShoppingCardSVG />
        </div>
      </div>
      <div className={"line"} />
    </Wrapper>
  );
};
