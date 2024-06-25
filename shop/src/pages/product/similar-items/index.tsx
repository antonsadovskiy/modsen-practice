import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { Skeleton } from "@/components/skeleton";

import S from "./styled";

type SimilarItemsPropsType = {
  items: ProductType[];
  isLoading: boolean;
};

export const SimilarItems = ({ items, isLoading }: SimilarItemsPropsType) => (
  <S.SimilarItems>
    <S.Title>Similar Items</S.Title>
    <S.List>
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} width={380} height={472} />
          ))
        : items.map((item, index) => (
            <CatalogCard
              key={index}
              id={item.id}
              imageSrc={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
    </S.List>
  </S.SimilarItems>
);
