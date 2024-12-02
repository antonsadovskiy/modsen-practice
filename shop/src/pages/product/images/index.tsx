import S from "./styled";

type ImagesPropsType = {
  image: string;
};

export const Images = ({ image }: ImagesPropsType) => {
  const imageSrc = `http://localhost:9000/products/${image}`;

  return (
    <S.ImagesContainer>
      <div>
        <S.MainImage src={imageSrc} alt={"product image"} />
      </div>
    </S.ImagesContainer>
  );
};
