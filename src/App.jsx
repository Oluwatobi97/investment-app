import React from "react";
import AllRoutes from "./routes/AllRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./context/userContext/UserContext";
import CookieBanner from "./lib/CookieBanner";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="bg-gray-50">
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          <AllRoutes />
          <CookieBanner />
        </QueryClientProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
