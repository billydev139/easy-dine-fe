import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Icons from '../../assets/icons';
// import SearchBar from "../searchBar";
import ThemeToggleButton from '../ThemeToggleButton';
import SettingsPopup from './settingsPopup';
import NotificationPopup from './notificationPopup';

/* eslint-disable react/prop-types */
const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const theme = useSelector(state => state?.theme?.theme);
  const [popupOpen, setPopupOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const popupRef = useRef(null);
  const notificationRef = useRef(null);

  return (
    <div
      className={`transition duration-300 flex cursor-auto justify-between items-center  shadow p-3 rounded-md ${
        theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '
      }`}
    >
      <div className='flex gap-2 '>
        <button
          aria-controls='sidebar'
          onClick={e => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className='z-10 block  '
        >
          <Icons.RiMenu4Line size={20} />
        </button>
        <h2 className='text-xl font-semibold'>Dashboard</h2>
      </div>
      <div className='flex cursor-pointer items-center space-x-4 relative'>
        {/* <select
          name=""
          id=""
          className="bg-[#1F1565] px-4 py-2 rounded-md shadow-md outline-none"
        >
          <option>Select Restaurant..</option>
        </select>
        <SearchBar /> */}
        <div className='mx-2'>
          <ThemeToggleButton />
        </div>
        <button className='relative' onClick={() => setPopupOpen(prev => !prev)}>
          <Icons.IoSettingsOutline size={22} />
        </button>
        <div ref={popupRef}>
          <SettingsPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
        {/* Notification Button */}
        <div className='flex items-center gap-2 relative py-2 border-r-2 border-white pr-4'>
          <p className='h-2 w-2 bg-red-600 rounded-full absolute left-4 top-2'></p>
          <button onClick={() => setNotificationOpen(prev => !prev)}>
            <Icons.PiBellSimpleBold size={30} />
          </button>
        </div>
        <div ref={notificationRef}>
          <NotificationPopup
            isOpen={notificationOpen}
            onClose={() => setNotificationOpen(false)}
          />
        </div>

        <div className=''>
          <p className=' text-base'>kristan</p>
          <p className='text-[10px]'>Admin</p>
        </div>
        <img
          src='https://via.placeholder.com/40'
          alt='User'
          className='rounded-full w-10 h-10'
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
