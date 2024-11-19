import React from "react";
import { Link } from "react-router-dom";

export const Linkbuttons = ({ className, path, children }) => (
  <Link to={path}>
    <button className={className}>{children}</button>
  </Link>
);

const PlanCmp = ({ plan }) => {
  return (
    <div className="border w-full p-10 mb-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <h1>{plan.planType}</h1>
          <p>{plan.coinsType}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1>${plan.amount}</h1>
          <p>{plan.investMentDuration.replace("-", " ")}</p>
        </div>
      </div>
    </div>
  );
};
const NoProductCmp = () => {
  return (
    <div>
      <div className="text-xl font-semibold mt-8 text-center text-gray-800">
        <h1>You Do Not Have Any Active Investment Plan</h1>
      </div>
      <Linkbuttons path={"/#/create-plans"} className={""}>
        Create Plans
      </Linkbuttons>
    </div>
  );
};
export const Plans = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between  mb-10">
        <h1 className="capitalize text-2xl">Investment Plans</h1>
        <Linkbuttons path={"/#/create-plans"} className={"border p-3"}>
          Create Plans
        </Linkbuttons>
      </div>
      {data && data.length !== 0 ? (
        data.map((plan) => <PlanCmp plan={plan} />)
      ) : (
        <NoProductCmp />
      )}
    </div>
  );
};

export default Plans;
