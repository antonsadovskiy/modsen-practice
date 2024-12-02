import { useGetProductsQuery } from "@/api";
import { CatalogCard } from "@/components/catalog-card";
import { Skeleton } from "@/components/skeleton";

import S from "./styled";

export const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);

  return (
    <S.Wrapper>
      <S.List>
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} width={380} height={472} />
            ))
          : data.data
              .slice(0, 6)
              .map((item) => (
                <CatalogCard
                  imageSrc={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              ))}
      </S.List>
    </S.Wrapper>
  );
};
