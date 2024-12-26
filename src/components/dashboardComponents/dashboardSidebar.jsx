/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Images from "../../assets/images";
import Icons from "../../assets/icons";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle state
  };
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute  shadow-2xl left-0 top-0 z-9999 flex min-h-screen min-w-[20rem] flex-col overflow-y-hidden bg-primaryBlue mr-5  rounded-md  duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className=" items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 border-b">
      <Link to="/dashboard" className="flex items-center px-5 ">
              <img
                alt="Logo"
                src={Images.mainLogo}
                className="lg:h-15 h-12  w-auto my-3"
              />
            </Link>

        {/* <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button> */}
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5  lg:mt-9  ">
          <div>
            {/* <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3> */}

            <ul className="mb-6 flex flex-col gap-1.5 text-base text-white">
              {/* <!-- Menu Item Dashboard --> */}

              <React.Fragment>
                <NavLink
                  to="/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5  font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("dashboard")) &&
                    "bg-[#F4F9FF] text-primaryBlue "
                  }`}
                >
                  <Icons.MdOutlineDashboard size={22} />
                  Dashboard
                </NavLink>
              </React.Fragment>

              {/* <li>
                <NavLink
                  // to="/post-a-job"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-6 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out  ${
                    pathname.includes("/post-a-job") && "bg-[#F4F9FF] text-primaryBlue"
                  }`}
                >
                  <Icons.HiOutlineBuildingStorefront size={22} />
                  Restaurant Management
                </NavLink>
              </li> */}
                 <li>
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className={`flex items-center w-full font-medium outline-none  text-base  px-8 py-2.5  transition duration-75 rounded-lg group  ${
                    pathname.includes("/restaurant-management") &&
                    "bg-[#F4F9FF] text-primaryBlue"
                  }`}
                  aria-expanded={isOpen}
                >
                  {/* Shopping cart icon */}
                  <Icons.HiOutlineBuildingStorefront size={22} />

                  <NavLink
                    to="/restaurant-management"
                    className={"flex-1 ms-3 text-left"}
                  >
                    {/* Dropdown Title */}
                    <span className="  rtl:text-right whitespace-nowrap">
                    Restaurant Management
                    </span>
                  </NavLink>
                  {/* Arrow icon */}
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Items */}
                <ul className={`py-2 space-y-2 ${isOpen ? "block" : "hidden"}`}>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 font-medium    transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 "
                    >
                   <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span> Add Restaurant
                    </a>
                  </li>
                  <li>
                    <Link
                      to={"/restaurant-management/manage-restaurant"}
                      className="flex items-center w-full p-2 font-medium  transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 "
                    >
                       <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span> Manage Restaurant
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink
                  to="/user-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5  font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("user-management")) &&
                    "bg-[#F4F9FF] text-primaryBlue "
                  }`}
                >
                  <Icons.SiNginxproxymanager size={22} />
                  User Management
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/order-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5  font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("order-management")) &&
                    "bg-[#F4F9FF] text-primaryBlue "
                  }`}
                >
                  <Icons.GoChecklist size={22} />
                  Order Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manual-order"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5  font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("manual-order")) &&
                    "bg-[#F4F9FF] text-primaryBlue "
                  }`}
                >
                 <Icons.LiaJediOrder size={22} />
                 Manual Order Tool
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inventory-management"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5  font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    (pathname === "/" || pathname.includes("inventory-management")) &&
                    "bg-[#F4F9FF] text-primaryBlue "
                  }`}
                >
                 <Icons.MdOutlineInventory2 size={22} />
                 Inventory Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/reels"
                  className={`group relative flex items-center gap-2.5 rounded-sm  px-8 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/reels") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                   <Icons.BsCoin size={22} />
                   Financials & Reporting
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/photos"
                  className={`group relative flex items-center gap-2.5 rounded-sm  px-8 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/photos") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <Icons.BiBadgeCheck size={22} />
                  Loyalty & Marketing
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/upload-photos"
                  className={`group relative flex items-center gap-2.5 rounded-sm  px-8 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/upload-photos") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                 <Icons.MdOutlineAnalytics size={22} />
                 Analytics & Insights
                </NavLink>
              </li>
              <li>
                <NavLink
                  // to="/reels"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-8 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("/reels") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                   <Icons.IoSettingsOutline size={22} />
                   Settings
                </NavLink>
              </li>
             
            </ul>
          </div>
        </nav>
       
      </div>
    </aside>
  );
};

export default DashboardSidebar;
