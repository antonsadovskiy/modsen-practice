import S from "./styled";

type ImagesPropsType = {
  image: string;
};

export const Images = ({ image }: ImagesPropsType) => (
  <S.ImagesContainer>
    <S.AdditionalImageContainer>
      <S.AdditionalImage src={image} alt={"product image"} />
    </S.AdditionalImageContainer>
    <div>
      <S.MainImage src={image} alt={"product image"} />
    </div>
  </S.ImagesContainer>
);
