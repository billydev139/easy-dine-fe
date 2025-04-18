import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Images from '../../assets/images';
import Icons from '../../assets/icons';

// Navigation items configuration
const navigationItems = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: <Icons.MdOutlineDashboard size={22} />,
  },
  {
    path: '/restaurant-settings',
    label: 'Restaurant Settings',
    icon: <Icons.HiOutlineBuildingStorefront size={22} />,
  },
  // {
  //   path: "/user-management",
  //   label: "User Management",
  //   icon: <Icons.SiNginxproxymanager size={22} />,
  // },
  {
    path: '/user-management',
    label: 'Advanced Statistics',
    icon: <Icons.SiNginxproxymanager size={22} />,
    submenu: [
      { path: '/advanced-statistics/overview', label: 'Overview' },
      { path: '/advanced-statistics/revenue-reports', label: 'Revenue Reports & KPI' },
      { path: '/user-management', label: 'Optimization Suggestions' },
    ],
  },
  {
    path: '/order-management',
    label: 'Order Management',
    icon: <Icons.GoChecklist size={22} />,
  },
  {
    path: '/manual-order',
    label: 'Manual Order Tool',
    icon: <Icons.LiaJediOrder size={22} />,
  },
  {
    path: '/inventory-management',
    label: 'Inventory Management',
    icon: <Icons.MdOutlineInventory2 size={22} />,
  },
  {
    path: '/menu-management',
    label: 'Menu Customization',
    icon: <Icons.MdMenu size={22} />,
  },
  {
    path: '/invoice-management',
    label: 'Invoice Customization',
    icon: <Icons.FaHandHoldingDollar size={22} />,
  },
  {
    path: '/modules-extensions',
    label: 'Modules & Extensions',
    icon: <Icons.TbSettingsCog size={22} />,
  },
  {
    path: '/qr-generator',
    label: 'QR Code Generator',
    icon: <Icons.BsQrCode size={22} />,
  },
  {
    path: '/menu-customization',
    label: 'Menu Customization',
    icon: <Icons.RiMenu2Line size={22} />,
  },
  {
    path: '/cashbook',
    label: 'Cashbook',
    icon: <Icons.RiMoneyDollarCircleLine size={22} />,
  },
  {
    path: '/reports',
    label: 'Reports',
    icon: <Icons.FaChartBar size={22} />,
  },
  {
    path: '/email-management',
    label: 'Email Management',
    icon: <Icons.MdOutlineMailOutline size={22} />,
  },
  {
    path: '/trash',
    label: 'Trash',
    icon: <Icons.TfiTrash size={22} />,
  },
  {
    path: '#',
    label: 'Settings',
    icon: <Icons.IoSettingsOutline size={22} />,
    submenu: [{ path: '/edit-restaurant', label: 'Edit Restaurant' }],
  },
];

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const theme = useSelector(state => state?.theme?.theme);
  const location = useLocation();
  const sidebar = useRef(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded') === 'true'
  );

  // Toggle dropdown for specific item
  const toggleDropdown = path => {
    setExpandedItems(prev => ({
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

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [setSidebarOpen]);

  // Handle ESC key
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode === 27) setSidebarOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [setSidebarOpen]);

  // Handle sidebar expansion
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    document.querySelector('body')?.classList.toggle('sidebar-expanded', sidebarExpanded);
  }, [sidebarExpanded]);

  // Common styles based on theme
  const getNavLinkStyles = isActive => {
    const baseStyles =
      'group relative list-none flex items-center gap-2.5 rounded-sm px-8 py-2.5 font-medium duration-300 ease-in-out ';
    const activeStyles =
      theme === 'dark' ? 'bg-secondaryBlue !text-white' : 'bg-[#F4F9FF] text-primaryBlue';
    const hoverStyles = 'hover:bg-graydark dark:hover:bg-meta-4';

    return ` ${baseStyles} ${isActive ? activeStyles : ''} ${hoverStyles} ${
      theme === 'dark' ? 'text-white ' : ' text-primaryBlue '
    }`;
  };

  const renderNavItem = item => {
    const isParentActive = location.pathname === item.path; // Exact match for parent
    const isAnyChildActive = item.submenu?.some(subItem =>
      location.pathname.startsWith(subItem.path)
    ); // Starts with for children
    const isActive = isParentActive || isAnyChildActive;

    if (item.submenu) {
      return (
        <li key={item.path}>
          <button
            onClick={() => toggleDropdown(item.path)}
            className={getNavLinkStyles(isActive)}
          >
            {item.icon}
            <span className='flex-1 ms-3 text-left'>{item.label}</span>
            <svg
              className={`w-3 h-3 transition-transform duration-300 ${
                expandedItems[item.path] ? 'rotate-180' : 'rotate-0'
              }`}
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>

          {expandedItems[item.path] && (
            <ul className='py-2 space-y-2 !list-none'>
              {item.submenu.map(subItem => {
                const isSubItemActive = location.pathname.startsWith(subItem.path); // Match submenu path
                return (
                  <li key={subItem.path} className='list-none'>
                    <Link to={subItem.path} className={getNavLinkStyles(isSubItemActive)}>
                      <span className='inline-block w-2 h-2 bg-black rounded-full mr-2 ' />{' '}
                      {/* Highlighted line */}
                      {subItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.path}>
        <NavLink to={item.path} className={({ isActive }) => getNavLinkStyles(isActive)}>
          {item.icon}
          {item.label}
        </NavLink>
      </li>
    );
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute shadow-2xl left-0 top-0 z-50 flex min-h-screen min-w-[20rem] flex-col overflow-y-hidden ${
        theme === 'dark' ? '!bg-primaryBlue !text-white' : '!bg-white text-primaryBlue'
      } mr-5 rounded-md duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 border-b'>
        <Link to='/dashboard' className='flex items-center px-5'>
          <img
            alt='Logo'
            src={theme === 'dark' ? Images.lightLogo : Images.mainLogo}
            className='lg:h-15 h-12 w-auto my-3'
          />
        </Link>
      </div>

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        <nav className='mt-5 lg:mt-9'>
          <ul className='mb-6 flex flex-col gap-1.5 text-base !text-black '>
            {navigationItems.map(renderNavItem)}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
