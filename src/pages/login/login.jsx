import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginVideo from "../../assets/video/126334-735976704_small.mp4";
import Icons from "../../assets/icons";
import Images from "../../assets/images";
import { renderButtonContent } from "../../components/renderLoader";
import { LogInUserHandler } from "../../store/loginSlice/subAdminLoginSlice";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state?.login);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await dispatch(LogInUserHandler(values));
        if (response?.status === 201) {
          Swal.fire({
            title: "Success!",
            text:
              response?.response?.data?.message ||
              "You have successfully logged in!",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/dashboard");
          console.log("Login successful!");
        } else {
          Swal.fire({
            title: "Error!",
            text: error || "Login failed. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (err) {
        console.error("Error during login:", err);
        Swal.fire({
          title: "Error!",
          text:
            err?.message ||
            "An unexpected error occurred. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  });

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
            <source src={loginVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div className="signup-content z-10">
            <Link to={"/"}>
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
      <div
        style={{
          // backgroundImage: `url(${Images.loginGroup})`,
          backgroundSize: "cover",
          transition: " 1s ease-in-out",
        }}
        className="flex flex-col  items-start justify-center bg-gradient-to-b from-white via-white to-black"
      >
        <div className="mx-auto max-sm:mx-4">
          <h2 className="md:text-[48px] leading-10 text-xl  mb-2">
            Welcome to EasyDine
          </h2>
          <p className="text-[#585858] font-medium mb-8 md:text-[16px] text-[14px] text-center mt-3">
            Please enter your login details below!
          </p>
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                <Icons.MdOutlineEmail size={22} color="black" />
                <input
                  type="email"
                  name="email"
                  className="w-full outline-none text-base text-black placeholder:text-[#bdbdbd]"
                  placeholder="Enter your username or email here"
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
            <div className="mt-6 relative">
              <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3">
                <Icons.RiLockLine size={22} color="black" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full outline-none text-base text-black placeholder:text-[#bdbdbd] bg-transparent"
                  placeholder="Enter your password here"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.password}
                </p>
              )}
              <span
                className="absolute right-3 top-[25px] transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Icons.FaRegEyeSlash size={20} />
                ) : (
                  <Icons.FaRegEye size={20} />
                )}
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 text-gray-600">
              <p className="mr-2">Don't have an account?</p>
              <Link
                to="/register"
                className="text-sky-600  hover:underline transition-all duration-200"
              >
                Register
              </Link>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-primaryBlue text-white rounded-lg mt-10 font-semibold 2xl:text-xl text-base flex items-center justify-center gap-4"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
