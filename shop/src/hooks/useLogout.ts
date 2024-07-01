import { useAppDispatch } from "@/hooks/useAppDispatch";
import { userThunks } from "@/store/slices/user";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = async () => {
    try {
      await dispatch(userThunks.logoutUser()).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return { logout };
};
