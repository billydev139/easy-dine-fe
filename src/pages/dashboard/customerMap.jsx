
import ReactApexChart from 'react-apexcharts';
import Icons from '../../assets/icons';

const CustomerMap = () => {
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

  return (
    <div className="bg-primaryBlue p-4 rounded-md shadow-lg w-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-white text-lg font-semibold">Customer Map</h2>
          <p className="text-white text-sm">Lorem ipsum dolor</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-md bg-white text-primaryBlack">Monthly</button>
          <button className="px-3 py-1 rounded-md bg-[#00AFEC] text-white">Weekly</button>
          <button className="px-3 py-1 rounded-md bg-white text-primaryBlack">Today</button>
        </div>
      </div>
      <div className='flex items-center gap-1'>
        <Icons.FaUserTie color='#00AFEC' size={30} />
      <div>
      <div className="text-white ">Clients</div>
      <strong className='text-white'>41,512k</strong>
      </div>
      </div>
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={300} />
    </div>
  );
};

export default CustomerMap;
