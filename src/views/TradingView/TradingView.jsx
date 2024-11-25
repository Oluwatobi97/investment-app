import React from "react";
import { TradingGrap } from "../auth/shared/AboutUi/TradingGrap";
import { TradingGrap1 } from "../auth/shared/AboutUi/TradingGrap1";
import { TradingViewTickerTape } from "../auth/shared/AboutUi/TradingViewTickerTape";

export const TradingView = () => {
  return (
    <div className="pt-3 md:p-4 p-2">
      <TradingGrap />
      <div className="pt-2">
        <TradingViewTickerTape />
      </div>
      <TradingGrap1 />
    </div>
  );
};
