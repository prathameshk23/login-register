import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Userdata } from "../types";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();

  const {
    mutate: login,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        data,
      );
      return response.data;
    },
    onError: (err: any) => {
      if (err instanceof AxiosError) {
        setError(err?.response?.data.message);
      }
    },
    onSuccess: (data: Userdata) => {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    },
  });

  return { error, login, isPending, isError };
};
