import { useState, useRef } from 'react';

const RestaurantManagementApp = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: '6080 Steubenville Pike',
      category: 'Starter',
      price: '1,230$',
      image: null,
    },
    {
      id: 2,
      name: 'An den Wulzen 7',
      category: 'Main Course',
      price: '1,230$',
      image: null,
    },
  ]);

  const [galleryImages, setGalleryImages] = useState([{ id: 1, image: null }]);

  const [newMenuItem, setNewMenuItem] = useState({
    category: 'Starter',
    name: '',
    description: '',
    image: null,
  });

  // File upload state
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMenuItemChange = e => {
    const { name, value } = e.target;
    setNewMenuItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMenuItem = () => {
    if (newMenuItem.name) {
      const newItem = {
        id: menuItems.length + 1,
        name: newMenuItem.name,
        category: newMenuItem.category,
        price: '1,230$',
        image: preview,
      };

      setMenuItems([...menuItems, newItem]);
      setNewMenuItem({
        category: 'Starter',
        name: '',
        description: '',
        image: null,
      });
      setFile(null);
      setPreview(null);
    }
  };

  const handleDeleteMenuItem = id => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleAddGalleryImage = () => {
    if (preview) {
      const newImage = {
        id: galleryImages.length + 1,
        image: preview,
      };
      setGalleryImages([...galleryImages, newImage]);
      setFile(null);
      setPreview(null);
    } else {
      const newImage = {
        id: galleryImages.length + 1,
        image: null,
      };
      setGalleryImages([...galleryImages, newImage]);
    }
  };

  const handleDeleteGalleryImage = id => {
    setGalleryImages(galleryImages.filter(image => image.id !== id));
  };

  // File handling functions
  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = event => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);

      const reader = new FileReader();
      reader.onload = event => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  return (
    <>
      <div className='mt-5 px-9 py-6 bg-white rounded-xl shadow-md'>
        {/* Tab Navigation */}
        <div className='border-b mb-10'>
          <div className='flex'>
            <button
              className={`py-2.5 px-3 text-xl ${
                activeTab === 'menu'
                  ? 'text-[#00925C] border-b-2 font-bold border-[#00925C]'
                  : 'text-gray-500 font-medium'
              }`}
              onClick={() => setActiveTab('menu')}
            >
              Menu Management
            </button>
            <button
              className={`py-2.5 px-3 text-xl ${
                activeTab === 'gallery'
                  ? 'text-[#00925C] font-bold border-b-2 border-[#00925C]'
                  : 'text-gray-500 font-medium'
              }`}
              onClick={() => setActiveTab('gallery')}
            >
              Gallery Management
            </button>
          </div>
        </div>

        {/* Menu Management */}
        {activeTab === 'menu' && (
          <>
            <div className='flex justify-between items-center mb-5'>
              <h2 className='text-lg text-[#1A2042] font-semibold'>Add New Menu Item</h2>
              <button
                className='bg-[#0075FF] hover:bg-[#0055FF] text-white text-base font-medium rounded-full px-10 py-2'
                onClick={handleAddMenuItem}
              >
                Add Dish
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 px-3 gap-6 mb-6'>
              <div>
                <label className='block text-[#1A2042] text-lg font-medium mb-1'>
                  Category
                </label>
                <select
                  name='category'
                  value={newMenuItem.category}
                  onChange={handleMenuItemChange}
                  className='w-full p-2.5 outline-none cursor-pointer border border-[#9EC3FF] rounded-xl bg-[#EEF5FF]'
                >
                  <option>Starter</option>
                  <option>Main Course</option>
                  <option>Dessert</option>
                  <option>Drinks</option>
                </select>
              </div>

              <div>
                <label className='block text-[#1A2042] text-lg font-medium mb-1'>
                  Dish Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={newMenuItem.name}
                  onChange={handleMenuItemChange}
                  placeholder='Fettuccine Alfredo'
                  className='w-full p-2.5 outline-none border border-[#9EC3FF] rounded-xl bg-[#EEF5FF]'
                />
              </div>

              <div>
                <label className='block text-[#1A2042] text-lg font-medium mb-1'>
                  Description
                </label>
                <textarea
                  name='description'
                  value={newMenuItem.description}
                  onChange={handleMenuItemChange}
                  placeholder='Lorem ipsum dolor sit amet...'
                  className='w-full p-3 outline-none border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] h-28'
                />
              </div>

              <div>
                <label className='block text-[#1A2042] text-lg font-medium mb-1'>
                  Upload Image
                </label>
                <div className='flex flex-col items-center w-full'>
                  <div
                    className={`flex items-center justify-center h-28 w-full outline-none border rounded-xl relative ${
                      isDragging ? 'bg-[#EEF5FF]' : 'bg-blue-50 border-[#9EC3FF]'
                    } ${preview ? 'p-2' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {preview ? (
                      <div className='relative w-full h-full'>
                        <img
                          src={preview}
                          alt='Preview'
                          className='h-full mx-auto object-contain'
                        />
                      </div>
                    ) : (
                      <div className='text-center'>
                        <div className='flex justify-center'>
                          <svg
                            className='w-8 h-8 text-blue-300'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                            ></path>
                          </svg>
                        </div>
                        <p className='text-sm text-gray-500 mt-1'>
                          {isDragging ? 'Drop to Upload' : 'Drag File to Upload'}
                        </p>
                        {file && (
                          <p className='text-xs text-[#0075FF] mt-1'>{file.name}</p>
                        )}
                      </div>
                    )}

                    <input
                      type='file'
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className='hidden'
                      accept='image/*'
                    />

                    <button
                      onClick={handleButtonClick}
                      className='absolute bottom-2 right-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl px-3 py-1.5 text-xs'
                    >
                      Choose Picture
                    </button>
                  </div>

                  {file && (
                    <div className='mt-2 text-sm text-gray-600'>
                      File: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b bg-[#EEF5FF] text-base font-semibold text-[#131313]'>
                    <th className='py-2 px-6 text-left'>Image</th>
                    <th className='py-2 px-6 text-left'>Name</th>
                    <th className='py-2 px-6 text-left'>Category</th>
                    <th className='py-2 px-6 text-left'>Price</th>
                    <th className='py-2 px-6 text-left'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map(item => (
                    <tr key={item.id} className='border-b'>
                      <td className='py-3 px-6'>
                        <div className='w-10 h-10 border-2 rounded-full bg-transpa flex items-center justify-center overflow-hidden'>
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className='w-full h-full object-cover'
                            />
                          ) : (
                            <span className='text-white text-lg'>🍔</span>
                          )}
                        </div>
                      </td>
                      <td className='py-3 px-6 text-sm'>{item.name}</td>
                      <td className='py-3 px-6 text-sm'>{item.category}</td>
                      <td className='py-3 px-6 text-sm'>{item.price}</td>
                      <td className='py-3 px-6 text-sm'>
                        <div className='flex space-x-2'>
                          <button className='text-blue-600'>
                            <svg
                              className='w-5 h-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                              ></path>
                            </svg>
                          </button>
                          <button
                            className='text-red-600'
                            onClick={() => handleDeleteMenuItem(item.id)}
                          >
                            <svg
                              className='w-5 h-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Gallery Management */}
        {activeTab === 'gallery' && (
          <>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-[#1A2042] text-lg font-semibold'>
                Add New Gallery Image
              </h2>
              <button
                className='bg-[#0075FF] hover:bg-[#0055FF] text-base font-medium text-white rounded-full px-5 py-2'
                onClick={handleAddGalleryImage}
              >
                Add to Gallery
              </button>
            </div>

            <div className='mb-8'>
              <label className='block text-[#1A2042] text-lg font-medium mb-2'>
                Upload Image
              </label>
              <div
                className={`flex items-center justify-center h-32 w-full border rounded-xl relative ${
                  isDragging
                    ? 'bg-blue-100 border-[#9EC3FF]'
                    : 'bg-blue-50 border-blue-200'
                } ${preview ? 'p-2' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {preview ? (
                  <div className='relative w-full h-full'>
                    <img
                      src={preview}
                      alt='Preview'
                      className='h-full mx-auto object-contain'
                    />
                  </div>
                ) : (
                  <div className='text-center'>
                    <div className='flex justify-center'>
                      <svg
                        className='w-8 h-8 text-blue-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        ></path>
                      </svg>
                    </div>
                    <p className='text-xs text-[#696969] mt-1'>
                      {isDragging ? 'Drop to Upload' : 'Drag File to Upload'}
                    </p>
                    {file && <p className='text-xs text-blue-500 mt-1'>{file.name}</p>}
                  </div>
                )}

                <input
                  type='file'
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className='hidden'
                  accept='image/*'
                />

                <button
                  onClick={handleButtonClick}
                  className='absolute bottom-2 right-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl mb-2 mr-2 px-3 py-1.5 text-sm'
                >
                  Choose Picture
                </button>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {galleryImages.map(image => (
                <div
                  key={image.id}
                  className='border rounded-md relative overflow-hidden h-48'
                >
                  <button
                    className='absolute top-2 right-2 bg-red-500 text-white p-2 rounded-md z-10'
                    onClick={() => handleDeleteGalleryImage(image.id)}
                  >
                    <svg
                      className='w-4 h-4'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                      ></path>
                    </svg>
                  </button>
                  {image.image ? (
                    <img
                      src={image.image}
                      alt='Gallery item'
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-gray-400'>
                      <img
                        src='/api/placeholder/400/320'
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )}
                </div>
              ))}
              <div className='border rounded-md h-48 flex items-center justify-center text-gray-400'>
                <p>Empty slot</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantManagementApp;
