import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useGetProductsQuery } from "@/api";
import { ProductType } from "@/api/types";
import { Skeleton } from "@/components/skeleton";
import { DesktopDescription } from "@/pages/product/desktop-description";
import { Images } from "@/pages/product/images";
import { MobileDescription } from "@/pages/product/mobile-description";
import { ProductInfo } from "@/pages/product/product-info";
import { SimilarItems } from "@/pages/product/similar-items";

import S from "./styled";

export const ProductPage = () => {
  const params = useParams<{ id: string }>();

  const { data: products, isFetching: isLoadingProduct } = useGetProductsQuery(
    undefined,
    {
      selectFromResult: ({
        data,
        ...rest
      }: {
        data?: { data: ProductType[]; meta: string | null };
        isFetching: boolean;
      }) => ({
        data: data ?? { data: [], meta: null },
        ...rest,
      }),
    },
  );

  const product = products.data?.find(
    (item) => item.id === parseInt(params.id),
  );

  const filteredSimilarItems = useMemo(
    () =>
      products.data
        ?.filter(
          (item) =>
            item?.category?.id === product?.category?.id &&
            item?.id !== product?.id,
        )
        .slice(0, 3),
    [products.data, product?.category?.id, product?.id],
  );

  return (
    <S.Wrapper>
      <S.MainInfoContainer>
        {isLoadingProduct ? (
          <Skeleton height={600} />
        ) : (
          <>
            <Images image={product?.image} />
            <ProductInfo product={product} />
          </>
        )}
      </S.MainInfoContainer>
      <MobileDescription
        description={product?.description}
        isLoading={isLoadingProduct}
      />
      <DesktopDescription
        description={product?.description}
        isLoading={isLoadingProduct}
      />
      <SimilarItems items={filteredSimilarItems} />
    </S.Wrapper>
  );
};
