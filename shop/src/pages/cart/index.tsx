import S from "./styled";
import { useAppSelector } from "@/store/hooks";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";
import { useEffect, useMemo, useState } from "react";
import { Api } from "@/api/api";
import { ProductType } from "@/api/types";
import { CartCard } from "@/components/cart-card";
import { CustomButton } from "@/components/custom-button";

export const CartPage = () => {
  const cart = useAppSelector(selectorCartProducts);

  const [productsWithMeta, setProductsWithMeta] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Api.getProducts();

        const userProducts = data.filter((product) => !!cart[product.id]);

        setProductsWithMeta(userProducts);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [cart]);

  const totalPrice = useMemo(
    () =>
      productsWithMeta
        .map((item) => item.price * cart[item.id].amount)
        .reduce((acc, curr) => acc + curr, 0)
        .toFixed(2),
    [cart, productsWithMeta],
  );

  console.log(totalPrice);

  return (
    <S.Wrapper>
      <S.TitleContainer>
        Cart
        <CustomButton fullWidth={false}>Show now</CustomButton>
      </S.TitleContainer>
      <S.CartContainer>
        <S.ProductsContainer>
          {Object.keys(cart).length > 0 ? (
            <>
              {productsWithMeta.map((item) => (
                <CartCard
                  docId={cart[item.id].docId}
                  width={"200"}
                  imageSrc={item.image}
                  height={"200"}
                  key={item.id}
                  description={item.description}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  amountItemsInCart={cart[item.id].amount}
                />
              ))}
            </>
          ) : (
            <S.NoData>No products in cart yet</S.NoData>
          )}
        </S.ProductsContainer>
      </S.CartContainer>
    </S.Wrapper>
  );
};
