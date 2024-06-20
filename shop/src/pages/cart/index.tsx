import S from "./styled";
import { useAppSelector } from "@/store/hooks";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";
import { useEffect, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CartCard } from "@/components/cart-card";
import { CustomButton } from "@/components/custom-button";
import { Skeleton } from "@/components/skeleton";

type ProductTypeWithStoreData = {
  docId: string;
  amountItems: number;
} & ProductType;

export const CartPage = () => {
  const cart = useAppSelector(selectorCartProducts);

  const [productsWithMeta, setProductsWithMeta] = useState<
    ProductTypeWithStoreData[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await Api.getProducts();

        const userProducts = data
          .filter(
            (product) => !!cart.find((item) => item.productId === product.id),
          )
          .map((product) => {
            const cartItem = cart.find((item) => item.productId === product.id);
            return {
              ...product,
              docId: cartItem ? cartItem.docId : "",
              amountItems: cartItem ? cartItem.amount : 0,
            };
          });

        setProductsWithMeta(userProducts);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cart]);

  /*const totalPrice = useMemo(
    () =>
      productsWithMeta
        .map((item) => item.price * cart[item.id].amount)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2),
    [cart, productsWithMeta],
  );*/

  return (
    <S.Wrapper>
      <S.TitleContainer>
        Cart
        <CustomButton fullWidth={false}>Show now</CustomButton>
      </S.TitleContainer>
      <S.CartContainer>
        <S.ProductsContainer>
          {productsWithMeta.length === 0 &&
            (isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} height={200} />
              ))
            ) : (
              <S.NoData>No products in cart yet</S.NoData>
            ))}
          {productsWithMeta.length > 0 &&
            productsWithMeta.map((item) => (
              <CartCard
                docId={item.docId}
                width={"200"}
                imageSrc={item.image}
                height={"200"}
                key={item.id}
                description={item.description}
                id={item.id}
                title={item.title}
                price={item.price}
                amountItemsInCart={item.amountItems}
              />
            ))}
        </S.ProductsContainer>
      </S.CartContainer>
    </S.Wrapper>
  );
};
