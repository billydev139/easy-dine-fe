import { useState } from 'react';

export default function EmailTemplateForm() {
  const [formData, setFormData] = useState({
    templateName: 'Invoice Letter Payment',
    emailSubject: 'Your Invoice #(number)',
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSaved(true);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCancel = () => {
    setFormData({
      templateName: '',
      emailSubject: '',
    });
    console.log('Form canceled');
  };

  return (
    <div className='bg-white p-6'>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-base font-semibold text-[#131313] mb-2'>
            Template Name
          </label>
          <input
            type='text'
            name='templateName'
            value={formData.templateName}
            onChange={handleChange}
            className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block text-base font-semibold text-[#131313] mb-2'>
            Email Subject
          </label>
          <input
            type='text'
            name='emailSubject'
            value={formData.emailSubject}
            onChange={handleChange}
            className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
            required
          />
        </div>

        <div className='flex justify-end gap-x-4'>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`px-12 py-2 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400' : 'bg-[#0075FF] hover:bg-[#0055FF]'
            } outline-none px-12`}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>

          <button
            type='button'
            onClick={handleCancel}
            className='px-12 py-2 bg-white border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
          >
            Cancel
          </button>
        </div>
      </form>

      {isSaved && (
        <div className='mt-4 p-3 bg-green-50 border border-green-100 rounded-md text-green-700 text-center'>
          Template saved successfully!
        </div>
      )}
    </div>
  );
}
