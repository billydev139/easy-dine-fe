import { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Building, Trash2 } from 'lucide-react';
import { FaArrowLeft } from 'react-icons/fa';
import DashboardLayout from '../../../layouts/dashboardLayout';

const initialValues = {
  logo: '',
  restaurantName: '',
  address: '',
  contactNumber: '',
  email: '',
  website: '',
  typeOfCuisine: '',
  operatingHours: '',
  deliveryAvailable: '',
  managerName: '',
  managerContact: '',
  status: '',
  seatingCapacity: '',
};

const validationSchema = Yup.object({
  restaurantName: Yup.string().required('Restaurant Name is required'),
  address: Yup.string().required('Address is required'),
  contactNumber: Yup.string()
    .matches(/\d{10}/, 'Contact Number must be 10 digits')
    .required('Contact Number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  website: Yup.string().url('Invalid URL format'),
  typeOfCuisine: Yup.string().required('Type of Cuisine is required'),
  operatingHours: Yup.string().required('Operating Hours are required'),
  deliveryAvailable: Yup.string().required('Delivery Availability is required'),
  managerName: Yup.string().required('Manager Name is required'),
  managerContact: Yup.string()
    .matches(/\d{10}/, 'Manager Contact must be 10 digits')
    .required('Manager Contact is required'),
  status: Yup.string().required('Status is required'),
  seatingCapacity: Yup.number()
    .typeError('Seating Capacity must be a number')
    .positive('Seating Capacity must be positive')
    .integer('Seating Capacity must be an integer')
    .required('Seating Capacity is required'),
});

const RestaurantEditForm = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState('/src/assets/images/restaurant-01.png');

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log('Form Submitted', values);
    },
  });

  const handleImageClick = () => fileInputRef.current.click();

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const formFields = [
    {
      label: 'Restaurant Name',
      name: 'restaurantName',
      type: 'text',
      placeholder: 'Enter Restaurant Name',
    },
    { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter Address' },
    {
      label: 'Contact Number',
      name: 'contactNumber',
      type: 'text',
      placeholder: 'Enter Phone Number',
    },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
    { label: 'Website', name: 'website', type: 'text', placeholder: 'Enter Website' },
    {
      label: 'Operating Hours',
      name: 'operatingHours',
      type: 'text',
      placeholder: 'Enter Operating Hours',
    },
    {
      label: 'Type of Cuisine',
      name: 'typeOfCuisine',
      type: 'text',
      placeholder: 'Types of cuisines',
    },
    {
      label: 'Delivery Available',
      name: 'deliveryAvailable',
      type: 'text',
      placeholder: 'Availability',
    },
    {
      label: 'Manager Name',
      name: 'managerName',
      type: 'text',
      placeholder: 'Manager Name',
    },
    {
      label: 'Manager Contact',
      name: 'managerContact',
      type: 'text',
      placeholder: 'Manager Contact Number',
    },
    { label: 'Status', name: 'status', type: 'text', placeholder: 'Enter Status' },
    {
      label: 'Seating Capacity',
      name: 'seatingCapacity',
      type: 'text',
      placeholder: 'Enter Seating Capacity',
    },
  ];

  const [locations, setLocations] = useState([
    { id: 1, name: 'Downtown Branch', areas: 4 },
    { id: 2, name: 'Village Branch', areas: 4 },
    { id: 3, name: 'Downtown Branch', areas: 4 },
  ]);
  const [newLocationName, setNewLocationName] = useState('');

  const handleAddLocation = () => {
    if (newLocationName.trim() === '') return;

    const newLocation = {
      id: Date.now(),
      name: newLocationName,
      areas: 0,
    };
    setLocations([...locations, newLocation]);
    setNewLocationName('');
  };

  const handleDeleteLocation = id => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const [areas, setAreas] = useState([]);
  const [newAreaName, setNewAreaName] = useState('');

  const handleAddArea = () => {
    if (newAreaName.trim() && !areas.includes(newAreaName.trim())) {
      setAreas([...areas, newAreaName.trim()]);
      setNewAreaName('');
    }
  };

  const handleDeleteArea = areaToDelete => {
    setAreas(areas.filter(area => area !== areaToDelete));
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleAddArea();
    }
  };

  return (
    <DashboardLayout>
      <div className='flex w-full items-center mt-9 mb-5'>
        <FaArrowLeft className='w-6 h-6 mr-2 text-[#282F5A] cursor-pointer' />
        <span className='text-[#282F5A] text-xl mr-2'>Restaurant Setting &gt;</span>
        <span className='text-[#282F5A] text-xl font-semibold'>Edit Restaurant</span>
      </div>
      <div className='my-5 p-6 bg-white rounded-xl border border-[#CCCCCC]'>
        <div className='flex items-center mb-6'>
          <img
            src={image}
            alt='Restaurant Logo'
            className='w-20 h-20 rounded-full mr-4 cursor-pointer'
            onClick={handleImageClick}
          />
          <input
            type='file'
            ref={fileInputRef}
            className='hidden'
            onChange={handleFileChange}
            accept='image/*'
          />
          <div>
            <h2 className='text-lg font-semibold'>Update Logo</h2>
            <p className='text-xs text-gray-500'>
              The site icon is what you see in browser tabs etc. It should be square and
              at least 512 x 512 pixels.
            </p>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className='grid grid-cols-2 gap-4'>
          {formFields.map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                {label}
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
              {formik.touched[name] && formik.errors[name] && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors[name]}</div>
              )}
            </div>
          ))}
          <div className='col-span-2 flex justify-end space-x-3 mt-6'>
            <button
              type='button'
              className='px-10 py-2 text-sm text-white bg-[#0075FF] hover:bg-[#0055FF] rounded-xl'
            >
              Close
            </button>
            <button
              type='submit'
              className='px-10 py-2 text-sm bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FFCC] text-white rounded-xl'
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* <div className='flex gap-x-4 mb-6'>
       
        <div className='w-full p-6 border-[#CCCCCC] bg-white border rounded-[20px]'>
          <h2 className='text-lg text-[#131313] font-semibold mb-4'>Locations</h2>
          <div className='flex mb-4'>
            <input
              type='text'
              placeholder='New Location Name...'
              value={newLocationName}
              onChange={e => setNewLocationName(e.target.value)}
              className='flex-grow mr-3 px-4 py-3 placeholder:text-sm placeholder:text-[#696969] border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl outline-none'
            />
            <button
              onClick={handleAddLocation}
              className='bg-[#0075FF] text-white text-sm font-semibold px-10 rounded-xl hover:bg-[#0055FF] flex items-center'
            >
              <span className='mr-1 mb-1 text-lg'>+</span> Add
            </button>
          </div>
          {locations.map(location => (
            <div
              key={location.id}
              className='flex items-center justify-between mb-2.5 p-3 border hover:border-[#0075FF] rounded-[10px] hover:bg-[#EEF5FF]'
            >
              <div className='flex gap-x-3 items-center'>
                <Building />
                <div className='flex gap-x-6'>
                  <p className='font-medium'>{location.name}</p>
                  <p className='text-sm text-gray-500'>({location.areas} areas)</p>
                </div>
              </div>
              <button
                onClick={() => handleDeleteLocation(location.id)}
                className='text-[#E54B47] hover:text-[#E52B47] p-2'
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className='w-full p-6 bg-white rounded-[20px] border border-[#CCCCCC]'>
          <h2 className='text-xl font-semibold mb-4'>Areas</h2>
          <div className='flex mb-4'>
            <input
              type='text'
              value={newAreaName}
              onChange={e => setNewAreaName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='New Area Name...'
              className='flex-grow mr-3 px-4 py-3 placeholder:text-sm placeholder:text-[#696969] border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl outline-none'
            />
            <button
              onClick={handleAddArea}
              className='bg-[#0075FF] text-white text-sm font-semibold px-10 rounded-xl hover:bg-[#0055FF] flex items-center'
            >
              <span className='mr-1 mb-1 text-lg'>+</span> Add
            </button>
          </div>
          {areas.map((area, index) => (
            <div
              key={index}
              className='flex items-center justify-between mb-2.5 p-3 border hover:border-[#0075FF] rounded-[10px] hover:bg-[#EEF5FF]'
            >
              <span>{area}</span>
              <button
                onClick={() => handleDeleteArea(area)}
                className='text-[#E54B47] hover:text-[#E52B47] p-2'
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </DashboardLayout>
  );
};

export default RestaurantEditForm;
