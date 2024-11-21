import React from "react";

const AboutUi = () => {
  return (
    <section
      class="bg-gradient-to-br from-white to-background mb-10 py-12 mt-10"
      id="#about-us"
    >
      <div class="max-w-4xl mx-auto sm:px-10 md:px-auto bg-surface p-8 rounded-lg border border-gradient-r-lg from-purple-400 to-red-400 shadow-lg">
        <h2 class="text-primary text-3xl font-bold mb-4">About Us</h2>
        <p class="text-secondary leading-relaxed">
          Welcome to CryptoNest, your trusted platform for crypto investments.
          Our mission is to provide secure, profitable, and seamless investment
          options for both beginners and seasoned traders. With us, investing in
          cryptocurrencies has never been easier or safer.
        </p>
      </div>
    </section>
  );
};

export default AboutUi;
