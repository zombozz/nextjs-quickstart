"use client";

const Pricing = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">$9.99/month</p>
            <p>Includes basic features and support.</p>
            <button className="btn btn-primary mt-6">Choose Basic</button>
          </div>
          <div className="card bg-base-100 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-4xl font-bold mb-4">$19.99/month</p>
            <p>Includes all basic features plus additional tools and priority support.</p>
            <button className="btn btn-primary mt-6">Choose Pro</button>
          </div>
          <div className="card bg-base-100 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
            <p className="text-4xl font-bold mb-4">Contact Us</p>
            <p>Custom solutions and dedicated support for large organizations.</p>
            <button className="btn btn-primary mt-6">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
