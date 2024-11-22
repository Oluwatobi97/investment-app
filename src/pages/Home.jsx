import React, { useEffect } from "react";
import SideBar from "./Marketing.jsx/Header/SideBar";
import Dash from "../views/DashBoard/Dash";
import CyptoMarket from "../views/DashBoard/CyptoMarket";
import { useUserContext } from "../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ApiRequest } from "../lib/data/makeRequest";

function Home() {
  // const context = useUserContext();
  // const naviage = useNavigate();

  //   useEffect(
  // 		() => {
  //   if (!context.isLoggedIn) {
  //     naviage('/')
  //   }
  // },
  // 		[context.isLoggedIn]
  // 	)

  return (
    <div className="">
      <SideBar />
      <Dash />
      <CyptoMarket />
    </div>
  );
}

export default Home;
