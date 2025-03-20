import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaCaretDown } from 'react-icons/fa';

const ReservationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  });

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
      id: 'floor',
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
      id: 'startTime',
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
      id: 'endTime',
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
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    table: Yup.string().required('Please select a table'),
    floor: Yup.string().required('Please select a floor'),
    startTime: Yup.string().required('Please select a starting time'),
    endTime: Yup.string().required('Please select an ending time'),
    date: Yup.string().required('Please select a date'),
  });

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    table: '',
    floor: '',
    startTime: '',
    endTime: '',
    date: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    // Handle form submission logic here
    setSubmitting(false);
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
            className={`flex items-center text-lg justify-center w-full py-3 ${buttonStyle.bgColor} ${buttonStyle.textColor} font-medium rounded-md mb-4`}
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
            <div className='bg-white px-4 md:px-11 py-9 rounded-2xl shadow-lg border border-gray-100'>
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
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none'
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
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none'
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
                          htmlFor='phone'
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
                            type='number'
                            id='phone'
                            name='phone'
                            placeholder='Type phone number...'
                            className='w-full px-3 py-2 border border-[#C1C1C1] rounded-r-xl outline-none'
                          />
                        </div>
                        <ErrorMessage
                          name='phone'
                          component='div'
                          className='text-red-500 text-sm mt-1'
                        />
                      </div>

                      {/* Email field - moved after phone */}
                      <div className='md:col-span-1'>
                        <label
                          htmlFor='email'
                          className='block font-semibold text-gray-900 mb-1.5'
                        >
                          Email Address
                        </label>
                        <Field
                          type='email'
                          id='email'
                          name='email'
                          placeholder='Type email address...'
                          className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl outline-none'
                        />
                        <ErrorMessage
                          name='email'
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
                        className='w-full px-3 py-2 border border-dashed border-[#C1C1C1] rounded-xl outline-none h-44'
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
                              className='w-full px-3 py-2 border border-[#C1C1C1] rounded-xl cursor-pointer outline-none appearance-none'
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
                            <FaCaretDown size={20} className='absolute right-2 top-3 ' />
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
                        disabled={isSubmitting}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition duration-300'
                      >
                        {isSubmitting ? 'Submitting...' : 'Complete Reservation'}
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
