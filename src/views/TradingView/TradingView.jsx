import React from "react";
import { BitcoinChart } from "../auth/shared/BitcoinChart";
import { Usdt } from "../auth/shared/Usdt";
import EthChart from "../auth/shared/EthChart";

export const TradingView = () => {
  return (
    <div className="pt-3 md:p-4 p-2">
      <BitcoinChart />
      {/* <Usdt />
      <EthChart /> */}
    </div>
  );
};
