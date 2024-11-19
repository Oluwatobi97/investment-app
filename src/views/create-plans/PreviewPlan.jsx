import React, { useState } from "react";
import PopupCmp from "./PopupCmp";
import { ToatMessage, useToast } from "../../components/ToatMessage";
import { useMutation } from "@tanstack/react-query";
import { ApiRequest } from "../../lib/data/makeRequest";
import { Linkbuttons } from "../DashBoard/Plans";
import { SquareArrowLeft } from "lucide-react";

const useCreatePlanMutation = () => {
  const { setToast, toast, dismissToast } = useToast();
  const mutate = useMutation({
    mutationFn: async (data) => {
      return await ApiRequest.POST("investment/create-investment-plan", data);
    },
    onSuccess: async (data) => {
      if (data.status === 201) {
        setToast({ message: data.message, status: "success" });
      }
      if (data.status === 401) {
        setToast({ message: "invalid username or password", status: "error" });
      }
    },
    onError: async (response) => {
      // const result = await response.json()
      // setToast({ message: data.error, status: 'error' })
    },
  });
  return { mutate, toast, dismissToast };
};

export const PreviewPlan = () => {
  const planDetails = localStorage.getItem("Tempoary-plan-creation")
    ? JSON.parse(localStorage.getItem("Tempoary-plan-creation"))
    : null;

  const [showPopUp, setPopUp] = useState(false);
  const { mutate, toast, dismissToast } = useCreatePlanMutation();
  const createPlan = async () => {
    await mutate.mutateAsync(planDetails);
    setPopUp(false);
  };
  return (
    <div>
      <div className="absolute top-12 left-[30%] ">
        <Linkbuttons
          path={"/#/home"}
          className={"flex items-center gap-2 mb-2"}
        >
          <SquareArrowLeft />
          <p>Go Back To Home</p>
        </Linkbuttons>
        <div className="border p-10 mb-16">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold pb-10 tracking-tighter">
              Preview Plan
            </h1>
            <div className="flex flex-col items-center gap-10">
              <p>plan-type: {planDetails.planType}</p>
              <p>type of coin: {planDetails.coinsType}</p>
              <p>
                duration: {planDetails.investMentDuration.replace("-", " ")}
              </p>
              <p>Amount: ${planDetails.amount}</p>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-20">
          <Linkbuttons className={"border w-64 h-10"} path={"/#/create-plans"}>
            Cancel{" "}
          </Linkbuttons>
          <button className="border w-64 h-10" onClick={() => setPopUp(true)}>
            Continue to pay
          </button>
        </div>
      </div>
      <PopupCmp
        setPopUp={setPopUp}
        showPopUp={showPopUp}
        popUpfunc={createPlan}
      />
      <ToatMessage
        dismissToast={dismissToast}
        toast={toast}
        className={"absolute top-0 left-[50%%] bg-gray w-full z-10 "}
      />
    </div>
  );
};
