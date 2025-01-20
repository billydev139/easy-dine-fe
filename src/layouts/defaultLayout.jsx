/* eslint-disable react/prop-types */


import Images from "../assets/images";
import Footer from "../components/footer";
import HeroSection from "../pages/homePage/heroSection";

const DefaultLayout = ({
  children,
 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
           <HeroSection heroBar={true} image={Images.heroImage} />

      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
