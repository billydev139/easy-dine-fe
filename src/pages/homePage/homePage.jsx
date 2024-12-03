import Images from "../../assets/images";
import DefaultLayout from "../../layouts/defaultlayout";
import CallToAction from "./callToAction";
import EasyDineTransformation from "./easyDineTransformation";
import EasyDineWorks from "./easyDineWorks";
import Testimonials from "./testimonial";
import WhyChoose from "./whychoose";

const HomePage = () => {
  return (
    <div>
      <DefaultLayout>
        <div className="min-h-[504px] custom-bg  flex flex-col justify-center items-center ">
            <div className="max-w-3xl text-white mx-auto  text-center">
          <h1 className="text-[50px] font-extrabold   leading-[65px]" >
            Revolutionize Your Restaurant Management with EasyDine
          </h1>
          <img
          src={Images.bar}
          alt="bar"
          className="max-w-lg mx-auto my-4"
          />
          <p  className="max-w-xl mx-auto ">Streamline operations, enhance customer experiences, and boost revenue with our all-in-one restaurant management solution.</p>
          </div>
        </div>
        <WhyChoose/>
        <EasyDineWorks />
        <EasyDineTransformation/>
        <Testimonials/>
        <CallToAction/>
      </DefaultLayout>
    </div>
  );
};

export default HomePage;
