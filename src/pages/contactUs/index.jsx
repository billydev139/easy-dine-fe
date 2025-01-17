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
import Images from "../../assets/images";

const ContactUs = () => {
  const [loading] = useState(false);

  return (
    <DefaultLayout>
      <HeroSection
        width={"max-w-3xl"}
        height={"min-h-[442px]"}
        image={Images.contactus}
        heading="Contact us"
        para="We’d love to hear from you! Whether you have questions, need support, or want to share feedback, our team is here to assist. Reach out to us through the form below or via our provided contact details, and we’ll get back to you promptly."
      />

      <div className="bg-black lg:py-24 lg:px-8">
        <motion.div
          className="bg-secondaryBlue container mx-auto text-white py-12 lg:px-14 px-2 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white text-center text-[38px] font-semibold pb-8">
            We’re Here to Help!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-8">
            {/* Right Section - Contact Information */}
            <motion.div
              className="rounded-lg text-white p-8 order-1 md:order-2 shadow-lg"
              // whileHover={{ scale: 1.05 }}
            >
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Icons.LuMapPin size={25} className="text-primary" />
                  <div>
                    <p className="text-base max-w-60">
                      1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Icons.MdOutlinePhoneInTalk size={32} className="text-primary" />
                  <div>
                    <p className="text-base">+1 234 678 9108 99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Icons.MdOutlineEmail size={29} className="text-primary" />
                  <div>
                    <p className="text-base">needhelp@company.com</p>
                  </div>
                </div>
                <div className="flex items-center xl:gap-15 gap-5 lg:flex-1 ">
                  <div className="flex items-center xl:gap-x-13 gap-4">
                    {navigationLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`text-[16px] font-bold font-inter ${
                          item.name === "Follow us"
                            ? "hidden"
                            : `${item.id === 3 ? "" : "text-primaryBlack"}`
                        } ${
                          item.id === 3
                            ? "bg-inherit"
                            : "p-2 bg-white"
                        } rounded-full`}
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
              className="bg-white rounded-lg lg:p-12 p-6 order-2 md:order-1 shadow-lg"
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
                    className="border border-[#CCCCCC]"
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
                    className="border border-[#CCCCCC]"
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
                  className="border border-[#CCCCCC] w-full"
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
                  className="border border-[#CCCCCC] w-full"
                  name="phoneNumber"
                />
                <textarea
                  placeholder="Write a message"
                  rows={5}
                  className="border border-[#CCCCCC] pl-3 text-black focus:outline-none pr-4 w-full placeholder:text-primaryGray bg-[#F6F6F6] rounded-[10px] py-3"
                  name="message"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="button"
                    background="bg-primaryBlue"
                    className="text-white py-3 px-4 w-full rounded font-semibold hover:bg-white border hover:border hover:border-primaryBlue hover:text-primaryBlue transition"
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
