import { useCallback } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectorUserId } from "@/store/slices/app";

export const useDeleteCartProduct = () => {
  const userId = useAppSelector(selectorUserId);

  console.log(userId);
  const deleteCartProduct = useCallback((docId: string) => {
    console.log(docId);
  }, []);

  return { deleteCartProduct };
};
