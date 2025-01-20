import { motion } from "framer-motion"; // Import Framer Motion for animations
import Images from "../../assets/images";
import DefaultLayout from "../../layouts/defaultLayout";
import HeroSection from "../homePage/heroSection";
import NewsletterSection from "./newsLetter";
import TeamSection from "./ourTeam";

const AboutUs = () => {
  const sections = [
    {
      title: "Who We Are",
      description:
        "EasyDine is a cutting-edge restaurant management platform designed to simplify and enhance every aspect of your operations. From seamless order management to advanced analytics, we’re dedicated to helping restaurants thrive in a competitive market.",
      image: Images.who,
    },
    {
      title: "Our Mission",
      description:
        "To simplify restaurant management and elevate the dining experience with intelligent, user-friendly solutions. We believe in enabling restaurants to focus on what they do best: creating memorable dining experiences while leaving the management complexities to us.",
      image: Images.mission,
    },
    {
      title: "Our Vision",
      description:
        "To transform the restaurant industry by integrating cutting-edge technology into everyday operations.",
      image: Images.vision,
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <DefaultLayout>
 
      <div className="bg-primaryBlack text-white py-24 px-4 md:px-16">
        <div className="container mx-auto space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Animated Image */}
              <motion.div
                className="w-full md:w-1/2"
                variants={imageVariants}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                />
              </motion.div>

              {/* Animated Text */}
              <motion.div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primaryYellow mb-2">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  {section.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
          {/* Add Team and Newsletter Sections */}
          <TeamSection />
          <NewsletterSection />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutUs;
