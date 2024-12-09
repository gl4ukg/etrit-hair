import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const featuredTeamMembers: TeamMember[] = [
  {
    name: "Etrit Tullumi",
    role: "Founder & Master Stylist",
    description: "With over 15 years of experience, Etrit brings creativity and precision to every style.",
    image: "/images/team/etrit.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Stylist",
    description: "Sarah specializes in creating natural, effortless looks that enhance each client's unique features.",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Color Specialist",
    description: "Michael's innovative approach to hair color has made him an expert in creating stunning transformations.",
    image: "/images/team/michael.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-neutral-600">
            Our talented stylists are passionate about creating the perfect look for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredTeamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-300"
          >
            Meet Our Full Team
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
