// import { useRef, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Building, Trash2 } from 'lucide-react';
// import { FaArrowLeft } from 'react-icons/fa';
// import DashboardLayout from '../../../layouts/dashboardLayout';

// const initialValues = {
//   logo: '',
//   restaurantName: '',
//   address: '',
//   contactNumber: '',
//   email: '',
//   website: '',
//   typeOfCuisine: '',
//   operatingHours: '',
//   deliveryAvailable: '',
//   managerName: '',
//   managerContact: '',
//   status: '',
//   seatingCapacity: '',
// };

// const validationSchema = Yup.object({
//   restaurantName: Yup.string().required('Restaurant Name is required'),
//   address: Yup.string().required('Address is required'),
//   contactNumber: Yup.string()
//     .matches(/\d{10}/, 'Contact Number must be 10 digits')
//     .required('Contact Number is required'),
//   email: Yup.string().email('Invalid email format').required('Email is required'),
//   website: Yup.string().url('Invalid URL format'),
//   typeOfCuisine: Yup.string().required('Type of Cuisine is required'),
//   operatingHours: Yup.string().required('Operating Hours are required'),
//   deliveryAvailable: Yup.string().required('Delivery Availability is required'),
//   managerName: Yup.string().required('Manager Name is required'),
//   managerContact: Yup.string()
//     .matches(/\d{10}/, 'Manager Contact must be 10 digits')
//     .required('Manager Contact is required'),
//   status: Yup.string().required('Status is required'),
//   seatingCapacity: Yup.number()
//     .typeError('Seating Capacity must be a number')
//     .positive('Seating Capacity must be positive')
//     .integer('Seating Capacity must be an integer')
//     .required('Seating Capacity is required'),
// });

