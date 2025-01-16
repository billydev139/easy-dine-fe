/* eslint-disable react/prop-types */
import Images from "../../assets/images";
import Header from "../../components/header";
import videoUrl from "../../assets/video/1192-143842659.mp4"
const HeroSection = ({ para, heading, heroBar, width, height, videoSrc }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: height || "600px",
        }}
        className="hero-section"
      >
        {/* Video Background */}
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
            <div className="max-w-3xl text-white mx-auto text-center">
              <h1 className="lg:text-[50px] text-3xl font-extrabold leading-[65px]">
                {heading ||
                  "Revolutionize Your Restaurant Management with EasyDine"}
              </h1>
              {heroBar ? (
                <img
                  src={Images.bar}
                  alt="bar"
                  className="max-w-lg mx-auto mt-4"
                />
              ) : null}
              <p
                className={`${
                  width || "max-w-xl"
                } mx-auto pt-4 lg:text-xl text-sm`}
              >
                {para ||
                  "Streamline operations, enhance customer experiences, and boost revenue with our all-in-one restaurant management solution."}
              </p>
            </div>
          </div>
        </div>

        {/* Dark Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </>
  );
};

export default HeroSection;
