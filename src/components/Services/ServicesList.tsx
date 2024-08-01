"use client";

const services = [
  {
    title: "Product Development",
    description: "End-to-end product development services from concept to launch.",
    moreInfo: "/services/product-development",
  },
  {
    title: "Consulting",
    description: "Expert consulting services to help you navigate complex challenges.",
    moreInfo: "/services/consulting",
  },
  {
    title: "Support",
    description: "24/7 support services to ensure your operations run smoothly.",
    moreInfo: "/services/support",
  },
];

const ServiceList = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-base-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <a href={service.moreInfo} className="btn btn-primary">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
