'use client';

import { useState } from 'react';
import RatesTab from './rates-tab';
import DashboardLayout from '../../../layouts/dashboardLayout';
import InvoicesTab from './invoices-tab';
import PaymentTab from './payment-tab';
import { ArrowLeft } from 'lucide-react';

const tabs = ['Rates', 'Invoices', 'Payment method'];

export default function SubscriptionPlans() {
  const [activeTab, setActiveTab] = useState('Rates');

  return (
    <DashboardLayout>
      <div className='flex items-center mb-6 mt-7'>
        <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
        <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
          Setting &gt;{' '}
        </span>
        <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
          Subscriptions{' '}
        </span>
      </div>

      <div className='flex border-b my-8'>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-4 font-bold text-lg transition-colors duration-200 ${
              activeTab === tab
                ? 'text-[#00925C] border-b-2 border-[#00925C]'
                : 'text-gray-500 hover:text-emerald-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='bg-white rounded-[10px] border border-[#CCCCCC80] shadow-lg shadow-[#282F5A1F] my-8 px-8 py-5'>
        {/* Content */}
        <div>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>Subscription Plans</h1>
          <p className='text-gray-600 mb-8'>Pricing built for businesses of all sizes</p>
          {/* Conditionally Render Tabs */}
          {activeTab === 'Rates' && <RatesTab />}
          {activeTab === 'Invoices' && <InvoicesTab />}
          {activeTab === 'Payment method' && <PaymentTab />}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Rates Tab Component
