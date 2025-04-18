import { useRef, useEffect } from 'react';
// import Icons from '../../assets/icons';
import { useNavigate } from 'react-router-dom';

const SettingsPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = event => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className='absolute top-12 right-4 w-60 bg-white shadow-lg rounded-md p-2 z-50'
    >
      <ul className='space-y-2 text-gray-700'>
        <li
          onClick={() => navigate('/dashboard/webpage')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Webpage
        </li>
        {/* <li
          onClick={() => navigate('/dashboard/restaurant-settings')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Restaurant Settings
        </li> */}
        <li
          onClick={() => navigate('/dashboard/user-profiles')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Users
        </li>
        <li
          onClick={() => navigate('/dashboard/templates-print')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Templates / Print
        </li>
        <li
          onClick={() => navigate('/dashboard/accounting')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Accounting
        </li>
        <li
          onClick={() => navigate('/dashboard/integration')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Integration
        </li>
        <li
          onClick={() => navigate('/dashboard/subscriptions')}
          className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold'
        >
          Subscription
        </li>
      </ul>
    </div>
  );
};

export default SettingsPopup;
