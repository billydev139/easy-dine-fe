import { LuClipboardPaste } from 'react-icons/lu';

export default function EmailLogs() {
  return (
    <div className='p-6 font-sans'>
      <h1 className='text-2xl font-bold text-[#131313] mb-1'>Delivery Logs</h1>
      <p className='text-[#131313] text-sm mb-6'>
        Analytics of Logs that have been delivered
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        {/* Delivered Emails Card */}
        <StatusCard title='Delivered Emails' percentage='95%' color='green' />

        {/* Pending Card */}
        <StatusCard title='Pending' percentage='2%' color='yellow' />

        {/* Failed Card */}
        <StatusCard title='Failed' percentage='3%' color='red' />
      </div>
    </div>
  );
}

function StatusCard({ title, percentage, color }) {
  // Define color schemes based on status type
  const colorSchemes = {
    green: {
      text: 'text-green-500',
      bg: 'bg-green-100',
      fill: 'from-green-200 to-green-400',
      icon: 'text-green-500',
    },
    yellow: {
      text: 'text-yellow-500',
      bg: 'bg-yellow-100',
      fill: 'from-yellow-200 to-yellow-400',
      icon: 'text-yellow-500',
    },
    red: {
      text: 'text-red-500',
      bg: 'bg-red-100',
      fill: 'from-red-200 to-red-400',
      icon: 'text-red-500',
    },
  };

  const scheme = colorSchemes[color];

  return (
    <div className='bg-white rounded-lg p-4 shadow border border-gray-200'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='font-bold text-gray-800'>{title}</h2>
        <div className={`${scheme.icon}`}>
          <ClipboardIcon />
        </div>
      </div>

      <div className='flex items-end mb-4'>
        <div className={`text-4xl font-semibold ${scheme.text}`}>{percentage}</div>
        <div className='text-[#131313] ml-2 mb-1'>(emails)</div>
      </div>

      {/* Graph */}
      <div className='relative h-16 w-full'>
        <div className={`absolute bottom-0 w-full h-full overflow-hidden rounded-md`}>
          <WavyGraph color={color} />
        </div>
      </div>
    </div>
  );
}

function WavyGraph({ color }) {
  const colorMap = {
    green: 'bg-gradient-to-r from-green-300 to-green-400',
    yellow: 'bg-gradient-to-r from-yellow-300 to-yellow-400',
    red: 'bg-gradient-to-r from-red-300 to-red-400',
  };

  return (
    <div className={`h-full w-full ${colorMap[color]}`}>
      <svg viewBox='0 0 100 20' className='w-full h-full' preserveAspectRatio='none'>
        <path
          d={generateWavyPath()}
          fill='currentColor'
          className='text-white opacity-60'
        />
      </svg>
    </div>
  );
}

// Helper function to generate a random wavy path
function generateWavyPath() {
  // Start at the bottom left
  let path = 'M0,20 ';

  // Generate random points for the path
  const points = 10;
  for (let i = 0; i <= points; i++) {
    const x = (i / points) * 100;
    const y = Math.random() * 10 + 7; // Random value between 2 and 12
    path += `L${x},${y} `;
  }

  // Complete the path by connecting to bottom right, then bottom left
  path += 'L100,20 L0,20 Z';

  return path;
}

function ClipboardIcon() {
  return <LuClipboardPaste className='size-6' />;
}
