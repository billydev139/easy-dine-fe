import { useState } from 'react';

const FooterSection = () => {
  const [layoutOptions, setLayoutOptions] = useState({
    footerStyle: 1,
    printFooter: false,
  });

  const [activeEditSection, setActiveEditSection] = useState('footer');

  const handleRadioChange = (field, value) => {
    setLayoutOptions(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className='bg-white p-4 rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Edit Footer section</h2>
      <p className='mb-4'>Select the footer style you want to use:</p>

      <div className='space-y-6'>
        {[1, 2, 3, 4].map(style => (
          <div key={style} className='flex items-start space-x-2'>
            <input
              type='radio'
              id={`footerStyle${style}`}
              name='footerStyle'
              checked={layoutOptions.footerStyle === style}
              onChange={() => handleRadioChange('footerStyle', style)}
              className='mt-1'
            />
            <label htmlFor={`footerStyle${style}`} className='flex-1'>
              {style === 1 && (
                <>
                  <div className='font-medium mb-2'>1. Company data in 3 columns</div>
                  <div className='border rounded-lg p-4'>
                    <div className='flex justify-between text-xs'>
                      <div>
                        <div>Konto: Autocenter Niederbipp AG</div>
                        <div>Bank: BEKB</div>
                        <div>BIC: KBBECH22XXX</div>
                        <div>IBAN: CH93 0079 0016 9158 4493 3</div>
                      </div>
                      <div>
                        <div>UID-NR.: CHE-199.819.522</div>
                      </div>
                      <div>
                        <div>Tel: 032 633 00 63</div>
                        <div>Website: www.autocenterniederbi.ch</div>
                        <div>E-Mail: verkauf@acnag.ch</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {style === 2 && (
                <>
                  <div className='font-medium mb-2'>
                    2. Image over the entire foot area
                  </div>
                  <div className='border rounded-lg p-4 flex justify-center'>
                    <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
                      <span className='text-gray-500'>LOGO</span>
                    </div>
                  </div>
                </>
              )}
              {style === 3 && (
                <>
                  <div className='font-medium mb-2'>
                    3. Blank footer area (for pre-printed invoice paper)
                  </div>
                  <div className='border rounded-lg p-4 h-16'></div>
                </>
              )}
              {style === 4 && (
                <>
                  <div className='font-medium mb-2'>
                    4. Enter your own text for the footer area
                  </div>
                  <div className='border rounded-lg p-4'>
                    <textarea className='w-full h-16 border p-2'></textarea>
                  </div>
                </>
              )}
            </label>
          </div>
        ))}

        <div className='mt-2 flex items-center'>
          <input
            type='checkbox'
            id='printFooter'
            checked={layoutOptions.printFooter}
            onChange={() =>
              setLayoutOptions(prev => ({
                ...prev,
                printFooter: !prev.printFooter,
              }))
            }
            className='mr-2'
          />
          <label htmlFor='printFooter'>Do not print footer area</label>
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

export default FooterSection;
