import S from "./styled";

type CartModalItemPropsType = {
  image: string;
  title: string;
  description: string;
  totalAmount: number;
  pricePerOne: number;
};

export const CartModalItem = ({
  title,
  image,
  description,
  pricePerOne,
  totalAmount,
}: CartModalItemPropsType) => (
  <S.Wrapper>
    <S.Image src={`http://localhost:9000/products/${image}`} alt={title} />
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Price>
        ${pricePerOne} x {totalAmount} = $
        {(pricePerOne * totalAmount).toFixed(2)}
      </S.Price>
    </S.Info>
  </S.Wrapper>
);
