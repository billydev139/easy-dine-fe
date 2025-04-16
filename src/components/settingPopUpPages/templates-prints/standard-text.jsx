import { useState } from 'react';

const StandardText = () => {
  const [activeTab, setActiveTab] = useState('offer'); // Default to "offer"
  const [layoutOptions, setLayoutOptions] = useState({
    textAboveItems: '',
    textBelowItems: '',
    printQRCode: false,
  });

  const [activeEditSection, setActiveEditSection] = useState('standard');

  const handleTextChange = (field, value) => {
    setLayoutOptions(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Standard texts for documents</h2>

      <div className='border-b mb-6'>
        <div className='flex'>
          <button
            className={`px-4 py-2 ${
              activeTab === 'offer'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('offer')}
          >
            Offer
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'order'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('order')}
          >
            Order
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'invoice'
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('invoice')}
          >
            Invoice
          </button>
        </div>
      </div>

      <div className='space-y-6'>
        <div>
          <label className='block font-medium mb-2'>Text Above The Items</label>
          <textarea
            className='w-full border rounded-lg p-2 h-24'
            value={layoutOptions.textAboveItems}
            onChange={e => handleTextChange('textAboveItems', e.target.value)}
          />
        </div>

        <div>
          <label className='block font-medium mb-2'>Text Below The Items</label>
          <textarea
            className='w-full border rounded-lg p-2 h-24'
            value={layoutOptions.textBelowItems}
            onChange={e => handleTextChange('textBelowItems', e.target.value)}
          />
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='printQRCode'
            checked={layoutOptions.printQRCode}
            onChange={() =>
              setLayoutOptions(prev => ({
                ...prev,
                printQRCode: !prev.printQRCode,
              }))
            }
            className='mr-2'
          />
          <label htmlFor='printQRCode'>Print QR Code for Payment</label>
        </div>
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

export default StandardText;
