import React, { useEffect } from "react";

export const TradingGrap1 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;

    // Configuration object for the widget
    script.innerHTML = JSON.stringify({
      width: 550,
      height: 550,
      symbolsGroups: [
        {
          name: "Futures",
          originalName: "Futures",
          symbols: [
            { name: "BITSTAMP:BTCUSD", displayName: "BTC" },
            { name: "BINANCE:BTCUSDT", displayName: "BTCUSDT" },
            { name: "BINANCE:DOGEUSDT", displayName: "GOD" },
            { name: "BINANCE:DOGEUSDT", displayName: "DOG" },
            { name: "BITSTAMP:XRPUSD", displayName: "XRP" },
            { name: "CRYPTOCAP:USDT.D", displayName: "USDT" },
            { name: "BINANCE:ETHUSDT", displayName: "ETH" },
            { name: "BINANCE:ETHBTC", displayName: "ETHBTC" },
            { name: "BINANCE:TIAUSDT", displayName: "TIAUSDT" },
            { name: "BYBIT:BTCUSD.P", displayName: "BTCUSD" },
            { name: "BITGET:BTCUSDT.P", displayName: "BTCUSDT.P" },
            { name: "BINANCE:DOTUSDT", displayName: "DOTUSDT" },
          ],
        },
        {
          name: "Bonds",
          originalName: "Bonds",
          symbols: [
            { name: "CBOT:ZB1!", displayName: "T-Bond" },
            { name: "CBOT:UB1!", displayName: "Ultra T-Bond" },
            { name: "EUREX:FGBL1!", displayName: "Euro Bund" },
            { name: "EUREX:FBTP1!", displayName: "Euro BTP" },
            { name: "EUREX:FGBM1!", displayName: "Euro BOBL" },
          ],
        },
        {
          name: "Crypto",
          symbols: [],
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
      backgroundColor: "#ffffff",
    });

    // Append script to the container
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // Cleanup the script on unmount
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};
