'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import QRCode from 'react-qr-code';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { RiQrCodeLine } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa';
import { PiPrinterBold } from 'react-icons/pi';

export default function QRCodeGenerator() {
  const [currentView, setCurrentView] = useState('dashboard'); // "dashboard", "create", "viewAll"
  const [tableNumber, setTableNumber] = useState('');
  const [generatedQR, setGeneratedQR] = useState(null);
  const [qrCodes, setQrCodes] = useState([
    { id: 1, table: '34', date: '3/11/2025, 2:21:27 PM' },
    { id: 2, table: '32', date: '3/11/2025, 3:46:27 PM' },
    { id: 3, table: '21', date: '3/11/2025, 5:14:27 PM' },
  ]);

  const handleGenerateQR = e => {
    e.preventDefault();
    if (tableNumber) {
      setGeneratedQR({
        table: tableNumber,
        value: `https://example.com/table/${tableNumber}`,
        date: new Date().toLocaleString(),
      });
    }
  };

  const handleDownloadQR = () => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const svg = document.getElementById('qr-code');
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      // Download the PNG file
      const downloadLink = document.createElement('a');
      downloadLink.download = `table-${generatedQR.table}-qrcode.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  const handlePrintCode = tableId => {
    // In a real app, this would trigger printing functionality
    console.log(`Printing QR code for table ${tableId}`);
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setTableNumber('');
    setGeneratedQR(null);
  };

  // QR Code Generator View (Create New)
  if (currentView === 'create') {
    return (
      <DashboardLayout>
        <div className=''>
          <button
            onClick={handleBackToDashboard}
            className='mt-7 mb-8 flex items-center font-medium text-lg text-[#282F5A] hover:underline'
          >
            <ArrowLeft className='mr-2' size={25} />
            Back to QR Code Generator
          </button>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Left side - QR Code Form */}
            <div className='bg-white h-56 rounded-lg p-6 shadow-sm'>
              <div className='flex gap-x-2'>
                <svg
                  className='size-6 mt-0.5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 7H7V4H4V7ZM9 7H12V4H9V7ZM14 7H17V4H14V7ZM4 12H7V9H4V12ZM9 12H12V9H9V12ZM14 12H17V9H14V12ZM4 17H7V14H4V17ZM9 17H12V14H9V17ZM14 17H17V14H14V17Z'
                    fill='currentColor'
                  />
                </svg>
                <h2 className='text-lg font-semibold mb-4'>Table Number</h2>
              </div>
              <form onSubmit={handleGenerateQR}>
                <input
                  type='text'
                  value={tableNumber}
                  onChange={e => setTableNumber(e.target.value)}
                  className='w-full px-4 py-3 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none mb-4'
                  placeholder='Enter Table Number....'
                />
                <button
                  type='submit'
                  className='w-full bg-[#0075FF] hover:bg-[#0055FF] text-white py-3 rounded-lg transition-colors'
                >
                  Generate QR Code
                </button>
              </form>
            </div>
            {/* Right side - QR Code Display */}
            <div className='bg-white rounded-lg p-6 shadow-sm'>
              {generatedQR ? (
                <>
                  <div className='bg-[#F2F4F7] p-3 justify-center rounded-lg mb-10 flex items-center'>
                    <CheckCircle className='text-[#4CBB3A] mr-2' />
                    <span className='text-sm text-[#000000] font-semibold'>
                      QR code has been successfully generated!
                    </span>
                  </div>
                  <div className='flex justify-center mb-10'>
                    <div className='p-8 border border-[#C1C1C1] rounded-xl bg-white shadow-lg shadow-[#00000026] inline-block'>
                      <QRCode id='qr-code' value={generatedQR.value} size={180} />
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadQR}
                    className='w-full bg-[#0075FF] hover:bg-[#0055FF] text-white py-3 rounded-lg transition-colors'
                  >
                    Download QR Code
                  </button>
                </>
              ) : (
                <div className='h-full flex items-center justify-center text-gray-400'>
                  <p>Generated QR code will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // View All QR Codes View
  if (currentView === 'viewAll') {
    return (
      <DashboardLayout>
        <div className=''>
          <button
            onClick={handleBackToDashboard}
            className='flex items-center text-lg text-[#282F5A] mb-6 mt-8 hover:underline'
          >
            <ArrowLeft className='mr-2' size={27} />
            Back to QR Code Generator
          </button>
          <div className='mt-8 bg-white border border-[#CCCCCCCC] rounded-lg p-6 shadow-sm shadow-[#0000000D]'>
            <h2 className='text-xl font-bold mb-6'>Last Created QR Codes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {qrCodes.map(code => (
                <div
                  key={code.id}
                  className='border rounded-xl px-5 py-9 flex flex-col items-center'
                >
                  <div className='p-6 border border-[#C1C1C1] rounded-xl bg-white shadow-md shadow-[#00000026] inline-block mb-5'>
                    <QRCode
                      value={`https://example.com/table/${code.table}`}
                      size={120}
                    />
                  </div>
                  <div className='text-center'>
                    <p className='font-bold text-[#000000] mb-1.5 text-lg'>
                      Table {code.table}
                    </p>
                    <p className='text-sm text-[#000000] font-medium mb-5'>{code.date}</p>
                    <button
                      onClick={() => handlePrintCode(code.table)}
                      className='bg-[#0075FF] hover:bg-[#0055FF] text-white py-2.5 px-24 rounded-xl transition-colors w-full flex items-center justify-center'
                    >
                      <PiPrinterBold className='mr-2' />
                      Print Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Main Dashboard View
  return (
    <DashboardLayout>
      <div className=''>
        <div className='mb-6 mt-8'>
          <h1 className='text-2xl font-bold text-[#282F5A] mb-1'>QR Code Generator</h1>
          <p className='text-[#000000] text-sm mb-8'>
            Generate and manage QR codes for your restaurant tables and areas
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* QR Code Generator Card */}
            <div className='bg-white border border-[#CCCCCCCC] rounded-lg p-6 shadow-md shadow-[#0000000D]'>
              <div className='bg-[#CCE3FF] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                <RiQrCodeLine className='size-7 text-[#0075FF]' />
              </div>
              <h2 className='text-lg text-[#131313] font-semibold mb-1'>
                QR Code Generator
              </h2>
              <p className='text-sm text-[#131313] mb-5'>
                Create new QR codes for tables or areas
              </p>
              <button
                onClick={() => setCurrentView('create')}
                className='w-full mt-3 bg-[#0075FF] font-semibold hover:bg-[#0055FF] text-white py-3 rounded-xl transition-colors'
              >
                Create New
              </button>
            </div>
            {/* Manage QR Codes Card */}
            <div className='bg-white border border-[#CCCCCCCC] rounded-lg p-6 shadow-md shadow-[#0000000D]'>
              <div className='bg-[#F5F5F5] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                <FaListUl className='size-5 text-[#696969]' />
              </div>
              <h2 className='text-lg text-[#131313] font-semibold mb-1'>
                Manage QR Codes
              </h2>
              <p className='text-sm text-[#131313] mb-5'>
                View and manage your existing QR codes
              </p>
              <button
                onClick={() => setCurrentView('viewAll')}
                className='w-full mt-3 bg-white hover:bg-gray-100 text-[#696969] border border-[#C1C1C1C1] py-2.5 rounded-xl transition-colors'
              >
                View All
              </button>
            </div>
            {/* Package Status Card */}
            <div className='bg-white border border-[#CCCCCCCC] rounded-lg p-6 shadow-md shadow-[#0000000D]'>
              <div className='bg-[#D1F8E8] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                <RiQrCodeLine className='size-7 text-[#19DB8C]' />
              </div>
              <h2 className='text-lg text-[#131313] font-semibold mb-2'>
                Package Status
              </h2>
              <p className='text-[#131313] text-sm mb-11'>
                15 QR codes remaining in your package
              </p>
              <div className='w-full bg-[#C1C1C1CC] rounded-full h-2.5'>
                <div
                  className='bg-[#19DB8C] h-2.5 rounded-full'
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
