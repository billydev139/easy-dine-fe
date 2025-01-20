import { useState } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../../layouts/defaultLayout";
import HeroSection from "../homePage/heroSection";
import Icons from "../../assets/icons";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { renderButtonContent } from "../../components/renderLoader";
import { navigationLinks } from "../../components/footer";
import { Link } from "react-router-dom";
import EasyDineMap from "../../components/googlemap";

const ContactUs = () => {
  const [loading] = useState(false);

  return (
    <DefaultLayout>
      <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 lg:py-24 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-secondaryBlue to-primaryBlue container mx-auto text-white py-12 lg:px-14 px-4 rounded-lg shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-center text-[42px] font-bold pb-8">
            We’re Here to Help!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-12">
            {/* Right Section - Contact Information */}
            <motion.div
              className="rounded-lg text-white p-8 order-1 md:order-2 shadow-lg  to-gray-900"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icons.LuMapPin size={30} className="text-primary" />
                  <div>
                    <p className="text-base max-w-60 leading-relaxed">
                      1055 Arthur Ave, Elk Groot, 67. New Palmas, South Carolina.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icons.MdOutlinePhoneInTalk size={32} className="text-primary" />
                  <div>
                    <p className="text-base">+1 234 678 9108 99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icons.MdOutlineEmail size={29} className="text-primary" />
                  <div>
                    <p className="text-base">needhelp@company.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-4">
                    {navigationLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`text-[16px] font-bold font-inter transition-all hover:text-primary ${
                          item.name === "Follow us"
                            ? "hidden"
                            : "text-white bg-gray-700 hover:bg-primary"
                        } p-2 rounded-full`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <EasyDineMap />
            </motion.div>

            {/* Left Section - Contact Form */}
            <motion.div
              className="bg-white rounded-lg lg:p-12 p-6 order-2 md:order-1 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-8 items-center">
                  <InputField
                    type="text"
                    textColor="text-black"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor="bg-[#F6F6F6]"
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="First Name*"
                    className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50"
                    name="firstName"
                  />
                  <InputField
                    type="text"
                    textColor="text-black"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor="bg-[#F6F6F6]"
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="Last Name*"
                    className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50"
                    name="lastName"
                  />
                </div>
                <InputField
                  type="text"
                  textColor="text-black"
                  placeholderColor="placeholder:text-primaryGray"
                  backgroundcolor="bg-[#F6F6F6]"
                  borderShape="rounded-[10px]"
                  paddingY="py-3"
                  placeholder="Email address*"
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 w-full"
                  name="email"
                />
                <InputField
                  type="text"
                  textColor="text-black"
                  placeholderColor="placeholder:text-primaryGray"
                  backgroundcolor="bg-[#F6F6F6]"
                  borderShape="rounded-[10px]"
                  paddingY="py-3"
                  placeholder="Phone number*"
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 w-full"
                  name="phoneNumber"
                />
                <textarea
                  placeholder="Write a message"
                  rows={5}
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 pl-3 text-black focus:outline-none pr-4 w-full placeholder:text-primaryGray bg-[#F6F6F6] rounded-[10px] py-3"
                  name="message"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="button"
                    background="bg-primaryBlue"
                    className="text-white py-3 px-4 w-full rounded font-semibold hover:bg-white border hover:border hover:border-primaryBlue hover:text-primaryBlue transition-all"
                  >
                    {renderButtonContent(
                      loading,
                      "Send message",
                      <Icons.MdLocalPhone
                        size={21}
                        className="text-primaryGray hidden"
                      />
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
