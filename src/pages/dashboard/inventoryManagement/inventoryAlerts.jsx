import { useState } from 'react';
import { AlertTriangle, Search, ArrowRight } from 'lucide-react';

export default function InventoryAlerts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllAlerts, setShowAllAlerts] = useState(false);
  const [dismissedAlerts, setDismissedAlerts] = useState([]);

  // Sample alerts data with more items
  const allAlerts = [
    {
      id: 1,
      name: 'Garlic knots',
      status: 'Low Stock',
      description: 'Stock levels below 10 units',
      timeAgo: '2 Hours',
    },
    {
      id: 2,
      name: 'Garlic knots',
      status: 'Out of Stock',
      description: 'Stock levels below 10 units',
      timeAgo: '2 Hours',
    },
    {
      id: 3,
      name: 'Pizza dough',
      status: 'Low Stock',
      description: 'Stock levels below 5 units',
      timeAgo: '30 Minutes',
    },
    {
      id: 4,
      name: 'Mozzarella cheese',
      status: 'Out of Stock',
      description: 'Stock levels below 10 units',
      timeAgo: '1 Hour',
    },
    {
      id: 5,
      name: 'Tomato sauce',
      status: 'Low Stock',
      description: 'Stock levels below 3 units',
      timeAgo: '4 Hours',
    },
  ];

  // Filter alerts based on search query and dismissed state
  const filteredAlerts = allAlerts
    .filter(alert => !dismissedAlerts.includes(alert.id))
    .filter(
      alert =>
        alert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alert.id.toString().includes(searchQuery)
    );

  // Get limited or all alerts based on showAllAlerts state
  const displayedAlerts = showAllAlerts ? filteredAlerts : filteredAlerts.slice(0, 2);

  // Handle "View All Alerts" toggle
  const toggleViewAll = () => {
    setShowAllAlerts(!showAllAlerts);
  };

  // Reset all dismissed alerts
  const resetAlerts = () => {
    setDismissedAlerts([]);
  };

  return (
    <div className='bg-white px-6 py-7 rounded-md mb-10'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <AlertTriangle className='text-[#131313]' size={24} />
          <h1 className='text-lg text-[#131313] font-semibold'>Inventory Alerts</h1>
        </div>
        {dismissedAlerts.length > 0 && (
          <button
            onClick={resetAlerts}
            className='text-sm text-blue-600 hover:text-blue-800'
          >
            Reset dismissed
          </button>
        )}
      </div>

      <div className='relative mb-6'>
        <input
          type='text'
          placeholder='Search for name, id......'
          className='w-full px-4 py-3 text-sm bg-[#EEF5FF] rounded-xl outline-none border border-[#9EC3FF] placeholder:text-[#131313]'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
          <Search className='text-[#131313]' size={20} />
        </div>
      </div>

      {displayedAlerts.length === 0 ? (
        <div className='text-center py-8 text-gray-500'>
          No alerts match your search criteria
        </div>
      ) : (
        <div className='space-y-4'>
          {displayedAlerts.map(alert => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border relative ${
                alert.status === 'Low Stock'
                  ? 'bg-[#F4C62D1A] border-[#F4C62D]'
                  : 'bg-[#E54B471A] border-[#E54B47]'
              }`}
            >
              <button
                className='absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full'
                aria-label='Dismiss alert'
              ></button>

              <div className='flex gap-x-4 items-center mb-2 pr-6'>
                <h2 className='text-lg text-[#131313] font-bold'>{alert.name}</h2>
                <span
                  className={`text-xs px-2 py-1 border rounded-md ${
                    alert.status === 'Low Stock'
                      ? 'bg-[#F4C62D1A] text-[#E3B210] border-[#F4C62D]'
                      : 'bg-[#E54B471A] text-[#E54B47] border-[#E54B47]'
                  }`}
                >
                  {alert.status}
                </span>
              </div>
              <p className='text-sm text-[#696969E5]'>{alert.description}</p>
              <p className='text-sm text-[#696969E5]'>{alert.timeAgo}</p>
              <div className='w-80 border-t border-dashed border-[#C1C1C1CC] mt-4 pt-4'></div>
            </div>
          ))}
        </div>
      )}

      {filteredAlerts.length > 2 && (
        <div className='mt-6 flex justify-center'>
          <button
            onClick={toggleViewAll}
            className='flex items-center text-[#131313] font-medium gap-2 hover:text-gray-700'
          >
            <span>{showAllAlerts ? 'Show Less' : 'View All Alerts'}</span>
            <ArrowRight size={16} className={showAllAlerts ? 'rotate-90' : ''} />
          </button>
        </div>
      )}
    </div>
  );
}
