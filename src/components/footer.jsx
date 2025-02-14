
import { Link } from "react-router-dom";
import Images from "../assets/images";
//import Icons from "../assets/icons";

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact-us" },
  { name: "Blog", href: "/blogs" },
];

export const supportLinks = [
  { name: "FAQs", href: "/faqs" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Features", href: "/features" },
  { name: "QR Code System", href: "/qr-code-system" },
  { name: "Support", href: "/support" },
];

// export const socialLinks = [
//   { icon: <Icons.FaFacebook size={24} />, href: "#" },
//   { icon: <Icons.FaInstagram size={24} />, href: "#" },
//   { icon: <Icons.TiSocialLinkedin size={24} />, href: "#" },
//   { icon: <Icons.FaXTwitter size={24} />, href: "#" },
// ];

const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Section - Brand Description */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
          <Link to="/" className="flex items-center">
              <img
                alt="Logo"
                src={Images.lightLogo}
                className="lg:h-15 h-12 -mt-2 w-auto"
              />
            </Link>
            {/* <Icons.FaRegGem className="text-blue-500" /> EASY DINE */}
          </h2>
          <p className="text-white-400 mt-2" >
            Enhance customer experiences, and boost revenue with our all-in-one
            restaurant management solution.
          </p>
        </div>

        {/* Middle Sections - Navigation */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-3">Home</h3> */}
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white-400 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* <h3 className="text-lg font-semibold mb-3">FAQs</h3> */}
          <ul className="space-y-2">
            {supportLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-white-400 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Subscribe & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-white-400 text-sm mb-4">
            Join our community to receive updates
          </p>
          <div className="flex bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-transparent text-white outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 text-white font-semibold">
              Subscribe
            </button>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex gap-4">
            {/* {socialLinks.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="p-2 rounded-full hover:bg-gray-600 transition"
              >
                {item.icon}
              </Link>
            ))} */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-white-400">
        <p>© 2025 EasyDine. All Rights Reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms-of-service" className="hover:text-white">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link to="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

