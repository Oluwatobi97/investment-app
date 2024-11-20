//  i want to get the logged in user

//  work on this log-in system more
import { createContext, useContext, useEffect, useState } from "react";
import { ApiRequest } from "../../lib/data/makeRequest";
import { useNavigate } from "react-router-dom";

const userContext = createContext(undefined);

const STORAGE_KEY = "logged-in";
const USER_STORAGE_KEY = "user-info";

const useGetUserDetails = (isLoggedIn) => {
  const [userDetails] = useState(
    localStorage.getItem(USER_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(USER_STORAGE_KEY))
      : null
  );

  const fetchLoggedInUser = async () => {
    if (isLoggedIn) {
      const result = await ApiRequest.GET("auth-system/authenticated-user");
      // setUserDetails({ ...result })
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ ...result }));
      return;
    }
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  useEffect(() => {
    fetchLoggedInUser(isLoggedIn);
  }, [isLoggedIn]);
  return userDetails;
};

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(USER_STORAGE_KEY) ? true : false
  );
  const navigate = useNavigate();

  const userDetails = useGetUserDetails(isLoggedIn);

  const logOut = async () => {
    await ApiRequest.GET("auth-system/log-out");
    setIsLoggedIn(false);
    navigate("/Sign-in");
  };
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
