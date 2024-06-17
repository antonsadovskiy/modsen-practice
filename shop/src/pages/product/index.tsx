import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { ProductType } from "@/api/types";
import { Api } from "@/api/api";
import {
  Wrapper,
  MainInfoContainer,
  ImagesContainer,
  Information,
  SocialMediaIconButton,
  Description,
  SimilarItems,
} from "@/pages/product/styled";
import { StarRating } from "@/pages/shop/star-rating";
import { socialMedias } from "@/constants/socials";
import { CatalogCard } from "@/components/catalog-card";
import { Skeleton } from "@/components/skeleton";

export const ProductPage = () => {
  const [product, setProduct] = useState<ProductType | undefined>();

  const [similarItems, setSimilarItems] = useState<ProductType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = useParams<{ id: string }>();

  const filteredSimilarItems = useMemo(
    () => similarItems.filter((item) => item.id !== product?.id).splice(0, 3),
    [product?.id, similarItems],
  );

  useEffect(() => {
    const fetchData = async () => {
      if (params?.id) {
        setIsLoading(true);
        try {
          const data = await Api.getProductById(params?.id ?? "");
          setProduct(data);

          const similarItems = await Api.getProductsByCategory(data.category);
          setSimilarItems(similarItems);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [params?.id]);

  return (
    <Wrapper>
      <MainInfoContainer>
        {isLoading ? (
          <Skeleton height={600} />
        ) : (
          <>
            <ImagesContainer>
              <div className={"moreImages"}>
                <img src={product?.image} alt={"product image"} />
              </div>
              <div className={"mainImage"}>
                <img src={product?.image} alt={"product image"} />
              </div>
            </ImagesContainer>
            <Information>
              <div className={"title"}>{product?.title ?? ""}</div>
              <div className={"price"}>$ {product?.price ?? ""}</div>
              <div className={"rating"}>
                <StarRating value={product?.rating?.rate ?? 0} />
                {product?.rating?.count ?? 0} customer review
              </div>
              <div className={"description"}>{product?.description ?? ""}</div>
              <div className={"icons"}>
                {socialMedias.map((item, index) => (
                  <SocialMediaIconButton
                    target={"_blank"}
                    href={item.link}
                    key={index}
                  >
                    {item.icon}
                  </SocialMediaIconButton>
                ))}
              </div>
              <div className={"categoryContainer"}>
                <span className={"categoryTitle"}>Categories:</span>
                <span className={"category"}>{product?.category}</span>
              </div>
            </Information>
          </>
        )}
      </MainInfoContainer>
      <Description>
        <div className={"title"}>Description</div>
        <div className={"description"}>
          {isLoading ? <Skeleton /> : product?.description ?? ""}
        </div>
      </Description>
      <SimilarItems>
        <div className={"label"}>Similar Items</div>
        <div className={"list"}>
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} width={380} height={472} />
            ))}
          {!isLoading &&
            filteredSimilarItems.map((item, index) => (
              <CatalogCard
                key={index}
                id={item.id}
                imageSrc={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
        </div>
      </SimilarItems>
    </Wrapper>
  );
};
