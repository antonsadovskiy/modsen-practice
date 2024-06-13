import { Wrapper } from "./styled";
import { Link } from "react-router-dom";
// import { ReactComponent as LogoSVG } from './../../assets/svg/logo.svg';
// import { ReactComponent as SearchSVG } from './../../assets/svg/search.svg';
// import { ReactComponent as ShoppingCardSVG } from './../../assets/svg/shopping-cart.svg';

export const Header = () => (
  <Wrapper>
    <div className={"headerContent"}>
      <Link to={"/404"}>404</Link>
      {/*<LogoSVG />*/}
      <div className={"actions"}>
        <div className={"link"}>Shop</div>
        {/*<SearchSVG />*/}
        {/*<ShoppingCardSVG />*/}
      </div>
    </div>
    <div className={"line"} />
  </Wrapper>
);
