import React from "react";

export const LabelAndError = ({ name, error, children }) => {
  return (
    <div className="capitalize flex items-start flex-col gap-2 relative">
      <label htmlFor={name}>{name}</label>
      {children}
      {error[name] && (
        <span className="absolute text-red-400  font-semibold text-xs top-[100%]">
          {error[name].message}
        </span>
      )}
    </div>
  );
};
