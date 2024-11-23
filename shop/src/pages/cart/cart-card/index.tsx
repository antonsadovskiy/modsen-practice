import { memo, useCallback } from "react";

import { Button, List } from "antd";

import {
  useDeleteProductFromCartMutation,
  useUpdateProductInCartMutation,
} from "@/api";
import { IncreaseAmount } from "@/components/increase-amount";
import { useToast } from "@/hooks/useToast";

export type CartCardPropsType = {
  productInCartId: number;
  id: number;
  imageSrc?: string;
  title: string;
  description: string;
  price: number;
  width?: string;
  height?: string;
  amountItemsInCart: number;
};

const CartCard = memo(
  ({
    productInCartId,
    id,
    imageSrc,
    description,
    price,
    title,
    amountItemsInCart,
  }: CartCardPropsType) => {
    const toast = useToast();

    const [updateProduct] = useUpdateProductInCartMutation();
    const [deleteProduct] = useDeleteProductFromCartMutation();

    const updateCartProduct = useCallback(
      async (newValue: number) => {
        try {
          await updateProduct({ productInCartId, amount: newValue });
        } catch (e) {
          toast.error(
            "Failed to update product quantity, please try again later",
          );
        }
      },
      [productInCartId, updateProduct],
    );

    const onDeleteProductHandler = async () => {
      try {
        await deleteProduct(productInCartId).unwrap();
      } catch (e) {
        toast.error(
          "Failed to delete product from cart, please try again later",
        );
      }
    };

    return (
      <List.Item
        key={id}
        actions={[
          <Button onClick={onDeleteProductHandler} key={"delete"}>
            Удалить
          </Button>,
          <IncreaseAmount
            key={"increase"}
            min={1}
            startAmount={amountItemsInCart}
            onChangeDebouncedValue={updateCartProduct}
            pricePerItem={price}
          />,
          /*<IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,*/
        ]}
        extra={
          <img
            width={200}
            height={200}
            style={{
              backgroundPosition: "center",
              objectFit: "cover",
            }}
            alt="logo"
            src={`http://localhost:9000/products/${imageSrc}`}
          />
        }
      >
        <List.Item.Meta title={title} description={description} />
      </List.Item>
    );
  },
);

CartCard.displayName = "CartCard";

export { CartCard };
