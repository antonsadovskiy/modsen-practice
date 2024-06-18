import { CatalogCard } from "@/components/catalog-card";
import {
  List,
  SwiperContainer,
  Title,
  TitleContainer,
  ViewAllLink,
  Wrapper,
} from "./styled";
import { useCallback, useEffect, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { Skeleton } from "@/components/skeleton";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import { CustomSwiper } from "@/components/custom-swiper";
import { homeSwiperImages } from "@/constants/home-swiper-images";

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
    <Wrapper>
      <div>
        <SwiperContainer>
          <CustomSwiper images={homeSwiperImages} />
        </SwiperContainer>
        <TitleContainer>
          <Title>Shop The Latest</Title>
          <ViewAllLink onClick={viewAllHandler}>View All</ViewAllLink>
        </TitleContainer>
        <List>
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
        </List>
      </div>
    </Wrapper>
  );
};
