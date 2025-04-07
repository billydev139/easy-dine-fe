import { CircleDot, Search } from 'lucide-react';
import { useState } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';
import { IoIosPricetags } from 'react-icons/io';

const RatesTab = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 'CHF 59.90',
      features: [
        'Digital Menu With QR Code',
        'Ordering And Payment Processing',
        'Basic Inventory Management',
        'Email Support',
        'Up To 50 Products',
      ],
      buttonStyle:
        'bg-gradient-to-b from-[#FFFFFF14] border border-[#FFFFFF1A] rounded-xl hover:bg-gradient-to-t from-[#FFFFFF14] text-white',
    },
    {
      name: 'Business Plan',
      price: 'CHF 99.90',
      features: [
        'All Basic Features',
        'Employee Management',
        'Live Table Plan',
        'Advanced Analytics',
        'Multilingual Menus',
        'Up To 250 Products',
        'Priority Support',
      ],
      buttonStyle:
        'bg-gradient-to-t from-[#B1B1B1] to-[#FFFFFF] hover:bg-gradient-to-b from-[#B1B1B1] rounded-xl text-[#131313]',
    },
    {
      name: 'Enterprise Plan',
      price: 'CHF 189.90',
      features: [
        'All Business Features',
        'Multi-Location Management',
        'Unlimited Products',
        'AI-Powered Menu Optimization',
        '24/7 Premium Support',
        'Dropbox Access: 1 Year',
        'Customizations Available',
      ],
      buttonStyle:
        'bg-gradient-to-b from-[#FFFFFF14] border border-[#FFFFFF1A] rounded-xl hover:bg-gradient-to-t from-[#FFFFFF14] text-white',
    },
  ];

  const [selectedAddons, setSelectedAddons] = useState({
    'Online Reservations': true,
    'Menu Customization': true,
    'Table Management': true,
    'Inventory Tracking': false,
    'Customer Order History': false,
    'Staff Scheduling': true,
    'Delivery & Takeaway Module': false,
    'Expense & Profit Reports': true,
  });

  const handleAddonChange = addon => {
    setSelectedAddons({
      ...selectedAddons,
      [addon]: !selectedAddons[addon],
    });
  };

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {plans.map(plan => (
          <div
            key={plan.name}
            className='bg-[#101625] rounded-lg p-6 text-white flex flex-col'
          >
            <div className='mb-4'>
              <div className='inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white mb-4'>
                <div className='w-5 h-5 rounded-full bg-white'></div>
              </div>
              <h2 className='text-xl font-semibold mb-4'>{plan.name}</h2>
              <div className='mb-6'>
                <span className='text-3xl font-bold'>{plan.price}</span>
                <span className='text-white'>/month</span>
              </div>
            </div>
            <button
              className={`${plan.buttonStyle} py-3 rounded-md font-bold mb-6 transition-colors`}
            >
              Get Started
            </button>
            <div className='border-t border-gray-700 pt-6 mb-4'>
              <p className='font-medium mb-4'>What you will get</p>
              <ul className='space-y-3'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='mr-3 mt-1 text-[#FFFFFFCC] flex items-center justify-center flex-shrink-0'>
                      <FaRegCircleCheck />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className='px-4 py-14'>
        <h1 className='text-2xl font-semibold text-[#131313]'>Add-on packages</h1>
        {/* Search Bar */}
        <div className='relative mb-6'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Search className='h-5 w-5 text-gray-400' />
          </div>
          <input
            type='text'
            placeholder='Search for packages'
            className='pl-10 w-full border border-[#E0E0E0] rounded-lg my-5 py-2 px-4 outline-none'
          />
        </div>
        {/* Add-on Packages */}
        <div className='grid md:grid-cols-2 gap-40 mb-8'>
          <div className='space-y-4'>
            {Object.entries(selectedAddons)
              .slice(0, 4)
              .map(([addon, isSelected]) => (
                <div key={addon} className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id={`left-${addon}`}
                      checked={isSelected}
                      onChange={() => handleAddonChange(addon)}
                      className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor={`left-${addon}`}
                      className='ml-2 text-sm font-medium text-[#131313]'
                    >
                      {addon}
                    </label>
                  </div>
                  <span className='text-sm font-medium'>100 CHF</span>
                </div>
              ))}
          </div>
          <div className='space-y-4'>
            {Object.entries(selectedAddons)
              .slice(4, 8)
              .map(([addon, isSelected]) => (
                <div key={addon} className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id={`right-${addon}`}
                      checked={isSelected}
                      onChange={() => handleAddonChange(addon)}
                      className='h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500'
                    />
                    <label
                      htmlFor={`right-${addon}`}
                      className='ml-2 text-sm font-medium text-gray-900'
                    >
                      {addon}
                    </label>
                  </div>
                  <span className='text-sm font-medium'>100 CHF</span>
                </div>
              ))}
          </div>
        </div>
        {/* Tariff Section */}
        <div className='mb-20'>
          <h2 className='text-xl font-bold text-[#131313] mb-4'>
            Your tariff at EasyDine
          </h2>
          <div className='border border-[#C1C1C1CC] bg-gradient-to-r from-[#FFFFFF00] to-[#0075FF] rounded-lg p-6'>
            <div className='flex items-center mb-6'>
              <CircleDot className='h-6 w-6 text-[#0075FF] mr-3' />
              <span className='text-xl font-semibold text-[#131313]'>Standard Plan</span>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <IoIosPricetags className='h-5 w-5 text-[#0075FF] mr-3' />
                  <span className='text-xl font-medium'>Package Price:</span>
                </div>
                <span className='text-xl font-bold text-white'>89.90 CHF</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <FiCalendar className='h-5 w-5 text-[#0075FF] mr-3' />
                  <span className='text-xl font-medium'>Monthly Price:</span>
                </div>
                <span className='text-xl font-bold text-white'>21.90 CHF</span>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className='flex justify-end items-center gap-5'>
          <button className='bg-[#0075FF] hover:bg-[#0055FF] text-white font-medium py-2 px-11 rounded-xl'>
            Update
          </button>
          <button className='border border-[#696969] text-[#696969] font-medium py-2 px-11 rounded-xl'>
            Cancel
          </button>
        </div>
        <p className='text-base text-[#131313] mt-2.5 mr-[132px] text-end'>
          * Prices excluding taxes
        </p>
      </div>
    </>
  );
};

export default RatesTab;
