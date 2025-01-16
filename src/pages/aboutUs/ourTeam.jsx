import { motion } from "framer-motion";
import Images from "../../assets/images";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Reef Parker",
      role: "Carol Management",
      image: Images.user1,
    },
    {
      name: "Jane Doe",
      role: "Marketing Specialist",
      image: Images.user1,
    },
    {
      name: "John Smith",
      role: "Product Manager",
      image: Images.user1,
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-primaryBlack text-white py-16 px-4 md:px-16">
      <h2 className="text-2xl md:text-[38px] font-bold text-center mb-12">
        Meet Our Team at Your Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-secondaryBlue rounded-lg shadow-lg overflow-hidden relative group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="relative h-[240px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center group-hover:bg-primaryBlack transition-colors duration-500">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-[#8C959F] mt-2">{member.role}</p>
              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a
                  href="#"
                  className="text-white hover:text-primaryBlue transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primaryBlue transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-primaryBlue transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
