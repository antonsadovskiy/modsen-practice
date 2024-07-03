import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { Skeleton } from "@/components/skeleton";

import S from "./styled";

type CatalogPropsType = {
  isLoading: boolean;
  catalog: ProductType[];
};

export const Catalog = ({ catalog, isLoading }: CatalogPropsType) => (
  <S.Container>
    {isLoading &&
      Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} width={300} height={390} />
      ))}
    {!isLoading && (
      <>
        {catalog.length > 0 ? (
          catalog.map((item) => (
            <CatalogCard
              imageSrc={item.image}
              key={item.id}
              width={"300"}
              height={"300"}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          ))
        ) : (
          <S.NoData data-cy={"no-data"}>
            No products with these filters were found
          </S.NoData>
        )}
      </>
    )}
  </S.Container>
);
