import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import { routes } from "@/constants/routes";

import S from "./styled";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <Button onClick={() => navigate(routes.productsActions)}>Продукты</Button>
      <Button onClick={() => navigate(routes.categoriesActions)}>
        Категории
      </Button>
    </S.Wrapper>
  );
};
