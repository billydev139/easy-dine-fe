import { useState } from 'react';

const DiscountCampaignTracker = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Chicken curry special with cucumber',
      discountPercentage: 20,
      salesBoost: 10.0,
      image: '/api/placeholder/150/100',
    },
    {
      id: 2,
      name: 'Chicken curry special with cucumber',
      discountPercentage: 20,
      salesBoost: 10.0,
      image: '/api/placeholder/150/100',
    },
    {
      id: 3,
      name: 'Chicken curry special with cucumber',
      discountPercentage: 20,
      salesBoost: 10.0,
      image: '/api/placeholder/150/100',
    },
  ]);

  const [promotionIdea] = useState(
    'Drive traffic on slow days by introducing a Happy Monday 15% discount on all wraps.'
  );

  // Function to handle updating sales boost (could be connected to real data)
  const updateSalesBoost = (id, newBoost) => {
    setMenuItems(
      menuItems.map(item => (item.id === id ? { ...item, salesBoost: newBoost } : item))
    );
  };

  return (
    <div className='bg-white mb-6 p-5 rounded-lg max-w-xl w-full'>
      <div className='mb-6'>
        <h1 className='text-lg font-bold text-[#131313]'>Discount Campaigns.</h1>
        <p className='text-sm text-[#131313]'>
          Track the Discounted-performing menu items
        </p>
      </div>

      <div className='space-y-4'>
        {menuItems.map(item => (
          <div
            key={item.id}
            className='bg-[#9EC3FF1A] px-5 py-3 rounded-xl shadow-sm flex items-center justify-between'
          >
            <div className='flex items-center gap-6'>
              <img
                src='https://media.istockphoto.com/id/1415994593/photo/chicken-curry.webp?a=1&b=1&s=612x612&w=0&k=20&c=ziuJc_SBbsDzxQMv05vkW9muLrjo_AchinbBOtwloco='
                alt={item.name}
                className='w-44 h-28 rounded-md'
              />
              <div>
                <h3 className='font-medium text-[#131313] text-base'>{item.name}</h3>
                <div className='mt-3 flex items-center'>
                  <div className='w-2 h-2 bg-[#1EB564] rounded-full mr-3'></div>
                  <span className='text-[#131313] text-xs'>
                    Boost sales during weekdays.
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-end gap-3'>
              <span className='bg-[#1CB8501A] border border-[#17EFA0] text-green-600 px-2.5 py-1 rounded-md text-sm'>
                {item.discountPercentage}%OFF
              </span>
              <div className='bg-[#1EB564] text-white text-sm px-5 py-1 rounded-full flex items-center'>
                <span className='mr-1'>↑</span> {item.salesBoost}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10 pl-5 pr-28 flex items-start'>
        <div className='size-2 bg-[#131313] rounded-full mr-2 mt-2'></div>
        <p className='text-[#131313] text-sm'>{promotionIdea}</p>
      </div>
    </div>
  );
};

export default DiscountCampaignTracker;
