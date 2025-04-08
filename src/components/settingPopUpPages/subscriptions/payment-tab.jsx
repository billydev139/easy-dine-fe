'use client';

import { TextIcon } from 'lucide-react';
// Import additional icons
import { X, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { LuFileText } from 'react-icons/lu';

export default function PaymentsTab() {
  const [emailAddress, setEmailAddress] = useState('kristian.kovac@gmx.ch');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmailAddress, setNewEmailAddress] = useState(emailAddress);
  const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);
  const [billingAddress, setBillingAddress] = useState({
    title: 'Herr',
    name: 'Kristian Kovac',
    street: 'Musterstrasse 24',
    zipCode: '4000',
    city: 'Zürich',
  });
  const [newBillingAddress, setNewBillingAddress] = useState({ ...billingAddress });
  const [activePaymentMethod, setActivePaymentMethod] = useState('email');
  // Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
    setNewEmailAddress(emailAddress);
  };

  const saveEmailAddress = () => {
    setEmailAddress(newEmailAddress);
    setIsEditingEmail(false);
  };

  const handleBillingAddressEdit = () => {
    setIsEditingBillingAddress(true);
    setNewBillingAddress({ ...billingAddress });
  };

  const saveBillingAddress = () => {
    setBillingAddress({ ...newBillingAddress });
    setIsEditingBillingAddress(false);
  };

  const activatePostalMethod = () => {
    setActivePaymentMethod('postal');
  };

  // Add function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Management</h1>

      {/* Active Payment Method */}
      <div className='border border-[#0075FF] rounded-xl mb-6 overflow-hidden'>
        <div className='flex items-center p-4 bg-[#EEF5FF] border-b border-[#0075FF]'>
          <LuFileText className='h-5 w-5 text-blue-600 mr-2' />
          <h2 className='font-bold text-gray-900'>Active Payment Method: </h2>
          <span className='text-blue-500 ml-1'>Invoice payment (E-mail)</span>
        </div>

        <div className='p-4'>
          <p className='text-sm text-gray-700 mb-4'>
            Sie erhalten Ihre Rechnungen für Produkte bei Hostpoint zur Zeit per E-Mail an
            Ihre hinterlegte E-Mail-Adresse (kristian.kovac@gmx.ch).
            <br />
            Mahnungen werden per Post-Versand an Ihre hinterlegte Rechnungsadresse
            verschickt.
          </p>

          <div className='flex flex-col md:flex-row md:items-center justify-between mb-4 bg-gray-50 p-4 rounded-md'>
            <div className='flex items-center mb-3 md:mb-0'>
              <div className='bg-gray-200 p-2 rounded mr-3'>
                <span className='text-gray-700 font-bold'>$</span>
              </div>
              <div className='bg-blue-500 text-white text-xs px-2 py-1 rounded'>PDF</div>
              <span className='ml-2 text-gray-700'>Rechnung als PDF per E-Mail an:</span>
            </div>

            <div className='flex flex-col md:items-end'>
              {isEditingEmail ? (
                <div className='flex items-center'>
                  <input
                    type='email'
                    value={newEmailAddress}
                    onChange={e => setNewEmailAddress(e.target.value)}
                    className='border border-gray-300 rounded px-2 py-1 text-sm'
                  />
                  <button
                    onClick={saveEmailAddress}
                    className='ml-2 text-white bg-blue-500 px-2 py-1 rounded text-xs'
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <span className='text-gray-700'>{emailAddress}</span>
                  <button
                    onClick={handleEmailEdit}
                    className='text-blue-500 text-sm hover:underline'
                  >
                    E-Mail-Adresse ändern
                  </button>
                </>
              )}
            </div>
          </div>

          <div className='text-sm text-gray-700'>E-Mail Rechnung</div>
        </div>
      </div>

      {/* Available Payment Method */}
      <div className='border border-blue-200 rounded-xl mb-6 overflow-hidden'>
        <div className='flex items-center p-4 bg-[#EEF5FF] border-b border-blue-200'>
          <LuFileText className='h-5 w-5 text-blue-600 mr-2' />
          <h2 className='font-bold text-gray-900'>Available Payment Method</h2>
        </div>

        <div className='p-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0'>
              <div className='bg-gray-100 p-4 rounded-md flex items-center justify-center w-32 h-32'>
                <TextIcon className='h-16 w-16 text-gray-400' />
              </div>
            </div>

            <div className='w-full md:w-2/3 flex flex-col md:flex-row'>
              <div className='md:w-1/2 mb-4 md:mb-0'>
                <h3 className='font-semibold mb-2'>Postal Delivery To:</h3>
                <p className='text-sm text-gray-600 italic mb-2'>
                  Please note that from January 2026 we will charge you CHF 3.00 per paper
                  invoice.
                </p>
                {activePaymentMethod !== 'postal' && (
                  <button
                    onClick={activatePostalMethod}
                    className='bg-blue-500 text-white text-sm px-3 py-1 rounded'
                  >
                    Activate
                  </button>
                )}
              </div>

              <div className='md:w-1/2'>
                {isEditingBillingAddress ? (
                  <div className='space-y-2'>
                    <select
                      value={newBillingAddress.title}
                      onChange={e =>
                        setNewBillingAddress({
                          ...newBillingAddress,
                          title: e.target.value,
                        })
                      }
                      className='border border-gray-300 rounded px-2 py-1 text-sm w-full'
                    >
                      <option value='Herr'>Herr</option>
                      <option value='Frau'>Frau</option>
                    </select>
                    <input
                      type='text'
                      value={newBillingAddress.name}
                      onChange={e =>
                        setNewBillingAddress({
                          ...newBillingAddress,
                          name: e.target.value,
                        })
                      }
                      className='border border-gray-300 rounded px-2 py-1 text-sm w-full'
                      placeholder='Name'
                    />
                    <input
                      type='text'
                      value={newBillingAddress.street}
                      onChange={e =>
                        setNewBillingAddress({
                          ...newBillingAddress,
                          street: e.target.value,
                        })
                      }
                      className='border border-gray-300 rounded px-2 py-1 text-sm w-full'
                      placeholder='Street'
                    />
                    <div className='flex gap-2'>
                      <input
                        type='text'
                        value={newBillingAddress.zipCode}
                        onChange={e =>
                          setNewBillingAddress({
                            ...newBillingAddress,
                            zipCode: e.target.value,
                          })
                        }
                        className='border border-gray-300 rounded px-2 py-1 text-sm w-1/3'
                        placeholder='ZIP'
                      />
                      <input
                        type='text'
                        value={newBillingAddress.city}
                        onChange={e =>
                          setNewBillingAddress({
                            ...newBillingAddress,
                            city: e.target.value,
                          })
                        }
                        className='border border-gray-300 rounded px-2 py-1 text-sm w-2/3'
                        placeholder='City'
                      />
                    </div>
                    <button
                      onClick={saveBillingAddress}
                      className='bg-blue-500 text-white px-2 py-1 rounded text-xs'
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className='text-gray-700'>{billingAddress.title}</p>
                    <p className='text-gray-700'>{billingAddress.name}</p>
                    <p className='text-gray-700'>{billingAddress.street}</p>
                    <p className='text-gray-700'>
                      {billingAddress.zipCode} {billingAddress.city}
                    </p>
                    <button
                      onClick={handleBillingAddressEdit}
                      className='text-blue-500 text-sm hover:underline'
                    >
                      Rechnungs-Adresse ändern
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add New Credit Card Button */}
      <div className='flex justify-center md:justify-start'>
        <button
          onClick={toggleModal}
          className='bg-[#0075FF] hover:bg-[#0055FF] text-white font-medium py-3 px-6 rounded-xl flex items-center'
        >
          Add New Credit Card
        </button>
      </div>

      {/* Payment Method Selection Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          <div
            className='absolute inset-0 bg-black bg-opacity-60'
            onClick={toggleModal}
          ></div>
          <div className='relative bg-white rounded-xl shadow-lg w-full max-w-md overflow-hidden'>
            {/* Modal Header */}
            <div className='bg-[#1d9be3] pt-12 flex justify-center relative'>
              <div className='absolute top-8 right-3'>
                <button
                  onClick={toggleModal}
                  className='text-white rounded-full p-1 hover:bg-[#1986D2] transition-colors'
                >
                  <X className='h-6 w-6' />
                </button>
              </div>
              <div className='bg-white rounded-full border-2 border-[#098bd3] -mb-9 p-5 flex items-center justify-center'>
                <div className='bg-[#2196F3] rounded-md p-1'>
                  <CreditCard className='h-8 w-8 text-white' />
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className='p-6 mt-9'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-lg font-semibold text-[#4a4a51]'>
                  Select Payment Method
                </h2>
              </div>

              {/* Payment Methods */}
              <div className='space-y-4'>
                <div className='flex items-center border-b border-gray-300 pb-4'>
                  <div className='w-12 h-8 flex items-center justify-center mr-4'>
                    <img src='../src/assets/images/visa-icon.png' alt='Visa' />
                  </div>
                  <span className='text-[#4a4a51] font-medium'>Visa</span>
                </div>

                <div className='flex items-center border-b border-gray-300 pb-4'>
                  <div className='w-12 h-8 flex items-center justify-center mr-4'>
                    <img
                      src='../src/assets/images/mastercard-icon.png'
                      alt='Mastercard'
                    />
                  </div>
                  <span className='text-[#4a4a51] font-medium'>Mastercard</span>
                </div>

                <div className='flex items-center border-b border-gray-300 pb-4'>
                  <div className='w-12 h-8 flex items-center justify-center mr-4'>
                    <img src='../src/assets/images/ae-icon.png' alt='American Express' />
                  </div>
                  <span className='text-[#4a4a51] font-medium'>American Express</span>
                </div>
              </div>

              {/* Secure Payment Footer */}
              <div className='mt-8 flex flex-col items-center justify-center text-gray-500 text-sm'>
                <div className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p>Secure payment by Datatrans</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
