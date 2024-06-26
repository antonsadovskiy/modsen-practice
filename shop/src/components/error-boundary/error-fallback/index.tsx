import S from "./styled";

export const ErrorFallback = () => (
  <S.Wrapper>
    <S.Title>Something went wrong</S.Title>
    <S.Caption>Try to reload page or come back later</S.Caption>
  </S.Wrapper>
);
