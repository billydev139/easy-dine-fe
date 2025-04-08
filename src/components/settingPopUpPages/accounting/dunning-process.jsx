'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DunningProcess() {
  const [timeframe, setTimeframe] = useState('10 Tage');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [message, setMessage] = useState(
    `Dear Kristian,

We hope this message finds you well. Our records indicate that payment for Invoice #1 in the amount of 10 CHF was due on 12-01-2024. As of today, we have not yet received the payment.

We kindly request you to process the payment at your earliest convenience to avoid any late charges. If the payment has already been made, please ignore this message.

For any concerns or questions, feel free to reach out.

Best regards,
Carlusion Finance department.`
  );

  const handleStepClick = step => {
    setActiveStep(step);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectTimeframe = time => {
    setTimeframe(time);
    setDropdownOpen(false);
  };

  return (
    <div className='bg-white rounded-lg shadow-sm'>
      <h1 className='text-xl font-medium text-gray-800 mb-6'>Dunning settings</h1>

      {/* Payment Deadline Section */}
      <div className='mb-8'>
        <h2 className='text-base font-medium text-gray-800 mb-2'>Payment Deadline</h2>
        <div className='text-sm text-gray-600 mb-2'>Period</div>

        <div className='relative'>
          <button
            className='flex items-center justify-between w-28 px-3 py-2 text-sm bg-blue-50 text-gray-700 rounded-md border border-blue-100'
            onClick={toggleDropdown}
          >
            <span>{timeframe}</span>
            <ChevronDown className='h-4 w-4 text-gray-500' />
          </button>

          {dropdownOpen && (
            <div className='absolute top-full left-0 mt-1 w-28 bg-white border border-gray-200 rounded-md shadow-md z-10'>
              <ul>
                {['5 Tage', '10 Tage', '15 Tage', '30 Tage'].map(time => (
                  <li
                    key={time}
                    className='px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer'
                    onClick={() => selectTimeframe(time)}
                  >
                    {time}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Payment Reminder Section */}
      <div className='mb-8'>
        <h2 className='text-base font-medium text-gray-800 mb-4'>Payment Reminder</h2>

        <div className='flex gap-x-3'>
          <button
            className={`relative pb-2 px-3 text-sm ${
              activeStep === 1 ? 'text-[#00925C] font-medium' : 'text-[#696969]'
            }`}
            onClick={() => handleStepClick(1)}
          >
            1. Reminder
            {activeStep === 1 && (
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-[#00925C]'></div>
            )}
          </button>

          <button
            className={`relative pb-2 px-2 text-sm ${
              activeStep === 2 ? 'text-[#00925C] font-medium' : 'text-[#696969]'
            }`}
            onClick={() => handleStepClick(2)}
          >
            2. Reminder
            {activeStep === 2 && (
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-[#00925C]'></div>
            )}
          </button>

          <button
            className={`relative pb-2 px-2 text-sm ${
              activeStep === 3 ? 'text-[#00925C] font-medium' : 'text-[#696969]'
            }`}
            onClick={() => handleStepClick(3)}
          >
            3. Reminder
            {activeStep === 3 && (
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-[#00925C]'></div>
            )}
          </button>

          <button
            className={`relative pb-2 px-2 text-sm ${
              activeStep === 4 ? 'text-[#00925C] font-medium' : 'text-[#696969]'
            }`}
            onClick={() => handleStepClick(4)}
          >
            4. Collection Step
            {activeStep === 4 && (
              <div className='absolute bottom-0 left-0 w-full h-0.5 bg-green-600'></div>
            )}
          </button>
        </div>
      </div>

      {/* Automated Message Section */}
      <div className='mb-8'>
        <h2 className='text-base font-medium text-gray-800 mb-4'>Automated Message</h2>

        <textarea
          className='w-full h-64 p-4 text-sm text-gray-700 border border-[#CCCCCC] rounded outline-none'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </div>

      {/* Action Buttons */}
      <div className='flex justify-end gap-3'>
        <button className='px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors'>
          Save
        </button>

        <button className='px-6 py-2 bg-white text-gray-700 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors'>
          Cancel
        </button>
      </div>
    </div>
  );
}