// const RestaurantAddForm = () => {
//   const fileInputRef = useRef(null);
//   const [image, setImage] = useState('/src/assets/images/restaurant-01.png');

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: values => {
//       console.log('Form Submitted', values);
//     },
//   });

//   const handleImageClick = () => fileInputRef.current.click();

//   const handleFileChange = event => {
//     const file = event.target.files[0];
//     if (file) setImage(URL.createObjectURL(file));
//   };

//   const formFields = [
//     {
//       label: 'Restaurant Name',
//       name: 'restaurantName',
//       type: 'text',
//       placeholder: 'Enter Restaurant Name',
//     },
//     { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter Address' },
//     {
//       label: 'Contact Number',
//       name: 'contactNumber',
//       type: 'text',
//       placeholder: 'Enter Phone Number',
//     },
//     { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
//     { label: 'Website', name: 'website', type: 'text', placeholder: 'Enter Website' },
//     {
//       label: 'Operating Hours',
//       name: 'operatingHours',
//       type: 'text',
//       placeholder: 'Enter Operating Hours',
//     },
//     {
//       label: 'Type of Cuisine',
//       name: 'typeOfCuisine',
//       type: 'text',
//       placeholder: 'Types of cuisines',
//     },
//     {
//       label: 'Delivery Available',
//       name: 'deliveryAvailable',
//       type: 'text',
//       placeholder: 'Availability',
//     },
//     {
//       label: 'Manager Name',
//       name: 'managerName',
//       type: 'text',
//       placeholder: 'Manager Name',
//     },
//     {
//       label: 'Manager Contact',
//       name: 'managerContact',
//       type: 'text',
//       placeholder: 'Manager Contact Number',
//     },
//     { label: 'Status', name: 'status', type: 'text', placeholder: 'Enter Status' },
//     {
//       label: 'Seating Capacity',
//       name: 'seatingCapacity',
//       type: 'text',
//       placeholder: 'Enter Seating Capacity',
//     },
//   ];

//   const [locations, setLocations] = useState([
//     { id: 1, name: 'Downtown Branch', areas: 4 },
//     { id: 2, name: 'Village Branch', areas: 4 },
//     { id: 3, name: 'Downtown Branch', areas: 4 },
//   ]);
//   const [newLocationName, setNewLocationName] = useState('');

//   const handleAddLocation = () => {
//     if (newLocationName.trim() === '') return;

//     const newLocation = {
//       id: Date.now(),
//       name: newLocationName,
//       areas: 0,
//     };
//     setLocations([...locations, newLocation]);
//     setNewLocationName('');
//   };

//   const handleDeleteLocation = id => {
//     setLocations(locations.filter(location => location.id !== id));
//   };

//   const [areas, setAreas] = useState([]);
//   const [newAreaName, setNewAreaName] = useState('');

//   const handleAddArea = () => {
//     if (newAreaName.trim() && !areas.includes(newAreaName.trim())) {
//       setAreas([...areas, newAreaName.trim()]);
//       setNewAreaName('');
//     }
//   };

//   const handleDeleteArea = areaToDelete => {
//     setAreas(areas.filter(area => area !== areaToDelete));
//   };

//   const handleKeyPress = e => {
//     if (e.key === 'Enter') {
//       handleAddArea();
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className='flex w-full items-center mt-9 mb-5'>
//         <FaArrowLeft className='w-6 h-6 mr-2 text-[#282F5A] cursor-pointer' />
//         <span className='text-[#282F5A] text-xl mr-2'>Restaurant Setting &gt;</span>
//         <span className='text-[#282F5A] text-xl font-semibold'>Add Restaurant</span>
//       </div>
//       <div className='my-5 p-6 bg-white rounded-xl border border-[#CCCCCC]'>
//         <div className='flex items-center mb-6'>
//           <img
//             src={image}
//             alt='Restaurant Logo'
//             className='w-20 h-20 rounded-full mr-4 cursor-pointer'
//             onClick={handleImageClick}
//           />
//           <input
//             type='file'
//             ref={fileInputRef}
//             className='hidden'
//             onChange={handleFileChange}
//             accept='image/*'
//           />
//           <div>
//             <h2 className='text-lg font-semibold'>Update Logo</h2>
//             <p className='text-xs text-gray-500'>
//               The site icon is what you see in browser tabs etc. It should be square and
//               at least 512 x 512 pixels.
//             </p>
//           </div>
//         </div>

//         <form onSubmit={formik.handleSubmit} className='grid grid-cols-2 gap-4'>
//           {formFields.map(({ label, name, type, placeholder }) => (
//             <div key={name}>
//               <label className='block text-base font-semibold text-[#131313] mb-1'>
//                 {label}
//               </label>
//               <input
//                 type={type}
//                 name={name}
//                 placeholder={placeholder}
//                 value={formik.values[name]}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
//               />
//               {formik.touched[name] && formik.errors[name] && (
//                 <div className='text-red-500 text-xs mt-1'>{formik.errors[name]}</div>
//               )}
//             </div>
//           ))}
//           <div className='col-span-2 flex justify-end space-x-3 mt-6'>
//             <button
//               type='button'
//               className='px-10 py-2 text-sm text-white bg-[#0075FF] hover:bg-[#0055FF] rounded-xl'
//             >
//               Close
//             </button>
//             <button
//               type='submit'
//               className='px-10 py-2 text-sm bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FFCC] text-white rounded-xl'
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* <div className='flex gap-x-4 mb-6'>

//         <div className='w-full p-6 border-[#CCCCCC] bg-white border rounded-[20px]'>
//           <h2 className='text-lg text-[#131313] font-semibold mb-4'>Locations</h2>
//           <div className='flex mb-4'>
//             <input
//               type='text'
//               placeholder='New Location Name...'
//               value={newLocationName}
//               onChange={e => setNewLocationName(e.target.value)}
//               className='flex-grow mr-3 px-4 py-3 placeholder:text-sm placeholder:text-[#696969] border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl outline-none'
//             />
//             <button
//               onClick={handleAddLocation}
//               className='bg-[#0075FF] text-white text-sm font-semibold px-10 rounded-xl hover:bg-[#0055FF] flex items-center'
//             >
//               <span className='mr-1 mb-1 text-lg'>+</span> Add
//             </button>
//           </div>
//           {locations.map(location => (
//             <div
//               key={location.id}
//               className='flex items-center justify-between mb-2.5 p-3 border hover:border-[#0075FF] rounded-[10px] hover:bg-[#EEF5FF]'
//             >
//               <div className='flex gap-x-3 items-center'>
//                 <Building />
//                 <div className='flex gap-x-6'>
//                   <p className='font-medium'>{location.name}</p>
//                   <p className='text-sm text-gray-500'>({location.areas} areas)</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleDeleteLocation(location.id)}
//                 className='text-[#E54B47] hover:text-[#E52B47] p-2'
//               >
//                 <Trash2 size={20} />
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className='w-full p-6 bg-white rounded-[20px] border border-[#CCCCCC]'>
//           <h2 className='text-xl font-semibold mb-4'>Areas</h2>
//           <div className='flex mb-4'>
//             <input
//               type='text'
//               value={newAreaName}
//               onChange={e => setNewAreaName(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder='New Area Name...'
//               className='flex-grow mr-3 px-4 py-3 placeholder:text-sm placeholder:text-[#696969] border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl outline-none'
//             />
//             <button
//               onClick={handleAddArea}
//               className='bg-[#0075FF] text-white text-sm font-semibold px-10 rounded-xl hover:bg-[#0055FF] flex items-center'
//             >
//               <span className='mr-1 mb-1 text-lg'>+</span> Add
//             </button>
//           </div>
//           {areas.map((area, index) => (
//             <div
//               key={index}
//               className='flex items-center justify-between mb-2.5 p-3 border hover:border-[#0075FF] rounded-[10px] hover:bg-[#EEF5FF]'
//             >
//               <span>{area}</span>
//               <button
//                 onClick={() => handleDeleteArea(area)}
//                 className='text-[#E54B47] hover:text-[#E52B47] p-2'
//               >
//                 <Trash2 size={20} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </DashboardLayout>
//   );
// };

// export default RestaurantAddForm;


import { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { useDispatch } from 'react-redux';
import { addNewRestaurant } from '../../../store/restaurant/restaurantSlice'; // Adjust path as needed

const validationSchema = Yup.object({
  // Section 1 - Restaurant details
  name: Yup.string().required('Restaurant Name is required'),
  ownerName: Yup.string(),
  phoneNumber: Yup.string(),
  email: Yup.string().email('Invalid email format'),
  websiteURL: Yup.string().url('Invalid URL format'),
  description: Yup.string(),
  country: Yup.string().required('Country is required'),
  address: Yup.string(),
  
  // Section 2 - Operational Details
  openingHours: Yup.string(),
  restaurantType: Yup.string(),
  cuisineTypes: Yup.array(),
  diningOptions: Yup.array(),
});

const cuisineOptions = [
  'Italian', 'Chinese', 'Indian', 'Mexican', 'Japanese', 
  'Thai', 'French', 'Mediterranean', 'American', 'Korean'
];

const diningOptionsList = [
  'Dine-in', 'Takeaway', 'Delivery', 'Drive-thru', 'Curbside pickup'
];

const restaurantTypeOptions = [
  'Fast Food', 'Fine Dining', 'Café', 'Casual Dining', 'Food Truck',
  'Buffet', 'Pub', 'Bistro', 'Pizzeria', 'Steakhouse'
];

const RestaurantAddForm = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      // Section 1 - Restaurant details
      name: '',
      ownerName: '',
      phoneNumber: '',
      email: '',
      websiteURL: '',
      description: '',
      country: '',
      address: '',
      status: true,
      
      // Section 2 - Operational Details
      openingHours: '',
      restaurantType: '',
      cuisineTypes: [],
      diningOptions: [],
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      
      // Add all form fields to FormData
      Object.keys(values).forEach(key => {
        if (key === 'cuisineTypes' || key === 'diningOptions') {
          formData.append(key, JSON.stringify(values[key]));
        } else {
          formData.append(key, values[key]);
        }
      });
      
      // Add logo if selected
      if (selectedLogo) {
        formData.append('logo', selectedLogo);
      }
      console.log('Form Data:💖', formData);
      // Dispatch the action to add a new restaurant
      dispatch(addNewRestaurant(formData));
    },
  });

  const handleLogoClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleCuisineTypeChange = (cuisine) => {
    const currentCuisines = [...formik.values.cuisineTypes];
    if (currentCuisines.includes(cuisine)) {
      formik.setFieldValue(
        'cuisineTypes',
        currentCuisines.filter(item => item !== cuisine)
      );
    } else {
      formik.setFieldValue('cuisineTypes', [...currentCuisines, cuisine]);
    }
  };

  const handleDiningOptionChange = (option) => {
    const currentOptions = [...formik.values.diningOptions];
    if (currentOptions.includes(option)) {
      formik.setFieldValue(
        'diningOptions',
        currentOptions.filter(item => item !== option)
      );
    } else {
      formik.setFieldValue('diningOptions', [...currentOptions, option]);
    }
  };

  // Clean up URL objects when component unmounts
  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

  return (
    <DashboardLayout>
      <div className='flex w-full items-center mt-9 mb-5'>
        <FaArrowLeft className='w-6 h-6 mr-2 text-[#282F5A] cursor-pointer' />
        <span className='text-[#282F5A] text-xl mr-2'>Restaurant Setting &gt;</span>
        <span className='text-[#282F5A] text-xl font-semibold'>Add Restaurant</span>
      </div>
      
      <form onSubmit={formik.handleSubmit}>
        {/* Section 1 - Restaurant Details */}
        <div className='my-5 p-6 bg-white rounded-xl border border-[#CCCCCC]'>
          <h2 className='text-xl font-semibold mb-4'>Restaurant Details</h2>
          
          <div className='flex items-center mb-6'>
            <div 
              className='w-20 h-20 rounded-full mr-4 cursor-pointer flex items-center justify-center bg-[#EEF5FF] border border-[#9EC3FF]'
              onClick={handleLogoClick}
            >
              {logoPreview ? (
                <img 
                  src={logoPreview} 
                  alt="Restaurant Logo" 
                  className='w-full h-full rounded-full object-cover'
                />
              ) : (
                <span className='text-[#0075FF] text-4xl'>+</span>
              )}
            </div>
            <input
              type='file'
              ref={fileInputRef}
              className='hidden'
              onChange={handleFileChange}
              accept='image/*'
            />
            <div>
              <h2 className='text-lg font-semibold'>Upload Logo</h2>
              <p className='text-xs text-gray-500'>
                The logo should be square and at least 512 x 512 pixels.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Restaurant Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter Restaurant Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
              {formik.touched.name && formik.errors.name && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.name}</div>
              )}
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Owner Name
              </label>
              <input
                type='text'
                name='ownerName'
                placeholder='Enter Owner Name'
                value={formik.values.ownerName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Phone Number
              </label>
              <input
                type='text'
                name='phoneNumber'
                placeholder='Enter Phone Number'
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter Email Address'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.email}</div>
              )}
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Website URL
              </label>
              <input
                type='text'
                name='websiteURL'
                placeholder='Enter Website URL'
                value={formik.values.websiteURL}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
              {formik.touched.websiteURL && formik.errors.websiteURL && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.websiteURL}</div>
              )}
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Country <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                name='country'
                placeholder='Enter Country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
              {formik.touched.country && formik.errors.country && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.country}</div>
              )}
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Address
              </label>
              <input
                type='text'
                name='address'
                placeholder='Enter Address'
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Status
              </label>
              <div className='flex items-center mt-2'>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    name='status'
                    checked={formik.values.status}
                    onChange={() => formik.setFieldValue('status', !formik.values.status)}
                    className='sr-only peer'
                  />
                  <div className="relative w-11 h-6 bg-[#696969] outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#19DB8C]"></div>
                </label>
                <span className='ml-3 text-sm font-medium text-gray-700'>
                  {formik.values.status ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            
            <div className='col-span-2'>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Description/About
              </label>
              <textarea
                name='description'
                placeholder='Enter Description'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows='4'
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
            </div>
          </div>
        </div>
        
        {/* Section 2 - Operational Details */}
        <div className='my-5 p-6 bg-white rounded-xl border border-[#CCCCCC]'>
          <h2 className='text-xl font-semibold mb-4'>Operational Details</h2>
          
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Opening Hours
              </label>
              <input
                type='text'
                name='openingHours'
                placeholder='e.g., Monday-Sunday: 9:00 AM - 10:00 PM'
                value={formik.values.openingHours}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              />
            </div>
            
            <div>
              <label className='block text-base font-semibold text-[#131313] mb-1'>
                Restaurant Type
              </label>
              <select
                name='restaurantType'
                value={formik.values.restaurantType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              >
                <option value="">Select Restaurant Type</option>
                {restaurantTypeOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className='col-span-2'>
              <label className='block text-base font-semibold text-[#131313] mb-2'>
                Cuisine Types
              </label>
              <div className='flex flex-wrap gap-2'>
                {cuisineOptions.map((cuisine) => (
                  <div key={cuisine} className='flex items-center'>
                    <input
                      type='checkbox'
                      id={`cuisine-${cuisine}`}
                      checked={formik.values.cuisineTypes.includes(cuisine)}
                      onChange={() => handleCuisineTypeChange(cuisine)}
                      className='mr-1'
                    />
                    <label htmlFor={`cuisine-${cuisine}`} className='text-sm mr-3'>
                      {cuisine}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className='col-span-2'>
              <label className='block text-base font-semibold text-[#131313] mb-2'>
                Dining Options
              </label>
              <div className='flex flex-wrap gap-2'>
                {diningOptionsList.map((option) => (
                  <div key={option} className='flex items-center'>
                    <input
                      type='checkbox'
                      id={`dining-${option}`}
                      checked={formik.values.diningOptions.includes(option)}
                      onChange={() => handleDiningOptionChange(option)}
                      className='mr-1'
                    />
                    <label htmlFor={`dining-${option}`} className='text-sm mr-3'>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className='flex justify-end space-x-3 mt-6 mb-10'>
          <button
            type='button'
            className='px-10 py-2 text-sm text-white bg-[#0075FF] hover:bg-[#0055FF] rounded-xl'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-10 py-2 text-sm bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FFCC] text-white rounded-xl'
          >
            Save
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default RestaurantAddForm;