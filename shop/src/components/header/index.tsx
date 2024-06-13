import { Wrapper } from "./styled";
import LogoSVG from "@/assets/svg/logo.svg";
import SearchSVG from "@/assets/svg/search.svg";
import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";

export const Header = () => {
  const navigate = useNavigate();

  const goHomePageHandler = useCallback(() => {
    navigate(routes.home);
  }, [navigate]);

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
          <div className={"link"}>Shop Test</div>
          <SearchSVG />
          <ShoppingCardSVG />
        </div>
      </div>
      <div className={"line"} />
    </Wrapper>
  );
};
