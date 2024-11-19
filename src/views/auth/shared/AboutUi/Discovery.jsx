import React from "react";
import Wrapper from "../../../../context/Wrapper";

export const Discovery = () => {
  const ourDiscovery = [
    {
      number: "01",
      focus: "Rick Management",
    },
    {
      number: "02",
      focus: "Assured Security",
    },
    {
      number: "03",
      focus: "Tactical approach",
    },
  ];
  return (
    <Wrapper>
      <div className=" p-2 md:p-20  ">
        <div className="border bg-white h-full rounded-xl shadow-md font-bold p-7  md:p-10 ">
          <h1 className="text-gray-800 md:text-lg">Discover Your Strength</h1>
          <p className="text-blue-600 text-3xl md:text-6xl ">KEY ADVANTAGES</p>
          <div className="md:flex flex-cols-1 justify-between gap-3 space-y-6 items-center mt-44">
            {ourDiscovery.map((focus, index) => (
              <div
                className={` p-6 border rounded-lg w-[300px] text-white shadow-lg bg-blue-600 ${focus.color}`}
                key={index}
              >
                <p>{focus.number}</p>
                <p>{focus.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Discovery;
