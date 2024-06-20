import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { CustomSwiper } from "@/components/custom-swiper";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { homeSwiperImages } from "@/pages/home/config";

import S from "./styled";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [latestProducts, setLatestProducts] = useState<ProductType[]>([]);

  const viewAllHandler = useCallback(() => {
    navigate(routes.shop);
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await Api.getProducts({ limit: 6 });

        if (data) {
          setLatestProducts(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Wrapper>
      <div>
        <S.SwiperContainer>
          <CustomSwiper images={homeSwiperImages} />
        </S.SwiperContainer>
        <S.TitleContainer>
          <S.Title>Shop The Latest</S.Title>
          <S.ViewAllLink onClick={viewAllHandler}>View All</S.ViewAllLink>
        </S.TitleContainer>
        <S.List>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} width={380} height={472} />
              ))
            : latestProducts.map((item) => (
                <CatalogCard
                  imageSrc={item.image}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
        </S.List>
      </div>
    </S.Wrapper>
  );
};
