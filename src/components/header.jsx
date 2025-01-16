import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Images from "../assets/images";
import HeroSection from "../pages/homePage/heroSection";
// import images from '../assets/images';
// import {  useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Pricing", href: "#" },
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
    <header className="bg-transparent  ">
      <nav
        aria-label="Global"
        className="flex items-center container justify-between mx-auto py-6 px-4"
      >
        <div className=" flex justify-between items-center  gap-3 w-full">
          <div>
            <Link to="/" className="flex items-center">
              <img
                alt="Logo"
                src={Images.lightLogo}
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
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 text-[16px] font-semibold text-[#2E2E2E] hover:bg-gray-100 hover:rounded-md"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Pricing
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
                <div className="transition duration-150 ease-in-out lg:flex items-center gap-x-2 hidden text-white border border-secondaryBlue hover:bg-transparent hover:text-white hover:border-white bg-secondaryBlue rounded-lg font-semibold py-3 px-12">
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
            
          </div>
        </div>
      </nav>
    
    </header>
  );
};

export default Header;
