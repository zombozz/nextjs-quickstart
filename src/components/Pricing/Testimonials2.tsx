"use client";

const Testimonials2 = () => {
  return (
    <section className="text-center py-12 bg-base-200">
      <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
        <div className="card bg-base-100 shadow-xl p-6">
          <p className="text-lg mb-4">"The service is fantastic! It has greatly improved our workflow and efficiency."</p>
          <p className="font-semibold">Jane Doe</p>
          <p className="text-sm text-gray-500">CEO, Company A</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-6">
          <p className="text-lg mb-4">"Excellent support and features that are really easy to use. Highly recommend!"</p>
          <p className="font-semibold">John Smith</p>
          <p className="text-sm text-gray-500">CTO, Company B</p>
        </div>
        <div className="card bg-base-100 shadow-xl p-6">
          <p className="text-lg mb-4">"A game-changer for our team. The integration was seamless and the results are impressive."</p>
          <p className="font-semibold">Alice Johnson</p>
          <p className="text-sm text-gray-500">Product Manager, Company C</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
