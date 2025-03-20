const QRCodeScanner = () => {
  return (
    <div className='bg-blue-50 pb-40'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='text-center mb-6'>
          <h1 className='text-4xl font-bold text-[#131313] mb-2'>Scan QR Code</h1>
          <p className='text-[#696969]'>
            View your restaurant and make reservations through QR Codes
          </p>
        </div>

        <div className='bg-white h-72 mt-10 rounded-lg shadow-lg py-6 px-16 flex flex-col md:flex-row items-center '>
          {/* QR Code Section */}
          <div className='w-full md:w-1/3 flex flex-col items-center mb-6 md:mb-0'>
            <div className=' '>
              <img
                src='../src/assets/images/qr-scanner.png'
                alt='QR Code'
                className='min-w-56 h-56'
              />
            </div>
          </div>

          {/* Center Text */}
          <div className='w-full md:w-1/2 ml-3 space-y-2 text-center mb-6 md:mb-0'>
            <h3 className='font-bold text-gray-800'>
              Go through mobile web app to place orders and make payments.
            </h3>
            <p className='text-gray-600 text-sm'>
              Scan the QR code to visit Mobile web app and Place your Order and Payment
            </p>
            <button className='bg-blue-500 text-white rounded-full py-2 px-6 font-medium text-sm'>
              Generate Qr Code
            </button>
          </div>

          {/* Phone Mockup */}
          <div className='w-full  flex justify-center'>
            <div className='w-48 absolute -mt-44 ml-40'>
              <img
                src='../src/assets/images/mobile-phone.png'
                alt='Phone mockup'
                className='absolute w-full h-auto rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeScanner;
