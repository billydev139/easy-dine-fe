
import DefaultLayout from "../../layouts/defaultLayout";
import CallToAction from "./callToAction";
import EasyDineTransformation from "./easyDineTransformation";
import EasyDineWorks from "./easyDineWorks";
import HeroSection from "./heroSection";
import Testimonials from "./testimonial";
import WhyChoose from "./whychoose";

const HomePage = () => {
  return (
    <div>
      <DefaultLayout>
      <HeroSection heroBar={true}/>
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
