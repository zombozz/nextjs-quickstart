"use client";

const HowItWorks = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">1</div>
            <h3 className="text-2xl font-semibold">Step One</h3>
            <p className="mt-4">Brief explanation of the first step.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">2</div>
            <h3 className="text-2xl font-semibold">Step Two</h3>
            <p className="mt-4">Brief explanation of the second step.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">3</div>
            <h3 className="text-2xl font-semibold">Step Three</h3>
            <p className="mt-4">Brief explanation of the third step.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
