import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from "@/api";
import { Skeleton } from "@/components/skeleton";
import { DesktopDescription } from "@/pages/product/desktop-description";
import { Images } from "@/pages/product/images";
import { MobileDescription } from "@/pages/product/mobile-description";
import { ProductInfo } from "@/pages/product/product-info";
import { SimilarItems } from "@/pages/product/similar-items";

import S from "./styled";

export const ProductPage = () => {
  const params = useParams<{ id: string }>();

  const { data: product, isFetching: isLoadingProduct } =
    useGetProductByIdQuery(params.id);

  const { data: similarItems, isFetching: isLoadingSimilarItems } =
    useGetProductsByCategoryQuery(product?.category, {
      selectFromResult: ({ data, ...rest }) => ({
        data: data ?? [],
        ...rest,
      }),
    });

  const filteredSimilarItems = useMemo(
    () =>
      similarItems
        .filter((item) => item.id !== parseInt(params.id))
        .splice(0, 3),
    [params, similarItems],
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
      <SimilarItems
        items={filteredSimilarItems}
        isLoading={isLoadingSimilarItems}
      />
    </S.Wrapper>
  );
};
