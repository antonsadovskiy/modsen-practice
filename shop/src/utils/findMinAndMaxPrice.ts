import { ProductType } from "@/api/types";

export const findMinAndMaxPrice = (catalog: ProductType[]) => {
  const prices = catalog.map((item) => item.price);
  return [Math.min(...prices), Math.max(...prices)];
};
