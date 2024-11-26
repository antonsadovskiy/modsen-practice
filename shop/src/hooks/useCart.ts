import { useGetCartQuery } from "@/api";
import { CartItemType } from "@/api/types";

export const useCart = () => {
  const { data: cartData, isLoading } = useGetCartQuery(undefined, {
    selectFromResult: ({
      data,
      ...rest
    }: {
      data?: { data: CartItemType[]; meta: string | null };
      isLoading: boolean;
    }) => ({
      data: data ?? { data: [], meta: null },
      ...rest,
    }),
  });

  return {
    cartData: [...cartData.data].sort(
      (a, b) => a.productInCartId - b.productInCartId,
    ),
    isLoading,
  };
};
