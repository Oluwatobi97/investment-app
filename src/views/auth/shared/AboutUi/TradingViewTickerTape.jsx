import React, { useEffect } from "react";

export const TradingViewTickerTape = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      symbol: "BITSTAMP:BTCUSD",
      width: "250",
      height: "250",
      locale: "en",
      dateRange: "1M",
      colorTheme: "light",
      trendLineColor: "rgba(230, 145, 56, 1)",
      underLineColor: "rgba(246, 178, 107, 1)",
      underLineBottomColor: "rgba(249, 203, 156, 0)",
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
      noTimeScale: true,
    });

    // Append the script to the container
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // Cleanup script on component unmount
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
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};
