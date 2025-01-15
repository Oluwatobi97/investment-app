import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { userSchema } from "../../lib/zod-schema";
import { SIGNIN_FIELDS } from "./shared/constant";
import { ApiRequest } from "../../lib/data/makeRequest";
import { ToastMessage, useToast } from "../../components/ToastMessage";
import AuthLayout from "../../layouts/formsLayouts/AuthLayout";
import { useAuthenticate } from "./Signin";
import FormSchema from "../../design-system/form/FormSchema";

const useSignUpMutation = () => {
  const { setToast, toast, dismissToast } = useToast();
  const authenticate = useAuthenticate();

  const mutate = useMutation({
    mutationFn: async (data) => {
      return await ApiRequest.POST("auth-system/create-account", data);
    },
    onSuccess: async (result) => {
      if (result.status === 201) {
        authenticate(result.token);
      }
      setToast({ message: result, status: "error" });
    },
    onError: async (error) => {
      console.log(error);
      setToast({
        message: error.message || "An error occurred",
        status: "error",
      });
    },
  });
  return { mutate, toast, dismissToast };
};

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const { mutate, dismissToast, toast } = useSignUpMutation();

  const submit = async (data) => {
    await mutate.mutateAsync(data);
  };

  return (
    <AuthLayout title={"SignUp"}>
      <FormSchema
        error={errors}
        handleSubmit={handleSubmit(submit)}
        register={register}
        fields={SIGNIN_FIELDS}
        className={
          " font-thin text-base px-10 text-start border border-gray-100 rounded-lg"
        }
        loading={mutate.isPending}
      />
      <ToastMessage
        toast={toast}
        dismissToast={dismissToast}
        className={
          "fixed left-[52%] -translate-x-1/2 p-4 border text-xs lg:text-sm rounded-md shadow-lg z-50 top-10 lg:left-[53%]  bg-slate-50"
        }
      />
    </AuthLayout>
  );
};
