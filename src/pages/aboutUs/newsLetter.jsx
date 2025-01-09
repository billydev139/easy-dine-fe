import Images from "../../assets/images";


const NewsletterSection = () => {
  return (
    // <div className="bg-black text-white py-12 px-4 md:px-16">
      <div className=" bg-[#2F2F2F] container mx-auto rounded-lg mt-10 shadow-lg py-12 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8">
        {/* Text and Form Section */}
        <div className="w-full ">
          <h2 className="text-2xl md:text-[38px] font-bold mb-4 leading-[47px]">
            Be the first to know when we drop a new feature or product
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-2 rounded-md font-semibold  transition"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            Still have any question?{' '}
            <a href="#" className="">
              Contact Us
            </a>
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full  flex flex-col gap-4">
          <img
            src={Images.beTheFirst}
            alt="Feature"
            className="rounded-lg shadow-md  object-cover"
          />
          
        </div>
      </div>
    // {/* </div> */}
  );
};

export default NewsletterSection;
