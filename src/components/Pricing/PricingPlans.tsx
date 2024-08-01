"use client";

const PricingPlans = () => {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-8">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold">Basic Plan</h3>
            <p className="text-lg mb-4">$19 / month</p>
            <ul className="list-disc list-inside mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold">Standard Plan</h3>
            <p className="text-lg mb-4">$39 / month</p>
            <ul className="list-disc list-inside mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold">Premium Plan</h3>
            <p className="text-lg mb-4">$59 / month</p>
            <ul className="list-disc list-inside mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
            </ul>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
