'use client';

import { ChevronDown, ChevronLeft, ChevronRight, Download, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ReportRevenue = () => {
  const [theme, setTheme] = useState('light');
  const [chartMounted, setChartMounted] = useState(false);
  const [category, setCategory] = useState('Category');
  const [status, setStatus] = useState('Status');
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [tableData, setTableData] = useState([
    { date: '29.02.2015', sales: "1'966.28 CHF", income: "1'966.28 CHF" },
    { date: '28.02.2015', sales: "2'104.50 CHF", income: "1'890.75 CHF" },
    { date: '27.02.2015', sales: "1'845.33 CHF", income: "1'720.10 CHF" },
    { date: '26.02.2015', sales: "2'250.00 CHF", income: "2'100.50 CHF" },
    { date: '25.02.2015', sales: "1'780.90 CHF", income: "1'650.25 CHF" },
    { date: '24.02.2015', sales: "2'310.45 CHF", income: "2'150.80 CHF" },
    { date: '23.02.2015', sales: "1'920.75 CHF", income: "1'800.60 CHF" },
    { date: '22.02.2015', sales: "2'080.30 CHF", income: "1'950.15 CHF" },
  ]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for the chart
  const dates = [
    '14.03.2024',
    '15.03.2024',
    '16.03.2024',
    '17.03.2024',
    '18.03.2024',
    '19.03.2024',
    '20.03.2024',
    '22.03.2024',
    '23.03.2024',
    '24.03.2024',
    '25.03.2024',
    '26.03.2024',
    '27.03.2024',
    '28.03.2024',
    '29.03.2024',
    '30.03.2024',
  ];

  const incomeData = [
    250, 40, 90, 100, 30, 230, 160, 40, 80, 30, 50, 90, 230, 160, 40, 80,
  ];
  const revenueData = [
    380, 90, 190, 200, 50, 350, 250, 80, 180, 50, 90, 160, 350, 250, 80, 180,
  ];

  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
      background: 'transparent',
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
        borderRadius: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0,
    },
    grid: {
      borderColor: theme === 'dark' ? '' : '',
      show: true,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    xaxis: {
      categories: dates,
      labels: {
        style: {
          colors: theme === 'dark' ? '#A0AEC0' : '#4A5568',
          fontSize: '10px',
        },
        rotate: -45,
        rotateAlways: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: theme === 'dark' ? '#A0AEC0' : '#4A5568',
        },
        formatter: value => {
          return value;
        },
      },
      min: 0,
      max: 400,
      tickAmount: 5,
    },
    colors: ['#00AFEC', '#19DB8C'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#00AFEC00', '#19DB8C00'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: theme === 'dark' ? 'dark' : 'light',
      shared: true,
      intersect: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: theme === 'dark' ? '#A0AEC0' : '#4A5568',
      },
    },
  };

  const chartSeries = [
    {
      name: 'Income excl. Tax',
      data: incomeData,
    },
    {
      name: 'Sales excl. Tax',
      data: revenueData,
    },
  ];

  // Simulate theme detection
  useEffect(() => {
    // You can replace this with actual theme state if available
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');

    // Set chart as mounted after component is rendered
    setChartMounted(true);
  }, []);

  // Sorting function
  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Get sorted data
  const getSortedData = () => {
    const sortableData = [...tableData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        // For numeric sorting, convert string values to numbers
        if (sortConfig.key === 'sales' || sortConfig.key === 'income') {
          const valueA = Number.parseFloat(a[sortConfig.key].replace(/[^\d.-]/g, ''));
          const valueB = Number.parseFloat(b[sortConfig.key].replace(/[^\d.-]/g, ''));

          if (sortConfig.direction === 'ascending') {
            return valueA - valueB;
          }
          return valueB - valueA;
        } else {
          // For date sorting
          if (sortConfig.direction === 'ascending') {
            return a[sortConfig.key].localeCompare(b[sortConfig.key]);
          }
          return b[sortConfig.key].localeCompare(a[sortConfig.key]);
        }
      });
    }
    return sortableData;
  };

  // Filter data based on search term
  const getFilteredData = () => {
    return getSortedData().filter(
      item =>
        item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sales.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.income.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Pagination
  const indexOfLastItem = currentPage * resultsPerPage;
  const indexOfFirstItem = indexOfLastItem - resultsPerPage;
  const filteredData = getFilteredData();
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / resultsPerPage);

  // Handle page change
  const handlePageChange = newPage => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div className='min-h-screen'>
        <div className='p-4 rounded-md  bg-white w-full'>
          {chartMounted && (
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type='bar'
              height={350}
            />
          )}
        </div>
        <div className='bg-white my-6 p-4'>
          <div className='mx-auto max-w-7xl bg-white rounded-lg shadow-sm overflow-hidden'>
            {/* Header with search and filters */}
            <div className='p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              {/* Search bar */}
              <div className='relative w-full max-w-md'>
                <input
                  type='text'
                  placeholder='Search for name, id......'
                  className='w-full py-2 px-4 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                  <Search className='h-5 w-5 text-[#131313]' />
                </div>
              </div>
              {/* Filters and export */}
              <div className='flex items-center gap-3'>
                {/* Category dropdown */}
                <div className='relative'>
                  <button className='flex items-center justify-between w-40 px-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl'>
                    <span>{category}</span>
                    <ChevronDown className='h-4 w-4 ml-2 text-[#131313]' />
                  </button>
                </div>
                {/* Status dropdown */}
                <div className='relative'>
                  <button className='flex items-center justify-between w-40 px-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl'>
                    <span>{status}</span>
                    <ChevronDown className='h-4 w-4 ml-2 text-[#131313]' />
                  </button>
                </div>
                {/* Export button */}
                <button className='px-4 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-xl flex items-center gap-2'>
                  <Download className='h-5 w-5' />
                  <span>Export</span>
                </button>
              </div>
            </div>
            {/* Table */}
            <div className='w-full overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='bg-[#EEF5FF]'>
                    <th
                      className='py-2.5 text-lg font-semibold text-[#131313] text-center cursor-pointer'
                      onClick={() => requestSort('date')}
                    >
                      Time period{' '}
                      {sortConfig.key === 'date' &&
                        (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                    </th>
                    <th
                      className='py-2.5 text-lg font-semibold text-[#131313] text-center cursor-pointer'
                      onClick={() => requestSort('sales')}
                    >
                      Sales excl. tax{' '}
                      {sortConfig.key === 'sales' &&
                        (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                    </th>
                    <th
                      className='py-2.5 text-lg font-semibold text-[#131313] text-center cursor-pointer'
                      onClick={() => requestSort('income')}
                    >
                      Income excl. tax{' '}
                      {sortConfig.key === 'income' &&
                        (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((row, index) => (
                    <tr key={index} className='border-t border-gray-100'>
                      <td className='py-3.5 px-6 text-[#131313] text-sm text-center'>
                        {row.date}
                      </td>
                      <td className='py-3.5 px-6 text-[#19DB8C] text-sm text-center'>
                        {row.sales}
                      </td>
                      <td className='py-3.5 px-6 text-[#00AFEC] text-sm text-center'>
                        {row.income}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className='p-4 flex flex-col md:flex-row md:items-center md:justify-end gap-4 border-t border-gray-100'>
              <div className='flex items-center gap-2'>
                <span className='text-gray-700'>Results Per Page</span>
                <div className='relative'>
                  <button className='flex items-center justify-between w-20 px-3 py-1 bg-[#EEF5FF] rounded-xl'>
                    <span>{resultsPerPage}</span>
                    <ChevronDown className='h-4 w-4 ml-1 text-gray-500' />
                  </button>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-gray-700'>
                  {indexOfFirstItem + 1} -{' '}
                  {Math.min(indexOfLastItem, filteredData.length)} Of{' '}
                  {filteredData.length}
                </span>
                <div className='flex items-center gap-1'>
                  <button
                    className='p-1 rounded-md hover:bg-gray-100'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className='h-5 w-5 text-gray-500' />
                  </button>
                  <button
                    className='p-1 rounded-md hover:bg-gray-100'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className='h-5 w-5 text-gray-500' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportRevenue;
