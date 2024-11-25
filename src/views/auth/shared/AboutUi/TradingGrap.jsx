import React, { useEffect } from "react";

export const TradingGrap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          description: "Bitcoin",
          proName: "BINANCE:BTCUSDT",
        },
        {
          description: "ETH",
          proName: "BINANCE:ETHUSDT",
        },
        {
          description: "DOG",
          proName: "BINANCE:DOGEUSDT",
        },
        {
          description: "SOL",
          proName: "BINANCE:SOLUSDT",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "compact",
      colorTheme: "light",
      locale: "en",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // Cleanup the script on component unmount
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
