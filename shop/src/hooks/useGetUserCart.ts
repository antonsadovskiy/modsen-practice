import { useCallback } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { selectorUserId } from "@/store/slices/app";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { cartActions } from "@/store/slices/cart/cartSlice";

export const useGetUserCart = () => {
  const db = getFirestore();

  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  const getUserCart = useCallback(async () => {
    const q = query(collection(db, "cart"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const { amount, productId, totalPrice } = doc.data();
      dispatch(
        cartActions.addToCart({
          amount,
          productId,
          totalPrice,
        }),
      );
    });
  }, [db, dispatch, userId]);

  return { getUserCart };
};
