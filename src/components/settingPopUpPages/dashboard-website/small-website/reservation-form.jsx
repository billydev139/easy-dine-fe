import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import {addNewReservation} from '../../../../store/reservationSlice/reservationSlice';

const ReservationForm = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  });
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setButtonStyle({
      bgColor: isOpen ? 'bg-blue-600' : 'bg-blue-400',
      textColor: isOpen ? 'text-white' : 'text-gray-900',
    });
  };

  const selectFields = [
    {
      id: 'table',
      label: 'Select Table',
      options: [
        { value: '', label: 'Table1', disabled: true },
        { value: 'table1', label: 'Table 1 (2 persons)' },
        { value: 'table2', label: 'Table 2 (4 persons)' },
        { value: 'table3', label: 'Table 3 (6 persons)' },
      ],
      gridCols: 'md:col-span-1',
    },
    {
      id: 'floorNumber',
      label: 'Floor #',
      options: [
        { value: '', label: 'Floor 1', disabled: true },
        { value: 'floor1', label: 'Floor 1' },
        { value: 'floor2', label: 'Floor 2' },
        { value: 'floor3', label: 'Floor 3' },
      ],
      gridCols: 'md:col-span-1',
    },
    {
      id: 'startingTime',
      label: 'Starting Time',
      options: [
        { value: '', label: 'Select time', disabled: true },
        { value: '17:00', label: '5:00 PM' },
        { value: '18:00', label: '6:00 PM' },
        { value: '19:00', label: '7:00 PM' },
        { value: '20:00', label: '8:00 PM' },
      ],
      gridCols: 'md:col-span-1',
    },
    {
      id: 'endingTime',
      label: 'Ending Time',
      options: [
        { value: '', label: 'Select time', disabled: true },
        { value: '19:00', label: '7:00 PM' },
        { value: '20:00', label: '8:00 PM' },
        { value: '21:00', label: '9:00 PM' },
        { value: '22:00', label: '10:00 PM' },
      ],
      gridCols: 'md:col-span-1',
    },
    {
      id: 'date',
      label: 'Select Date',
      options: [
        { value: '', label: 'Select date', disabled: true },
        { value: '2025-03-20', label: 'March 20, 2025' },
        { value: '2025-03-21', label: 'March 21, 2025' },
        { value: '2025-03-22', label: 'March 22, 2025' },
        { value: '2025-03-23', label: 'March 23, 2025' },
      ],
      gridCols: 'md:col-span-2',
    },
  ];

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    emailAddress: Yup.string().email('Invalid email address').required('Email is required'),
    table: Yup.string().required('Please select a table'),
    floorNumber: Yup.string().required('Please select a floor'),
    startingTime: Yup.string().required('Please select a starting time'),
    endingTime: Yup.string().required('Please select an ending time'),
    date: Yup.string().required('Please select a date'),
  });

  // Initial form values - updated to match your backend model
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    table: '',
    floorNumber: '',
    startingTime: '',
    endingTime: '',
    date: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsLoading(true);
    
    try {
     
      // Format dates for backend
      const formattedData = {
        ...values,
        startingTime: formatDateTimeForBackend(values.date, values.startingTime),
        endingTime: formatDateTimeForBackend(values.date, values.endingTime),
        date: new Date(values.date),
        restaurantId: "67e3e27803c48233005233b6" // Replace with actual restaurant ID or dynamic value
      };      
      const response = await dispatch (addNewReservation(formattedData));
      console.log('Reservation created:', response);
      
      toast.success('Reservation completed successfully!');
      resetForm();
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error(error.message || 'Failed to complete reservation. Please try again.');
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };
  
  // Function to format date and time for backend
  const formatDateTimeForBackend = (date, time) => {
    const [hours, minutes] = time.split(':');
    const reservationDate = new Date(date);
    reservationDate.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
    return reservationDate;
  };

  return (
    <div className='bg-blue-50 py-10'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl px-8 md:px-36 font-bold text-gray-900 mb-7'>
            Book Your Table for a Dining Experience
          </h1>
          <p className='text-gray-600 font-semibold'>
            Secure your spot at our restaurant with ease in just a few clicks
          </p>
        </div>

        <div className='w-full'>
          <button
            onClick={toggleForm}
            type='button'
            className={`flex items-center text-lg justify-center w-full py-3 ${buttonStyle.bgColor} ${buttonStyle.textColor} font-medium rounded-md mb-4 transition-all duration-300`}
          >
            Make a Reservation
            <ChevronDown
              className={`ml-2 ${
                isOpen ? 'transform duration-300 rotate-180' : 'duration-300'
              }`}
              size={20}
            />
          </button>

          {isOpen && (
            <div className='bg-white px-4 md:px-11 py-9 rounded-2xl shadow-lg border border-gray-100 animate-[accordionDown_0.3s_ease-out]'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                      {/* First name and Last name fields */}
                      <div className='md:col-span-1'>
                        <label
                          htmlFor='firstName'
                          className='block font-semibold text-gray-900 mb-1.5'
                        >
                          First Name
                        </label>
                        <Field
                          type='text'
                          id='firstName'
                          name='firstName'
                          placeholder='Type First Name...'
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                        />
                        <ErrorMessage
                          name='firstName'
                          component='div'
                          className='text-red-500 text-sm font-medium mt-1'
                        />
                      </div>

                      <div className='md:col-span-1'>
                        <label
                          htmlFor='lastName'
                          className='block font-semibold text-gray-900 mb-1.5'
                        >
                          Last Name
                        </label>
                        <Field
                          type='text'
                          id='lastName'
                          name='lastName'
                          placeholder='Type Last Name...'
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                        />
                        <ErrorMessage
                          name='lastName'
                          component='div'
                          className='text-red-500 text-sm font-medium mt-1'
                        />
                      </div>

                      {/* Phone field */}
                      <div className='md:col-span-1'>
                        <label
                          htmlFor='phoneNumber'
                          className='block font-semibold text-gray-900 mb-1.5'
                        >
                          Phone Number
                        </label>
                        <div className='flex'>
                          <div className='flex items-center px-3 bg-blue-200 border border-r-0 border-[#C1C1C1] rounded-l-xl'>
                            <span className='text-gray-900 text-sm font-medium'>+1</span>
                            <ChevronDown size={16} className='ml-1 text-gray-900' />
                          </div>
                          <Field
                            type='text'
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='Type phone number...'
                            className='w-full px-3 py-2 border border-[#C1C1C1] rounded-r-xl outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                          />
                        </div>
                        <ErrorMessage
                          name='phoneNumber'
                          component='div'
                          className='text-red-500 text-sm mt-1'
                        />
                      </div>

                      {/* Email field - moved after phone */}
                      <div className='md:col-span-1'>
                        <label
                          htmlFor='emailAddress'
                          className='block font-semibold text-gray-900 mb-1.5'
                        >
                          Email Address
                        </label>
                        <Field
                          type='email'
                          id='emailAddress'
                          name='emailAddress'
                          placeholder='Type email address...'
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                        />
                        <ErrorMessage
                          name='emailAddress'
                          component='div'
                          className='text-red-500 text-sm font-medium mt-1'
                        />
                      </div>
                    </div>

                    {/* Address field */}
                    <div className='mb-4'>
                      <label
                        htmlFor='address'
                        className='block font-semibold text-gray-900 mb-1.5'
                      >
                        Address (Optional)
                      </label>
                      <Field
                        as='textarea'
                        id='address'
                        name='address'
                        placeholder='Type your Address...'
                        className='w-full px-3 py-2 border border-dashed border-[#C1C1C1] rounded-xl outline-none h-44 focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                      />
                    </div>

                    {/* Select fields */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                      {selectFields.map(field => (
                        <div key={field.id} className={field.gridCols}>
                          <label
                            htmlFor={field.id}
                            className='block font-semibold text-gray-900 mb-1.5'
                          >
                            {field.label}
                          </label>
                          <div className='relative'>
                            <Field
                              as='select'
                              id={field.id}
                              name={field.id}
                              className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl cursor-pointer outline-none appearance-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400'
                            >
                              {field.options.map(option => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  disabled={option.disabled}
                                >
                                  {option.label}
                                </option>
                              ))}
                            </Field>
                            <FaCaretDown size={20} className='absolute right-2 top-3 text-gray-500' />
                          </div>
                          <ErrorMessage
                            name={field.id}
                            component='div'
                            className='text-red-500 text-sm mt-1'
                          />
                        </div>
                      ))}
                    </div>

                    {/* Submit button */}
                    <div className='mt-6'>
                      <button
                        type='submit'
                        disabled={isSubmitting || isLoading}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-300 flex items-center justify-center'
                      >
                        {(isSubmitting || isLoading) ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : 'Complete Reservation'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
