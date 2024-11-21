import React from "react";

const WhyInvestwithUs = () => {
  return (
    <section class="bg-primary mt-16 py-12">
      <h1 className="capitalize text-white text-3xl font-bold mb-10 text-center ">
        why invest with us
      </h1>
      <div class="max-w-6xl mx-auto sm:px-10 md:px-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-surface p-6 rounded-lg shadow-lg">
          <h3 class="text-accent text-2xl font-bold mb-2">
            Secure Investments
          </h3>
          <p class="text-secondary">
            Your funds are safeguarded with top-tier encryption and
            multi-layered security.
          </p>
        </div>

        <div class="bg-surface p-6 rounded-lg shadow-lg">
          <h3 class="text-accent text-2xl font-bold mb-2">
            Guaranteed Returns
          </h3>
          <p class="text-secondary">
            Receive consistent and predictable ROI tailored to your investment
            plan.
          </p>
        </div>

        <div class="bg-surface p-6 rounded-lg shadow-lg">
          <h3 class="text-accent text-2xl font-bold mb-2">Diverse Plans</h3>
          <p class="text-secondary">
            Choose from various plans like Gold, Silver, and Bronze to suit your
            goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestwithUs;
