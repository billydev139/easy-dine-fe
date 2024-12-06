import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Images from "../assets/images";
// import images from '../assets/images';
// import {  useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  //   { name: "Compare salaries", href: "/compare-salaries" },
  //   { name: "Recruiter area", href: "/add-salary" },
  //   { name: "Pages", href: "#" },
];
// const mobileNavigation = [
//   {
//     icons: <Icons.FaRegUser />,
//     name: "Login/Register",
//     href: "/login",
//   },
//   { icons: <Icons.IoHomeOutline />, name: "Home", href: "/" },
//   { icons: <Icons.IoSearchSharp />, name: "Find a job", href: "/find-job" },
//   {
//     icons: <Icons.HiMiniViewfinderCircle />,
//     name: "Explore companies",
//     href: "/explore-companies",
//   },
//   {
//     icons: <Icons.IoGitCompareOutline />,
//     name: "Compare salaries",
//     href: "/compare-salaries",
//   },
//   {
//     icons: <Icons.IoBriefcaseOutline />,
//     name: "Recruiter area",
//     href: "/add-salary",
//   },
//   { icons: <Icons.BsInfoSquare />, name: "About Us", href: "/about-us" },
//   {
//     icons: <Icons.MdOutlineContactEmergency />,
//     name: "Contact Us",
//     href: "/contact-us",
//   },

// ];
// const loginNavigation = [
//   { icons: <Icons.FaUser />, name: "Profile", href: "/profile" },
//   { icons: <Icons.MdEmail />, name: "Job Alert", href: "/job-alert" },
//   { icons: <Icons.FaRegBookmark />, name: "Saved Jobs", href: "/saved-jobs" },
//   {
//     icons: <Icons.FaRegAddressBook />,
//     name: "My Applications",
//     href: "/my-applications",
//   },
//   {
//     icons: <Icons.RiBuildingLine />,
//     name: "My Comapnies",
//     href: "/my-companies",
//   },

