'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Plus } from 'lucide-react';
import { ImCancelCircle } from 'react-icons/im';
import { LuFileText } from 'react-icons/lu';

export default function InvoicesTab() {
  const [expandedInvoices, setExpandedInvoices] = useState({
    987850: true,
    987950: false,
  });

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const toggleInvoice = id => {
    setExpandedInvoices(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openPaymentModal = invoice => {
    setSelectedInvoice(invoice);
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedInvoice(null);
  };

  const outstandingInvoices = [
    {
      id: '987850',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987951',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987852',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987853',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
  ];

  const paidInvoices = [
    {
      id: '987854',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987955',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987856',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987857',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
    {
      id: '987958',
      date: '01.03.2024',
      referenceNumber: '00000000-00012-00330-77333-25514',
      paymentInfo: '01-98992-2 Hostpoint AG, Neue Jonastrasse 60, 8640 Rapperswil',
      invoiceNumber: '73332551',
      billingCycle: '2023-02-23',
      dueBy: '2023-03-25',
      amount: 'CHF 44.00',
    },
  ];

  const renderInvoiceItem = (invoice, isPaid = false) => {
    const isExpanded = expandedInvoices[invoice.id];

    return (
      <div
        key={`${invoice.id}-${invoice.date}`}
        className='mb-3 border border-[#9EC3FF] rounded-xl overflow-hidden'
      >
        <div
          className='flex items-center p-4 bg-[#EEF5FF] cursor-pointer'
          onClick={() => toggleInvoice(invoice.id)}
        >
          <div className='flex items-center text-black'>
            <LuFileText size={18} className='text-blue-600 mr-2' />
            <span className='text-base font-medium text-black'>
              Invoice # {invoice.id} from {invoice.date}
            </span>
          </div>
          <div className='ml-auto'>
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        {isExpanded && (
          <div className='p-4'>
            <div className='flex flex-col md:flex-row justify-between mb-4'>
              <div className='flex flex-col mb-4 md:mb-0'>
                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Invoice as PDF</span>
                  <div className='flex items-center'>
                    <a href='#' className='text-blue-500 text-sm flex items-center'>
                      <Download size={14} className='mr-1' />
                      Download
                    </a>
                  </div>
                </div>

                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Reference Number</span>
                  <span className='text-sm'>{invoice.referenceNumber}</span>
                </div>

                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Payment info user number</span>
                  <span className='text-sm'>{invoice.paymentInfo}</span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-xs text-gray-500'>Payment for</span>
                  <span className='text-sm'>Jonastrasse 60, 8640 Rapperswil</span>
                </div>
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Invoice number</span>
                  <span className='text-sm'>{invoice.invoiceNumber}</span>
                </div>

                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Billing/cycle</span>
                  <span className='text-sm'>{invoice.billingCycle}</span>
                </div>

                <div className='flex flex-col mb-4'>
                  <span className='text-xs text-gray-500'>Due by</span>
                  <span className='text-sm'>{invoice.dueBy}</span>
                </div>

                <div className='flex flex-col'>
                  <span className='text-xs text-gray-500'>Invoice amount</span>
                  <span className='text-sm border-b-2 border-black'>
                    {invoice.amount}
                  </span>
                </div>
              </div>
            </div>

            <div className='flex'>
              <span className='text-xs text-gray-500 mr-2'>Pay directly</span>
              <button
                className='text-blue-500 text-sm hover:underline'
                onClick={e => {
                  e.stopPropagation();
                  openPaymentModal(invoice);
                }}
              >
                Pay invoice
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const PaymentModal = () => {
    if (!isPaymentModalOpen) return null;

    return (
      <div className='fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4'>
        <div className='bg-white rounded-xl w-full max-w-lg overflow-hidden'>
          {/* Modal Header */}
          <div className='flex justify-between items-center p-4 bg-[#EEF5FF]'>
            <h3 className='text-xl font-semibold'>Pay Invoice</h3>
            <button
              onClick={closePaymentModal}
              className='text-[#000000] hover:text-gray-800'
            >
              <ImCancelCircle className='size-5 mr-2' />
            </button>
          </div>

          {/* Modal Body */}
          <div className='p-5 space-y-6'>
            {/* Pay Section */}
            <div className='space-y-2'>
              <label className='block text-base font-medium'>Pay</label>
              <div className='relative'>
                <select
                  className='outline-none cursor-pointer w-full p-2.5 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl appearance-none'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select Invoice
                  </option>
                  {outstandingInvoices.map(inv => (
                    <option key={inv.id} value={inv.id}>
                      Invoice #{inv.id} - {inv.amount}
                    </option>
                  ))}
                </select>
                <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                  <ChevronDown size={18} className='text-gray-500' />
                </div>
              </div>
            </div>

            {/* Amount / Currency */}
            <div className='space-y-2'>
              <label className='block text-base font-medium'>Amount / Currency</label>
              <input
                type='text'
                className='w-full p-2.5 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                defaultValue={selectedInvoice ? selectedInvoice.amount : '300.00 CHF'}
                readOnly
              />
            </div>

            {/* Payment Method */}
            <div className='space-y-2'>
              <label className='block text-base font-medium'>Payment Method</label>
              <div className='relative'>
                <select
                  className='w-full p-2.5 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl appearance-none outline-none pr-10'
                  defaultValue='credit-card'
                >
                  <option value='credit-card'>Credit Card</option>
                  <option value='bank-transfer'>Bank Transfer</option>
                  <option value='paypal'>PayPal</option>
                </select>
                <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
                  <ChevronDown size={18} className='text-gray-500' />
                </div>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <div className='p-4 mb-5 flex justify-center'>
            <button className='bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white py-2.5 px-6 rounded-xl font-medium w-40 relative'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
        <div>
          <h1 className='text-xl font-medium'>Invoices</h1>
          <h2 className='text-gray-600'>Overview</h2>
        </div>
        <div className='mt-2 md:mt-0'>
          <div className='text-xs text-gray-500'>Customer ID: 456789</div>
          <div className='text-right'>
            <span className='text-green-500 font-medium'>1450.28 CHF</span>
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <h3 className='text-[#131313] text-xl font-semibold mb-4'>
          4 Outstanding Invoices
        </h3>
        <div>{outstandingInvoices.map(invoice => renderInvoiceItem(invoice))}</div>
        <div className='mt-4'>
          <button
            className='flex items-center gap-x-2 bg-[#0075FF] hover:bg-[#0055FF] text-white py-2 px-4 rounded-xl text-base font-medium'
            onClick={() =>
              openPaymentModal({
                id: 'multiple',
                amount: `CHF ${outstandingInvoices
                  .reduce(
                    (sum, inv) => sum + Number.parseFloat(inv.amount.replace('CHF ', '')),
                    0
                  )
                  .toFixed(2)}`,
              })
            }
          >
            <Plus />
            Pay All CHF Invoices
          </button>
        </div>
      </div>

      <div>
        <h3 className='text-[#131313] text-xl font-semibold mb-4'>Paid Invoices</h3>
        <div>{paidInvoices.map(invoice => renderInvoiceItem(invoice, true))}</div>
        <div className='mt-5 mb-20'>
          <button className='flex items-center gap-x-2 bg-[#0075FF] hover:bg-[#0055FF] text-white py-2 px-4 rounded-xl text-base font-medium'>
            <Plus />
            Show more invoices
          </button>
        </div>
      </div>
      <PaymentModal />
    </div>
  );
}
