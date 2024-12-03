import Images from "../../assets/images";

const WhyChoose = () => {
  const Cards = [
    {
      img: <img src={Images.centerDashboard} alt="dashboard"  />,
      label: "Centralized Dashboard",
      text: "Manage orders, inventory, and finances in one place.",
    },
    {
      img: <img src={Images.qrCode} alt="dashboard" />,
      label: "QR Code Ordering",
      text: "Enhance customer convenience with digital menus.",
    },
    {
      img: <img src={Images.centerDashboard} alt="dashboard" />,
      label: "Real-Time Analytics",
      text: "Gain insights to optimize your operations.",
    },
    {
      img: <img src={Images.support} alt="dashboard" />,
      label: "Multi-Restaurant Support",
      text: "Perfect for chains and franchises.",
    },
    {
      img: <img src={Images.loyalty} alt="dashboard" />,
      label: "Loyalty Programs",
      text: "Reward your customers effortlessly.",
    },
  ];
  return (
    <div className=" bg-primaryBlack py-24 text-white ">
        <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
        Why Choose EasyDine?
      </h2>
        <div className="flex flex-wrap gap-8 justify-center w-full">
      {Cards.map((item, index) => (
        <div key={index} className="bg-secondaryBlack  rounded-xl px-12 py-5" 
         style={{
            boxShadow: "0 10px 15px rgba(255, 255, 255, 0.1)", // Light shadow
          }}>
          <div className="w-20 h-20 mx-auto mb-4">{item.img}</div>
          <p className="text-[24px] font-bold text-center">{item.label}</p>
          <p className="text-base text-center max-w-[300px]">{item.text}</p>

        </div>
      ))}
      </div>
      </div>
    </div>
  );
};
export default WhyChoose;
