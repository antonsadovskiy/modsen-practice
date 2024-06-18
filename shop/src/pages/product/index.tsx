import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductType } from "@/api/types";
import { Api } from "@/api/api";
import S from "./styled";
import { StarRating } from "@/pages/shop/star-rating";
import { socialMedias } from "@/constants/socials";
import { CatalogCard } from "@/components/catalog-card";
import { Skeleton } from "@/components/skeleton";
import { CustomButton } from "@/components/custom-button";
import { useAppDispatch } from "@/store/hooks";
import { cartActions } from "@/store/slices/cart/cartSlice";

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<ProductType | undefined>();

  const [amount, setAmount] = useState<number>(0);

  const [similarItems, setSimilarItems] = useState<ProductType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = useParams<{ id: string }>();

  const filteredSimilarItems = useMemo(
    () => similarItems.filter((item) => item.id !== product?.id).splice(0, 3),
    [product?.id, similarItems],
  );

  const increaseHandler = useCallback(() => {
    setAmount((prevState) => prevState + 1);
  }, []);

  const decreaseHandler = useCallback(() => {
    setAmount((prevState) => prevState - 1);
  }, []);

  const totalPrice = useMemo(
    () => (amount * (product?.price ?? 0)).toFixed(2),
    [product, amount],
  );

  const addToCartHandler = useCallback(() => {
    if (product.id) {
      dispatch(
        cartActions.addToCart({
          productId: product.id,
          amount,
          totalPrice: +totalPrice,
        }),
      );
    }
  }, [amount, dispatch, product, totalPrice]);

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
    <S.Wrapper>
      <S.MainInfoContainer>
        {isLoading ? (
          <Skeleton height={600} />
        ) : (
          <>
            <S.ImagesContainer>
              <div>
                <S.AdditionalImage src={product?.image} alt={"product image"} />
              </div>
              <div>
                <S.MainImage src={product?.image} alt={"product image"} />
              </div>
            </S.ImagesContainer>
            <S.Information>
              <S.ProductTitle>{product?.title ?? ""}</S.ProductTitle>
              <S.ProductPrice>$ {product?.price ?? ""}</S.ProductPrice>
              <S.RatingContainer>
                <StarRating value={product?.rating?.rate ?? 0} />
                {product?.rating?.count ?? 0} customer review
              </S.RatingContainer>
              <S.ProductDescription>
                {product?.description ?? ""}
              </S.ProductDescription>
              <S.AddToCartContainer>
                <S.PriceContainer>
                  <S.AmountContainer>
                    <S.IncreaseAmountButton
                      $disabled={amount === 0}
                      onClick={decreaseHandler}
                    >
                      -
                    </S.IncreaseAmountButton>
                    <S.Amount>{amount}</S.Amount>
                    <S.IncreaseAmountButton onClick={increaseHandler}>
                      +
                    </S.IncreaseAmountButton>
                  </S.AmountContainer>
                  <S.TotalPrice>${totalPrice}</S.TotalPrice>
                </S.PriceContainer>
                <S.ButtonContainer>
                  <CustomButton
                    onClick={addToCartHandler}
                    disabled={amount === 0}
                    variant={"secondary"}
                  >
                    Add to cart
                  </CustomButton>
                </S.ButtonContainer>
              </S.AddToCartContainer>
              <S.IconsContainer>
                {socialMedias.map((item, index) => (
                  <S.SocialMediaIconButton
                    target={"_blank"}
                    href={item.link}
                    key={index}
                  >
                    {item.icon}
                  </S.SocialMediaIconButton>
                ))}
              </S.IconsContainer>
              <S.CategoryContainer>
                <S.CategoryTitle>Categories:</S.CategoryTitle>
                <S.Category>{product?.category}</S.Category>
              </S.CategoryContainer>
            </S.Information>
          </>
        )}
      </S.MainInfoContainer>
      <S.DescriptionContainer>
        <S.DescriptionTitle>Description</S.DescriptionTitle>
        <S.Description>
          {isLoading ? <Skeleton /> : product?.description ?? ""}
        </S.Description>
      </S.DescriptionContainer>
      <S.SimilarItems>
        <S.Label>Similar Items</S.Label>
        <S.List>
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
        </S.List>
      </S.SimilarItems>
    </S.Wrapper>
  );
};
