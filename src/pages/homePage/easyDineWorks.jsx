import Images from "../../assets/images";


const EasyDineWorks = () => {
  // Features Data
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
    <div className="bg-primaryBlue text-white py-16 flex items-center justify-center px-6">
      {/* Main Container */}
      <div className="container mx-auto gap-8 grid md:grid-cols-2  justify-between items-center">
        {/* Left Section - Dashboard Mockup */}
        <div className="">
          {/* Mockup Image */}
          <img
            src={Images.stats} // Replace with the correct path
            alt="Dashboard Mockup"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section - How EasyDine Works */}
        <div className="max-w-xl mx-auto">
          <h2 className="text-[38px] font-semibold mb-6 text-center md:text-left">
            How EasyDine Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 ">
            {/* Map through features */}
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white text-black p-5 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyDineWorks;
