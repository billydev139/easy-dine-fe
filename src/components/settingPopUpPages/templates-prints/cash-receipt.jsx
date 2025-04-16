import { useState, useRef } from 'react';
import { TbEdit } from 'react-icons/tb';

const ReceiptEditor = () => {
  // State management for all settings
  const [receiptWidth, setReceiptWidth] = useState('210mm');
  const [printRestaurantName, setPrintRestaurantName] = useState(true);
  const [printRestaurantAddress, setPrintRestaurantAddress] = useState(true);
  const [printRestaurantUID, setPrintRestaurantUID] = useState(true);
  const [withLogo, setWithLogo] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState('/api/placeholder/150/50');

  // Editable fields state
  const [tokenType, setTokenType] = useState('Credit');
  const [customerName, setCustomerName] = useState('Victor Shoaga');
  const [customerType, setCustomerType] = useState('R3');
  const [address, setAddress] = useState('7953 Oakland St.\nHonolulu, HI 96815');
  const [meterNumber, setMeterNumber] = useState('04172997324');
  const [amount, setAmount] = useState('950 NGN');
  const [tax, setTax] = useState('50 NGN');
  const [total, setTotal] = useState('1000 NGN');
  const [operator, setOperator] = useState('Ade');
  const [restaurantName, setRestaurantName] = useState('EasyDine');
  const [restaurantUID, setRestaurantUID] = useState('UID-0135460216');
  const [restaurantAddress, setRestaurantAddress] = useState(
    '7953 Oakland\nSt. Honolulu,\nHI 96815'
  );
  const [footerMessage, setFooterMessage] = useState(
    "Thanks for fueling our passion. Drop by again, if your wallet isn't still sulking. You're always welcome here!"
  );
  const [date, setDate] = useState('Wed, May 27, 2020 • 9:27:53 AM');
  const [token, setToken] = useState('0237-7746-8981-9028-5626');

  // Editing UI state
  const [isEditing, setIsEditing] = useState({
    tokenType: false,
    customerName: false,
    meterNumber: false,
    operator: false,
    date: false,
    token: false,
  });

  // File input reference
  const fileInputRef = useRef(null);

  // Handle file change for logo upload
  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
    }
  };

  // Toggle edit mode for a field
  const toggleEdit = field => {
    setIsEditing({
      ...isEditing,
      [field]: !isEditing[field],
    });
  };

  // Handle input changes for editable fields
  const handleInputChange = (field, value) => {
    switch (field) {
      case 'tokenType':
        setTokenType(value);
        break;
      case 'customerName':
        setCustomerName(value);
        break;
      case 'meterNumber':
        setMeterNumber(value);
        break;
      case 'operator':
        setOperator(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'token':
        setToken(value);
        break;
      default:
        break;
    }
  };

  // Calculate total based on amount and tax (as a simple example)
  const calculateTotal = () => {
    // This is a simplified example - would need proper number parsing for real implementation
    const amountValue = parseInt(amount.split(' ')[0]) || 0;
    const taxValue = parseInt(tax.split(' ')[0]) || 0;
    const totalValue = amountValue + taxValue;
    setTotal(`${totalValue} NGN`);
  };

  // Handle saving edits and exiting edit mode
  const saveEdit = field => {
    toggleEdit(field);
    if (field === 'amount' || field === 'tax') {
      calculateTotal();
    }
  };

  // Editable field component
  const EditableField = ({ field, value, editing }) => {
    return editing ? (
      <div className='flex items-center'>
        <input
          type='text'
          value={value}
          onChange={e => handleInputChange(field, e.target.value)}
          className='border border-blue-300 rounded px-2 py-1 text-sm w-full'
          autoFocus
          onBlur={() => saveEdit(field)}
          onKeyPress={e => e.key === 'Enter' && saveEdit(field)}
        />
      </div>
    ) : (
      <div className='flex items-center'>
        <span className='font-medium text-black'>{value}</span>
        <button onClick={() => toggleEdit(field)} className='ml-2 text-blue-500'>
          <Pencil size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
        {/* Left Column - Receipt Preview */}
        <div className='bg-white rounded-lg'>
          <h2 className='text-xl font-semibold mb-2 text-[#1A2042]'>Layout Invoice</h2>

          <div className='border border-[#C1C1C1CC] rounded-xl font-mono p-6 space-y-4'>
            <div className='flex flex-col gap-y-3 items-center'>
              {withLogo && <img src={logoPreview} alt='Company Logo' className='h-10' />}
              <div className='text-black'>
                {isEditing.date ? (
                  <input
                    type='text'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className='border border-blue-300 rounded px-2 py-1 text-sm w-full text-center'
                    autoFocus
                    onBlur={() => toggleEdit('date')}
                  />
                ) : (
                  <div className='flex items-center'>
                    <span>{date}</span>
                    <button className='ml-2 text-blue-500'></button>
                  </div>
                )}
              </div>
            </div>

            <div className='pt-3'>
              <div className='relative px-8 py-3'>
                {/* Dashed border container */}
                <div className='absolute inset-0 border-2 border-dashed border-black rounded-xl'></div>

                {/* Title at the top */}
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4'>
                  <span className='text-base font-medium font-mono'>Token</span>
                </div>

                {/* Token content */}
                <div className='text-center font-mono text-xl font-bold tracking-wider py-4'>
                  {isEditing.token ? (
                    <input
                      type='text'
                      value={token}
                      onChange={e => setToken(e.target.value)}
                      className='border border-blue-300 rounded px-2 py-1 text-sm w-full text-center'
                      autoFocus
                      onBlur={() => toggleEdit('token')}
                    />
                  ) : (
                    <div className='flex items-center justify-center'>
                      <span>{token}</span>
                      <button className='ml-2 text-blue-500'></button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='bg-blue-50 border border-blue-300 rounded-xl p-3 flex justify-between items-center'>
              <div className='text-gray-500'>Token Type</div>
              {isEditing.tokenType ? (
                <input
                  type='text'
                  value={tokenType}
                  onChange={e => setTokenType(e.target.value)}
                  className='rounded-lg border border-[#0075FF] outline-none px-2 py-1 text-sm'
                  autoFocus
                  onBlur={() => toggleEdit('tokenType')}
                />
              ) : (
                <div className='flex items-center'>
                  <span className='font-medium text-black'>{tokenType}</span>
                  <button
                    onClick={() => toggleEdit('tokenType')}
                    className='ml-2 text-[#0075FF]'
                  >
                    <TbEdit size={19} />
                  </button>
                </div>
              )}
            </div>

            <div className='bg-blue-50 border border-blue-300 rounded-xl p-3'>
              <div className='flex justify-between items-center mb-1'>
                <div className='text-gray-500'>Customer Name</div>
                {isEditing.customerName ? (
                  <input
                    type='text'
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    className='rounded-lg border border-[#0075FF] outline-none px-2 py-1 text-sm'
                    autoFocus
                    onBlur={() => toggleEdit('customerName')}
                  />
                ) : (
                  <div className='flex items-center'>
                    <span className='font-medium text-black'>{customerName}</span>
                    <button
                      onClick={() => toggleEdit('customerName')}
                      className='ml-2 text-blue-500'
                    >
                      <TbEdit size={19} />
                    </button>
                  </div>
                )}
              </div>
              <div className='flex justify-between items-center mb-1'>
                <div className='text-gray-500'>Customer Type</div>
                <div className='font-medium text-black'>{customerType}</div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='text-gray-500'>Address</div>
                <div className='text-right font-medium text-black whitespace-pre-line'>
                  {address}
                </div>
              </div>
            </div>

            <div className='bg-blue-50 border border-blue-300 rounded-xl p-3 flex justify-between items-center'>
              <div className='text-gray-500'>Meter Number</div>
              {isEditing.meterNumber ? (
                <input
                  type='text'
                  value={meterNumber}
                  onChange={e => setMeterNumber(e.target.value)}
                  className='rounded-lg border border-[#0075FF] outline-none px-2 py-1 text-sm'
                  autoFocus
                  onBlur={() => toggleEdit('meterNumber')}
                />
              ) : (
                <div className='flex items-center'>
                  <span className='font-medium text-black'>{meterNumber}</span>
                  <button
                    onClick={() => toggleEdit('meterNumber')}
                    className='ml-2 text-blue-500'
                  >
                    <TbEdit size={19} />
                  </button>
                </div>
              )}
            </div>

            <div className='space-y-1'>
              <div className='flex justify-between items-center'>
                <div className='text-gray-500'>Amount</div>
                <div className='font-medium text-black'>{amount}</div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='text-gray-500'>Tax</div>
                <div className='font-medium text-black'>{tax}</div>
              </div>
              <div className='flex justify-between items-center font-semibold'>
                <div>Total</div>
                <div>{total}</div>
              </div>
            </div>

            <div className='border-t-2 border-dashed border-gray-400 my-2'></div>

            <div className='bg-blue-50 border border-blue-300 rounded-xl p-3 flex justify-between items-center'>
              <div className='text-gray-600'>Operator</div>
              {isEditing.operator ? (
                <input
                  type='text'
                  value={operator}
                  onChange={e => setOperator(e.target.value)}
                  className='rounded-lg border border-[#0075FF] outline-none px-2 py-1 text-sm'
                  autoFocus
                  onBlur={() => toggleEdit('operator')}
                />
              ) : (
                <div className='flex items-center'>
                  <span className='font-medium text-black'>{operator}</span>
                  <button
                    onClick={() => toggleEdit('operator')}
                    className='ml-2 text-blue-500'
                  >
                    <TbEdit size={19} />
                  </button>
                </div>
              )}
            </div>

            {(printRestaurantName || printRestaurantUID || printRestaurantAddress) && (
              <div className='flex justify-between gap-2 text-xs text-gray-600 mt-4'>
                {printRestaurantName && <div>{restaurantName}</div>}
                {printRestaurantUID && <div>{restaurantUID}</div>}
                {printRestaurantAddress && (
                  <div className='text-right whitespace-pre-line'>
                    {restaurantAddress}
                  </div>
                )}
              </div>
            )}

            <div className='text-xs font-light pr-36 text-black pt-5 text-start'>
              {footerMessage}
            </div>

            {withLogo && (
              <div className='flex justify-center mt-4'>
                <img src={logoPreview} alt='Company Logo' className='h-12' />
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Settings */}
        <div className='bg-white rounded-lg'>
          <h2 className='text-xl font-semibold mb-6 text-[#1A2042]'>Edit Cash Receipt</h2>

          <div className='flex justify-between'>
            <div className='mb-8'>
              <h3 className='text-gray-600 mb-4'>Width of receipt paper:</h3>
              <div className='space-y-3'>
                {['210mm', '80mm', '50mm'].map(width => (
                  <label key={width} className='flex items-center space-x-2'>
                    <input
                      type='radio'
                      name='receiptWidth'
                      value={width}
                      checked={receiptWidth === width}
                      onChange={() => setReceiptWidth(width)}
                      className='w-4 h-4 accent-blue-500'
                    />
                    <span>{width === '210mm' ? '210mm(A4)' : width}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className='mt-10'>
              <div className='space-y-3'>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={printRestaurantName}
                    onChange={() => setPrintRestaurantName(!printRestaurantName)}
                    className='w-4 h-4 accent-blue-500 rounded'
                  />
                  <span>Print Restaurant name</span>
                </label>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={printRestaurantAddress}
                    onChange={() => setPrintRestaurantAddress(!printRestaurantAddress)}
                    className='w-4 h-4 accent-blue-500 rounded'
                  />
                  <span>Print Restaurant address</span>
                </label>
                <label className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={printRestaurantUID}
                    onChange={() => setPrintRestaurantUID(!printRestaurantUID)}
                    className='w-4 h-4 accent-blue-500 rounded'
                  />
                  <span>Print Restaurant UID</span>
                </label>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-200 pt-8 mb-6'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-[#1A2042] font-medium'>Upload logo / image</h3>
              <div className='flex items-center'>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    checked={withLogo}
                    onChange={() => setWithLogo(!withLogo)}
                    className='sr-only peer'
                  />
                  <div className="relative w-11 h-6 bg-gray-400 outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400"></div>
                  <span className='ml-3 text-sm text-gray-600'>
                    Cash receipt with logo
                  </span>
                </label>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className='hidden'
              id='fileInput'
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded'
            >
              Choose File
            </button>
          </div>

          {/* Additional Settings Section */}
          {/* <div className='border-t border-gray-200 pt-6'>
            <h3 className='text-gray-600 mb-4'>Receipt Content Settings</h3>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Restaurant Name
                </label>
                <input
                  type='text'
                  value={restaurantName}
                  onChange={e => setRestaurantName(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Restaurant UID
                </label>
                <input
                  type='text'
                  value={restaurantUID}
                  onChange={e => setRestaurantUID(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Restaurant Address
                </label>
                <textarea
                  value={restaurantAddress}
                  onChange={e => setRestaurantAddress(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                  rows={3}
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Footer Message
                </label>
                <textarea
                  value={footerMessage}
                  onChange={e => setFooterMessage(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                  rows={3}
                />
              </div>
            </div>

            <div className='mt-6'>
              <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded mr-3'>
                Save Changes
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded'>
                Print Receipt
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReceiptEditor;
