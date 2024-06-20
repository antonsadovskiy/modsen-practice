import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CatalogCard } from "@/components/catalog-card";
import { CustomButton } from "@/components/custom-button";
import { IncreaseAmount } from "@/components/increase-amount";
import { Skeleton } from "@/components/skeleton";
import { routes } from "@/constants/routes";
import { socialMedias } from "@/constants/socials";
import { useAddCart } from "@/hooks/useAddCart";
import { StarRating } from "@/pages/shop/star-rating";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";
import { cartActions } from "@/store/slices/cart/cartSlice";

import S from "./styled";

export const ProductPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductType | undefined>();

  const cart = useAppSelector(selectorCartProducts);

  const [amount, setAmount] = useState(0);

  const [similarItems, setSimilarItems] = useState<ProductType[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const params = useParams<{ id: string }>();

  const isThisProductAlreadyInCart = useMemo(
    () => !!cart.find((item) => item.productId === parseInt(params.id)),
    [cart, params],
  );

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

  const { addCart } = useAddCart();

  const addToCartHandler = useCallback(async () => {
    if (product.id) {
      setIsAdding(true);
      try {
        const docId = await addCart(product.id, amount);
        dispatch(
          cartActions.addToCart({
            docId,
            productId: product.id,
            amount,
          }),
        );
      } catch (e) {
        console.error(e);
      } finally {
        setIsAdding(false);
      }
    }
  }, [addCart, amount, dispatch, product]);

  const goToCartHandler = useCallback(() => {
    navigate(routes.cart);
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        setIsLoading(true);
        try {
          const data = await Api.getProductById(params.id);
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
  }, [params.id]);

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
                <IncreaseAmount
                  amount={amount}
                  increaseHandler={increaseHandler}
                  decreaseHandler={decreaseHandler}
                  totalPrice={totalPrice}
                  disabled={isThisProductAlreadyInCart}
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
