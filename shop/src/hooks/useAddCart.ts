import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useAppSelector } from "@/store/hooks";
import { selectorUserId } from "@/store/slices/app";

export const useAddCart = () => {
  const db = getFirestore();

  const userId = useAppSelector(selectorUserId);

  const addCart = async (
    productId: number,
    amount: number,
    totalPrice: number,
  ) => {
    await addDoc(collection(db, "cart"), {
      productId,
      amount,
      totalPrice,
      userId,
    });
  };

  return { addCart };
};
