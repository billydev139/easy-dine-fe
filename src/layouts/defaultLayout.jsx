/* eslint-disable react/prop-types */


import Footer from "../components/footer";
import Header from "../components/header";

const DefaultLayout = ({
  children,
 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
  
     
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
