import React from "react";
import { Link } from "react-router-dom";

export const Linkbuttons = ({ className, path, children }) => (
  <Link to={path}>
    <button className={className}>{children}</button>
  </Link>
);

const PlanCmp = ({ plan }) => {
  return (
    <div className="max-7xl m-auto px-10">
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
    </div>
  );
};
const NoProductCmp = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="border p-10 rounded-xl">
        <h1 className="text-2xl text-textSecondary  font-bold mt-8 text-center capitalize">
          You Do Not Have Any Active Investment Plan
        </h1>
      </div>
    </div>
  );
};
export const Plans = ({ data }) => {
  return (
    <div className="w-full max-w-7xl px-5">
      <div className="flex items-start md:items-center gap-2 flex-col md:flex-row  justify-between  mb-10">
        <h1 className="capitalize text-2xl">Investment Plans</h1>
        <Linkbuttons
          path={"/create-plans"}
          className={
            "px-4 py-2 bg-blue-600  hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 text-lg"
          }
        >
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
