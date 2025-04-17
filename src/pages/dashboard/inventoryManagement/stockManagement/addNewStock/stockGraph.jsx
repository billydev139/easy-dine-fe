import { Check, Package } from 'lucide-react';
import { useState } from 'react';

const StockGraph = () => {
  const [startDate, setStartDate] = useState('22/10/2023 | 14.30');
  const [endDate, setEndDate] = useState('23/10/2023 | 14.30');

  return (
    <div className='space-y-4 mb-20'>
      {/* Delivery Date Card */}
      <div className='bg-white rounded-xl border border-[#C1C1C1] p-8 flex items-center'>
        <div className='bg-blue-500 rounded-lg p-3 mr-4'>
          <Package className='text-white' size={24} />
        </div>
        <div>
          <div className='text-sm text-gray-600'>Lieferdatum</div>
          <div className='text-2xl font-bold'>23.10.2023</div>
        </div>
      </div>

      {/* Inventory List Card */}
      <div className='bg-white rounded-xl border border-[#C1C1C1] p-8'>
        <h2 className='text-2xl font-bold mb-4'>Bestandsliste</h2>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <div className='relative w-full sm:w-56'>
              <select
                className='appearance-none bg-gray-100 border-0 text-gray-500 rounded-lg py-2 px-4 w-full'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              >
                <option value='22/10/2023 | 14.30'>22/10/2023 | 14.30</option>
                <option value='21/10/2023 | 14.30'>21/10/2023 | 14.30</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
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
            <div className='relative w-full sm:w-56'>
              <select
                className='appearance-none bg-gray-100 border-0 text-gray-500 rounded-lg py-2 px-4 w-full'
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              >
                <option value='23/10/2023 | 14.30'>23/10/2023 | 14.30</option>
                <option value='24/10/2023 | 14.30'>24/10/2023 | 14.30</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500'
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
          </div>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg w-full sm:w-auto'>
            Download
          </button>
        </div>
      </div>

      {/* Stock Graph Card */}
      <div className='bg-white rounded-lg shadow px-4 pt-4 pb-10'>
        <div className='flex items-center mb-6'>
          <div className='bg-blue-500 rounded-lg p-3 mr-4'>
            <Check className='text-white' size={24} />
          </div>
          <div>
            <div className='text-sm text-gray-600'>Lagerbestand</div>
            <div className='text-2xl font-bold'>389 Stk</div>
          </div>
          <div className='ml-auto'>
            <div className='flex items-center'>
              <span className='mr-2 text-gray-700'>60%</span>
              <div className='w-32 h-2 bg-gray-200 rounded-full'>
                <div className='w-3/5 h-2 bg-blue-500 rounded-full'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Chart Implementation without Recharts */}
        <div className='relative h-64 mt-6'>
          {/* Y-axis labels */}
          <div className='absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500'>
            <span>100</span>
            <span>0</span>
          </div>

          {/* Chart container */}
          <div className='ml-8 h-full relative'>
            {/* Custom SVG graph */}
            <svg
              className='w-full h-full'
              viewBox='0 0 900 200'
              preserveAspectRatio='none'
            >
              {/* Background grid lines */}
              <line x1='0' y1='0' x2='900' y2='0' stroke='#f0f0f0' strokeWidth='1' />
              <line x1='0' y1='100' x2='900' y2='100' stroke='#f0f0f0' strokeWidth='1' />
              <line x1='0' y1='200' x2='900' y2='200' stroke='#f0f0f0' strokeWidth='1' />

              {/* Vertical grid lines */}
              <line
                x1='100'
                y1='0'
                x2='100'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='212.5'
                y1='0'
                x2='212.5'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='325'
                y1='0'
                x2='325'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='437.5'
                y1='0'
                x2='437.5'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='550'
                y1='0'
                x2='550'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='662.5'
                y1='0'
                x2='662.5'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='775'
                y1='0'
                x2='775'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />
              <line
                x1='887.5'
                y1='0'
                x2='887.5'
                y2='200'
                stroke='#f0f0f0'
                strokeWidth='1'
                strokeDasharray='5,5'
              />

              {/* Area under the line */}
              <path
                d='M0,140 C50,130 100,120 150,90 S200,80 250,80 S300,70 350,65 S400,50 450,90 S500,95 550,100 S600,88 650,80 S700,110 750,60 S800,30 900,30 L900,200 L0,200 Z'
                fill='url(#blueGradient)'
                strokeWidth='0'
              />

              {/* Line on top */}
              <path
                d='M0,140 C50,130 100,120 150,90 S200,80 250,80 S300,70 350,65 S400,50 450,90 S500,95 550,100 S600,88 650,80 S700,110 750,60 S800,30 900,30'
                fill='none'
                stroke='#3b82f6'
                strokeWidth='3'
              />

              {/* Data points */}
              <circle cx='0' cy='140' r='5' fill='#3b82f6' />
              <circle cx='112.5' cy='120' r='5' fill='#3b82f6' />
              <circle cx='225' cy='90' r='5' fill='#3b82f6' />
              <circle cx='337.5' cy='80' r='5' fill='#3b82f6' />
              <circle cx='450' cy='65' r='5' fill='#3b82f6' />
              <circle cx='562.5' cy='90' r='5' fill='#3b82f6' />
              <circle cx='675' cy='80' r='5' fill='#3b82f6' />
              <circle cx='787.5' cy='110' r='5' fill='#3b82f6' />
              <circle cx='900' cy='30' r='5' fill='#3b82f6' />

              {/* Gradient definition */}
              <defs>
                <linearGradient id='blueGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                  <stop offset='0%' stopColor='#3b82f6' stopOpacity='0.7' />
                  <stop offset='100%' stopColor='#3b82f6' stopOpacity='0.1' />
                </linearGradient>
              </defs>
            </svg>

            {/* X-axis labels */}
            <div className='absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 transform translate-y-6'>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockGraph;
