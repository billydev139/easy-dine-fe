
import ReactApexChart from 'react-apexcharts';
import Icons from '../../../../assets/icons';
import { useSelector } from 'react-redux';

const CustomerInsights = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    grid: { borderColor: '#2D3748' },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: '#A0AEC0' } },
    },
    yaxis: { labels: { style: { colors: '#A0AEC0' } } },
    // fill: { opacity: 1 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',         // Shade type (dark or light)
        type: 'vertical',      // Gradient direction
        shadeIntensity: 0.5,   // Shade intensity
        gradientToColors: ['#00AFEC'], // Solid color at the top
        inverseColors: true,   // Inverse to fade from solid to transparent
        opacityFrom: 1,        // Full opacity at the top
        opacityTo: 0.7,          // Fully transparent at the bottom
        stops: [0, 100],       // Gradient stops: 0% solid, 100% transparent
      },
    },
    colors: ['#00AFEC'],
    tooltip: { theme: 'dark' },
  };

  const chartSeries = [
    {
      name: 'Primary',
      data: [30, 50, 20, 60, 70, 80, 40],
    },
    // {
    //   name: 'Secondary',
    //   data: [70, 50, 80, 40, 30, 20, 60],
    // },
  ];
  const theme = useSelector((state) => state?.theme?.theme);
  return (
    <div className={` p-4 rounded-md shadow-lg w-full ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-lg font-medium">Customer Insights</h2>
          <p className=" text-sm">Lorem ipsum dolor</p>
        </div>
        <select className="text-primaryBlack bg-[#EEF5FF] px-3 py-1 rounded-xl outline-none font-medium border border-[#9EC3FF] h-10">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className='flex items-center gap-1'>
        <Icons.FaUserTie color='#00AFEC' size={30} />
      <div>
      <div className="pt-4 ">Clients</div>
      <strong className=''>41,512k</strong>
      </div>
      </div>
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={300} />
    </div>
  );
};

export default CustomerInsights;

