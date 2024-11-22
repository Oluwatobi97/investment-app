import React from "react";
import { useForm } from "react-hook-form";
import { SIGNIN_FIELDS } from "./shared/constant";
import AuthLayout from "../../layouts/formsLayouts/AuthLayout";
import FormSchema from "../../design-system/form/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../lib/zod-schema";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "../../lib/data/makeRequest";
import { ToatMessage, useToast } from "../../components/ToatMessage";
import { useUserContext } from "../../context/userContext/UserContext";

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
    onSuccess: async (data) => {
      console.log(data);
      if (data.status === 200) {
        authenticate(data.token);
      }

      if (data.status === 401) {
        setToast({ message: "invalid username or password", status: "error" });
      }
    },
    onError: async (error) => {
      // const result = await response.json()
      // setToast({ message: data.error, status: 'error' })
      console.log(error);
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
    // have a authLayout
    <AuthLayout title={"LogIn"}>
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
      <ToatMessage toast={toast} dismissToast={dismissToast} />
    </AuthLayout>
  );
};
