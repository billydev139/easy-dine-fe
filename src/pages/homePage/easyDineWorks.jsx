import { motion } from "framer-motion";
import Images from "../../assets/images";

const EasyDineWorks = () => {
  const features = [
    {
      title: "Set Up Your Dashboard",
      description: "Customize your restaurant’s operations in minutes.",
    },
    {
      title: "Grow Your Business",
      description: "Use advanced analytics to make data-driven decisions.",
    },
    {
      title: "Share QR Codes",
      description: "Guests access menus and order directly from their phones.",
    },
    {
      title: "Track Everything",
      description: "Monitor orders, inventory, and finances in real time.",
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-[#242424] via-[#242424] to-secondaryBlue text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={Images.stats}
            alt="Dashboard Mockup"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Section - How EasyDine Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-[38px] font-extrabold mb-8 text-center md:text-center text-white">
            How EasyDine Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                viewport={{ once: false }}
                className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lime-400/50 transform transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-center text-secondaryBlack">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EasyDineWorks;
