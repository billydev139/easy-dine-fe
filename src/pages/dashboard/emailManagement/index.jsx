'use client';

import { useState } from 'react';
import {
  Search,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import DashboardLayout from '../../../layouts/dashboardLayout';
import EmailLogs from './email-logs';
import EmailTemplates from './emailTemplates/email-templates';
import { PiSliders } from 'react-icons/pi';

export default function EmailManagement() {
  const [activeTab, setActiveTab] = useState('sent');
  const [searchQuery, setSearchQuery] = useState('');
  const [resultsPerPage, setResultsPerPage] = useState(10);

  // Sample data for sent emails tab
  const sentEmails = [
    {
      id: 1,
      subject: 'New contact request',
      recipient: 'mthurn@optonline.net',
      status: 'Delivered',
      sentAt: '2020-05-02 07:10:15',
      openRate: '100%',
    },
    {
      id: 2,
      subject: 'Support request',
      recipient: 'adamk@yahoo.com',
      status: 'Delivered',
      sentAt: '2020-05-01 06:05:46',
      openRate: '100%',
    },
    {
      id: 3,
      subject: 'Delete contact request',
      recipient: 'doormat@att.net',
      status: 'Pending',
      sentAt: '2020-05-04 09:18:16',
      openRate: '100%',
    },
    {
      id: 4,
      subject: 'Delete contact request',
      recipient: 'danzigism@aol.com',
      status: 'Pending',
      sentAt: '2020-05-01 06:05:46',
      openRate: '100%',
    },
    {
      id: 5,
      subject: 'Change request',
      recipient: 'ateniese@mac.com',
      status: 'Failed',
      sentAt: '2020-05-04 09:18:16',
      openRate: '100%',
    },
    {
      id: 6,
      subject: 'New contact request',
      recipient: 'notaprguy@hotmail.com',
      status: 'Failed',
      sentAt: '2020-05-05 10:21:13',
      openRate: '100%',
    },
    {
      id: 7,
      subject: 'Change request',
      recipient: 'sumdumass@gmail.com',
      status: 'Pending',
      sentAt: '2020-05-03 08:14:01',
      openRate: '100%',
    },
    {
      id: 8,
      subject: 'New contact request',
      recipient: 'gravyface@mac.com',
      status: 'Failed',
      sentAt: '2020-05-06 11:24:08',
      openRate: '100%',
    },
    {
      id: 9,
      subject: 'Support request',
      recipient: 'csilvers@verizon.net',
      status: 'Failed',
      sentAt: '2020-05-06 11:24:08',
      openRate: '100%',
    },
    {
      id: 10,
      subject: 'New contact request',
      recipient: 'example@example.com',
      status: 'Delivered',
      sentAt: '2020-05-07 14:30:22',
      openRate: '100%',
    },
    {
      id: 11,
      subject: 'Support request',
      recipient: 'another@example.com',
      status: 'Pending',
      sentAt: '2020-05-08 09:45:11',
      openRate: '100%',
    },
    {
      id: 12,
      subject: 'Delete contact request',
      recipient: 'test@example.com',
      status: 'Failed',
      sentAt: '2020-05-09 16:20:33',
      openRate: '100%',
    },
    {
      id: 13,
      subject: 'Change request',
      recipient: 'user@example.com',
      status: 'Delivered',
      sentAt: '2020-05-10 11:15:42',
      openRate: '100%',
    },
    {
      id: 14,
      subject: 'New contact request',
      recipient: 'client@example.com',
      status: 'Pending',
      sentAt: '2020-05-11 08:30:19',
      openRate: '100%',
    },
    {
      id: 15,
      subject: 'Support request',
      recipient: 'customer@example.com',
      status: 'Failed',
      sentAt: '2020-05-12 13:45:27',
      openRate: '100%',
    },
    {
      id: 16,
      subject: 'Delete contact request',
      recipient: 'person@example.com',
      status: 'Delivered',
      sentAt: '2020-05-13 15:10:38',
      openRate: '100%',
    },
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sentEmails.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, sentEmails.length);
  const currentEmails = sentEmails.slice(startIndex, endIndex);

  // Status color mapping
  const getStatusColor = status => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-yellow-500';
      case 'Failed':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Handle tab change
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  // Handle pagination
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <DashboardLayout>
      <div className=''>
        <nav className='flex gap-x-5 my-7'>
          <button
            onClick={() => handleTabChange('sent')}
            className={`${
              activeTab === 'sent'
                ? 'border-[#00925C] text-[#00925C] font-semibold border-b-2'
                : 'border-transparent text-[#717B8C] hover:text-gray-700'
            } whitespace-nowrap px-3 text-sm sm:text-lg`}
          >
            Sent Emails
          </button>
          <button
            onClick={() => handleTabChange('templates')}
            className={`${
              activeTab === 'templates'
                ? 'border-[#00925C] text-[#00925C] font-semibold border-b-2'
                : 'border-transparent text-[#717B8C] hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 font-medium text-sm sm:text-lg`}
          >
            Email Templates
          </button>
          <button
            onClick={() => handleTabChange('logs')}
            className={`${
              activeTab === 'logs'
                ? 'border-[#00925C] text-[#00925C] font-semibold border-b-2'
                : 'border-transparent text-[#717B8C] hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 font-medium text-sm sm:text-lg`}
          >
            Delivery Logs
          </button>
        </nav>
      </div>

      <div className='w-full bg-white min-h-screen rounded-lg'>
        <div className='px-6 py-1 mb-6'>
          {/* Tab content */}
          <div className='mt-6'>
            {activeTab === 'sent' && (
              <div>
                <div className='mb-4'>
                  <h2 className='text-xl font-semibold text-[#131313] mb-1'>
                    Recent emails
                  </h2>
                  <p className='text-sm text-[#131313]'>
                    Lorem ipsum dolor sit amet, consectetur
                  </p>
                </div>
                {/* Search and actions */}
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4'>
                  <div className='relative w-full sm:w-96'>
                    <input
                      type='text'
                      placeholder='Search for name, id.....'
                      className='w-full pl-4 py-2 bg-[#EEF5FF] placeholder:text-sm placeholder:text-[#131313] border border-[#9EC3FF] rounded-xl outline-none'
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
                      <Search className='h-5 w-5 text-[#131313]' />
                    </div>
                  </div>
                  <div className='flex gap-x-3 w-full sm:w-auto'>
                    <button className='flex items-center gap-2 px-6 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-md'>
                      <PiSliders className='h-5 w-5' />
                      <span>Filters</span>
                    </button>
                    <button className='flex items-center gap-2 px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md'>
                      <Download className='h-5 w-5' />
                      <span>Export</span>
                    </button>
                  </div>
                </div>
                {/* Table */}
                <div className='overflow-x-auto'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-[#EEF5FF]'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-2.5 text-left text-base font-semibold text-[£131313] tracking-wider'
                        >
                          Subject
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-2.5 text-left text-base font-semibold text-[£131313] tracking-wider'
                        >
                          Recipient
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-2.5 text-left text-base font-semibold text-[£131313] tracking-wider'
                        >
                          Status
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-2.5 text-left text-base font-semibold text-[£131313] tracking-wider'
                        >
                          Sent at
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-2.5 text-left text-base font-semibold text-[£131313] tracking-wider'
                        >
                          Open Rate
                        </th>
                        <th scope='col' className='relative px-6 py-3'>
                          <span className='sr-only'>Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {currentEmails.map(email => (
                        <tr key={email.id} className='hover:bg-gray-50'>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                            {email.subject}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {email.recipient}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            <div className='flex items-center'>
                              <div
                                className={`h-2.5 w-2.5 rounded-full ${getStatusColor(
                                  email.status
                                )} mr-2`}
                              ></div>
                              {email.status}
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {email.sentAt}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {email.openRate}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <button className='text-gray-400 hover:text-gray-500'>
                              <MoreVertical className='h-5 w-5' />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className='flex flex-col sm:flex-row justify-end items-center mt-6 gap-4'>
                  <div className='flex items-center'>
                    <span className='text-sm text-gray-700'>Results Per Page</span>
                    <select
                      className='ml-2 rounded-xl outline-none bg-[#EEF5FF] px-3 py-0.5'
                      value={resultsPerPage}
                      onChange={e => {
                        setResultsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                    >
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                  <div className='flex items-center'>
                    <span className='text-sm text-gray-700'>
                      {startIndex + 1}-{endIndex} of {sentEmails.length}
                    </span>
                    <div className='flex ml-2'>
                      <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className={`p-1 rounded-md ${
                          currentPage === 1
                            ? 'text-gray-300'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronLeft className='h-5 w-5' />
                      </button>
                      <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-1 rounded-md ${
                          currentPage === totalPages
                            ? 'text-gray-300'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <ChevronRight className='h-5 w-5' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'templates' && <EmailTemplates />}
            {activeTab === 'logs' && <EmailLogs />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
