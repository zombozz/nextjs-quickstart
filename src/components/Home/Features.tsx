"use client";

const Features = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 p-6">
            <h3 className="text-2xl font-semibold">Feature One</h3>
            <p className="mt-4">Description of feature one and its benefits to the user.</p>
          </div>
          <div className="card bg-base-200 p-6">
            <h3 className="text-2xl font-semibold">Feature Two</h3>
            <p className="mt-4">Description of feature two and its benefits to the user.</p>
          </div>
          <div className="card bg-base-200 p-6">
            <h3 className="text-2xl font-semibold">Feature Three</h3>
            <p className="mt-4">Description of feature three and its benefits to the user.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
