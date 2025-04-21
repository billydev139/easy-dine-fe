
import { useRef, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaArrowLeft } from 'react-icons/fa';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { useDispatch } from 'react-redux';
import { addNewRestaurant } from '../../../store/restaurant/restaurantSlice';
import Swal from 'sweetalert2';

// Country data for dropdown
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", 
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", 
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", 
  "Democratic Republic of the Congo", "Denmark", "Djibouti", 
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
  "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", 
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", 
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", 
  "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", 
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
  "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", 
  "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", 
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
  "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", 
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const openingHoursOptions = [   
  { value: "06:00", label: "06:00 AM" },   
  { value: "07:00", label: "07:00 AM" },   
  { value: "08:00", label: "08:00 AM" },   
  { value: "09:00", label: "09:00 AM" },   
  { value: "10:00", label: "10:00 AM" },   
  { value: "11:00", label: "11:00 AM" },   
  { value: "12:00", label: "12:00 PM" },   
  { value: "13:00", label: "01:00 PM" },   
  { value: "14:00", label: "02:00 PM" },   
  { value: "15:00", label: "03:00 PM" },   
  { value: "16:00", label: "04:00 PM" },   
  { value: "17:00", label: "05:00 PM" },   
  { value: "18:00", label: "06:00 PM" },   
  { value: "19:00", label: "07:00 PM" },   
  { value: "20:00", label: "08:00 PM" },   
  { value: "21:00", label: "09:00 PM" },   
  { value: "22:00", label: "10:00 PM" },   
  { value: "23:00", label: "11:00 PM" }, 
];

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
  openingTime: Yup.string().required('Opening time is required'),
  closingTime: Yup.string().required('Closing time is required'),
  restaurantType: Yup.string(),
  cuisineTypes: Yup.array().max(3, 'You can select up to 3 cuisine types'),
  diningOptions: Yup.array().max(3, 'You can select up to 3 dining options'),
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
      openingTime: '',
      closingTime: '',
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
      console.log('🚀 ~ formData:', formData);
      
      // Dispatch the action to add a new restaurant
      dispatch(addNewRestaurant(formData))
      .then((action) => {
        if (action.payload) {
          // Success case
          Swal.fire({
            title: 'Success!',
            text: 'Restaurant added successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else if (action.error) {
          // Error case
          throw new Error(action.error.message || 'Failed to add restaurant');
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Failed to add restaurant',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
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
    } else if (currentCuisines.length < 3) {
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
    } else if (currentOptions.length < 3) {
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
              <select
                name='country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='w-full px-4 text-[#131313] py-2.5 border rounded-xl border-[#9EC3FF] bg-[#EEF5FF] outline-none text-sm'
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
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
            {/* Opening Hours Section */}
            <div className="col-span-2">
              <label className='block text-base font-semibold text-[#131313] mb-2'>
                Opening Hours <span className='text-red-500'>*</span>
              </label>
              <div className="flex gap-4">
                <select
                  name="openingTime"
                  value={formik.values.openingTime}
                  onChange={(e) => {
                    formik.setFieldValue('openingTime', e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px] focus:outline-none"
                >
                  <option value="">Select Opening Time</option>
                  {openingHoursOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <select
                  name="closingTime"
                  value={formik.values.closingTime}
                  onChange={(e) => {
                    formik.setFieldValue('closingTime', e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px] focus:outline-none"
                >
                  <option value="">Select Closing Time</option>
                  {openingHoursOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {formik.touched.openingTime && formik.errors.openingTime && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.openingTime}</div>
              )}
              {formik.touched.closingTime && formik.errors.closingTime && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.closingTime}</div>
              )}
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
                Cuisine Types (Max 3)
              </label>
              <div className='flex flex-wrap gap-4'>
                {cuisineOptions.map((cuisine) => (
                  <div key={cuisine} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cuisine-${cuisine}`}
                      checked={formik.values.cuisineTypes.includes(cuisine)}
                      onChange={() => handleCuisineTypeChange(cuisine)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`cuisine-${cuisine}`}
                      className={`px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                        formik.values.cuisineTypes.includes(cuisine)
                          ? 'bg-[#0075FF] text-white border-[#0075FF]'
                          : 'bg-[#EEF5FF] text-[#131313] border-[#9EC3FF]'
                      }`}
                    >
                      {cuisine}
                    </label>
                  </div>
                ))}
              </div>
              {formik.touched.cuisineTypes && formik.errors.cuisineTypes && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.cuisineTypes}</div>
              )}
            </div>
            
            <div className='col-span-2'>
              <label className='block text-base font-semibold text-[#131313] mb-2'>
                Dining Options (Max 3)
              </label>
              <div className='flex flex-wrap gap-4'>
                {diningOptionsList.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`dining-${option}`}
                      checked={formik.values.diningOptions.includes(option)}
                      onChange={() => handleDiningOptionChange(option)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`dining-${option}`}
                      className={`px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                        formik.values.diningOptions.includes(option)
                          ? 'bg-[#0075FF] text-white border-[#0075FF]'
                          : 'bg-[#EEF5FF] text-[#131313] border-[#9EC3FF]'
                      }`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {formik.touched.diningOptions && formik.errors.diningOptions && (
                <div className='text-red-500 text-xs mt-1'>{formik.errors.diningOptions}</div>
              )}
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