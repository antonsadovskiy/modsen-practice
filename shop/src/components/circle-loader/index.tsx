import { Loader } from "@/components/circle-loader/styled";

type CircleLoaderPropsType = {
  size?: number;
};

export const CircleLoader = ({ size = 15 }: CircleLoaderPropsType) => (
  <Loader $size={size} />
);
