//  i want to get the logged in user

//  work on this log-in system more
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiRequest } from "../../lib/data/makeRequest";
import { useNavigate } from "react-router-dom";

const userContext = createContext(null);

const STORAGE_KEY = "logged-in";
const USER_STORAGE_KEY = "user-info";

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) ? true : false
  );
  const [userDetails, setUserDetails] = useState(() =>
    JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
  );
  const navigate = useNavigate();

  // Fetch user details when logged in
  const fetchUserDetails = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        logOut();
        return;
      }
      const result = await ApiRequest.GET(
        `auth-system/authenticated-user?token=${token}`
      );
      if (result.message === "un-Authorized") {
        logOut();
        return;
      }
      setUserDetails(result);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(result));
    } catch (error) {
      console.error("Error fetching user details:", error);
      logOut();
    }
  }, []);
  const logOut = useCallback(() => {
    setIsLoggedIn(false);
    setUserDetails(null);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem("token");
    navigate("/Sign-in");
  }, [navigate]);

  // Auto-fetch user details when logged in state changes
  useEffect(() => {
    if (isLoggedIn) {
      fetchUserDetails();
    } else {
      window.location.reload();
      logOut();
      window.location.reload();
    }
  }, [isLoggedIn, fetchUserDetails, logOut]);
  return (
    <userContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userDetails,
        logOut,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};
