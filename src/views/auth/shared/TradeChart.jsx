import React, { useEffect } from "react";

export const Trading = () => {
  useEffect(() => {
    // Dynamically load the TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      dateRange: "ALL",
      showChart: false,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "100%",
      tabs: [
        {
          title: "Crypto",
          symbols: [
            { s: "CRYPTOCAP:BTCUSD", d: "Bitcoin" },
            { s: "CRYPTOCAP:ETHUSD", d: "Ethereum" },
            { s: "CRYPTOCAP:BNBUSDT", d: "Binance Coin" },
            { s: "CRYPTOCAP:DOGEUSD", d: "Dogecoin" },
            { s: "CRYPTOCAP:ADAUSD", d: "Cardano" },
            { s: "CRYPTOCAP:XRPUSD", d: "Ripple" },
            // Add more cryptocurrency pairs here
            { s: "CRYPTOCAP:LTCUSD", d: "Litecoin" },
            { s: "CRYPTOCAP:BCHUSD", d: "Bitcoin Cash" },
            { s: "CRYPTOCAP:DOTUSD", d: "Polkadot" },
            { s: "CRYPTOCAP:UNIUSD", d: "Uniswap" },
            { s: "CRYPTOCAP:AVAXUSD", d: "Avalanche" },
            // Additional cryptocurrency pairs
            { s: "CRYPTOCAP:MATICUSD", d: "MATIC" },
            { s: "CRYPTOCAP:SOLUSD", d: "Solana" },
            { s: "CRYPTOCAP:FTTUSD", d: "Fantom" },
            { s: "CRYPTOCAP:THETAUSD", d: "Theta Network" },
            { s: "CRYPTOCAP:ALGOUSD", d: "Algorand" },
          ],
          originalTitle: "Cryptocurrencies",
        },
        {
          title: "Futures",
          symbols: [
            { s: "CME_MINI:ES1!", d: "S&P 500" },
            { s: "CME:6E1!", d: "Euro" },
            { s: "COMEX:GC1!", d: "Gold" },
            { s: "NYMEX:CL1!", d: "WTI Crude Oil" },
            { s: "NYMEX:NG1!", d: "Gas" },
            { s: "CBOT:ZC1!", d: "Corn" },
          ],
          originalTitle: "Futures",
        },
        {
          title: "Bonds",
          symbols: [
            { s: "CBOT:ZB1!", d: "T-Bond" },
            { s: "CBOT:UB1!", d: "Ultra T-Bond" },
            { s: "EUREX:FGBL1!", d: "Euro Bund" },
            { s: "EUREX:FBTP1!", d: "Euro BTP" },
            { s: "EUREX:FGBM1!", d: "Euro BOBL" },
          ],
          originalTitle: "Bonds",
        },
        {
          title: "Forex",
          symbols: [
            { s: "FX:EURUSD", d: "EUR to USD" },
            { s: "FX:GBPUSD", d: "GBP to USD" },
            { s: "FX:USDJPY", d: "USD to JPY" },
            { s: "FX:USDCHF", d: "USD to CHF" },
            { s: "FX:AUDUSD", d: "AUD to USD" },
            { s: "FX:USDCAD", d: "USD to CAD" },
          ],
          originalTitle: "Forex",
        },
      ],
    });
    document
      .querySelector(".tradingview-widget-container__widget")
      .appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container flex justify-center md:justify-start md:p-6 mt-10 items-center md:items-start m-0">
      <div className="tradingview-widget-container__widget h-screen md:h-auto md:w-full w-full md:w-11/12"></div>
      <div className="tradingview-widget-copyright absolute bottom-0 md:hidden">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
          className="text-blue-600 "
        ></a>
      </div>
    </div>
  );
};

export default Trading;
