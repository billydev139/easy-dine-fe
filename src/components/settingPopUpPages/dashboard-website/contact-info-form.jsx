import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert(`Form submitted with Phone: ${formData.phoneNumber}, Email: ${formData.email}`);
  };

  return (
    <div className='bg-white dark:bg-[#222630] rounded-[10px] shadow-md py-5 px-12 mt-5'>
      <h2 className='dark:text-white text-xl font-bold mb-5'>Contact Information</h2>

      <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-x-32 pb-5'>
          <label
            htmlFor='phoneNumber'
            className='block text-lg font-semibold whitespace-nowrap text-[#1A2042] dark:text-white'
          >
            Phone Number
          </label>
          <div className='flex w-full'>
            <select className='bg-[#EEF5FF] outline-none border border-[#9EC3FF] text-[#131313] text-sm rounded-l-xl py-2.5 px-1 cursor-pointer'>
              <option value='+91'>+92</option>
              <option value='+1'>+1</option>
              <option value='+1'>+7</option>
              <option value='+44'>+44</option>
              <option value='+61'>+61</option>
            </select>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='Type your phone number...'
              className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#696969] text-sm rounded-r-xl outline-none block w-full p-2.5'
            />
          </div>
        </div>

        <div className='flex items-center gap-x-[132px] mb-4'>
          <label
            htmlFor='email'
            className='block text-lg font-semibold whitespace-nowrap text-[#1A2042] dark:text-white mb-1'
          >
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Type your address...'
            className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#696969] outline-none text-sm rounded-xl block w-full p-2.5'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
