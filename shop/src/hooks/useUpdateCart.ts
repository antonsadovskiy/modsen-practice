import { useCallback } from "react";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import { useAppDispatch } from "@/store/hooks";
import { cartActions } from "@/store/slices/cart/cartSlice";

export const useUpdateCart = () => {
  const db = getFirestore();

  const dispatch = useAppDispatch();

  const updateCart = useCallback(
    async (id: number, docId: string, amount: number) => {
      try {
        const ref = doc(db, "cart", docId);

        await updateDoc(ref, {
          amount,
        });

        dispatch(
          cartActions.updateProductInCart({
            productId: id.toString(),
            amount,
          }),
        );
      } catch (e) {
        console.error(e);
      }
    },
    [db, dispatch],
  );

  return { updateCart };
};
