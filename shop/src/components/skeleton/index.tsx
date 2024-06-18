import S from "./styled";

type SkeletonPropsType = {
  height?: number;
  width?: number;
};

export const Skeleton = ({ width, height }: SkeletonPropsType) => (
  <S.Wrapper $height={height} $width={width} />
);
