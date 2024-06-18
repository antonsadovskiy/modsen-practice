import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
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
  IncreaseAmountButton,
  PriceContainer,
  AdditionalImage,
  MainImage,
  ProductTitle,
  ProductPrice,
  RatingContainer,
  ProductDescription,
  AddToCartContainer,
  AmountContainer,
  Amount,
  ButtonContainer,
  TotalPrice,
  IconsContainer,
  CategoryContainer,
  CategoryTitle,
  Category,
  DescriptionTitle,
  DescriptionContainer,
  Label,
  List,
} from "./styled";
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
    <Wrapper>
      <MainInfoContainer>
        {isLoading ? (
          <Skeleton height={600} />
        ) : (
          <>
            <ImagesContainer>
              <div>
                <AdditionalImage src={product?.image} alt={"product image"} />
              </div>
              <div>
                <MainImage src={product?.image} alt={"product image"} />
              </div>
            </ImagesContainer>
            <Information>
              <ProductTitle>{product?.title ?? ""}</ProductTitle>
              <ProductPrice>$ {product?.price ?? ""}</ProductPrice>
              <RatingContainer>
                <StarRating value={product?.rating?.rate ?? 0} />
                {product?.rating?.count ?? 0} customer review
              </RatingContainer>
              <ProductDescription>
                {product?.description ?? ""}
              </ProductDescription>
              <AddToCartContainer>
                <PriceContainer>
                  <AmountContainer>
                    <IncreaseAmountButton
                      $disabled={amount === 0}
                      onClick={decreaseHandler}
                    >
                      -
                    </IncreaseAmountButton>
                    <Amount>{amount}</Amount>
                    <IncreaseAmountButton onClick={increaseHandler}>
                      +
                    </IncreaseAmountButton>
                  </AmountContainer>
                  <TotalPrice>${totalPrice}</TotalPrice>
                </PriceContainer>
                <ButtonContainer>
                  <CustomButton
                    onClick={addToCartHandler}
                    disabled={amount === 0}
                    variant={"secondary"}
                  >
                    Add to cart
                  </CustomButton>
                </ButtonContainer>
              </AddToCartContainer>
              <IconsContainer>
                {socialMedias.map((item, index) => (
                  <SocialMediaIconButton
                    target={"_blank"}
                    href={item.link}
                    key={index}
                  >
                    {item.icon}
                  </SocialMediaIconButton>
                ))}
              </IconsContainer>
              <CategoryContainer>
                <CategoryTitle>Categories:</CategoryTitle>
                <Category>{product?.category}</Category>
              </CategoryContainer>
            </Information>
          </>
        )}
      </MainInfoContainer>
      <DescriptionContainer>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>
          {isLoading ? <Skeleton /> : product?.description ?? ""}
        </Description>
      </DescriptionContainer>
      <SimilarItems>
        <Label>Similar Items</Label>
        <List>
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
        </List>
      </SimilarItems>
    </Wrapper>
  );
};
