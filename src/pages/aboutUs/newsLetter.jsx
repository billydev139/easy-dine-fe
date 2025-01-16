import { motion } from "framer-motion"; // Import Framer Motion for animations
import Images from "../../assets/images";

const NewsletterSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-secondaryBlue container mx-auto rounded-lg mt-10 shadow-lg py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Text and Form Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-[38px] font-bold mb-6 leading-[47px] text-white">
          Be the first to know when we drop a new feature or product
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />
          <motion.button
            type="submit"
            className="w-full bg-primaryBlue text-white py-3 rounded-md font-semibold transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Still have any questions?{" "}
          <a href="#" className="text-gray-400 underline">
            Contact Us
          </a>
        </p>
      </div>
      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={Images.beTheFirst}
          alt="Feature"
          className="rounded-lg shadow-md object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default NewsletterSection;
