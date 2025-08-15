import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/auth";
import useAuthStore from "@/store/auth";

export const useLogin = () => {
  const { setAccessToken, setUser } = useAuthStore((state) => state);

  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: { email: string; password: string }) => {
      return loginUser(credentials);
    },
    mutationKey: ["login"],
    onSuccess: (data) => {
      if (data) {
        setAccessToken(data.token);
        setUser(data.user);
      }
    },
  });

  return {
    login: mutate,
    isPending,
  };
};
