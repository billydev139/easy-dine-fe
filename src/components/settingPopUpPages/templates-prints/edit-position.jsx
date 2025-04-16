import { useState } from 'react';

const EditPosition = ({ initialOptions, onSave }) => {
  const [layoutOptions, setLayoutOptions] = useState(
    initialOptions || {
      printOptions: {
        sameIndentation: false,
        dueDate: false,
        acceptance: false,
        customerNumber: false,
        customerPhone: false,
        sender: false,
        tireStorage: false,
        amountPaid: false,
        orderNumberOnOrder: false,
        orderNumberOnDraft: false,
        orderNumberOnInvoice: false,
        offerNumberOnOffer: false,
        pricesOnOrder: false,
      },
      addressPosition: 'left',
      nameArrangement: 'lastFirst',
    }
  );

  const [activeEditSection, setActiveEditSection] = useState('position');

  const handleCheckboxChange = (category, option) => {
    setLayoutOptions(prevOptions => ({
      ...prevOptions,
      [category]: {
        ...prevOptions[category],
        [option]: !prevOptions[category][option],
      },
    }));
  };

  const handleRadioChange = (field, value) => {
    setLayoutOptions(prevOptions => ({
      ...prevOptions,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(layoutOptions);
    setActiveEditSection('layout');
  };

  const handleCancel = () => {
    setActiveEditSection('layout');
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <h2 className='text-xl font-semibold mb-4'>Edit positions</h2>
      <h3 className='text-lg font-medium mb-4'>Which data should be printed?</h3>

      <div className='space-y-3'>
        <div className='flex items-center'>
          <input
            type='checkbox'
            id='sameIndentation'
            checked={layoutOptions.printOptions.sameIndentation}
            onChange={() => handleCheckboxChange('printOptions', 'sameIndentation')}
            className='mr-2'
          />
          <label htmlFor='sameIndentation'>
            Arrange values with the same indentation
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='dueDate'
            checked={layoutOptions.printOptions.dueDate}
            onChange={() => handleCheckboxChange('printOptions', 'dueDate')}
            className='mr-2'
          />
          <label htmlFor='dueDate'>Print the due date</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='acceptance'
            checked={layoutOptions.printOptions.acceptance}
            onChange={() => handleCheckboxChange('printOptions', 'acceptance')}
            className='mr-2'
          />
          <label htmlFor='acceptance'>Print acceptance</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='customerNumber'
            checked={layoutOptions.printOptions.customerNumber}
            onChange={() => handleCheckboxChange('printOptions', 'customerNumber')}
            className='mr-2'
          />
          <label htmlFor='customerNumber'>Print customer number</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='customerPhone'
            checked={layoutOptions.printOptions.customerPhone}
            onChange={() => handleCheckboxChange('printOptions', 'customerPhone')}
            className='mr-2'
          />
          <label htmlFor='customerPhone'>Print customer phone number</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='sender'
            checked={layoutOptions.printOptions.sender}
            onChange={() => handleCheckboxChange('printOptions', 'sender')}
            className='mr-2'
          />
          <label htmlFor='sender'>Print Sender</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='tireStorage'
            checked={layoutOptions.printOptions.tireStorage}
            onChange={() => handleCheckboxChange('printOptions', 'tireStorage')}
            className='mr-2'
          />
          <label htmlFor='tireStorage'>Print tire storage location</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='amountPaid'
            checked={layoutOptions.printOptions.amountPaid}
            onChange={() => handleCheckboxChange('printOptions', 'amountPaid')}
            className='mr-2'
          />
          <label htmlFor='amountPaid'>Show the amount already paid</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='orderNumberOnOrder'
            checked={layoutOptions.printOptions.orderNumberOnOrder}
            onChange={() => handleCheckboxChange('printOptions', 'orderNumberOnOrder')}
            className='mr-2'
          />
          <label htmlFor='orderNumberOnOrder'>Show order number on order</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='orderNumberOnDraft'
            checked={layoutOptions.printOptions.orderNumberOnDraft}
            onChange={() => handleCheckboxChange('printOptions', 'orderNumberOnDraft')}
            className='mr-2'
          />
          <label htmlFor='orderNumberOnDraft'>Show order number on draft</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='orderNumberOnInvoice'
            checked={layoutOptions.printOptions.orderNumberOnInvoice}
            onChange={() => handleCheckboxChange('printOptions', 'orderNumberOnInvoice')}
            className='mr-2'
          />
          <label htmlFor='orderNumberOnInvoice'>Show order number on invoice</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='offerNumberOnOffer'
            checked={layoutOptions.printOptions.offerNumberOnOffer}
            onChange={() => handleCheckboxChange('printOptions', 'offerNumberOnOffer')}
            className='mr-2'
          />
          <label htmlFor='offerNumberOnOffer'>Show offer number on offer</label>
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            id='pricesOnOrder'
            checked={layoutOptions.printOptions.pricesOnOrder}
            onChange={() => handleCheckboxChange('printOptions', 'pricesOnOrder')}
            className='mr-2'
          />
          <label htmlFor='pricesOnOrder'>Show prices on order</label>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-lg font-medium mb-4'>Address position:</h3>
        <div className='space-y-2'>
          <div className='flex items-center'>
            <input
              type='radio'
              id='addressLeft'
              name='addressPosition'
              checked={layoutOptions.addressPosition === 'left'}
              onChange={() => handleRadioChange('addressPosition', 'left')}
              className='mr-2'
            />
            <label htmlFor='addressLeft'>Left</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='addressRight'
              name='addressPosition'
              checked={layoutOptions.addressPosition === 'right'}
              onChange={() => handleRadioChange('addressPosition', 'right')}
              className='mr-2'
            />
            <label htmlFor='addressRight'>Right</label>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-lg font-medium mb-4'>Name arrangement:</h3>
        <div className='space-y-2'>
          <div className='flex items-center'>
            <input
              type='radio'
              id='lastFirst'
              name='nameArrangement'
              checked={layoutOptions.nameArrangement === 'lastFirst'}
              onChange={() => handleRadioChange('nameArrangement', 'lastFirst')}
              className='mr-2'
            />
            <label htmlFor='lastFirst'>Last name First Name</label>
          </div>
          <div className='flex items-center'>
            <input
              type='radio'
              id='firstLast'
              name='nameArrangement'
              checked={layoutOptions.nameArrangement === 'firstLast'}
              onChange={() => handleRadioChange('nameArrangement', 'firstLast')}
              className='mr-2'
            />
            <label htmlFor='firstLast'>First name Last Name</label>
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-6 space-x-4'>
        <button
          onClick={handleSave}
          className='px-12 py-2 font-medium bg-[#0075FF] text-white rounded-xl hover:bg-[#0055FF] transition'
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className='px-12 py-2 font-medium border border-[#696969] rounded-xl hover:bg-gray-100 transition'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPosition;
