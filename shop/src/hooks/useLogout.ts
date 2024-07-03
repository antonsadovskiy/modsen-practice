import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useToast } from "@/hooks/useToast";
import { userThunks } from "@/store/slices/user";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const toast = useToast();

  const logout = async () => {
    try {
      await dispatch(userThunks.logoutUser()).unwrap();
      toast.success("Logout successful");
    } catch (e) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return { logout };
};
