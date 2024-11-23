import React, { useState } from "react";
import OptionComponent from "../../views/auth/shared/OptionComponent";
import Plans from "./Plans";
import { useQuery } from "@tanstack/react-query";
import { ApiRequest } from "../../lib/data/makeRequest";
import { Eye, EyeClosed } from "lucide-react";

const useGetAllLoggedInUserPlans = () => {
  return useQuery({
    queryFn: async () => {
      return await ApiRequest.GET("investment");
    },
  });
};

export const Dash = () => {
  const { data } = useGetAllLoggedInUserPlans();

  if (data?.message) {
    if (data.message === "un-Authorized") {
      return null;
    }
  }

  const [isOpened, setIsOpened] = useState(false);

  const totalAmount = data && data?.reduce((sum, item) => sum + item.amount, 0);
  return (
    <div className="md:p-4 p-2">
      <div className=" py-7 text-xl mb-10 md:text-3xl text-textSecondary mt-5 bg-gradient-to-tr from-blue-50  to-surface p-10">
        <div className="gap-2 flex flex-col  ">
          <div className="flex items-center gap-2">
            <h2 className="capitalize">amount invested</h2>
            <button onClick={() => setIsOpened(!isOpened)}>
              {isOpened ? <Eye size={20} /> : <EyeClosed size={20} />}
            </button>
          </div>
          {isOpened ? <div>${totalAmount}</div> : <div>****</div>}
        </div>
      </div>

      <div className=" mt-7 flex flex-col items-center justify-center">
        <Plans data={data} />
      </div>
    </div>
  );
};

export default Dash;
