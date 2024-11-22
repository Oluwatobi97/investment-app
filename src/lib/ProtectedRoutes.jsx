import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext/UserContext";

const ProtectedRoutes = ({ pageType, children }) => {
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (pageType === "auth-page") {
      if (isLoggedIn) {
        navigate("/home");
      }
    } else {
      if (!isLoggedIn) {
        navigate("/Sign-in");
      }
    }
  }, [isLoggedIn, pageType, navigate]);

  return children;
};

export default ProtectedRoutes;
