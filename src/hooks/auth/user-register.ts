import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/services/auth";

export const useRegister = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: {
      fullName: string;
      email: string;
      password: string;
    }) => {
      return registerUser(credentials);
    },
    mutationKey: ["register"],
    onSuccess: () => {},
  });

  return {
    register: mutate,
    isPending,
  };
};
