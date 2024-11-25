import React from "react";
import { TradingGrap } from "../auth/shared/AboutUi/TradingGrap";
import { TradingGrap1 } from "../auth/shared/AboutUi/TradingGrap1";
import { TradingViewTickerTape } from "../auth/shared/AboutUi/TradingViewTickerTape";

export const TradingView = () => {
  return (
    <div>
      <TradingGrap />
      <TradingViewTickerTape className={"pt-2"} />
      <TradingGrap1 />
    </div>
  );
};
