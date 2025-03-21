import Chart from 'react-apexcharts';
import Icons from '../../../../assets/icons';
import { useSelector } from 'react-redux';

const OverviewStats = () => {
  const cardData = [
    {
      title: 'Average Order Value',
      value: '3,422',
      orders: '153 Orders',
      percentage: '+8%',
      color: 'green',
      chartColor: '#1EB564',
      icon: <Icons.TfiWallet />, // Replace with your custom icon
    },
    {
      title: 'Today Revenue',
      value: '$2,868.99',
      orders: '153 Orders',
      percentage: '+4%',
      color: 'blue',
      chartColor: '#00AFEC',
      icon: <Icons.BiEdit />, // Replace with your custom icon
    },
    {
      title: ' Active Users',
      value: '156k',
      orders: '153 Orders',
      percentage: '+2%',
      color: 'red',
      chartColor: '#E54B47',
      icon: <Icons.FiUsers />, // Replace with your custom icon
    },
    {
      title: 'Retention Rate',
      value: '3,422',
      orders: '153 Orders',
      percentage: '+2%',
      color: 'red',
      chartColor: '#E54B47',
      icon: <Icons.FiUsers />, // Replace with your custom icon
    },
  ];

  const chartOptions = color => ({
    chart: {
      type: 'area',
      sparkline: { enabled: true },
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: { opacity: 0.3 },
    colors: [color],
    tooltip: { enabled: false },
  });

  const chartSeries = [
    { data: [10, 30, 25, 40, 35, 50, 45] }, // Sample data
  ];

  const theme = useSelector(state => state?.theme?.theme);

  return (
    <div className='flex flex-wrap gap-1 justify-between py-8'>
      {cardData.map((card, index) => {
        // Convert percentage string to number for checking
        const percentValue = parseFloat(
          card.percentage.replace('+', '').replace('%', '')
        );

        return (
          <div
            key={index}
            className={`${
              theme === 'dark' ? 'bg-primaryBlue text-white' : 'bg-white text-primaryBlue'
            } p-4 rounded-lg w-full sm:w-[48%] lg:w-[23%] shadow-md`}
          >
            <div className='flex items-center mb-2'>
              <h2 className='text-sm text-[#19DB8C]'>{card.title}</h2>
              <span
                className={`text-xs ml-2 py-1 px-2 rounded-xl text-white w-16 text-center ${
                  card.title === 'Today Revenue' && percentValue > 5
                    ? 'bg-red-500'
                    : 'bg-[#19DB8C]'
                }`}
              >
                {card.percentage}
              </span>
            </div>x`x`

            <div className='flex items-center mb-2'>
              <h3 className='text-2xl font-medium'>{card.value}</h3>
            </div>
            <h2 className='text-sm'>{card.orders}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewStats;

// {

//           <Chart
//             options={chartOptions(card.chartColor)}
//             series={chartSeries}
//             type="area"
//             height={100}
//           />
// }
