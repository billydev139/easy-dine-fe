import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import Icons from "../../assets/icons";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { renderButtonContent } from "../../components/renderLoader";
import Images from "../../assets/images";

const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading } = useSelector((state) => state?.LoginSlice);
const [loading]=useState(false)
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


//   const formik = useFormik({
//     initialValues: loginValues,
//     validationSchema: loginSchema,
//     onSubmit: async (values) => {
//       try {
//         dispatch(LogInUserHandler(values)).then((res) => {
//           console.log("🚀 ~ dispatch ~ res:", res);
//           if(res?.success){
//             showSuccessAlert(res?.message, "You have successfully logged in.");
//             navigate('/')
//           }else{
//             showErrorAlert(res?.message,res?.response?.data?.message)
//           }
//         });
//       } catch (error) {
//         console.error("Signup failed:", error);
//       }
//     },
//   });

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col  min-h-screen ">
        {/* Left Section */}
        <div
        //   slidesPerView={1}
        //   loop={true}
        //   autoplay={{ delay: 5000 }}
        //   modules={[Autoplay, Pagination]}
        //   onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className=" lg:flex lg:w-1/2 bg-cover bg-center w-full signup-background"
        >
        
              <div
                className="signup-background w-full h-full flex flex-col items-center justify-center text-white"
                style={{
                  backgroundImage: `url(${Images.login})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top left",
                  transition: "background-image 1s ease-in-out",
                }}
              >
                <div className="signup-content ">
                  <img
                    src={Images.easydineWhiteLogo}
                    alt="Company Logo"
                    className="w-80 h-32 z-10"
                  />
                </div>
              
              
              </div>
          
        </div>

        {/* Right Section */}
        <div className="flex flex-col   items-start justify-center  xl:max-w-xl lg:max-w-md sm:max-w-[70%] max-w-[90%] w-full lg:w-1/2 bg-white   mx-auto max-sm:mx-4 ">
          <h2 className="md:text-[48px]  leading-10   text-xl font-bold mb-2 ">
          Welcome to EasyDine
          </h2>
          <p className="text-[#585858] font-medium mb-8 md:text-[18px] text-[14px] ">
          Please enter your login details below!
          </p>

          {/* Form */}
          <form  className=" w-full">
            <div className="mb-6 relative">
              <InputField
                type="email"
                placeholder="Enter your username or email here"
                label={"Email Address"}
                firstIcon={<Icons.MdOutlineEmail size={18} className="absolute left-1 top-[44px]" />}
                borderColor={"border-[#CCCCCC]"}
                borderShape={"rounded"}
                placeholderColor={"placeholder:text-primaryGray"}
                name={"email"}
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              {/* {formik.touched.email && formik.errors.email ? (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.email}
                </p>
              ) : null} */}
            </div>
            <div className="mb-6 relative">
              <InputField
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password here"
                label={"Password"}
                borderColor={"border-[#CCCCCC]"}
                firstIcon={<Icons.IoIosLock size={20} className="absolute left-1 top-[42px]" />}
                borderShape={"rounded"}
                placeholderColor={"placeholder:text-primaryGray"}
                name={"password"}
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              {/* {formik.touched.password && formik.errors.password ? (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.password}
                </p>
              ) : null} */}
              <span
                className="absolute right-3 top-[50px] transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Icons.FaRegEyeSlash size={20} />
                ) : (
                  <Icons.FaRegEye size={20} />
                )}
              </span>
            </div>
            {/* <div className="flex items-center  justify-between mb-10">
              <div className="flex items-center ">
                <input type="checkbox" id="terms" className="mr-2 size-4" />
                <label
                  htmlFor="terms"
                  className="text-[#2E2E2E] md:text-sm font-medium text-xs "
                >
                  Remember me
                </label>
              </div>
              <Link to={"/forget-password"}>
                <p className="text-primaryBlue text-sm font-semibold underline">
                  Forgot Password?
                </p>
              </Link>
            </div> */}
            <Button
              type="submit"
              className="w-full p-6 bg-primaryBlue text-white rounded font-semibold text-base flex items-center justify-center gap-4"
            >
              {/* {loading ? (
                <Icons.LuLoader2 className="animate-spin " size={24} />
              ) : (
                <div className="flex items-center gap-4">
                  <p>Submit</p>
                  <Icons.FaArrowRightLong className="mt-[2px]" />
                </div>
              )} */}
              {renderButtonContent(loading, "Next",<Icons.MdOutlineEmail size={18} className="hidden" />)}
            </Button>
          </form>

          {/* Or Register with */}
          {/* <div className="mt-10 mx-auto w-full">
            <div className="flex items-center justify-center gap-4 ">
              <div className="border w-full"></div>
              <span className="text-gray-500 min-w-32 text-center text-sm">
                Or login with
              </span>
              <div className="border w-full"></div>
            </div>
            <div className="flex space-x-4 mt-6 justify-center">
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.google} alt="Google" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.linkedin} alt="linkedin" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.facebook} alt="facebook" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.x} alt="X" className="w-8 h-8" />
              </div>
            </div>
          </div> */}

          {/* Login Link */}
          {/* <p className="mt-36 text-sm text-gray-500 w-full text-center mb-16">
            Don&apos;t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-primaryBlue underline font-medium"
            >
              Signup
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
