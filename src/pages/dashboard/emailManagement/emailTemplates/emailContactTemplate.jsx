import { useState } from 'react';

export default function EmailContactTemplate() {
  const [email, setEmail] = useState('billing@easydine.com');
  const [phone, setPhone] = useState('(555)123-4567');
  const [countryCode, setCountryCode] = useState('+1');
  const [addToPrint, setAddToPrint] = useState(true);
  const [addOpeningLine, setAddOpeningLine] = useState(true);
  const [activeTab, setActiveTab] = useState('contact');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const handleSave = () => {};

  return (
    <div className='p-4'>
      {/* Tabs */}
      <div className='flex mb-6'>
        <button
          className={`pb-2 px-4 text-lg font-bold ${
            activeTab === 'closing'
              ? 'text-[#00925C] border-b-2 border-[#00925C]'
              : 'text-gray-500'
          }`}
          onClick={() => handleTabChange('closing')}
        >
          Closing
        </button>

        <button
          className={`pb-2 px-4 text-lg font-bold ${
            activeTab === 'contact'
              ? 'text-[#00925C] border-b-2 border-[#00925C]'
              : 'text-gray-500'
          }`}
          onClick={() => handleTabChange('contact')}
        >
          Contact Information
        </button>
      </div>

      {/* Form */}
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label htmlFor='email' className='block text-[#131313] text-base font-semibold'>
            Email
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full p-3 bg-[#EEF5FF] rounded-xl border border-[#9EC3FF] outline-none'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='phone' className='block text-[#131313] text-base font-semibold'>
            Phone
          </label>
          <div className='flex'>
            <div className='relative'>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                className='h-full py-3 pl-3 pr-8 bg-blue-50 rounded-l-lg border border-[#9EC3FF] outline-none appearance-none'
              >
                <option value='+1'>+1</option>
                <option value='+44'>+44</option>
                <option value='+91'>+91</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
                <svg
                  className='w-4 h-4 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
              </div>
            </div>
            <input
              type='tel'
              id='phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className='w-full p-3 bg-blue-50 rounded-r-lg border border-[#9EC3FF] border-l-0 outline-none'
            />
          </div>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='addToPrint'
            checked={addToPrint}
            onChange={() => setAddToPrint(!addToPrint)}
            className='w-4 h-4 text-blue-600 rounded'
          />
          <label htmlFor='addToPrint' className='ml-2 text-gray-800'>
            Automatically add the contact information in the print
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='addOpeningLine'
            checked={addOpeningLine}
            onChange={() => setAddOpeningLine(!addOpeningLine)}
            className='w-4 h-4 text-blue-600 rounded'
          />
          <label htmlFor='addOpeningLine' className='ml-2 text-gray-800'>
            Add opening line to contact further
          </label>
        </div>

        <div className='flex justify-end gap-x-4 pt-4'>
          <button
            onClick={handleSave}
            className='px-14 py-3 bg-[#0075FF] hover:bg-[#0055FF] text-white font-medium rounded-md transition-colors'
          >
            Save
          </button>
          <button className='px-12 py-3 bg-white border border-[#696969] text-[#696969] font-medium rounded-md hover:bg-gray-100 transition-colors'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
