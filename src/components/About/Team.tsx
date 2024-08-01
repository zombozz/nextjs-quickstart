"use client";

const teamMembers = [
    { name: "Lesser Bruh 1", role: "CTO", imgSrc: "/path/to/bruh1.jpg" },
    { name: "Bruh", role: "CEO", imgSrc: "/path/to/bruh.jpg" },
  { name: "Lesser Bruh 2", role: "CFO", imgSrc: "/path/to/bruh2.jpg" },
  // Add more team members as needed
];

const Team = () => {
  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-base-100 rounded-lg shadow-md">
              <img src={member.imgSrc} alt={member.name} className="rounded-full w-32 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
