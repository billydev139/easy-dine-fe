/* eslint-disable react/prop-types */
import Images from "../../assets/images";
import Header from "../../components/header";
import videoUrl from "../../assets/video/1192-143842659.mp4";
import { useLocation } from "react-router-dom";

const HeroSection = ({ heroBar, width, height, videoSrc }) => {
  const location = useLocation();

  // Define content for each route
  const content = {
    "/": {
      heading: "Revolutionize Your Restaurant Management with EasyDine",
      para: "Streamline operations, enhance customer experiences, and boost revenue with our all-in-one restaurant management solution.",
    },
    "/about-us": {
      heading: "Who we are and what we do",
      para: "From preschool to pre-tertiary, our students enjoy fun, interactive and relevant lessons and are empowered to think beyond the confines of the classroom.",
    },
    "/features": {
      heading: "Discover the Core Features of EasyDine.",
      para: "EasyDine offers advanced tools and features to simplify your restaurant operations.",
    },
    "/contact-us": {
      heading: "Get in Touch",
      para: "We’d love to hear from you! Whether you have questions, need support, or want to share feedback, our team is here to assist. Reach out to us through the form below or via our provided contact details, and we’ll get back to you promptly."
    },
    "/pricing":{
      heading: "Discover Our Plans",
      para: "Choose the right plan for your restaurant based on your needs, preferences, and budget. Our pricing plans include everything you need to get started with EasyDine, plus unlimited features and support."
    }

  };

  // Get content based on the current route
  const { heading, para } = content[location.pathname] || content["/"];

  // Check if the current route is "terms and conditions"
  const isTermsAndConditions = location.pathname === "/terms-and-conditions";
  const isFaqs = location.pathname === "/faqs";

  return (
    <>
      {!isTermsAndConditions && !isFaqs  ? (
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: height || "600px",
          }}
          className="hero-section"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Content */}
          <div className="relative z-10">
            <Header />

            <div className="flex flex-col justify-center items-center my-[10%]">
              <div className="max-w-3xl text-white mx-auto text-center ">
                <h1 className="lg:text-[50px] text-3xl font-extrabold leading-[65px]">
                  {heading}
                </h1>
                <div className="flex justify-center m-2">
                <img src={Images.heroVector} className="max-w-[500px]"/>
                </div>
                
                <p
                  className={`${
                    width || "max-w-xl"
                  } mx-auto pt-4 lg:text-xl text-sm`}
                >
                  {para}
                </p>
              </div>
            </div>
          </div>

          {/* Dark Overlay for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
      ) : (
        <div className="bg-primaryBlack">
          <Header />
        </div>
      )}
    </>
  );
};

export default HeroSection;
