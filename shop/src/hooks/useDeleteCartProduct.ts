import { useCallback } from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { useAppDispatch } from "@/store/hooks";
import { cartActions } from "@/store/slices/cart/cartSlice";

export const useDeleteCartProduct = () => {
  const db = getFirestore();

  const dispatch = useAppDispatch();

  const deleteCartProduct = useCallback(
    async (docId: string, productId: number) => {
      try {
        await deleteDoc(doc(db, "cart", docId));

        dispatch(
          cartActions.deleteProductFromCart({
            productId,
          }),
        );
      } catch (e) {
        console.error(e);
      }
    },
    [db, dispatch],
  );

  return { deleteCartProduct };
};
