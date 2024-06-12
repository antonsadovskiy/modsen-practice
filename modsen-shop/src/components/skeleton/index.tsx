import { Wrapper } from './styled';

type SkeletonPropsType = {
  height?: number;
  width?: number;
};

export const Skeleton = ({ width, height }: SkeletonPropsType) => (
  <Wrapper $height={height} $width={width} />
);
