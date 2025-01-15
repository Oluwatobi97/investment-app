import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../lib/zod-schema";
import { SIGNIN_FIELDS } from "./shared/constant";
import { ApiRequest } from "../../lib/data/makeRequest";
import { ToastMessage, useToast } from "../../components/ToastMessage";
import AuthLayout from "../../layouts/formsLayouts/AuthLayout";
import { useUserContext } from "../../context/userContext/UserContext";
import FormSchema from "../../design-system/form/FormSchema";

export const useAuthenticate = () => {
  const { setIsLoggedIn } = useUserContext();
  const navigate = useNavigate();

  const authenticate = (token) => {
    setIsLoggedIn(true);
    localStorage.setItem("token", JSON.stringify(token));
    navigate("/Home");
  };
  return authenticate;
};

const useSignInMutation = () => {
  const { setToast, toast, dismissToast } = useToast();
  const authenticate = useAuthenticate();
  const mutate = useMutation({
    mutationFn: async (data) => {
      return await ApiRequest.POST("auth-system/login", data);
    },
    onSuccess: async (result) => {
      console.log(result);
      if (result.status === 200) {
        authenticate(result.token);
      }
      setToast({ message: result, status: "error" });
    },
    onError: async (error) => {
      const message = error.message || "An unexpected error occurred";
      setToast({ message, status: "error" });
    },
  });
  return { mutate, toast, dismissToast };
};

export const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const { dismissToast, mutate, toast } = useSignInMutation();

  const submit = async (data) => {
    await mutate.mutateAsync(data);
  };

  return (
    <AuthLayout title="LogIn">
      <FormSchema
        error={errors}
        handleSubmit={handleSubmit(submit)}
        register={register}
        fields={SIGNIN_FIELDS}
        className={
          "bg-transparent font-thin text-base px-10 text-start border border-gray-100 rounded-lg"
        }
        loading={mutate.isPending}
      />
      <ToastMessage
        toast={toast}
        dismissToast={dismissToast}
        className={
          "fixed left-[52%] -translate-x-1/2 p-4 border text-sm rounded-md shadow-lg z-50 top-10 lg:left-[53%]  bg-slate-50"
        }
      />
    </AuthLayout>
  );
};
