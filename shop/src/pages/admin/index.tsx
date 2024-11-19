import { useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/custom-button";
import { routes } from "@/constants/routes";

import S from "./styled";

export const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <CustomButton
        onClick={() => navigate(routes.productsActions)}
        fullWidth={false}
      >
        Products
      </CustomButton>
      <CustomButton
        onClick={() => navigate(routes.categoriesActions)}
        fullWidth={false}
      >
        Categories
      </CustomButton>
    </S.Wrapper>
  );
};
