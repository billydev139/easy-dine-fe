import { useState } from 'react';

export default function EmailContent() {
  const [templateContent, setTemplateContent] = useState(
    'I hope this email finds you well. Please find attached Invoice #ED-2025-001 for the services provided by Easy Dine Restaurant Management. The invoice was issued on March 11, 2025, and is due for payment by March 25, 2025. The total amount due is $362.96 USD.\n\nYou can make the payment via Bank Transfer (details provided upon request), PayPal (payments@easydine.com), or Credit/Debit Card using the provided payment link. For your convenience, the invoice is attached in PDF format.\n\nKindly ensure the payment is made by the due date to avoid\n\nIf you have any questions or require further details, please feel free to contact us at billing@easydine.com or call +1(555)123-4567.'
  );

  const [includePaymentDetails, setIncludePaymentDetails] = useState(true);
  const [attachInvoice, setAttachInvoice] = useState(true);

  const handleContentChange = e => {
    setTemplateContent(e.target.value);
  };

  const togglePaymentDetails = () => {
    setIncludePaymentDetails(!includePaymentDetails);
  };

  const toggleAttachInvoice = () => {
    setAttachInvoice(!attachInvoice);
  };

  const saveTemplate = () => {};

  return (
    <div className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow'>
      <div className='mb-6'>
        <h2 className='text-[#131313] text-base font-semibold mb-2'>
          Write Template Content
        </h2>
        <textarea
          value={templateContent}
          onChange={handleContentChange}
          className='w-full p-4 border border-[#9EC3FF] rounded-lg bg-[#EEF5FF] text-[#000000] text-sm min-h-80'
        />
      </div>

      <div className='space-y-3 mb-6'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='paymentDetails'
            checked={includePaymentDetails}
            onChange={togglePaymentDetails}
            className='w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
          />
          <label htmlFor='paymentDetails' className='text-[#1A2042] text-sm'>
            Include payment method details in the email
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='attachInvoice'
            checked={attachInvoice}
            onChange={toggleAttachInvoice}
            className='w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
          />
          <label htmlFor='attachInvoice' className='text-[#1A2042] text-sm'>
            Attach the invoice in PDF format automatically
          </label>
        </div>
      </div>

      <div className='flex justify-end gap-x-3'>
        <button
          onClick={saveTemplate}
          className='px-14 py-2 bg-[#0075FF] text-white font-medium rounded-xl hover:bg-[#0055FF] transition-colors'
        >
          Save
        </button>
        <button
          type='button'
          className='px-12 py-2 bg-white border border-[#696969] rounded-xl text-[#696969] font-medium hover:bg-gray-100 outline-none'
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
