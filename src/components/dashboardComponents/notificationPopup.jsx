import { useRef, useEffect } from 'react';
import { Bell, CheckCircle, XCircle, Dot } from 'lucide-react';

const notifications = [
  { id: 1, message: 'New Order #12345 Delivered.', time: '5 mins ago', type: 'success' },
  { id: 2, message: 'New Order #12345 Canceled.', time: '5 mins ago', type: 'error' },
  { id: 3, message: 'New Order #12345 Delivered.', time: '5 mins ago', type: 'success' },
  { id: 4, message: 'New Order #12345 Canceled.', time: '5 mins ago', type: 'error' },
];

const NotificationPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='absolute top-16 right-10 bg-white shadow-lg rounded-lg w-96'>
      <div className='flex justify-between items-center p-4 border-b'>
        <h2 className='text-lg font-semibold'>Notifications</h2>
        <button className='text-sm text-blue-500 hover:underline'>
          Mark all as read
        </button>
      </div>

      <div className='max-h-64 overflow-y-auto'>
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className={`flex items-center gap-3 p-3 border-b ${
              index === 0 ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
          >
            {notification.type === 'success' ? (
              <CheckCircle className='text-green-500' />
            ) : (
              <XCircle className='text-red-500' />
            )}
            <div className='flex-1'>
              <p className='font-semibold'>{notification.message}</p>
              <p className='text-sm text-gray-500'>{notification.time}</p>
            </div>
            {index === 0 && <Dot className='text-blue-500' size={50} />}
          </div>
        ))}
      </div>

      <div className='p-3 text-center'>
        <button className='text-blue-500 font-medium hover:underline'>
          See all recent Activity
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
