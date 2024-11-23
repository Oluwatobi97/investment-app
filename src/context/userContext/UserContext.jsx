//  i want to get the logged in user

//  work on this log-in system more
import { createContext, useContext, useEffect, useState } from "react";
import { ApiRequest } from "../../lib/data/makeRequest";
import { useNavigate } from "react-router-dom";

const userContext = createContext(null);

const STORAGE_KEY = "logged-in";
const USER_STORAGE_KEY = "user-info";

const useGetUserDetails = (isLoggedIn) => {
  const [userDetails, setUserDetails] = useState(
    localStorage.getItem(USER_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
      : null
  );
  const fetchLoggedInUser = async () => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      const queryParams = new URLSearchParams({ token: token });
      const result = await ApiRequest.GET(
        `auth-system/authenticated-user?${queryParams.toString()}`
      );

      // setUserDetails({ ...result })
      if (result.message === "un-Authorized") {
        localStorage.removeItem(USER_STORAGE_KEY);
        return;
      }
      setUserDetails(result);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ ...result }));
      return;
    }
    localStorage.removeItem(USER_STORAGE_KEY);
    return;
  };

  useEffect(() => {
    fetchLoggedInUser(isLoggedIn);
  }, [isLoggedIn]);
  return { userDetails, setUserDetails };
};

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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
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
      handleLogOut();
    }
  }, [isLoggedIn, fetchUserDetails, handleLogOut]);
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
