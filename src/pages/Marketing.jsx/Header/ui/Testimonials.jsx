import React from "react";

const Testimonials = () => {
  return (
    <section class="bg-primary py-12">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-surface p-6 rounded-lg shadow-lg">
          <p class="text-secondary mb-4">
            "CryptoNest has transformed the way I invest. I love the
            transparency!"
          </p>
          <h4 class="text-accent font-bold">- Jane Doe</h4>
        </div>

        <div class="bg-surface p-6 rounded-lg shadow-lg">
          <p class="text-secondary mb-4">
            "Amazing customer support and reliable returns. Highly recommended!"
          </p>
          <h4 class="text-accent font-bold">- John Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
