import apiClient from "@/lib/api";
import type { User } from "@/types";

type AuthResponse = {
  content: {
    user: User;
    token: string;
  };
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await apiClient.post("/login", credentials);

    const { user, token } = data.content as AuthResponse["content"];

    return {
      user,
      token,
    };
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (credentials: {
  fullName: string;
  email: string;
  password: string;
}) => {
  try {
    const { data, status } = await apiClient.post("/register", credentials);

    if (status === 201) {
      const { user, token } = data as AuthResponse["content"];

      return {
        user,
        token,
      };
    }
  } catch (error) {
    console.error(error);
  }
};
