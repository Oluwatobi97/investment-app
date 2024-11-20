import React, { useEffect, useState } from "react";

const CookieBanner = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookieConcent") === null) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleConsent = (allowCookies) => {
    localStorage.setItem("cookieConcent", JSON.stringify(allowCookies));
    setShowCookieBanner(false);
  };
  if (!showCookieBanner) return null;
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          This website uses cookies for authentication and improving user
          experience. Do you accept?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => handleConsent(true)}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
