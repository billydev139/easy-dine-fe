import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Images from "../assets/images";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact-us" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faqs" },
  
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-transparent">
      <nav
        aria-label="Global"
        className="flex items-center container justify-between mx-auto py-6 px-4"
      >
        <div className="flex justify-between items-center gap-3 w-full">
          <div>
            <Link to="/" className="flex items-center">
              <img
                alt="Logo"
                src={Images.lightLogo}
                className="lg:h-15 h-12 -mt-2 w-auto"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="hidden lg:flex xl:gap-x-9 gap-4 justify-between relative">
              {navigation.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[18px] text-white font-medium ${
                      isActive
                        ? "border-b-4 pb-2 border-blue-900 font-bold"
                        : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              {/* Dropdown menu for "Pages" */}
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 rounded-md shadow-lg bg-white z-10">
                  <Link
                    to="/user-home"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    User Home
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100 hover:rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100 hover:rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/faqs"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100 hover:rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Link to={"/login"}>
                <div className="transition duration-150 ease-in-out lg:flex items-center gap-x-2 hidden text-white border border-secondaryBlue hover:bg-transparent hover:text-white hover:border-white bg-secondaryBlue rounded-lg font-semibold py-3 px-12">
                  Sign in
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-my-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 gap-2 lg:hidden"
              >
                bars
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
