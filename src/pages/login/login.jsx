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
      <div className="flex lg:flex-row flex-col  min-h-screen ">
        {/* Left Section */}
        <div className=" lg:flex lg:w-1/2 bg-cover bg-center w-full signup-background">
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
          <form className=" w-full">
            <div className="mb-6 relative">
              <InputField
                type="email"
                placeholder="Enter your username or email here"
                label={"Email Address"}
                PaddingX={"px-12"}
                firstIcon={
                  <Icons.MdOutlineEmail
                    size={18}
                    className="absolute left-3 top-[44px] "
                  />
                }
                borderColor={"border-[#CCCCCC]"}
                borderShape={"rounded-xl"}
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
                PaddingX={"px-12"}
                borderColor={"border-[#CCCCCC]"}
                firstIcon={
                  <Icons.RiLockLine
                    size={20}
                    className="absolute left-3 top-[42px]"
                  />
                }
                borderShape={"rounded-xl"}
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

            <Button
              type="submit"
              className="w-full p-6 bg-primaryBlue text-white rounded font-semibold text-base flex items-center justify-center gap-4"
            >
              {renderButtonContent(
                loading,
                "Next",
                <Icons.MdOutlineEmail size={18} className="hidden" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
