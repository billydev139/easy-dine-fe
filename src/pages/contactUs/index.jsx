import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import DefaultLayout from "../../layouts/defaultLayout";
import Icons from "../../assets/icons";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { navigationLinks } from "../../components/footer";
import { Link } from "react-router-dom";
import EasyDineMap from "../../components/googlemap";
import { submitContactForm } from "../../store/contactSlice/contactUsSlice";

const ContactUs = () => {
  const dispatch = useDispatch();
  const { isLoading, success, error } = useSelector((state) => state.contactUs);
  console.log(success, "success");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "First Name should contain only alphabets")
      .required("First Name is required"),
    
    lastName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Last Name should contain only alphabets")
      .required("Last Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phoneNumber: Yup.string()
      .matches(/^[0-9+\-]+$/, "Phone number can only contain numbers, '+' and '-'")
      .required("Phone number is required"),
          message: Yup.string().required("Message is required"),
        }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // console.log(values, "values for contactus form");
        const response = await dispatch(submitContactForm(values));
        // console.log(response, "response for contactus form");
        if (!response.error) {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
          resetForm();
        } else {
          Swal.fire({
            title: "Error!",
            text: response.error,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error("Error submitting contact form:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error submitting your message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

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
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-8 items-center">
                  <InputField
                    type="text"
                    textColor="text-black"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor="bg-[#F6F6F6]"
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="First Name*"
                    className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 text-black"
                    name="firstName" 
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.firstName}
                    </p>
                  )}
                  <InputField
                    type="text"
                    textColor="text-black"
                    placeholderColor="placeholder:text-primaryGray"
                    backgroundcolor="bg-[#F6F6F6]"
                    borderShape="rounded-[10px]"
                    paddingY="py-3"
                    placeholder="Last Name*"
                    className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 text-black"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>
                <InputField
                  type="text"
                  textColor="text-black"
                  placeholderColor="placeholder:text-primaryGray"
                  backgroundcolor="bg-[#F6F6F6]"
                  borderShape="rounded-[10px]"
                  paddingY="py-3"
                  placeholder="Email address*"
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 w-full text-black"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-left mt-1 text-red-500">
                    {formik.errors.email}
                  </p>
                )}
                <InputField
                  type="text"
                  textColor="text-black"
                  placeholderColor="placeholder:text-primaryGray"
                  backgroundcolor="bg-[#F6F6F6]"
                  borderShape="rounded-[10px]"
                  paddingY="py-3"
                  placeholder="Phone number*"
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 w-full text-black"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className="text-xs text-left mt-1 text-red-500">
                    {formik.errors.phoneNumber}
                  </p>
                )}
                <textarea
                  placeholder="Write a message"
                  rows={5}
                  className="border border-gray-300 focus:border-primary focus:ring focus:ring-primary/50 pl-3 text-black focus:outline-none pr-4 w-full placeholder:text-primaryGray bg-[#F6F6F6] rounded-[10px] py-3"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs text-left mt-1 text-red-500">
                    {formik.errors.message}
                  </p>
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    background="bg-primaryBlue"
                    className="text-white py-3 px-4 w-full rounded font-semibold hover:bg-white border hover:border hover:border-primaryBlue hover:text-primaryBlue transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send message"}
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
