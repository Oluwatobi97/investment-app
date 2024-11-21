import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext/UserContext";

const ProtectedRoutes = ({ pageType, children }) => {
  const context = useUserContext();
  const naviagate = useNavigate();

  const isLoggedIn = JSON.parse(context.isLoggedIn);
  useEffect(() => {
    if (pageType === "auth-page") {
      if (isLoggedIn) {
        naviagate("/Home");
      }
    } else {
      if (!isLoggedIn) {
        navigate("/Sign-in");
      }
    }
  }, [context.isLoggedIn]);
  return children;
};

export default ProtectedRoutes;
