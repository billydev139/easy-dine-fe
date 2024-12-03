import { Link } from "react-router-dom";
import Icons from "../assets/icons";


const navigationLinks = [
  { name: "Follow us", href: "#", id: 1 },
  { name: <Icons.FaLinkedin />, href: "#", id: 2 },
  {
    name: <Icons.FaSquareInstagram size={34} color="white" />,
    href: "#",
    id: 3,
  },
  { name: <Icons.FaFacebook />, href: "#", id: 4 },
  { name: <Icons.FaXTwitter />, href: "#", id: 5 },
];
// const staticLinks = [
//   { name: "FAQs", href: "/faq" },
//   { name: "Privacy Policy", href: "/privacy-policy" },
//   { name: "Terms & Conditions", href: "/terms-of-services" },
// ];
const Footer = () => {
  return (
    // <header className="bg-primaryBlack   ">
    //   <nav
    //     aria-label="Global"
    //     className="flex  items-center container  justify-between mx-auto  border-[#9BB7FF]   lg:pb-6 pb-8 pt-2 lg:pt-6"
    //   >
    <div className="bg-primaryBlack px-4">
        <div className="lg:flex  container mx-auto   justify-between items-center  gap-12 lg:pb-6 pb-8 pt-2 lg:pt-6">
          <p className="flex justify-center pb-4 lg:pb-0  text-white">
            {" "}
            © 2024 easydine All Rights Reserved.
          </p>
          {/* ///////////////for desktop.//////////////// */}
          <div className="text-center">
            <div className="flex justify-evenly items-center xl:gap-15 gap-5 lg:flex-1 ">
              <div className=" flex items-center xl:gap-x-13 gap-4">
                {navigationLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`text-[16px] font-bold  font-inter ${
                      item.name === "Follow us"
                        ? "text-white"
                        : ` ${item.id === 3 ? "" : "bg-white text-primaryBlack"}`
                    }  ${item.id === 3 ? "" : "p-2"} rounded-full`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center max-lg:mt-4 ">
            <div className="flex flex-wrap justify-center w-full lg:gap-x-4 gap-x-8 ">
              {staticLinks?.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={` text-[16px] font-semibold  ${
                    index === 2 ? "" : "border-r-2"
                  }  pr-4 border-[#2E2E2E]`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
        </div>
    //   </nav>
    // </header>
  );
};

export default Footer;
