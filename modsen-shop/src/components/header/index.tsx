import { Wrapper } from './styled';
import { ReactComponent as LogoSVG } from './../../assets/svg/logo.svg';
import { ReactComponent as SearchSVG } from './../../assets/svg/search.svg';
import { ReactComponent as ShoppingCardSVG } from './../../assets/svg/shopping-cart.svg';

export const Header = () => (
  <Wrapper>
    <div className={'headerContent'}>
      <LogoSVG />
      <div className={'actions'}>
        <div className={'link'}>Shop</div>
        <SearchSVG />
        <ShoppingCardSVG />
      </div>
    </div>
    <div className={'line'} />
  </Wrapper>
);
