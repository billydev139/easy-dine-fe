import { Link } from "react-router-dom";
import Icons from "../assets/icons";

export const navigationLinks = [
  { name: <Icons.TiSocialLinkedin size={24}/>, href: "#", id: 1 },
  {
    name: <Icons.FaInstagram size={24} color="white" />,
    href: "#",
    id: 2,
  },
  { name: <Icons.FaFacebook size={24} />, href: "#", id: 3 },
  { name: <Icons.FaXTwitter size={24}/>, href: "#", id: 4 },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlack text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="text-center lg:text-left">
            <p className="text-sm lg:text-base">
              © 2025 Easydine. All Rights Reserved.
            </p>
            <p className="text-sm lg:text-base mt-2 lg:mt-0">
              <Link
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition"
              >
                Terms and Conditions
              </Link>
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex flex-col items-center">
            <p className="text-sm lg:text-base font-semibold mb-4 text-gray-400">
              Connect with us:
            </p>
            <div className="flex justify-center items-center gap-6">
              {navigationLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={` p-2
                  hover:bg-blue-900 hover:rounded-full
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

         
        
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
