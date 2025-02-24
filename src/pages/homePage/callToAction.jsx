import Images from "../../assets/images";


const CallToAction = () => {
  return (
    <div className="bg-primaryBlack py-44">
      <div className="container mx-auto px-6 bg-gradient-to-b rounded-2xl from-[#0f172a] to-[#111621]">
        <div className= " relative py-10 contact-bg text-white rounded-lg grid grid-cols-2 items-center lg:items-start p-8 space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-[30px] font-semibold mb-4">
              Start Your EasyDine Journey Today!
            </h2>
            <p className="text-base mb-6 pr-16">
              Effortlessly streamline your restaurant operations with advanced
              tools designed to save time, enhance efficiency, and elevate
              customer satisfaction. From menu management to real-time
              analytics, our solution empowers you to run your restaurant with
              precision and ease. Join the revolution and experience the future
              of restaurant management today!
            </p>
            <button className="bg-white text-black font-medium py-2 px-4 rounded-lg text-base ">
              Contact Us for More Info
            </button>
          </div>
          {/* Image */}
          <div className="flex-shrink-0 absolute right-28 bottom-0">
            <img
              src={Images.person} // Replace with the actual image URL
              alt="Person pointing"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
