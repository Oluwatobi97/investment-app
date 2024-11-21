import React from "react";

const CallToAction = () => {
  return (
    <section class=" bg-gradient-to-l from-surface to-blue-50 py-12 border ">
      <div class="max-w-4xl mx-auto sm:px-10 md:px-auto bg-gradient-to-t from-surface to-white p-8 rounded-lg shadow-lg text-center">
        <h2 class="text-primary text-3xl font-bold mb-4">
          Ready to Start Your Crypto Journey?
        </h2>
        <p class="text-secondary mb-6">
          Join thousands of investors and grow your wealth with CryptoNest
          today!
        </p>
        <button class="bg-primary text-surface px-6 py-3 rounded-lg font-bold hover:bg-secondary transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
