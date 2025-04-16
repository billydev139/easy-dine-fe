import { useState } from 'react';

const RestaurantData = () => {
  const [layoutOptions, setLayoutOptions] = useState({
    printOptions: {
      sameIndentation: false,
      dueDate: false,
      acceptance: false,
      customerNumber: false,
      customerPhone: false,
      sender: false,
      tireStorage: false,
      amountPaid: false,
    },
  });

  const [activeEditSection, setActiveEditSection] = useState('restaurant');

  const handleCheckboxChange = (section, field) => {
    setLayoutOptions(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: !prev[section][field],
      },
    }));
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Editing Restaurant data</h2>
      <h3 className='text-lg font-medium mb-4'>Which data should be printed?</h3>

      <div className='space-y-3'>
        {[
          { id: 'sameIndentation', label: 'Arrange values with the same indentation' },
          { id: 'dueDate', label: 'Print the due date' },
          { id: 'acceptance', label: 'Print acceptance' },
          { id: 'customerNumber', label: 'Print customer number' },
          { id: 'customerPhone', label: 'Print customer phone number' },
          { id: 'sender', label: 'Print Sender' },
          { id: 'tireStorage', label: 'Print tire storage location' },
          { id: 'amountPaid', label: 'Show the amount already paid' },
        ].map(({ id, label }) => (
          <div key={id} className='flex items-center'>
            <input
              type='checkbox'
              id={id}
              checked={layoutOptions.printOptions[id]}
              onChange={() => handleCheckboxChange('printOptions', id)}
              className='mr-2'
            />
            <label htmlFor={id}>{label}</label>
          </div>
        ))}
      </div>

      <div className='flex justify-end mt-6 space-x-4'>
        <button
          onClick={() => setActiveEditSection('layout')}
          className='px-12 py-2 font-medium bg-[#0075FF] text-white rounded-xl hover:bg-[#0055FF] transition'
        >
          Save
        </button>
        <button
          onClick={() => setActiveEditSection('layout')}
          className='px-12 py-2 font-medium border border-[#696969] rounded-xl hover:bg-gray-100 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RestaurantData;
