import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Images from "../../assets/images";
import Icons from "../../assets/icons";

// Navigation items configuration
const navigationItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <Icons.MdOutlineDashboard size={22} />,
  },
  {
    path: "/restaurant-management",
    label: "Restaurant Management",
    icon: <Icons.HiOutlineBuildingStorefront size={22} />,
    submenu: [
      { path: "#", label: "Add Restaurant" },
      { path: "/restaurant-management/manage-restaurant", label: "Manage Restaurant" },
    ],
  },
  {
    path: "/user-management",
    label: "User Management",
    icon: <Icons.SiNginxproxymanager size={22} />,
  },
  {
    path: "/order-management",
    label: "Order Management",
    icon: <Icons.GoChecklist size={22} />,
  },
  {
    path: "/manual-order",
    label: "Manual Order Tool",
    icon: <Icons.LiaJediOrder size={22} />,
  },
  {
    path: "/inventory-management",
    label: "Inventory Management",
    icon: <Icons.MdOutlineInventory2 size={22} />,
  },
  {
    path: "/menu-management",
    label: "Menu Customization",
    icon: <Icons.MdMenu size={22} />,
  },
  {
    path: "/financials",
    label: "Financials & Reporting",
    icon: <Icons.BsCoin size={22} />,
  },
  {
    path: "/loyalty",
    label: "Loyalty & Marketing",
    icon: <Icons.BiBadgeCheck size={22} />,
  },
  {
    path: "/analytics",
    label: "Analytics & Insights",
    icon: <Icons.MdOutlineAnalytics size={22} />,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: <Icons.IoSettingsOutline size={22} />,
  },
];

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const theme = useSelector((state) => state?.theme?.theme);
  const location = useLocation();
  const sidebar = useRef(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem("sidebar-expanded") === "true"
  );

  // Toggle dropdown for specific item
  const toggleDropdown = (path) => {
    setExpandedItems((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  // Handle click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || sidebar.current.contains(target)) return;
      setSidebarOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [setSidebarOpen]);

  // Handle ESC key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode === 27) setSidebarOpen(false);
    };

    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [setSidebarOpen]);

  // Handle sidebar expansion
  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    document.querySelector("body")?.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  // Common styles based on theme
  const getNavLinkStyles = (isActive) => {
    const baseStyles = "group relative list-none	 flex items-center gap-2.5 rounded-sm px-8 py-2.5 font-medium duration-300 ease-in-out ";
    const activeStyles = theme === 'dark' 
      ? "bg-secondaryBlue !text-white"
      : "bg-[#F4F9FF] text-primaryBlue";
    const hoverStyles = "hover:bg-graydark dark:hover:bg-meta-4";
    
    return ` ${baseStyles} ${isActive ? activeStyles : ''} ${hoverStyles} ${theme === 'dark' ? 'text-white ' : ' text-primaryBlue '}`;
  };

  const renderNavItem = (item) => {
    const isActive = location.pathname.includes(item.path);
    
    if (item.submenu) {
      return (
        <li key={item.path}>
          <button
            onClick={() => toggleDropdown(item.path)}
            className={getNavLinkStyles(isActive)}
          >
            {item.icon}
            <span className="flex-1 ms-3 text-left">{item.label}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                expandedItems[item.path] ? "rotate-180" : "rotate-0"
              }`}
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
          
          {expandedItems[item.path] && (
            <ul className="py-2 space-y-2 !list-none">
              {item.submenu.map((subItem) => (
                <li key={subItem.path} className="list-none">
                  <Link
                    className={getNavLinkStyles(isActive)}
                    to={subItem.path}
                    // className="flex items-center w-full p-2 font-medium transition duration-75 rounded-lg pl-11 group hover:bg-gray-700"
                  >
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 " />
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.path}>
        <NavLink
          to={item.path}
          className={({ isActive }) => getNavLinkStyles(isActive)}
        >
          {item.icon}
          {item.label}
        </NavLink>
      </li>
    );
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute shadow-2xl left-0 top-0 z-9999 flex min-h-screen min-w-[20rem] flex-col overflow-y-hidden ${
        theme === 'dark' ? '!bg-primaryBlue !text-white' : '!bg-white text-primaryBlue'
      } mr-5 rounded-md duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 border-b">
        <Link to="/dashboard" className="flex items-center px-5">
          <img
            alt="Logo"
            src={ theme === 'dark' ? Images.lightLogo: Images.mainLogo}
            className="lg:h-15 h-12 w-auto my-3"
          />
        </Link>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 lg:mt-9">
          <ul className="mb-6 flex flex-col gap-1.5 text-base !text-black ">
            {navigationItems.map(renderNavItem)}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;