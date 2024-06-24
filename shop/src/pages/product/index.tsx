import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductByIdQuery, useGetProductsByCategoryQuery } from "@/api";
import { CatalogCard } from "@/components/catalog-card";
import { CustomButton } from "@/components/custom-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { socialMedias } from "@/constants/socials";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartThunks } from "@/store/slices/cart";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";

import { StarRating } from "./star-rating";
import S from "./styled";

export const ProductPage = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);

  const [isAdding, setIsAdding] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectorCartProducts);

  const { data: product, isFetching: isLoadingProduct } =
    useGetProductByIdQuery(params.id);

  const { data: similarItems, isFetching: isLoadingSimilarItems } =
    useGetProductsByCategoryQuery(product?.category, {
      selectFromResult: ({ data, ...rest }) => ({
        data: data ?? [],
        ...rest,
      }),
    });

  const isThisProductAlreadyInCart = useMemo(
    () => !!cart.find((item) => item.productId === parseInt(params.id)),
    [cart, params],
  );

  const filteredSimilarItems = useMemo(
    () =>
      similarItems
        .filter((item) => item.id !== parseInt(params.id))
        .splice(0, 3),
    [params, similarItems],
  );

  const addToCartHandler = useCallback(async () => {
    if (product.id) {
      setIsAdding(true);
      await dispatch(
        cartThunks.addCartProduct({ productId: product.id, amount }),
      );
      setIsAdding(false);
    }
  }, [amount, dispatch, product?.id]);

  const goToCartHandler = useCallback(() => {
    navigate(routes.cart);
  }, [navigate]);

  const changeAmountHandler = useCallback(
    (newValue: number) => {
      setAmount(newValue);
    },
    [setAmount],
  );

  useEffect(() => {
    if (params.id) {
      const elem = cart.find((item) => item.productId === parseInt(params.id));

      if (elem) {
        return setAmount(elem.amount);
      }
      setAmount(0);
    }
  }, [cart, params.id]);

  return (
    <S.Wrapper>
      <S.MainInfoContainer>
        {isLoadingProduct ? (
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
                <IncreaseAmount
                  startAmount={amount}
                  pricePerItem={product?.price}
                  disabled={isThisProductAlreadyInCart}
                  onChangeValue={changeAmountHandler}
                />
                <S.ButtonContainer>
                  {isThisProductAlreadyInCart ? (
                    <CustomButton
                      onClick={goToCartHandler}
                      variant={"secondary"}
                    >
                      Go to cart
                    </CustomButton>
                  ) : (
                    <CustomButton
                      onClick={addToCartHandler}
                      disabled={amount === 0}
                      isLoading={isAdding}
                      variant={"secondary"}
                    >
                      Add to cart
                    </CustomButton>
                  )}
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
          {isLoadingProduct ? <Skeleton /> : product?.description ?? ""}
        </S.Description>
      </S.DescriptionContainer>
      <S.SimilarItems>
        <S.Label>Similar Items</S.Label>
        <S.List>
          {isLoadingSimilarItems
            ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} width={380} height={472} />
              ))
            : filteredSimilarItems.map((item, index) => (
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