//   { icons: <Icons.RiLogoutBoxLine />, name: "Log Out", href: "/" },
// ];
const Header = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const { profile } = useSelector((state) => state?.profileSlice);
  //   console.log("🚀 ~ UserProfile ~ profile:", profile);

  //   useEffect(() => {
  //     dispatch(userProfile());
  //   }, [dispatch]);
  //   const isAuthenticated = useSelector(
  //     (state) => state?.LoginSlice?.user?.data?.success
  //   );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleColor = (item) => {
    setHeaderColor((prev) => (prev !== item ? item : ""));
    if (item === "Pages") {
      setDropdownOpen((prev) => !prev);
    } else {
      setDropdownOpen(false);
    }
  };
  //   let name = "samran nadeem";
  //   const initials = name
  //     .split(" ")
  //     .map((n) => n[0].toUpperCase())
  //     .join("");

  //   const handleLogout = () => {
  //     dispatch(LogoutReducer());
  //     navigate("/");
  //     setMobileMenuOpen(false);
  //   };

  return (
    <header className="bg-primaryBlack  shadow-md">
      <nav
        aria-label="Global"
        className="flex items-center container justify-between mx-auto py-6 px-4"
      >
        <div className=" flex justify-between items-center  gap-3 w-full">
          <div>
            <Link to="/" className="flex items-center">
              <img
                alt="Logo"
                src={Images.mainLogo}
                className="lg:h-15 h-12 -mt-2 w-auto"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-5 ">
            <div className="hidden lg:flex xl:gap-x-9 gap-4 justify-between relative ">
              {navigation.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={`${
                    headerColor == item.name ? " font-bold" : " font-medium "
                  } text-[18px] text-white`}
                  onClick={() => handleColor(item.name)}
                >
                  {item.name}
                </NavLink>
              ))}
              {/* Dropdown menu for "Pages" */}
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 rounded-md shadow-lg  bg-white z-10">
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
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-5 ">
            {/* {!isAuthenticated ? ( */}
            <div>
              <Link to={"/login"}>
                {" "}
                <div className="lg:flex items-center gap-x-2 hidden text-white bg-primaryBlue font-semibold py-3 px-12">
                  {/* <Icons.FaUser />  */}
                  Sign in
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-my-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 gap-2  lg:hidden"
              >
                {/* <span className="sr-only">Open main menu</span> */}
                {/* <Icons.FaBars className="h-6 w-6" /> */}
                bars
              </button>
            </div>
            {/* // ) : (
            //   <div className="flex items-center gap-2">
            //     <div className="flex items-center gap-2 relative py-2">
            //       <p className="h-2 w-2 bg-red-600 rounded-full absolute left-5 top-0"></p>
            //       <Icons.PiBellSimpleBold size={29} />
            //       <Icons.FaRegBookmark size={22} />
            //     </div>
            //     <button
            //       type="button"
            //       onClick={() => setMobileMenuOpen(true)}
            //       className="-my-2.5 inline-flex items-center justify-center rounded-[34px] p-2.5 text-gray-700 gap-2 outline-none border-2 "
            //     >
            //       <span className="sr-only">Open main menu</span>
            //       <div className="flex-shrink-0 ">
            //         <div className=" w-9 h-9 rounded-full bg-primaryBlack text-white flex items-center justify-center text-sm font-semibold capitalize">
            //           {profile?.data?.profilePic ? (
            //             <img
            //               src={profile?.data?.profilePic}
            //               alt="Uploaded Preview"
            //               className="w-9 h-9 rounded-full object-cover"
            //             />
            //           ) : (
            //             initials
            //           )}
            //         </div>
            //       </div>
            //       <Icons.FaBars aria-hidden="true" className="h-6 w-6" />
            //     </button>
            //   </div>
            // )} */}
          </div>
        </div>
      </nav>
      {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10   overflow-y-auto bg-white  py-8 lg:max-w-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 px-8"
            >
              <span className="sr-only">Close menu</span>
              <Icons.HiXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className=" flow-root ">
            <div className="mb-4 lg:hidden ">
              {mobileNavigation.map((item) => (
                <Link
                  key={`${item.name}-mobile`}
                  to={item.href}
                  className={`${
                    headerColor == item.name
                      ? "text-white bg-primaryBlue"
                      : "text-black"
                  } rounded-l py-2.5  text-base font-medium  flex items-center gap-2 px-8`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleColor(item.name);
                  }}
                >
                  {item.icons}
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={`${isAuthenticated?"":"hidden"} lg:border-none border-t pt-8`}>
              <div className="flex items-center gap-6 max-md:col-span-2  pb-12 px-8">
              
                <div className="flex-shrink-0 ">
                  <div className=" w-12 h-12 rounded-full bg-primaryBlack text-white flex items-center justify-center text-lg font-semibold capitalize">
                    {profile?.data?.profilePic ? (
                      <img
                        src={profile?.data?.profilePic}
                        alt="Uploaded Preview"
                        className="md:w-24 md:h-24 w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      initials
                    )}
                  </div>
                </div>
                <div className="">
                  <h3 className="text-base font-bold text-primaryBlack">
                    My Account
                  </h3>
                  <p className="text-sm font-medium text-primaryGray">
                    samrannadeem786@gmail.com
                  </p>
                </div>
              </div>
              {loginNavigation.map((item) => (
                <Link
                  key={`${item.name}-mobile`}
                  to={item.href}
                  className={`${
                    item.name === "Log Out"
                      ? "text-red-600"
                      : `${
                          headerColor == item.name
                            ? "text-white bg-primaryBlue"
                            : "text-black"
                        }`
                  }  rounded-l py-2.5  text-base font-medium  flex items-center gap-2 px-8`}
                  onClick={() => {
                    if (item.name === "Log Out") {
                      handleLogout(); 
                    } else {
                      handleColor(item.name); 
                      setMobileMenuOpen(false); 
                    }
                  }}
                >
                  {item.icons}

                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
    </header>
  );
};

export default Header;
