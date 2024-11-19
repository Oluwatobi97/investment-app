import React from "react";

export const Card = ({ className, children, styles }) => {
  return (
    <div className="bg-white p-6 rounded-6">
      <div className={`flex flex-col ${styles}`}>{children}</div>
    </div>
  );
};

export default Card;
