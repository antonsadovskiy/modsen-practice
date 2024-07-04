export type CartProductType = {
  docId: string;
  amount: number;
  productId: number;
};

export type UpdateCartProductResponseType = {
  amount: number;
  productId: number;
};

export type UpdateCartProductRequestType = {
  docId: string;
} & UpdateCartProductResponseType;

export type DeleteCartProductResponseType = {
  productId: number;
};

export type DeleteCartProductRequestType = {
  docId: string;
} & DeleteCartProductResponseType;

export type AddCartProductResponseType = {
  productId: number;
  amount: number;
  docId: string;
};

export type AddCartProductRequestType = Omit<
  AddCartProductResponseType,
  "docId"
>;

export type GetCartResponseType = {
  cartProducts: CartProductType[];
};

export type GetCartRequestType = {
  userId: string;
};

export type CartSliceInitialStateType = {
  cartProducts: CartProductType[];
};
