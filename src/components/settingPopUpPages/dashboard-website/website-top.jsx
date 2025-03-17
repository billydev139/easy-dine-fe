import { ArrowLeft, ChevronRight } from 'lucide-react';

const WebsiteTop = () => {
  return (
    <div className='flex justify-between mt-9'>
      <div className='flex items-center'>
        <div className='flex items-center gap-x-1'>
          <ArrowLeft className='cursor-pointer' stroke='#282F5A' />
          <span className='text-[#282F5A] text-xl cursor-pointer'>Settings</span>
        </div>
        <ChevronRight className='mt-0.5' stroke='#282F5A' />
      </div>

      <div className='space-x-3'>
        <button className='bg-[#0075FF] hover:bg-[#0085FF] rounded-md text-white text-lg font-medium px-5 py-2'>
          Create New Restaurant
        </button>

        <button className='bg-white text-lg text-[#0075FF] font-medium px-5 py-2 rounded-md border border-[#0075FF]'>
          To the website
        </button>
      </div>
    </div>
  );
};

export default WebsiteTop;
