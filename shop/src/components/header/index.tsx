import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";

import BurgerNavSVG from "@/assets/svg/burger-nav.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { CartIcon } from "@/components/header/cart-icon";
import { Sidebar } from "@/components/header/sidebar";
import { routes } from "@/constants/routes";
import { useAppSelector } from "@/hooks";
import { selectorIsAdmin } from "@/store/slices/user/userSlice";

import S from "./styled";

export const Header = () => {
  const isAdmin = useAppSelector(selectorIsAdmin);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navigate = useNavigate();

  const goHomePageHandler = () => {
    navigate(routes.home);
    setIsOpenMenu(false);
  };

  const onShowMenu = () => {
    setIsOpenMenu(true);
  };

  const onHideMenu = () => {
    setIsOpenMenu(false);
  };

  const navigateHandler = (link: string) => {
    navigate(link);
    setIsOpenMenu(false);
  };

  return (
    <S.Wrapper>
      <S.MaxWidthContainer>
        <S.HeaderContent>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={goHomePageHandler}
            data-cy={"header-link"}
            variant={"h3"}
          >
            Gleb Shoppi
          </Typography>
          <S.BurgerNav>
            <CartIcon isMobile onClick={() => navigateHandler(routes.cart)} />
            <CustomIconButton onClick={isOpenMenu ? onHideMenu : onShowMenu}>
              {isOpenMenu ? (
                <S.Cross width={20} height={15} />
              ) : (
                <BurgerNavSVG width={20} height={15} />
              )}
            </CustomIconButton>
          </S.BurgerNav>
          <S.Actions>
            {isAdmin && (
              <Button onClick={() => navigate(routes.admin)}>
                Administration
              </Button>
            )}
            <Button data-cy={"shop-link"} onClick={() => navigate(routes.shop)}>
              Shop
            </Button>
            <Button onClick={() => navigateHandler(routes.cart)}>Cart</Button>
          </S.Actions>
        </S.HeaderContent>
        <S.BorderBottomLine $isShow />
      </S.MaxWidthContainer>
      <Sidebar
        isOpenMenu={isOpenMenu}
        onClose={onHideMenu}
        onNavigate={navigateHandler}
      />
    </S.Wrapper>
  );
};
