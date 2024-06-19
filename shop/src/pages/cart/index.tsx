import S from "./styled";
import { useAppSelector } from "@/store/hooks";
import { selectorCartProducts } from "@/store/slices/cart/cartSelectors";
import { useEffect, useState } from "react";
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

  return (
    <S.Wrapper>
      <S.Title>Cart</S.Title>
      <S.CartContainer>
        <S.ProductsContainer>
          {Object.keys(cart).length > 0 ? (
            <>
              {productsWithMeta.map((item) => (
                <CartCard
                  width={"200"}
                  imageSrc={item.image}
                  height={"200"}
                  key={item.id}
                  description={item.description}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </>
          ) : (
            <S.NoData>No products in cart yet</S.NoData>
          )}
        </S.ProductsContainer>
        <S.BuyContainer>
          <S.ButtonContainer>
            <CustomButton>Show now</CustomButton>
          </S.ButtonContainer>
        </S.BuyContainer>
      </S.CartContainer>
    </S.Wrapper>
  );
};
