import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";

import S from "./styled";

type SimilarItemsPropsType = {
  items: ProductType[];
};

export const SimilarItems = ({ items }: SimilarItemsPropsType) => (
  <S.SimilarItems>
    <S.Title>Similar Items</S.Title>
    <S.List>
      {items.map((item, index) => (
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
