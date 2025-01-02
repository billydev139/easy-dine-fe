import { useState } from "react";
import Icons from "../../assets/icons";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import { renderButtonContent } from "../../components/renderLoader";
import Images from "../../assets/images";

const Login = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { loading } = useSelector((state) => state?.LoginSlice);
  const [loading] = useState(false);
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
      <div className="grid lg:grid-cols-2  min-h-screen ">
        {/* Left Section */}
        <div className=" lg:flex bg-cover bg-center w-full signup-background">
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
        <div
          style={{
            backgroundImage: `url(${Images.loginGroup})`,
            backgroundSize: "cover",
            
           

            transition: "background-image 1s ease-in-out",
          }}
          className="flex flex-col items-start justify-center  "
        >
          <div className="mx-auto max-sm:mx-4">
            <h2 className="md:text-[48px]  leading-10   text-xl font-bold mb-2 ">
              Welcome to EasyDine
            </h2>
            <p className="text-[#585858] font-medium mb-8 md:text-[16px] text-[14px] ">
              Please enter your login details below!
            </p>
            <form className=" w-full">
              <div className="">
                {/* {formik.touched.email && formik.errors.email ? (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.email}
                </p>
              ) : null} */}
                <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3 ">
                  <Icons.MdOutlineEmail size={22} color="black" />
                  <input
                    type="email"
                    name="email"
                    className="w-full outline-none text-base text-black placeholder:text-[#bdbdbd]"
                    placeholder="Enter your username or email here"
                  />
                </div>
              </div>
              <div className="mt-6 relative">
                <div className="flex items-center gap-4 border border-[#CCCCCC] rounded-lg p-3 ">
                  <Icons.RiLockLine size={22} color="black" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="email"
                    className="w-full outline-none text-base text-black placeholder:text-[#bdbdbd]"
                    placeholder="Enter your password here"
                  />
                </div>
                {/* {formik.touched.password && formik.errors.password ? (
                <p className="text-xs text-left mt-1 text-red-500">
                  {formik.errors.password}
                </p>
              ) : null} */}
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

              <button
                type="submit"
                className="w-full p-3 bg-primaryBlue text-white rounded-lg mt-10 font-semibold 2xl:text-xl text-base flex items-center justify-center gap-4"
              >
                {renderButtonContent(
                  loading,
                  "Next",
                  <Icons.MdOutlineEmail size={18} className="hidden" />
                )}
              </button>
            </form>
          </div>

          {/* Form */}
        </div>
      </div>
    </div>
  );
};

export default Login;
