"use client";

const caseStudies = [
  {
    title: "Project Alpha",
    description: "A successful implementation of our product development service.",
    link: "/case-studies/project-alpha",
  },
  {
    title: "Consulting for XYZ Corp",
    description: "How our consulting services helped XYZ Corp achieve their goals.",
    link: "/case-studies/xyz-corp",
  },
  {
    title: "24/7 Support for ACME Inc.",
    description: "Ensuring smooth operations for ACME Inc. with our support services.",
    link: "/case-studies/acme-inc",
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="p-6 bg-base-100 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
              <p className="mb-6">{caseStudy.description}</p>
              <a href={caseStudy.link} className="btn btn-secondary">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
