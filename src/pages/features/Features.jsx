import DefaultLayout from "../../layouts/defaultLayout";
import {motion} from "framer-motion"
import sections from "./featureContent";
const Features = () => {
  // Card content array
  const features = [
    {
      title: "Multilingual Support",
      description: "Seamless language switching for global accessibility.",
      icon: "🌐", // You can replace this with actual icons
    },
    {
      title: "Currency Selection",
      description: "Easily set and manage multiple currencies for international use.",
      icon: "💲",
    },
    {
      title: "QR Codes",
      description: "Streamlined ordering and payments via QR codes.",
      icon: "📱",
    },
    {
      title: "Inventory System",
      description: "Real-time updates and intelligent stock control.",
      icon: "📦",
    },
    {
      title: "Multi-Restaurant Capability",
      description: "Manage multiple restaurant locations with ease.",
      icon: "🏢",
    },
    {
      title: "Menu Design",
      description: "Gain insights to optimize your operations.",
      icon: "📋",
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
      <div className="bg-black text-white py-10 mt-">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold my-8">Why Choose EasyDine?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
<div className="mt-40">
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
                <h2 className="text-3xl md:text-4xl font-bold text-primaryYellow mb-2 text-left">
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed text-gray-300 text-left">
                  {section.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
</div>
          
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Features;
