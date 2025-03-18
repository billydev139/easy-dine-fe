import { useState } from 'react';

const SocialMediaForm = () => {
  const [links, setLinks] = useState({
    google: '',
    facebook: '',
    instagram: '',
    youtube: '',
    twitter: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setLinks(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // const validateUrl = url => {
  //   try {
  //     new URL(url);
  //     return true;
  //   } catch (err) {
  //     return false;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate URLs
    let newErrors = {};
    let isValid = true;

    // if (links && typeof links === 'object') {
    //   Object.entries(links).forEach(([key, value]) => {
    //     if (typeof value === 'string' && value.trim() && !validateUrl(value.trim())) {
    //       newErrors[key] = 'Please enter a valid URL';
    //       isValid = false;
    //     }
    //   });
    // }

    setErrors(newErrors);

    if (isValid) {
      console.log('Form submitted with data:', links);
      setSubmitted(true);

      // Reset form after successful submission (optional)
      // setLinks({
      //   google: '',
      //   facebook: '',
      //   instagram: '',
      //   youtube: '',
      //   twitter: ''
      // });
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-md p-7 my-5'>
      <h2 className='text-lg font-semibold text-[#1A2042] mt-2 mb-6'>
        Social Media Links
      </h2>

      {submitted && (
        <div className='mb-4 p-3 bg-green-100 text-green-700 rounded'>
          Your social media links have been saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='space-y-5'>
          <div className='flex gap-x-28 items-center'>
            <label
              htmlFor='google'
              className='block text-base font-medium whitespace-nowrap text-[#1A2042]'
            >
              Google URL
            </label>
            <input
              type='text'
              id='google'
              name='google'
              value={links.google}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
              placeholder='https://google.com/...'
            />
            {errors.google && (
              <p className='mt-1 text-sm text-red-600'>{errors.google}</p>
            )}
          </div>

          <div className='flex gap-x-[92px] items-center'>
            <label
              htmlFor='facebook'
              className='block text-base font-medium whitespace-nowrap text-[#1A2042]'
            >
              Facebook URL
            </label>
            <input
              type='text'
              id='facebook'
              name='facebook'
              value={links.facebook}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
              placeholder='https://facebook.com/...'
            />
            {errors.facebook && (
              <p className='mt-1 text-sm text-red-600'>{errors.facebook}</p>
            )}
          </div>

          <div className='flex gap-x-[92px] items-center'>
            <label
              htmlFor='instagram'
              className='block whitespace-nowrap text-base font-medium text-[#1A2042]'
            >
              Instagram URL
            </label>
            <input
              type='text'
              id='instagram'
              name='instagram'
              value={links.instagram}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
              placeholder='https://instagram.com/...'
            />
            {errors.instagram && (
              <p className='mt-1 text-sm text-red-600'>{errors.instagram}</p>
            )}
          </div>

          <div className='flex gap-x-[105px] items-center'>
            <label
              htmlFor='youtube'
              className='block whitespace-nowrap text-base font-medium text-[#1A2042]'
            >
              Youtube URL
            </label>
            <input
              type='text'
              id='youtube'
              name='youtube'
              value={links.youtube}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
              placeholder='https://youtube.com/...'
            />
            {errors.youtube && (
              <p className='mt-1 text-sm text-red-600'>{errors.youtube}</p>
            )}
          </div>

          <div className='flex gap-x-[116px] items-center'>
            <label
              htmlFor='twitter'
              className='block whitespace-nowrap text-base font-medium text-[#1A2042]'
            >
              Twitter URL
            </label>
            <input
              type='text'
              id='twitter'
              name='twitter'
              value={links.twitter}
              onChange={handleChange}
              className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
              placeholder='https://twitter.com/...'
            />
            {errors.twitter && (
              <p className='mt-1 text-sm text-red-600'>{errors.twitter}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialMediaForm;
