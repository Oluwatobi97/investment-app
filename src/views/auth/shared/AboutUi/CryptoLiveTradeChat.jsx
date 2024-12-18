import {
  Bitcoin,
  TrendingUp,
  DollarSign,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import ReactDOM from "react-dom/client";
const Ethereum = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-500"
  >
    <path
      d="M12 2L3 12L12 22L21 12L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2L3 12L12 16L21 12L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.1);
  }
`;
const AnimatedDiv = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;
const PriceChangeIndicator = styled.div`
  animation: ${pulse} 2s infinite ease-in-out;
`;
const cryptoData = {
  BTC: {
    name: "Bitcoin",
    icon: Bitcoin,
    color: "text-yellow-500",
    chartColor: "text-yellow-500",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    price: 41256.78,
    change: 2.45,
    volume: "1.2B",
    high: 41850.0,
    low: 40925.15,
    marketCap: "805.2B",
    trades: [
      {
        type: "BUY",
        amount: 0.4235,
        price: 41256.78,
        time: "12:45:32",
      },
      {
        type: "SELL",
        amount: 1.2,
        price: 41245.5,
        time: "12:45:28",
      },
    ],
  },
  ETH: {
    name: "Ethereum",
    icon: Ethereum,
    color: "text-blue-500",
    chartColor: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500",
    price: 2250.45,
    change: 1.82,
    volume: "854M",
    high: 2275.0,
    low: 2180.25,
    marketCap: "264.5B",
    trades: [
      {
        type: "BUY",
        amount: 5.234,
        price: 2250.45,
        time: "12:45:32",
      },
      {
        type: "SELL",
        amount: 12.0,
        price: 2248.3,
        time: "12:45:28",
      },
    ],
  },
  SOL: {
    name: "Solana",
    icon: () => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-purple-500"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 10L16 10M8 14L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "text-purple-500",
    chartColor: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    price: 98.75,
    change: 3.24,
    volume: "425M",
    high: 101.2,
    low: 95.45,
    marketCap: "42.8B",
    trades: [
      {
        type: "BUY",
        amount: 25.5,
        price: 98.75,
        time: "12:45:32",
      },
      {
        type: "SELL",
        amount: 50.0,
        price: 98.65,
        time: "12:45:28",
      },
    ],
  },
};
const UpArrowSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-600 md:w-6 md:h-6"
  >
    <path
      d="M12 3L4 15H20L12 3Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const DownArrowSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-red-600 md:w-6 md:h-6"
  >
    <path
      d="M12 21L4 9H20L12 21Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const PriceChart = ({ color, gradientFrom, gradientTo }) => (
  <svg
    width="100%"
    height="150"
    viewBox="0 0 400 200"
    className={`${color} md:h-[200px]`}
  >
    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0 150 C50 140, 100 160, 150 130 C200 100, 250 120, 300 80 C350 40, 400 60, 400 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      className="drop-shadow-lg"
    />
    <path
      d="M0 150 C50 140, 100 160, 150 130 C200 100, 250 120, 300 80 C350 40, 400 60, 400 30 L400 200 L0 200 Z"
      fill="url(#lineGradient)"
    />
  </svg>
);
export const CryptoLiveTradeChat = () => {
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const currentCrypto = cryptoData[selectedCrypto];
  const CryptoIcon = currentCrypto.icon;
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <CryptoIcon
                className={`h-8 w-8 md:h-10 md:w-10 ${currentCrypto.color}`}
              />
              <div>
                <h1 className="text-xl md:text-3xl font-bold text-white tracking-tight">
                  {currentCrypto.name} Live Trades
                </h1>
                <p className="text-gray-400 text-sm md:text-base">
                  Real-time trading activity
                </p>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 text-white border border-gray-700"
              >
                <span className="text-sm font-medium">Select Crypto</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 z-10 overflow-hidden">
                  {Object.entries(cryptoData).map(([symbol, data]) => (
                    <button
                      key={symbol}
                      className="w-full px-4 py-3 text-left hover:bg-gray-100/80 flex items-center gap-3 transition-colors duration-200"
                      onClick={() => {
                        setSelectedCrypto(symbol);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {React.createElement(data.icon, {
                        className: `h-5 w-5 ${data.color}`,
                      })}
                      <span className="font-medium text-gray-800">
                        {data.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:border-r border-gray-200/50">
            <div
              className="h-[400px] md:h-[600px] overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
              role="log"
              aria-label="Trading messages"
            >
              {currentCrypto.trades.map((trade, index) => (
                <AnimatedDiv
                  key={index}
                  delay={`${index * 0.1}s`}
                  className="transform transition-all duration-300 hover:scale-102"
                >
                  <GlassCard className="flex items-center space-x-4 p-4 rounded-xl">
                    {trade.type === "BUY" ? <UpArrowSvg /> : <DownArrowSvg />}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <PriceChangeIndicator
                          className={`${
                            trade.type === "BUY"
                              ? "text-green-600"
                              : "text-red-600"
                          } font-semibold text-sm md:text-base`}
                        >
                          {trade.type}
                        </PriceChangeIndicator>
                        <span className="text-gray-500 text-xs md:text-sm">
                          {trade.time}
                        </span>
                      </div>
                      <div className="text-gray-900 font-medium text-sm md:text-base mt-1">
                        {trade.amount} {selectedCrypto} @ $
                        {trade.price.toFixed(2)}
                      </div>
                      <div className="text-gray-600 text-xs md:text-sm mt-1">
                        Total: ${(trade.amount * trade.price).toFixed(2)}
                      </div>
                    </div>
                  </GlassCard>
                </AnimatedDiv>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-6 space-y-4 md:space-y-6">
            <GlassCard className="p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  Current Price
                </h2>
                <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                ${currentCrypto.price.toFixed(2)}
              </div>
              <div className="text-green-600 flex items-center gap-2 text-base md:text-lg">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />+
                {currentCrypto.change}%
              </div>
            </GlassCard>

            <GlassCard className="p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  Price Chart
                </h2>
                <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
              </div>
              <PriceChart
                color={currentCrypto.chartColor}
                gradientFrom={currentCrypto.gradientFrom}
                gradientTo={currentCrypto.gradientTo}
              />
            </GlassCard>

            <GlassCard className="p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">
                  Key Statistics
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-500 text-sm md:text-base mb-1">
                    24h Volume
                  </div>
                  <div className="text-gray-900 font-semibold text-base md:text-lg">
                    ${currentCrypto.volume}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm md:text-base mb-1">
                    24h High
                  </div>
                  <div className="text-gray-900 font-semibold text-base md:text-lg">
                    ${currentCrypto.high.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm md:text-base mb-1">
                    24h Low
                  </div>
                  <div className="text-gray-900 font-semibold text-base md:text-lg">
                    ${currentCrypto.low.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm md:text-base mb-1">
                    Market Cap
                  </div>
                  <div className="text-gray-900 font-semibold text-base md:text-lg">
                    ${currentCrypto.marketCap}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CryptoLiveTradeChat />);
