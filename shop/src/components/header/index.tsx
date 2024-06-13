import { Wrapper } from "./styled";
import LogoSVG from "@/assets/svg/logo.svg";
import SearchSVG from "@/assets/svg/search.svg";
import ShoppingCardSVG from "@/assets/svg/shopping-cart.svg";

export const Header = () => (
  <Wrapper>
    <div className={"headerContent"}>
      <LogoSVG width={290} height={32} />
      <div className={"actions"}>
        <div className={"link"}>Shop</div>
        <SearchSVG />
        <ShoppingCardSVG />
      </div>
    </div>
    <div className={"line"} />
  </Wrapper>
);
