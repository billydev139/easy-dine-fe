/* eslint-disable react/prop-types */
import Images from "../../assets/images";

const HeroSection = ({ para, heading, heroBar,width,height }) => {
  return (
    <div className={`${height || "min-h-[604px]" }  custom-bg  flex flex-col justify-center items-center `}>
      <div className="max-w-3xl text-white mx-auto  text-center">
        <h1 className="text-[50px] font-extrabold   leading-[65px]">
          {heading || "Revolutionize Your Restaurant Management with EasyDine"}
        </h1>
        {heroBar ? (
          <img src={Images.bar} alt="bar" className="max-w-lg mx-auto mt-4" />
        ) : null}
        <p className={`${width || "max-w-xl"}  mx-auto pt-4 text-xl`}>
          {para ||
            "Streamline operations, enhance customer experiences, and boost revenue with our all-in-one restaurant management solution."}
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
