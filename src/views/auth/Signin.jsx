import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../lib/zod-schema";
import { SIGNIN_FIELDS } from "./shared/constant";
import { ApiRequest } from "../../lib/data/makeRequest";
import { ToastMessage, useToast } from "../../components/ToastMessage";
import AuthLayout from "../../layouts/formsLayouts/AuthLayout";
import { useUserContext } from "../../context/userContext/UserContext";
import styles from "../../pages/Marketing.jsx/Header/ui/Signin.module.css";

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
      if (data.status === 200) {
        authenticate(data.token);
      }
      if (data.status === 401) {
        setToast({ message: "Invalid username or password", status: "error" });
      }
    },
    onError: async (error) => {
      const message =
        error?.response?.data?.message || "An unexpected error occurred";
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
    <>
      <AuthLayout>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Log In</h2>
            <form onSubmit={handleSubmit(submit)}>
              {SIGNIN_FIELDS.map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: field.name === "email" ? 0.1 : 0.2,
                  }}
                >
                  <input
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    type={field.type}
                    className={`${styles.input} ${
                      errors[field.name] ? styles.errorInput : ""
                    }`}
                    aria-invalid={errors[field.name] ? "true" : "false"}
                  />

                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name].message}
                    </p>
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className={styles.button}
                disabled={mutate.isPending}
              >
                {mutate.isPending ? <span>Loading...</span> : "Log In"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </AuthLayout>
      <ToastMessage
        toast={toast}
        dismissToast={dismissToast}
        className={
          "fixed left-1/2 -translate-x-1/2 p-4 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50 top-5 lg:top-auto lg:bottom-5 hidden"
        }
      />
    </>
  );
};
