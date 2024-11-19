import S from "./styled";

type ImagesPropsType = {
  image: string;
};

export const Images = ({ image }: ImagesPropsType) => {
  const imageSrc = `http://localhost:9000/products/${image}`;

  return (
    <S.ImagesContainer>
      <S.AdditionalImageContainer>
        <S.AdditionalImage src={imageSrc} alt={"product image"} />
      </S.AdditionalImageContainer>
      <div>
        <S.MainImage src={imageSrc} alt={"product image"} />
      </div>
    </S.ImagesContainer>
  );
};
