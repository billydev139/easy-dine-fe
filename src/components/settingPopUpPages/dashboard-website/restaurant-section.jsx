import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const RestaurantSection = () => {
  const [activeTab, setActiveTab] = useState('Restaurant 1');

  return (
    <div className='py-4'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
          <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
          <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
            Setting &gt;{' '}
          </span>
          <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
            Webpage{' '}
          </span>
        </div>

        <div className='flex'>
          <button
            className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-4 py-2 rounded-md text-lg font-medium mr-2'
            onClick={() => alert('Create new restaurant functionality')}
          >
            Create New Restaurant
          </button>
          <button
            className='bg-white border border-[#0075FF] text-[#0075FF] px-4 py-2 rounded-md text-lg font-medium flex items-center'
            onClick={() => window.open('/website', '_blank')}
          >
            <ExternalLink className='h-4 w-4 mr-1' />
            To the website
          </button>
        </div>
      </div>

      <div className='flex justify-between mb-4'>
        <div className='flex'>
          <button
            className={`px-3 py-2 ${
              activeTab === 'Restaurant 1'
                ? 'text-[#00925C] text-xl font-bold border-b-2 border-[#00925C]'
                : 'text-[#717B8C] text-xl'
            }`}
            onClick={() => setActiveTab('Restaurant 1')}
          >
            Restaurant 1
          </button>
          <button
            className={`px-3 py-2 ${
              activeTab === 'Restaurant 2'
                ? 'text-[#00925C] text-xl font-bold border-b-2 border-[#00925C]'
                : 'text-[#717B8C] text-xl'
            }`}
            onClick={() => setActiveTab('Restaurant 2')}
          >
            Restaurant 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;
