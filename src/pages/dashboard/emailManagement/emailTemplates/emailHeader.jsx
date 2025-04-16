import { useState } from 'react';

const EmailHeader = () => {
  const [layoutOptions, setLayoutOptions] = useState({
    headerStyle: 1,
    useStandardLogo: false,
    useBackgroundImage: false,
    printBackgroundImage: false,
    printHeader: true,
  });

  const [activeEditSection, setActiveEditSection] = useState('header');

  const handleRadioChange = (key, value) => {
    setLayoutOptions(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleLogoUpload = event => {
    const file = event.target.files[0];
    if (file) {
      // Handle logo upload logic here
      console.log('Logo uploaded:', file.name);
      // You could store it in state or upload to server, etc.
    }
  };

  const handleBackgroundUpload = event => {
    const file = event.target.files[0];
    if (file) {
      // Handle background upload logic here
      console.log('Background image uploaded:', file.name);
    }
  };

  return (
    <div className='p-6'>
      <h2 className='text-xl font-semibold mb-4'>Edit header section</h2>
      <p className='mb-4'>Select the header style you want to use:</p>

      <div className='space-y-6'>
        <div className='flex items-start space-x-2'>
          <input
            type='radio'
            id='headerStyle1'
            name='headerStyle'
            checked={layoutOptions.headerStyle === 1}
            onChange={() => handleRadioChange('headerStyle', 1)}
            className='mt-1'
          />
          <label htmlFor='headerStyle1' className='flex-1'>
            <div className='font-medium mb-2'>1. Logo right / Company data left</div>
            <div className='border rounded-lg p-4 flex justify-between'>
              <div className='text-xs'>
                <div>Easy Dine Bistro</div>
                <div>Dine-in / Takeaway / Catering</div>
                <div>123 Main Street, Zurich</div>
                <div>Tel: 032 633 00 63</div>
                <div>E-Mail: orders@easydine.ch</div>
                <div>UID: CHE-199-819.522</div>
              </div>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded'>
                <span className='text-gray-500 text-xs'>LOGO</span>
              </div>
            </div>
          </label>
        </div>

        <div className='flex items-start space-x-2'>
          <input
            type='radio'
            id='headerStyle2'
            name='headerStyle'
            checked={layoutOptions.headerStyle === 2}
            onChange={() => handleRadioChange('headerStyle', 2)}
            className='mt-1'
          />
          <label htmlFor='headerStyle2' className='flex-1'>
            <div className='font-medium mb-2'>2. Logo left / Company data right</div>
            <div className='border rounded-lg p-4 flex justify-between'>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded'>
                <span className='text-gray-500 text-xs'>LOGO</span>
              </div>
              <div className='text-xs'>
                <div>Easy Dine Bistro</div>
                <div>Dine-in / Takeaway / Catering</div>
                <div>123 Main Street, Zurich</div>
                <div>Tel: 032 633 00 63</div>
                <div>E-Mail: orders@easydine.ch</div>
                <div>UID: CHE-199-819.522</div>
              </div>
            </div>
          </label>
        </div>

        <div className='flex items-start space-x-2'>
          <input
            type='radio'
            id='headerStyle3'
            name='headerStyle'
            checked={layoutOptions.headerStyle === 3}
            onChange={() => handleRadioChange('headerStyle', 3)}
            className='mt-1'
          />
          <label htmlFor='headerStyle3' className='flex-1'>
            <div className='font-medium mb-2'>3. No logo / Company data centered</div>
            <div className='border rounded-lg p-4 flex justify-center'>
              <div className='text-xs text-center'>
                <div>Easy Dine Bistro</div>
                <div>Dine-in / Takeaway / Catering</div>
                <div>123 Main Street, Zurich</div>
                <div>Tel: 032 633 00 63</div>
                <div>E-Mail: orders@easydine.ch</div>
                <div>UID: CHE-199-819.522</div>
              </div>
            </div>
          </label>
        </div>

        <div className='flex items-start space-x-2'>
          <input
            type='radio'
            id='headerStyle4'
            name='headerStyle'
            checked={layoutOptions.headerStyle === 4}
            onChange={() => handleRadioChange('headerStyle', 4)}
            className='mt-1'
          />
          <label htmlFor='headerStyle4' className='flex-1'>
            <div className='font-medium mb-2'>4. Only logo / No company data</div>
            <div className='border rounded-lg p-4 flex justify-center'>
              <div className='flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full'>
                <span className='text-gray-500 text-xs'>LOGO</span>
              </div>
            </div>
          </label>
        </div>

        <div className='flex items-start space-x-2'>
          <input
            type='radio'
            id='headerStyle5'
            name='headerStyle'
            checked={layoutOptions.headerStyle === 5}
            onChange={() => handleRadioChange('headerStyle', 5)}
            className='mt-1'
          />
          <label htmlFor='headerStyle5' className='flex-1'>
            <div className='font-medium mb-2'>
              5. Empty header area (for pre-printed invoice paper)
            </div>
            <div className='border rounded-lg p-4 h-16'></div>
          </label>
        </div>

        <div className='mt-6'>
          <div className='flex items-center justify-between mb-2'>
            <label className='font-medium'>Upload logo / image</label>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='useStandardLogo'
                checked={layoutOptions.useStandardLogo}
                onChange={() =>
                  setLayoutOptions({
                    ...layoutOptions,
                    useStandardLogo: !layoutOptions.useStandardLogo,
                  })
                }
                className='mr-2'
              />
              <label htmlFor='useStandardLogo'>Use standard logo</label>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('logoUpload').click()}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
          >
            Choose File
          </button>
          <input
            id='logoUpload'
            type='file'
            accept='image/*'
            onChange={handleLogoUpload}
            className='hidden'
          />
        </div>

        <div className='mt-4'>
          <div className='flex items-center justify-between mb-2'>
            <label className='font-medium'>Upload background image</label>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id='useBackgroundImage'
                checked={layoutOptions.useBackgroundImage}
                onChange={() =>
                  setLayoutOptions({
                    ...layoutOptions,
                    useBackgroundImage: !layoutOptions.useBackgroundImage,
                  })
                }
                className='mr-2'
              />
              <label htmlFor='useBackgroundImage'>Do not use a background image</label>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('backgroundUpload').click()}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
          >
            Choose File
          </button>
          <input
            id='backgroundUpload'
            type='file'
            accept='image/*'
            onChange={handleBackgroundUpload}
            className='hidden'
          />
          <div className='mt-2 flex items-center'>
            <input
              type='checkbox'
              id='printBackgroundImage'
              checked={layoutOptions.printBackgroundImage}
              onChange={() =>
                setLayoutOptions({
                  ...layoutOptions,
                  printBackgroundImage: !layoutOptions.printBackgroundImage,
                })
              }
              className='mr-2'
            />
            <label htmlFor='printBackgroundImage'>
              Do not print the background image
            </label>
          </div>
        </div>

        <div className='mt-2 flex items-center'>
          <input
            type='checkbox'
            id='printHeader'
            checked={layoutOptions.printHeader}
            onChange={() =>
              setLayoutOptions({
                ...layoutOptions,
                printHeader: !layoutOptions.printHeader,
              })
            }
            className='mr-2'
          />
          <label htmlFor='printHeader'>Do not print the header area</label>
        </div>
      </div>

      <div className='flex justify-end mt-6 space-x-4'>
        <button
          onClick={() => setActiveEditSection('layout')}
          className='px-12 py-2 font-medium bg-[#0075FF] text-white rounded-xl hover:bg-[#0055FF] transition'
        >
          Save
        </button>
        <button
          onClick={() => setActiveEditSection('layout')}
          className='px-12 py-2 font-medium border border-[#696969] rounded-xl hover:bg-gray-100 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmailHeader;
