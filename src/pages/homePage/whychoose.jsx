import { motion } from "framer-motion";
import Images from "../../assets/images";

const WhyChoose = () => {
  const Cards = [
    {
      img: <img src={Images.centerDashboard} alt="dashboard" />,
      label: "Centralized Dashboard",
      text: "Manage orders, inventory, and finances in one place.",
    },
    {
      img: <img src={Images.qrCode} alt="QR Code" />,
      label: "QR Code Ordering",
      text: "Enhance customer convenience with digital menus.",
    },
    {
      img: <img src={Images.centerDashboard} alt="Analytics" />,
      label: "Real-Time Analytics",
      text: "Gain insights to optimize your operations.",
    },
    {
      img: <img src={Images.support} alt="Support" />,
      label: "Multi-Restaurant Support",
      text: "Perfect for chains and franchises.",
    },
    {
      img: <img src={Images.loyalty} alt="Loyalty" />,
      label: "Loyalty Programs",
      text: "Reward your customers effortlessly.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#111621] py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
          Why Choose EasyDine?
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {Cards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="bg-[#1e293b] border border-transparent rounded-xl px-8 py-6 shadow-lg hover:shadow-sky-500/50 hover:border-sky-400"
            >
              <div className="w-20 h-20 mx-auto mb-4">{item.img}</div>
              <p className="text-[24px] font-semibold text-center text-sky-300">
                {item.label}
              </p>
              <p className="text-base text-center max-w-[280px] text-gray-300 mx-auto">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
