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
    <S.Image src={image} alt={title} />
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Price>
        ${pricePerOne} x {totalAmount} = ${pricePerOne * totalAmount}
      </S.Price>
    </S.Info>
  </S.Wrapper>
);
