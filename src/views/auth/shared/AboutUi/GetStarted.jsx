import React from "react";

export const GetStarted = () => {
  const howToGetStarted = [
    {
      number: "01",
      started: "Create Account",
    },
    {
      number: "02",
      started: "Make First Deposit",
    },
    {
      number: "03",
      started: "Invest Your Capital",
    },
  ];
  return (
    <div className="h-screen p-2 md:p-20 ">
      <div className="md:p-10 p-7 border bg-white h-full rounded-xl shadow-md font-bold">
        <h1 className="text-blue-600 text-2xl md:text-6xl mb-4">
          3 STEPS TO GET STARTED
        </h1>
        <div className="md:flex flex-cols-1 justify-between gap-3  space-y-6 items-center mt-44">
          {howToGetStarted.map((started, index) => (
            <div
              key={index}
              className="border p-3 w-[300px] text-white rounded-lg text-xl bg-blue-600"
            >
              <p>{started.number}</p>
              <p>{started.started}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
