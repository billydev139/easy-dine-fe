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
    <div className="bg-primaryBlack text-white  px-6">
          <h2 className="text-[38px] font-semibold mb-6 pt-24 text-center ">
          Transform Your Restaurant with EasyDine
          </h2>
          <div className=" flex items-center justify-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-2 items-center justify-center">
        {/* Left Section - Heading and Bullet Points */}
        <div>
         
          <ul className="space-y-4 ">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 text-white text-[20px] font-medium"
              >
                <span className="h-2 w-2 mt-4 bg-white rounded-full"></span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="relative">
          <img
            src={Images.transformation} // Replace with your image path
            alt="Restaurant Interior"
            className="rounded-xl shadow-lg"
          />
          <div className=" w-full h-full  rounded-xl pointer-events-none"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EasyDineTransformation;
