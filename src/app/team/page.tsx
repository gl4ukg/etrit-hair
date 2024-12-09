import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Etrit Tullumi",
    role: "Founder & Master Stylist",
    description: "With over 15 years of experience in the industry, Etrit brings creativity and precision to every style. His passion for hair artistry and dedication to client satisfaction has made him one of the most sought-after stylists in the region.",
    image: "/images/team/etrit.jpg",
    specialties: ["Hair Cutting", "Color Specialist", "Hair Treatments", "Styling"]
  },
  {
    name: "Sarah Johnson",
    role: "Senior Stylist",
    description: "Sarah specializes in creating natural, effortless looks that enhance each client's unique features. Her expertise in balayage and modern coloring techniques has earned her a loyal following.",
    image: "/images/team/sarah.jpg",
    specialties: ["Balayage", "Wedding Styling", "Color Correction", "Extensions"]
  },
  {
    name: "Michael Chen",
    role: "Color Specialist",
    description: "Michael's innovative approach to hair color and his ability to create stunning transformations has made him an expert in his field. He stays current with the latest trends and techniques.",
    image: "/images/team/michael.jpg",
    specialties: ["Creative Color", "Highlights", "Fashion Colors", "Color Maintenance"]
  },
  {
    name: "Emma Davis",
    role: "Style Director",
    description: "Emma's creative vision and attention to detail make her exceptional at creating both classic and avant-garde styles. She specializes in bridal and special occasion styling.",
    image: "/images/team/emma.jpg",
    specialties: ["Bridal Styling", "Special Occasions", "Precision Cutting", "Updos"]
  }
];

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-background">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg text-neutral-600">
            Our talented team of professionals is dedicated to providing you with exceptional service
            and helping you achieve your perfect look.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-neutral-600 mb-6">{member.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book an appointment with one of our talented stylists and experience the
            exceptional service that sets us apart.
          </p>
          <a
            href="/booking"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-light transition-colors duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
