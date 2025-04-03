'use client';

import { FaCaretDown } from 'react-icons/fa';
import { useState } from 'react';

const MyProfile = ({ user }) => {
  console.log('🚀 ~ MyProfile ~ user:', user);

  const [allUsers, setUsers] = useState([
    {
      id: '1',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 1,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-1.png',
    },
    {
      id: '2',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 1,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-2.png',
    },
    {
      id: '3',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 1,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-3.png',
    },
  ]);

  const toggleUserActive = userId => {
    setUsers(
      allUsers.map(user =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  };

  const [currentPassword, setCurrentPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordReset = () => {
    // Add password reset logic here
    alert('Password reset functionality to be implemented');
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
  };

  // Access & Rights section - updated code
  const [role, setRole] = useState('Verkäufer');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState({
    orderNotifications: false,
    reservationAlerts: true,
    inventoryLowStockAlerts: false,
    newsletter: false,
    employeeShiftUpdates: false,
    restaurantNews: true,
    savedJobsReminder: false,
    menuChangeAlerts: false,
  });

  const toggleNotification = key => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const roles = ['Verkäufer', 'Manager', 'Administrator', 'Küchenpersonal'];

  return (
    <>
      <div className='my-6 px-6 py-9 bg-white rounded-[20px]'>
        <div key={user.id} className='bg-white border border-[#CCCCCC] rounded pb-2.5'>
          <div className='flex justify-between border-b border-[#CCCCCC] items-center px-5 mb-4'>
            <div className='flex items-center py-2.5'>
              <h3 className='text-lg font-semibold pr-5'>{user.name}</h3>
              <div>
                <button
                  onClick={() => toggleUserActive(user.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                    user.active ? 'bg-[#19DB8C]' : 'bg-gray-400'
                  } transition-colors focus:outline-none`}
                >
                  <span className='sr-only'>Toggle user active state</span>
                  <span
                    className={`${
                      user.active ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className='flex justify-between px-5 pb-5'>
            <div className='flex gap-x-36'>
              <div className='space-y-3'>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Customer Type</p>
                  <p className='text-[#696969] text-sm'>{user.customerType}</p>
                </div>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Date Of Birth</p>
                  <p className='text-[#696969] text-sm'>{user.dateOfBirth}</p>
                </div>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Telefonnummer</p>
                  <p className='text-[#696969] text-sm'>{user.telephone}</p>
                </div>
              </div>
              <div className='space-y-3'>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Customer Number</p>
                  <p className='text-[#696969] text-sm'>{user.customerNumber}</p>
                </div>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Role</p>
                  <p className='text-[#696969] text-sm'>{user.role}</p>
                </div>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Adresse</p>
                  <p className='text-[#696969] text-sm'>{user.address}</p>
                </div>
              </div>
              <div className='space-y-3 flex flex-col'>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Name</p>
                  <p className='text-[#696969] text-sm'>{user.name}</p>
                </div>
                <div>
                  <p className='text-base font-medium text-[#1A2042]'>Email Adresse</p>
                  <p className='text-[#696969] text-sm'>{user.email}</p>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <img
                src={user.profileImage || '/placeholder.svg'}
                alt={user.name}
                className='w-36 h-36 rounded-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* Password  */}
        <div className='border-[#CCCCCC] py-6'>
          {/* Password Reset Section */}
          <div className='bg-white border border-[#CCCCCC] rounded-lg items-center py-2.5 mb-4'>
            <h2 className='text-lg font-semibold border-b border-[#CCCCCC] px-5 pb-2.5 text-[#131313] mb-4'>
              Passwort
            </h2>
            <div className='px-5 mb-4'>
              <label className='block font-medium text-[#131313] mb-2'>
                Aktuelles Passwort
              </label>
              <input
                type='password'
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
                className='w-full px-3 py-2 border rounded-md outline-none'
                placeholder='********'
              />
            </div>

            <div className='px-5 pb-4 pt-2'>
              <button
                onClick={handlePasswordReset}
                className='bg-[#0075FF] text-white font-medium px-6 py-2 rounded-xl hover:bg-[#0055FF] transition-colors'
              >
                Zurücksetzen
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication Section */}
          <div className='bg-white border border-[#CCCCCC] rounded-lg py-2.5'>
            <h2 className='text-lg font-semibold border-b border-[#CCCCCC] px-5 pb-2.5 text-[#131313] mb-4'>
              2 Faktor-Authentifizierung
            </h2>
            <div className='flex items-center justify-between pl-5 pr-10'>
              <div>
                <p className='text-[#131313] font-medium mb-1.5'>
                  Set up two-factor authentication
                </p>
                <p className='text-sm font-medium text-[#696969] mb-7 pr-72'>
                  To be able to authorize transactions you need to scan the QR code with
                  your Google Authentication App and enter the verification code below.{' '}
                </p>
              </div>
              <label className='flex items-center cursor-pointer'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    className='sr-only'
                    checked={twoFactorEnabled}
                    onChange={handleTwoFactorToggle}
                  />

                  <div
                    className={`
                w-11 h-6 rounded-full inline-flex transition-colors
                ${twoFactorEnabled ? 'bg-green-500' : 'bg-gray-400'}
              `}
                  ></div>
                  <div
                    className={`
                absolute top-0.5 bg-white w-5 h-5 ml-0.5 rounded-full 
                shadow transition-transform 
                ${twoFactorEnabled ? 'transform translate-x-full' : ''}
              `}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Access Right - Updated Section */}
        <div className='bg-white border border-[#CCCCCC] rounded-lg'>
          <div className='px-5 py-3 border-b border-[#CCCCCC]'>
            <h2 className='text-lg font-semibold text-[#131313]'>Access & Rights</h2>
          </div>

          <div className='px-5 py-4'>
            <label className='block text-sm text-[#131313] font-medium mb-2'>
              Anstellungs Grad
            </label>
            <div className='relative'>
              <button
                className='w-[60%] flex items-center justify-between px-5 py-2 text-left bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{role}</span>
                <FaCaretDown />
              </button>

              {isDropdownOpen && (
                <div className='absolute z-10 w-[60%] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg'>
                  {roles.map(r => (
                    <div
                      key={r}
                      className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => {
                        setRole(r);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {r}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='border border-[#CCCCCC] rounded-lg overflow-hidden mx-5 mb-5'>
            <NotificationItem
              title='Order Notifications'
              description='Receive notifications for new orders'
              isEnabled={notifications.orderNotifications}
              onToggle={() => toggleNotification('orderNotifications')}
            />

            <NotificationItem
              title='Reservation Alerts'
              description='If you follow companies, you will receive email updates about these.'
              isEnabled={notifications.reservationAlerts}
              onToggle={() => toggleNotification('reservationAlerts')}
            />

            <NotificationItem
              title='Inventory Low Stock Alerts'
              description='Notify when stock is running low.'
              isEnabled={notifications.inventoryLowStockAlerts}
              onToggle={() => toggleNotification('inventoryLowStockAlerts')}
            />

            <NotificationItem
              title='Newsletter'
              description='Weekly newsletter with tips for your job search, applications and news about our platform.'
              isEnabled={notifications.newsletter}
              onToggle={() => toggleNotification('newsletter')}
            />

            <NotificationItem
              title='Employee Shift Updates'
              description='Receive notifications about shift changes'
              isEnabled={notifications.employeeShiftUpdates}
              onToggle={() => toggleNotification('employeeShiftUpdates')}
            />

            <NotificationItem
              title='Restaurant News'
              description='If you follow companies, you will receive email updates about these.'
              isEnabled={notifications.restaurantNews}
              onToggle={() => toggleNotification('restaurantNews')}
            />

            <NotificationItem
              title='Saved Jobs Reminder'
              description='Weekly reminder for saved job ads.'
              isEnabled={notifications.savedJobsReminder}
              onToggle={() => toggleNotification('savedJobsReminder')}
            />

            <NotificationItem
              title='Menu Change Alerts'
              description='Weekly newsletter with tips for your job search, applications and news about our platform.'
              isEnabled={notifications.menuChangeAlerts}
              onToggle={() => toggleNotification('menuChangeAlerts')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

function NotificationItem({ title, description, isEnabled, onToggle }) {
  return (
    <div className='px-4 py-4 border-b border-[#CCCCCC] last:border-b-0'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='font-semibold text-[#2E2E2E]'>{title}</h3>
          <p className='text-sm font-medium text-[#696969]'>{description}</p>
        </div>
        <button
          type='button'
          role='switch'
          aria-checked={isEnabled}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            isEnabled ? 'bg-[#19DB8C]' : 'bg-gray-400'
          }`}
          onClick={onToggle}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
              isEnabled ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default MyProfile;
