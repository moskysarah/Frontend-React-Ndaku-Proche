import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Marianna Holder",
      role: "Coiffeuse",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Tiffany Anderson",
      role: "Coiffeuse",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Brianna Fitzgerald",
      role: "Coiffeuse",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Wanda Cummerata",
      role: "Hairdresser",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Jaqueline Colon",
      role: "Hairdresser",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "Cameron Banks",
      role: "Hairdresser",
      image: "/placeholder.svg?height=400&width=300",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Mistletoe", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Beyond", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Blooming", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Flora", logo: "/placeholder.svg?height=100&width=100" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
          <h1 className="text-4xl font-imperial text-center text-[#6B0606] mb-2">À propos</h1>
       
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: "url('https://res.cloudinary.com/dtpw00be5/image/upload/v1733108309/Img_54_jxddhv.png')"}}>
        
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-primary mb-12 text-[#6B0606]">
            Nous pouvons créer ce que vous imaginez
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Pretty Glam est un salon de coiffure mixte offrant une large gamme de services capillaires pour hommes, femmes et enfants. Les prestations incluent des coupes, coiffures, colorations, traitements, lissages et permanentes, le tout dans un cadre accueillant et professionnel.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                La vision de Pretty Glam est de créer un espace où les clients se sentent valorisés et détendus, tout en recevant des services de coiffure de haute qualité. Le salon aspire à devenir une référence dans la communauté, reconnu pour son excellence en coiffure et son service à la clientèle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#FDF6F0] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="w-32">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-primary mb-4">Notre Equipe</h2>
          <p className="text-center text-gray-600 mb-12">Rencontrez nos professionnels</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href={member.socials.facebook} className="text-white hover:text-primary">
                        <Facebook size={24} />
                      </a>
                      <a href={member.socials.instagram} className="text-white hover:text-primary">
                        <Instagram size={24} />
                      </a>
                      <a href={member.socials.twitter} className="text-white hover:text-primary">
                        <Twitter size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;