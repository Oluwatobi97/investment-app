import React from "react";
import { Route, Routes } from "react-router-dom";
import { Marketing } from "../hooks/Marketing";
import { Signin } from "../views/auth/Signin";
import { Signup } from "../views/auth/Signup";
import Home from "../pages/Home";
import ProtectedRoutes from "../lib/ProtectedRoutes";
import CreatePlans from "../views/create-plans/CreatePlans";
import { PreviewPlan } from "../views/create-plans/PreviewPlan";
import { UserContextProvider } from "../context/userContext/UserContext";

export const MarkertingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Marketing />} />
    </Routes>
  );
};

export const AppRoute = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route
          path="/Sign-in"
          element={
            <ProtectedRoutes pageType="auth-page">
              <Signin />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/Sign-up"
          element={
            <ProtectedRoutes pageType="auth-page">
              <Signup />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoutes pageType="app-page">
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/create-plans"
          element={
            <ProtectedRoutes pageType="app-page">
              <CreatePlans />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/preview-plan"
          element={
            <ProtectedRoutes pageType="app-page">
              <PreviewPlan />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </UserContextProvider>
  );
};
