import { motion } from "framer-motion";
import Images from "../../assets/images";

const EasyDineTransformation = () => {
  // Bullet points data
  const bulletPoints = [
    "Save time with automated processes.",
    "Enhance customer satisfaction with seamless ordering.",
    "Increase revenue with upselling and dynamic pricing tools.",
    "Reduce waste with inventory optimization.",
    "Simplify staff management with scheduling and notification.",
  ];

  return (
    <div className="bg-primaryBlack text-white px-6 py-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[38px] font-extrabold text-center mb-10"
      >
        Transform Your Restaurant with EasyDine
      </motion.h2>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Bullet Points */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-6">
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 text-[20px] font-medium"
              >
                <span className="h-3 w-3 mt-2 bg-blue-950 rounded-full"></span>
                <p>{point}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={Images.transformation}
            alt="Restaurant Interior"
            className="rounded-xl shadow-xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent rounded-xl pointer-events-none"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EasyDineTransformation;
