import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Typography } from "antd";

import BurgerNavSVG from "@/assets/svg/burger-nav.svg";
import { CustomIconButton } from "@/components/custom-icon-button";
import { CartIcon } from "@/components/header/cart-icon";
import { Sidebar } from "@/components/header/sidebar";
import { routes } from "@/constants/routes";

import S from "./styled";

export const Header = () => {
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
          <Typography.Title
            style={{ cursor: "pointer" }}
            level={2}
            onClick={goHomePageHandler}
          >
            Онлайн магазин
          </Typography.Title>
          <S.BurgerNav>
            <CartIcon onClick={() => navigateHandler(routes.cart)} />
            <CustomIconButton onClick={isOpenMenu ? onHideMenu : onShowMenu}>
              {isOpenMenu ? (
                <S.Cross width={20} height={15} />
              ) : (
                <BurgerNavSVG width={20} height={15} />
              )}
            </CustomIconButton>
          </S.BurgerNav>
          <S.Actions>
            <Link to={routes.admin}>
              <Typography.Text style={{ cursor: "pointer" }}>
                Администрация
              </Typography.Text>
            </Link>
            <Link to={routes.shop} data-cy={"shop-link"}>
              <Typography.Text style={{ cursor: "pointer" }}>
                Каталог
              </Typography.Text>
            </Link>

            <CartIcon onClick={() => navigateHandler(routes.cart)} />
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
