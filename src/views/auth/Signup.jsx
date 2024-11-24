import React from "react";
import FormSchema from "../../design-system/form/FormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/zod-schema";
import { SIGNIN_FIELDS } from "./shared/constant";
import { useMutation } from "@tanstack/react-query";
import { ApiRequest } from "../../lib/data/makeRequest";
import { ToatMessage, useToast } from "../../components/ToatMessage";
import AuthLayout from "../../layouts/formsLayouts/AuthLayout";
import { useAuthenticate } from "./Signin";

// find a better way to do this

// hndle errors properly
const useSignUpMutation = () => {
  const { setToast, toast, dismissToast } = useToast();
  const authenticate = useAuthenticate();

  const mutate = useMutation({
    mutationFn: async (data) => {
      return await ApiRequest.POST("auth-system/create-account", data);
    },
    onSuccess: async (data) => {
      if (data.status === 201) {
        authenticate(data.token);
      }
      if (data.status === 500) {
        setToast({ message: "user already exist", status: "error" });
      }
    },
    onError: async (data) => {
      // console.log(data)
      // setToast({ message: data.error, status: 'error' })
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
    // have a authLayout
    <AuthLayout title={"SIGNUP"}>
      <FormSchema
        error={errors}
        handleSubmit={handleSubmit(submit)}
        register={register}
        fields={SIGNIN_FIELDS}
        className={"border outline-none  p-3 rounded-sm"}
        loading={mutate.isPending}
      />
      <ToatMessage toast={toast} dismissToast={dismissToast} />
    </AuthLayout>
  );
};
