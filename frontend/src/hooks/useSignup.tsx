import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Userdata } from "../types";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();

  const {
    mutate: signup,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (data: {
      email: string;
      name: string;
      password: string;
      dob: string;
    }) => {
      const response = await axios.post("http://localhost:3000/api/user", data);
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

  return { error, signup, isPending, isError };
};
