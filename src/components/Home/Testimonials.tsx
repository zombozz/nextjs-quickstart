"use client";

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card bg-base-200 p-6">
            <p>"This product is amazing! It changed my life for the better."</p>
            <p className="mt-4 font-bold">- Happy Customer</p>
          </div>
          <div className="card bg-base-200 p-6">
            <p>"Great service and excellent support. Highly recommend!"</p>
            <p className="mt-4 font-bold">- Satisfied User</p>
          </div>
          <div className="card bg-base-200 p-6">
            <p>"The best investment I've ever made. Outstanding results."</p>
            <p className="mt-4 font-bold">- Thrilled Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
