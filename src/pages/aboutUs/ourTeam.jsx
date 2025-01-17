import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Kristian Kovac",
    position: "Founder and CEO",
    image: "https://smatik.ch/media/Kristian.jpg",
    quote:
      "Smatik provides a powerful platform that fosters innovation. I value the team's commitment to delivering solutions that truly make a difference.",
  },

  {
    id: 2,
    name: "Melani Kovac",
    position: "Head of Human Resources",
    image: "https://smatik.ch/media/Melani.jpg",
    quote:
      "I appreciate Smatik's structured way of working. Our services set benchmarks for efficiency and customer engagement.",
  },
  {
    id: 3,
    name: "Anastasija Jovic",
    position: "Back Office Manager",
    image: "https://smatik.ch/media/Anastasija.jpg",
    quote:
      "At Smatik, the customer is at the center of everything. Our team works tirelessly to provide top-notch IT solutions.",
  },
  {
    id: 4,
    name: "Andrin Suter",
    position: "Technical Director",
    image: "https://smatik.ch/media/Ben.jpg",
    quote:
      "Technology is our tool, but innovation is our drive. Together, we create solutions that inspire.",
  },
  {
    id: 5,
    name: "Henrique Santos de Carvalho",
    position: "Head of Finance and Controlling",
    image: "https://smatik.ch/media/Henrique.jpg",
    quote:
      "Efficiency and transparency are the keys to sustainable success – and that's exactly what we implement at Smatik.",
  },
  {
    id: 6,
    name: "Marinko Andrijanic",
    position: "Co-Founder and Deputy CEO",
    image: "https://smatik.ch/media/Marinko.jpg",
    quote:
      "Smatik creates a solid foundation for innovation. I admire the team's dedication to providing solutions that truly matter.",
  },
];

const TeamSection = () => {
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
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="container mx-auto"
      >
        {data.map((member) => (
          <SwiperSlide key={member.id}>
            <motion.div
              className="bg-secondaryBlue rounded-lg shadow-lg overflow-hidden relative group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative h-[240px]  overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 text-center group-hover:bg-primaryBlack transition-colors duration-500">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-[#8C959F] mt-2">{member.position}</p>
                <p className="text-sm mt-4 text-gray-300">{member.quote}</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
