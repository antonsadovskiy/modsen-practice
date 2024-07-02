import { useNavigate } from "react-router-dom";

import { useGetProductsQuery } from "@/api";
import { CatalogCard } from "@/components/catalog-card";
import { CustomImage } from "@/components/custom-image";
import { CustomSwiper } from "@/components/custom-swiper";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";

import { homeSwiperImages } from "./config";
import S from "./styled";

const homeSwiperItems = homeSwiperImages.map((image, index) => (
  <CustomImage
    key={index}
    highResSrc={image.highRes}
    lowResSrc={image.lowRes}
    alt={"image"}
  />
));

export const HomePage = () => {
  const navigate = useNavigate();

  const viewAllHandler = () => {
    navigate(routes.shop);
  };

  const { data: latestProducts, isLoading } = useGetProductsQuery(
    { limit: 6 },
    {
      selectFromResult: ({ data, ...rest }) => ({ data: data ?? [], ...rest }),
    },
  );

  return (
    <S.Wrapper>
      <div>
        <S.SwiperContainer id={"swiper"}>
          <CustomSwiper items={homeSwiperItems} />
        </S.SwiperContainer>
        <S.TitleContainer>
          <S.Title>Shop The Latest</S.Title>
          <S.ViewAllLink data-cy={"view-all-link"} onClick={viewAllHandler}>
            View All
          </S.ViewAllLink>
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
