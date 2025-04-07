'use client';

import { useState } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import DunningProcess from './dunning-process';
import { ArrowLeft } from 'lucide-react';

export default function Accounting() {
  const [activeTab, setActiveTab] = useState('general');
  const [costBreakdownEnabled, setCostBreakdownEnabled] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    standardTaxRate: '0.0 %',
    taxRate: '',
    description: '',
    accountNumber: '',
    taxCode: '',
    customerAccountNumber: '10000',
    cashAccountNumber: '10000',
    bankAccountNumber: '10000',
    creditAccountNumber: '10000',
    advanceAccountNumber: '10000',
    mandateNumber: '10000',
    economicYear: '01.01.2023',
    accountingKey: '',
    paymentMethod: 'Kreditkarte',
    nextInvoiceNumber: '10000',
    nextOfferNumber: '10000',
    nextOrderNumber: '10000',
    nextCustomerNumber: '10000',
    nextSupplierNumber: '10000',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <DashboardLayout>
      <div className='flex items-center mb-6 mt-7'>
        <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
        <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
          Setting &gt;{' '}
        </span>
        <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
          Accounting{' '}
        </span>
      </div>

      <div className='flex mb-7'>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'general'
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'dunning'
              ? 'text-emerald-600 border-b-2 border-emerald-600'
              : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('dunning')}
        >
          Dunning Process
        </button>
      </div>
      <div className='bg-white px-6 py-9 mb-20 rounded-[10px]'>
        {/* Tab Navigation */}

        {activeTab === 'general' && (
          <form onSubmit={handleSubmit} className='py-4'>
            {/* Accounting Settings Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-medium mb-4'>Accounting settings</h2>
              <div className='mb-4'>
                <h3 className='text-sm font-medium mb-2'>Tax Rates</h3>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                  <div>
                    <label className='block text-xs mb-1'>Standard Tax Rate</label>
                    <div className='relative'>
                      <select
                        name='standardTaxRate'
                        value={formData.standardTaxRate}
                        onChange={handleInputChange}
                        className='w-full p-2 border rounded bg-white appearance-none pr-8 text-sm'
                      >
                        <option>0.0 %</option>
                        <option>7.0 %</option>
                        <option>19.0 %</option>
                      </select>
                      <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <svg
                          className='h-4 w-4 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Tax Rate</label>
                    <input
                      type='number'
                      name='taxRate'
                      value={formData.taxRate}
                      onChange={handleInputChange}
                      placeholder='0.0 %'
                      className='w-full p-2 border rounded text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Description</label>
                    <input
                      type='text'
                      name='description'
                      value={formData.description}
                      onChange={handleInputChange}
                      className='w-full p-2 border rounded text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Account Number</label>
                    <input
                      type='number'
                      name='accountNumber'
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className='w-full p-2 border rounded text-sm'
                    />
                  </div>
                  <div>
                    <label className='block text-xs mb-1'>Tax Code / Tax Key</label>
                    <input
                      type='number'
                      name='taxCode'
                      value={formData.taxCode}
                      onChange={handleInputChange}
                      className='w-full p-2 border rounded text-sm'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Standard Account Numbers Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-medium mb-2'>Standard Account Numbers</h2>
              <div className='mb-2'>
                <label className='block text-xs mb-1'>Customer Account Number</label>
                <input
                  type='number'
                  name='customerAccountNumber'
                  value={formData.customerAccountNumber}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded text-sm bg-[#EEF5FF]'
                />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                <div>
                  <label className='block text-xs mb-1'>Cash Account Number</label>
                  <input
                    type='number'
                    name='cashAccountNumber'
                    value={formData.cashAccountNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>Bank Account Number</label>
                  <input
                    type='number'
                    name='bankAccountNumber'
                    value={formData.bankAccountNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>
                    Credit Account Account Number
                  </label>
                  <input
                    type='number'
                    name='creditAccountNumber'
                    value={formData.creditAccountNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>Other Account Number</label>
                  <input
                    type='number'
                    name='advanceAccountNumber'
                    value={formData.advanceAccountNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
              </div>
            </div>
            {/* Datev Settings Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-medium mb-2'>Date settings</h2>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                  <label className='block text-xs mb-1'>Consultant Number</label>
                  <input
                    type='number'
                    name='adviserNumber'
                    value={formData.adviserNumber}
                    onChange={handleInputChange}
                    placeholder='10000'
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>Client Number</label>
                  <input
                    type='number'
                    name='mandateNumber'
                    value={formData.mandateNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>
                    Start of the Financial Year
                  </label>
                  <input
                    type='date'
                    name='economicYear'
                    value={formData.economicYear}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
                <div>
                  <label className='block text-xs mb-1'>G/L Account Length</label>
                  <input
                    type='number'
                    name='accountingKey'
                    value={formData.accountingKey}
                    onChange={handleInputChange}
                    placeholder='4'
                    className='w-full p-2 border rounded text-sm bg-blue-50'
                  />
                </div>
              </div>
            </div>
            {/* Standard Payment Method Section */}
            <div className='mb-8'>
              <h2 className='text-xl font-medium mb-2'>Standard Payment Method</h2>
              <div className='relative w-full md:w-1/4'>
                <select
                  name='paymentMethod'
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded bg-blue-50 appearance-none pr-8 text-sm'
                >
                  <option>Credit Card</option>
                  <option>Transfer</option>
                  <option>Direct Debit</option>
                </select>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <svg
                    className='h-4 w-4 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Cost Breakdown Section */}
            <div className='mb-8'>
              <div className='flex gap-x-5 items-center mb-2'>
                <h2 className='text-xl font-medium'>Cost Statement</h2>
                <div className='relative inline-block w-12 align-middle select-none'>
                  <input
                    type='checkbox'
                    name='toggle'
                    id='toggle'
                    checked={costBreakdownEnabled}
                    onChange={() => setCostBreakdownEnabled(!costBreakdownEnabled)}
                    className='sr-only'
                  />
                  <label
                    htmlFor='toggle'
                    className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                      costBreakdownEnabled ? 'bg-[#19DB8C]' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`block h-5 w-5 mt-0.5 rounded-full bg-white transform transition-transform ${
                        costBreakdownEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </label>
                </div>
              </div>
              <p className='text-sm font-medium pr-40 text-[#131313] mb-4'>
                Kostenaufstellung können aus einem Entwurf heraus erstellt werden. Sie
                sind für die interne Dokumentation von Arbeiten gedacht, die entweder im
                eigenen Unternehmen oder dem Verkauf durchgeführt und nach dem Kunden in
                Rechnung gestellt werden.
              </p>
            </div>
            {/* Numbering Section */}
            <div className='mb-20'>
              <h2 className='text-xl font-medium mb-4'>Numbering</h2>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                <div className='relative'>
                  <label className='block text-xs mb-1'>Next Invoice Number</label>
                  <input
                    type='text'
                    name='nextInvoiceNumber'
                    value={formData.nextInvoiceNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50 pr-8'
                  />
                  <button type='button' className='absolute right-2 top-7'>
                    <svg
                      className='h-4 w-4 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </button>
                </div>
                <div className='relative'>
                  <label className='block text-xs mb-1'>Next Offer Number</label>
                  <input
                    type='text'
                    name='nextOfferNumber'
                    value={formData.nextOfferNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50 pr-8'
                  />
                  <button type='button' className='absolute right-2 top-7'>
                    <svg
                      className='h-4 w-4 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </button>
                </div>
                <div className='relative'>
                  <label className='block text-xs mb-1'>Next Estimate Number</label>
                  <input
                    type='text'
                    name='nextOrderNumber'
                    value={formData.nextOrderNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50 pr-8'
                  />
                  <button type='button' className='absolute right-2 top-7'>
                    <svg
                      className='h-4 w-4 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </button>
                </div>
                <div className='relative'>
                  <label className='block text-xs mb-1'>Next Customer Number</label>
                  <input
                    type='text'
                    name='nextCustomerNumber'
                    value={formData.nextCustomerNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded text-sm bg-blue-50 pr-8'
                  />
                  <button type='button' className='absolute right-2 top-7'>
                    <svg
                      className='h-4 w-4 text-gray-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='w-full md:w-1/4 relative'>
                <label className='block text-xs mb-1'>Next Supplier Number</label>
                <input
                  type='text'
                  name='nextSupplierNumber'
                  value={formData.nextSupplierNumber}
                  onChange={handleInputChange}
                  className='w-full p-2 border rounded text-sm bg-blue-50 pr-8'
                />
                <button type='button' className='absolute right-2 top-7'>
                  <svg
                    className='h-4 w-4 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Action Buttons */}
            <div className='flex justify-end gap-4 mt-8'>
              <button
                type='button'
                className='px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50'
                onClick={() => console.log('Cancelled')}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
              >
                Save
              </button>
            </div>
          </form>
        )}
        {activeTab === 'dunning' && <DunningProcess />}
      </div>
    </DashboardLayout>
  );
}
