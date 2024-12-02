import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import { routes } from "@/constants/routes";

import S from "./styled";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <Button
        variant={"outlined"}
        onClick={() => navigate(routes.productsActions)}
      >
        Products
      </Button>
      <Button
        variant={"outlined"}
        onClick={() => navigate(routes.categoriesActions)}
      >
        Categories
      </Button>
    </S.Wrapper>
  );
};
