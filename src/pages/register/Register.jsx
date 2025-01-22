import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaRegUser,
  FaRegEye,
  FaRegEyeSlash,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockLine } from "react-icons/ri";
import { AiOutlineGoogle, AiOutlineFacebook } from "react-icons/ai";
import React from "react";
import Images from "../../assets/images";
import Icons from "../../assets/icons";
import Button from "../../components/button";
import RegisterVideo from "../../assets/video/1192-143842659.mp4";

const Register = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(2);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const products = [
    { id: "restaurant", name: "Restaurant" },
    { id: "bar", name: "Bar" },
    { id: "cafe", name: "Cafe" },
    { id: "pizza", name: "Pizza" },
    { id: "bbq", name: "BBQ" },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "Recruiter",
      password: "",
      confirmPassword: "",
      businessType: "",
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      role: Yup.string().required("Role is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
      businessType: Yup.string().when("$isSecondStep", {
        is: true,
        then: Yup.string().required("Business type is required"),
      }),
      termsAccepted: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: async (values) => {
      if (activeStep === 1) {
        setActiveStep(2);
      } else {
        setIsSuccess(true);
        // Navigate to dashboard or show success message
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    },
  });

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <FaCheckCircle className="mx-auto text-6xl text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">
              Thank you for registering!
            </h2>
            <p className="text-gray-600 mb-4">
              Your account has been successfully created. Click below to
              continue to your dashboard.
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full p-3 bg-primaryBlue text-white rounded-lg font-semibold"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* Left Section */}
      <div className="lg:flex bg-cover bg-center w-full signup-background">
        <div className="signup-background w-full h-full flex flex-col items-center justify-center text-white relative">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
          >
            <source src={RegisterVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="signup-content z-10">
          <Link to={'/'}>
<img
              src={Images.easydineWhiteLogo}
              alt="Company Logo"
              className="w-80 h-32"
            />
          </Link>
            
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start justify-center bg-gradient-to-b from-white via-white to-white">
        <div className="mx-auto max-sm:mx-4 w-full max-w-md">
          {/* Stepper */}
          <div className="flex items-center mb-8">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeStep === 1 ? "bg-primaryBlue text-white" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <div
              className={`flex-1 h-1 mx-4 ${
                activeStep === 2 ? "bg-primaryBlue" : "bg-gray-200"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeStep === 2 ? "bg-primaryBlue text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
          </div>

          <h2 className="md:text-[48px] leading-10 text-xl mb-2">
            {activeStep === 1 ? "Create Your Account" : "Choose Your Product"}
          </h2>
          <p className="text-[#585858] font-medium mb-8 md:text-[16px] text-[14px] text-center mt-3">
            {activeStep === 1
              ? "Setting up an account takes less than one minute"
              : "Select your business type and plan"}
          </p>

          <form className="w-full" onSubmit={formik.handleSubmit}>
            {activeStep === 1 ? (
              // Step 1: Registration Form
              <>
                {/* First Name */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                    <FaRegUser size={22} color="black" />
                    <input
                      type="text"
                      name="firstName"
                      className="w-full outline-none bg-transparent text-base text-black placeholder:text-[#bdbdbd]"
                      placeholder="First name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                    <FaRegUser size={22} color="black" />
                    <input
                      type="text"
                      name="lastName"
                      className="w-full outline-none bg-transparent text-base text-black placeholder:text-[#bdbdbd]"
                      placeholder="Last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                    <MdOutlineEmail size={22} color="black" />
                    <input
                      type="email"
                      name="email"
                      className="w-full outline-none bg-transparent text-base text-black placeholder:text-[#bdbdbd]"
                      placeholder="Email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Password Fields */}
                <div className="mb-4 relative">
                  <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                    <RiLockLine size={22} color="black" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="w-full outline-none bg-transparent text-base text-black placeholder:text-[#bdbdbd]"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      className="cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </span>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-xs text-left mt-1 text-red-500">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div className="mb-4 relative">
                  <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                    <RiLockLine size={22} color="black" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="w-full outline-none bg-transparent text-base text-black placeholder:text-[#bdbdbd]"
                      placeholder="Confirm password"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaRegEye size={20} />
                      )}
                    </span>
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="text-xs text-left mt-1 text-red-500">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>
              </>
            ) : (
              // Step 2: Product Selection
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Business type/service *
                  </label>
                  <select
                    name="businessType"
                    value={formik.values.businessType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select business type</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.businessType &&
                    formik.errors.businessType && (
                      <p className="text-xs text-left mt-1 text-red-500">
                        {formik.errors.businessType}
                      </p>
                    )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium">Standard</h3>
                    {/* Add standard plan details */}
                    <p className="text-gray-600">
                      This plan includes 1 seat, 5 users, free support, and
                      access to basic features.
                    </p>
                    <Button
                      
                    >
                      Learn More
                    </Button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium">Premium</h3>
                    {/* Add premium plan details */}
                    <p className="text-gray-600">
                      This plan includes 5 seats, 20 users, priority support,
                      and access to all features.
                    </p>
                    <Button
                      
                      >
                        Learn More
                      </Button>
                  </div>
                </div>
              </>
            )}

            {/* Terms and Conditions */}
            <div className="mb-6">
              <label className="flex items-start gap-2 text-sm text-[#585858]">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  className="mt-1"
                  checked={formik.values.termsAccepted}
                  onChange={formik.handleChange}
                />
                <span>
                  Create an account to mean you are okay with our Terms &amp;
                  Conditions, Privacy Policy, default Notifications Settings.
                </span>
              </label>
              {formik.touched.termsAccepted && formik.errors.termsAccepted && (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.termsAccepted}
                </p>
              )}
            </div>

            {/* Social Login Options */}
            <div className="mt-6 text-center">
              {/* <p className="text-[#585858] mb-4">Or register with</p> */}
              {/* <div className="flex justify-center gap-4">
                <Icons.TiSocialLinkedin size={24} />
                <Icons.FaInstagram size={24} color="white" />
                <Icons.FaFacebook size={24} />
                <Icons.FaXTwitter size={24} />
              </div> */}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {activeStep === 2 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="w-1/2 p-3 border border-primaryBlue text-primaryBlue rounded-lg font-semibold"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`p-3 bg-primaryBlue text-white rounded-lg font-semibold ${
                  activeStep === 2 ? "w-1/2" : "w-full"
                }`}
              >
                {activeStep === 1 ? "Continue" : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
