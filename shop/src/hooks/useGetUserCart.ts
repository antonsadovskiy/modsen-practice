import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectorUserId } from "@/store/slices/app";
import { cartActions } from "@/store/slices/cart/cartSlice";

export const useGetUserCart = () => {
  const db = getFirestore();

  const dispatch = useAppDispatch();

  const userId = useAppSelector(selectorUserId);

  const getUserCart = useCallback(async () => {
    const q = query(collection(db, "cart"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const { amount, productId } = doc.data();
      dispatch(
        cartActions.addToCart({
          docId: doc.id,
          amount,
          productId,
        }),
      );
    });
  }, [db, dispatch, userId]);

  return { getUserCart };
};
