import { useState } from "react";
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
  // const sections = [
  //     {
  //       title: 'Who We Are',
  //       description:
  //         'EasyDine is a cutting-edge restaurant management platform designed to simplify and enhance every aspect of your operations. From seamless order management to advanced analytics, we’re dedicated to helping restaurants thrive in a competitive market.',
  //       image: Images.who,
  //     },
  //     {
  //       title: 'Our Mission',
  //       description:
  //         'To simplify restaurant management and elevate the dining experience with intelligent, user-friendly solutions. We believe in enabling restaurants to focus on what they do best: creating memorable dining experiences while leaving the management complexities to us.',
  //       image: Images.mission,
  //     },
  //     {
  //       title: 'Our Vision',
  //       description:
  //         'To transform the restaurant industry by integrating cutting-edge technology into everyday operations.',
  //       image: Images.vision,
  //     },
  //   ];
  return (
    <DefaultLayout>
      <HeroSection
        width={"max-w-3xl"}
        height={"min-h-[442px]"}
        heading="Contact us"
        para="We’d love to hear from you! Whether you have questions, need support, or want to share feedback, our team is here to assist. Reach out to us through the form below or via our provided contact details, and we’ll get back to you promptly."
      />
      <div className="bg-black py-24 px-8">
        <div className="bg-secondaryBlack container mx-auto text-white py-12 px-14 rounded-lg">
          <p className="text-white text-center text-[38px] font-semibold pb-8">
            We’re Here to Help!
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-8">
            {/* Right Section - Contact Information */}
            <div className="bg-secondaryBlack rounded-lg text-white p-8 order-1 md:order-2">
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <Icons.LuMapPin size={25} className="" />

                  <div>
                    <p className=" text-base max-w-60">
                      1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Icons.MdOutlinePhoneInTalk size={32} />

                  <div>
                    <p className=" text-base">+1 234 678 9108 99</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ">
                  <Icons.MdOutlineEmail size={29} />

                  <div>
                    <p className=" text-base">needhelp@company.com</p>
                  </div>
                </div>
                
            <div className="flex  items-center xl:gap-15 gap-5 lg:flex-1 ">
              <div className=" flex items-center xl:gap-x-13 gap-4">
                {navigationLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className={`text-[16px] font-bold  font-inter ${
                      item.name === "Follow us"
                        ? "hidden"
                        : ` ${item.id === 3 ? "" : " text-primaryBlack"}`
                    }  ${item.id === 3 ? "bg-inherit" : "p-2 bg-white"} rounded-full`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          
              </div>
              <EasyDineMap/>
            </div>

            {/* Left Section - Contact Form */}
            <div className="bg-white rounded-lg p-12 order-2 md:order-1">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-8 items-center w-full  bg-white  focus:outline-none  ">
                  <InputField
                    type="text"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor={"bg-[#F6F6F6]"}
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="First Name*"
                    className="border border-[#CCCCCC]"
                    name="email"
                    // value={formik?.values?.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                  <InputField
                    type="text"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor={"bg-[#F6F6F6]"}
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="Last Name*"
                    className="border border-[#CCCCCC]"
                    name="email"
                    // value={formik?.values?.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                  />
                </div>

                <div>
                  <div className="grid grid-cols-1 items-center  w-full   focus:outline-none  rounded-sm">
                    {/* <Icons.MdEmail size={21} className="text-primaryGray" /> */}
                    <InputField
                      type="text"
                      width
                      placeholderColor="placeholder:text-primaryGray"
                      backgroundcolor={"bg-[#F6F6F6]"}
                      borderShape="rounded-[10px]"
                      paddingY="py-3"
                      placeholder="Email address"
                      className="border border-[#CCCCCC] w-full"
                      name="email"
                      // value={formik?.values?.email}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                    />
                  </div>
                  {/* {formik?.touched?.email && formik?.errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik?.errors?.email}
                  </p>
                )} */}
                </div>
                <div className="">
                  <div className="grid grid-cols-1 items-center  bg-white  focus:outline-none  rounded-sm">
                    {/* <Icons.MdLocalPhone size={21} className="text-primaryGray" /> */}
                    <InputField
                      type="text"
                      placeholderColor="placeholder:text-primaryGray"
                      backgroundcolor={"bg-[#F6F6F6]"}
                      borderShape="rounded-[10px]"
                      paddingY="py-3"
                      placeholder="Phone number"
                      className="w-full border  border-[#CCCCCC]"
                      name="phoneNumber"
                      // value={formik?.values?.phoneNumber}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                    />
                  </div>
                  {/* {formik?.touched?.phoneNumber &&
                  formik?.errors?.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik?.errors?.phoneNumber}
                    </p>
                  )} */}
                </div>
                <div>
                  <textarea
                    type="textarea"
                    // backgroundcolor={"bg-[#F6F6F6]"}
                    // placeholderColor="placeholder:text-primaryGray"
                    // borderShape="rounded-sm"
                    // paddingY="py-4"
                    placeholder="Write a message"
                    rows={5}
                    className="border border-[#CCCCCC] pl-3  focus:outline-none pr-4  w-full placeholder:text-primaryGray bg-[#F6F6F6] rounded-[10px] py-3"
                    name="message"
                    //   value={formik?.values?.message}
                    //   onChange={formik.handleChange}
                    //   onBlur={formik.handleBlur}
                  />
                  {/* {formik?.touched?.message && formik?.errors?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik?.errors?.message}
                  </p>
                )} */}
                </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};
export default ContactUs;
