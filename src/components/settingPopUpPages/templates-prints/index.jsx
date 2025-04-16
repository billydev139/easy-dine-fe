import { useState } from 'react';
import TemplatesPrintsInvoice from './templates-prints-invoice';
import CashReceipt from './cash-receipt';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { FaArrowLeft } from 'react-icons/fa';

export default function TemplatesAndPrint() {
  const [activeTab, setActiveTab] = useState('invoice');

  return (
    <DashboardLayout>
      {/* Header with back button */}
      <div className='flex w-full items-center mt-9 mb-6'>
        <FaArrowLeft className='w-6 h-6 mr-2 text-[#282F5A] cursor-pointer' />
        <span className='text-[#282F5A] text-xl mr-2'>Setting &gt;</span>
        <span className='text-[#282F5A] text-xl font-semibold'>Templates & Print</span>
      </div>
      {/* Tabs */}
      <div className='flex'>
        <button
          className={`pb-2 px-4 text-lg font-medium ${
            activeTab === 'invoice'
              ? 'text-[#00925C] border-b-2 border-[#00925C]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('invoice')}
        >
          Invoice
        </button>
        <button
          className={`pb-2 px-4 text-lg font-medium ${
            activeTab === 'cashReceipt'
              ? 'text-[#00925C] border-b-2 border-[#00925C]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('cashReceipt')}
        >
          Cash Receipt
        </button>
      </div>
      {/* Content */}
      <div className='bg-white border border-[#CCCCCC80] shadow-xl shadow-[#282F5A1F] my-5 px-6 py-9 rounded-[10px]'>
        <div className=''>
          {activeTab === 'invoice' ? <TemplatesPrintsInvoice /> : <CashReceipt />}
        </div>
      </div>
    </DashboardLayout>
  );
}
