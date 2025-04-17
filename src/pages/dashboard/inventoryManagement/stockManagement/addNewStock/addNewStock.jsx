import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import StockGraph from './stockGraph';

const AddNewStock = () => {
  // State for form fields
  const [productName, setProductName] = useState('');
  const [collection, setCollection] = useState('');
  const [category, setCategory] = useState('Furniture');
  const [artikelnummer, setArtikelnummer] = useState('');
  const [date, setDate] = useState('22.10.2023');
  const [time, setTime] = useState('15:00');
  const [art, setArt] = useState('art');
  const [grund, setGrund] = useState('Trash');
  const [mitarbeiter, setMitarbeiter] = useState('John Doe');
  const [notAvailable, setNotAvailable] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [discountValue, setDiscountValue] = useState('10%');
  const [quantity, setQuantity] = useState('2');
  const [expiryDate, setExpiryDate] = useState('23/10/2023|14:30');
  const [productImage, setProductImage] = useState('/api/placeholder/400/320');
  const [imageFile, setImageFile] = useState(null);

  // State for form validation
  const [errors, setErrors] = useState({});

  // ✅ Image Upload Handler
  const handleImageUpload = e => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrors({ image: 'Only image files are allowed!' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ image: 'Image size should be less than 5MB' });
        return;
      }

      setImageFile(file);
      setErrors(prev => ({ ...prev, image: null }));

      const reader = new FileReader();
      reader.onload = e => setProductImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Process the form submission logic here
    console.log('Form submitted');
  };

  return (
    <>
      <div className='bg-white my-6 p-4 rounded-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-lg font-semibold'>Stock Management &gt; Add New Stock</h1>
          <div className='flex gap-2'>
            <button
              onClick={handleSubmit}
              className='px-20 py-2 bg-[#0075FF] text-white rounded-xl hover:bg-[#0055FF]'
            >
              Save
            </button>
            <button className='px-20 py-2 bg-[#19DB8C] text-white rounded-xl hover:bg-emerald-500'>
              Available
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          {/* Left Column - Product Image */}
          <div className='w-full md:w-1/2 rounded-lg shadow-sm'>
            <div className='bg-white p-6 rounded-xl border border-[#C1C1C1]'>
              <h2 className='font-medium mb-6 flex items-center'>
                Product Image <span className='ml-1 text-gray-400'>*</span>
              </h2>
              <div className='mb-6'>
                <img
                  src={productImage || '/placeholder.svg'}
                  alt='Product'
                  className='w-full h-48 object-cover rounded-lg'
                />
              </div>
              <div className='flex gap-3'>
                <label className='bg-[#0F0A33] hover:shadow-lg hover:shadow-blue-700 text-white font-bold text-xs px-10 py-2 rounded-xl cursor-pointer'>
                  EDIT
                  <input
                    type='file'
                    className='hidden'
                    onChange={handleImageUpload}
                    accept='image/*'
                  />
                </label>
                <button
                  type='button'
                  className='bg-[#0075FF] hover:bg-[#0055FF] text-white font-bold text-xs px-10 py-2 rounded-xl'
                  onClick={() => {
                    setProductImage('/placeholder.svg?height=300&width=400');
                    setImageFile(null); // Clear the file as well
                  }}
                >
                  REMOVE
                </button>
              </div>
              {errors.image && (
                <p className='text-red-500 text-xs mt-2'>{errors.image}</p>
              )}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <label className='block text-sm mb-1'>Date</label>
                <div className='relative'>
                  <input
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className='w-full rounded-lg border border-gray-200 p-2 bg-gray-50 appearance-none'
                  ></input>
                </div>
              </div>
              <div>
                <label className='block text-sm mb-1'>Time</label>
                <div className='relative'>
                  <input
                    type='time'
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    className='w-full rounded-lg border border-gray-200 p-2 bg-gray-50 appearance-none'
                  ></input>
                </div>
              </div>
              <div>
                <label className='block text-sm mb-1'>Art</label>
                <div className='relative'>
                  <select
                    value={art}
                    onChange={e => setArt(e.target.value)}
                    className='w-full rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                  >
                    <option value='art'>art</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <label className='block text-sm mb-1'>Grund</label>
              <div className='relative'>
                <select
                  value={grund}
                  onChange={e => setGrund(e.target.value)}
                  className='w-full rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                >
                  <option value='Trash'>Trash</option>
                </select>
                <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
              </div>
            </div>
            <div className='mt-4'>
              <label className='block text-sm mb-1'>Mitarbeiter</label>
              <div className='relative'>
                <select
                  value={mitarbeiter}
                  onChange={e => setMitarbeiter(e.target.value)}
                  className='w-full rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                >
                  <option value='John Doe'>John Doe</option>
                </select>
                <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
              </div>
            </div>
          </div>
          {/* Right Column - Product Information */}
          <div className='w-full md:w-1/2 bg-white p-6 border border-[#C1C1C1] rounded-xl shadow-sm'>
            <h2 className='text-lg font-semibold mb-4'>Product Information</h2>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm mb-1'>Product Name</label>
                <input
                  type='text'
                  placeholder='eg. Hookah'
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  className='w-full rounded-lg border border-gray-200 p-2 pl-3 bg-gray-50'
                />
              </div>
              <div>
                <label className='block text-sm mb-1'>Collection</label>
                <input
                  type='text'
                  placeholder='Daycard'
                  value={collection}
                  onChange={e => setCollection(e.target.value)}
                  className='w-full rounded-lg border border-gray-200 p-2 pl-3 bg-gray-50'
                />
              </div>
              <div>
                <label className='block text-sm mb-1'>Category</label>
                <div className='relative'>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className='w-full rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                  >
                    <option value='Furniture'>Furniture</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
                </div>
              </div>
              <div>
                <label className='block text-sm mb-1'>Artikelnummer</label>
                <input
                  type='text'
                  placeholder='742192419.41'
                  value={artikelnummer}
                  onChange={e => setArtikelnummer(e.target.value)}
                  className='w-full rounded-lg border border-gray-200 p-2 pl-3 bg-gray-50'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='relative inline-block w-10 mr-2 align-middle'>
                    <input
                      type='checkbox'
                      id='notAvailable'
                      checked={notAvailable}
                      onChange={() => setNotAvailable(!notAvailable)}
                      className='opacity-0 absolute h-0 w-0'
                    />
                    <label
                      htmlFor='notAvailable'
                      className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                        notAvailable ? 'bg-green-400' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                          notAvailable ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                  <span className='text-sm'>Nicht Verfügbar</span>
                </div>
                <div className='relative'>
                  <select
                    value={expiryDate}
                    onChange={e => setExpiryDate(e.target.value)}
                    className='rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                  >
                    <option value='23/10/2023|14:30'>23/10/2023|14:30</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='relative inline-block w-10 mr-2 align-middle'>
                    <input
                      type='checkbox'
                      id='discount'
                      checked={discount}
                      onChange={() => setDiscount(!discount)}
                      className='opacity-0 absolute h-0 w-0'
                    />
                    <label
                      htmlFor='discount'
                      className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                        discount ? 'bg-green-400' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
                          discount ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      ></span>
                    </label>
                  </div>
                  <span className='text-sm'>Rabatt in %</span>
                </div>
                <input
                  type='text'
                  placeholder='10%'
                  value={discountValue}
                  onChange={e => setDiscountValue(e.target.value)}
                  className='rounded-lg border border-gray-200 p-2 pl-3 bg-gray-50 w-32'
                  disabled={!discount}
                />
              </div>
              <div>
                <label className='block text-sm mb-1'>Quantity</label>
                <div className='relative'>
                  <select
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    className='w-full rounded-lg border border-gray-200 p-2 pl-3 pr-10 bg-gray-50 appearance-none'
                  >
                    <option value='2'>2</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-3 h-4 w-4 text-gray-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StockGraph />
    </>
  );
};

export default AddNewStock;
