/* eslint-disable react/prop-types */
import Images from "../../assets/images";

const HeroSection = ({ para, heading, heroBar,width,height, image }) => {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "right",
      transition: "background-image 1s ease-in-out",
    }} className={`${height || "min-h-[604px]" }  flex flex-col justify-center items-center `}>
      <div className="max-w-3xl text-white mx-auto  text-center">
        <h1 className="lg:text-[50px] text-3xl font-extrabold   leading-[65px]">
          {heading || "Revolutionize Your Restaurant Management with EasyDine"}
        </h1>
        {heroBar ? (
          <img src={Images.bar} alt="bar" className="max-w-lg mx-auto mt-4" />
        ) : null}
        <p className={`${width || "max-w-xl"}  mx-auto pt-4 lg:text-xl text-sm`}>
          {para ||
            "Streamline operations, enhance customer experiences, and boost revenue with our all-in-one restaurant management solution."}
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
