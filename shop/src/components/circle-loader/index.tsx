import S from "./styled";

type CircleLoaderPropsType = {
  size?: number;
};

export const CircleLoader = ({ size = 15 }: CircleLoaderPropsType) => (
  <S.Loader $size={size} />
);
