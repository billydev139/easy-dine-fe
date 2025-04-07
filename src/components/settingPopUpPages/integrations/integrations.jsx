'use client';

import { useState, useEffect } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { ArrowLeft, CircleX } from 'lucide-react';
import { FiEdit } from 'react-icons/fi';
import { GoTrash } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';

// Integration Modal Component
function IntegrationModal({ isOpen, onClose, integration }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  useEffect(() => {
    const handleEscKey = event => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email, password, privateKey, integration });
    onClose();
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'>
      <div className='relative w-full max-w-lg mx-4 bg-[#f8faff] rounded-lg shadow-lg'>
        <div className='flex items-center justify-between px-6 py-4 border-b border-gray-100'>
          <h2 className='text-xl font-bold text-black'>
            {integration?.name || 'Integration'}
          </h2>
          <button
            onClick={onClose}
            className='p-1 rounded-full hover:bg-gray-100 transition-colors'
          >
            <CircleX className='w-6 h-6 text-black' />
          </button>
        </div>

        <div className='px-7 py-14'>
          <div className='flex justify-center mb-6'>
            <div className='w-64 h-16 relative'>
              <img src='../src/assets/images/wine-dark.png' alt='' />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-7'>
              <label
                htmlFor='email'
                className='block text-base font-semibold text-black mb-2'
              >
                Email
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='example@google.com'
                className='w-full px-4 py-2.5 placeholder-[#696969] bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                required
              />
            </div>

            <div className='mb-7'>
              <label
                htmlFor='password'
                className='block text-base font-semibold text-black mb-2'
              >
                Password
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
                className='w-full px-4 py-2.5 placeholder-[#696969] bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                required
              />
            </div>

            <div className='mb-7'>
              <label
                htmlFor='privateKey'
                className='block text-base font-semibold text-black mb-2'
              >
                Private-Key
              </label>
              <input
                id='privateKey'
                type='text'
                value={privateKey}
                onChange={e => setPrivateKey(e.target.value)}
                placeholder='Enter Private-Key'
                className='w-full px-4 py-2.5 placeholder-[#696969] bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                required
              />
            </div>

            <div className='flex justify-center pt-4'>
              <button
                type='submit'
                className='px-9 py-3 bg-[#0F0A33] text-white font-medium rounded-xl shadow-lg hover:shadow-lg hover:shadow-[#0075FF] transition-colors'
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Main Integrations Page Component
export default function IntegrationsPage() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  // Sample data for connected integrations
  const [connectedIntegrations, setConnectedIntegrations] = useState([
    {
      id: 1,
      name: 'Square',
      icon: 'square',
      tag: 'Pos System',
      tagColor: 'bg-[#0075FF1A] border-[#0075FF] text-[#0075FF]',
    },
    {
      id: 2,
      name: 'DoorDash',
      icon: 'truck',
      tag: 'Online Ordering',
      tagColor: 'bg-[#19DB8C1A] border-[#19DB8C] text-[#19DB8C]',
    },
    {
      id: 3,
      name: 'MarketMan',
      icon: 'dollar',
      tag: 'Pos System',
      tagColor: 'bg-[#0075FF1A] border-[#0075FF] text-[#0075FF]',
    },
    {
      id: 4,
      name: 'MarketMan',
      icon: 'dollar',
      tag: 'Inventory',
      tagColor: 'bg-[#C698001A] border-[#C69800] text-[#C69800]',
    },
  ]);

  // Sample data for available integrations
  const [availableIntegrations, setAvailableIntegrations] = useState([
    { id: 5, name: 'Mi Tierra', icon: 'utensils' },
    { id: 6, name: 'Marfa Burrito', icon: 'utensils' },
    { id: 7, name: 'Maido', icon: 'clipboard' },
    { id: 8, name: 'Pura Brasa', icon: 'clipboard' },
    { id: 9, name: 'Curry Boys', icon: 'utensils' },
    { id: 10, name: 'The Patio', icon: 'clipboard' },
    { id: 11, name: 'Paypal', icon: 'square' },
    { id: 12, name: "Judy's Breakfast", icon: 'square' },
  ]);

  // Function to handle connecting an integration
  const handleConnect = id => {
    const integrationToConnect = availableIntegrations.find(
      integration => integration.id === id
    );

    if (integrationToConnect) {
      // Add to connected integrations with default tag
      setConnectedIntegrations([
        ...connectedIntegrations,
        {
          ...integrationToConnect,
          tag: 'Pos System',
          tagColor: 'bg-blue-100 text-blue-600',
        },
      ]);

      // Remove from available integrations
      setAvailableIntegrations(
        availableIntegrations.filter(integration => integration.id !== id)
      );
    }
  };

  // Function to handle disconnecting an integration
  const handleDisconnect = id => {
    const integrationToDisconnect = connectedIntegrations.find(
      integration => integration.id === id
    );

    if (integrationToDisconnect) {
      // Remove tag and add to available integrations
      const { tag, tagColor, ...rest } = integrationToDisconnect;
      setAvailableIntegrations([...availableIntegrations, rest]);

      // Remove from connected integrations
      setConnectedIntegrations(
        connectedIntegrations.filter(integration => integration.id !== id)
      );
    }
  };

  // Function to open modal for editing an integration
  const handleOpenEditModal = integration => {
    setSelectedIntegration(integration);
    setIsModalOpen(true);
  };

  // Render icon based on type
  const renderIcon = iconType => {
    switch (iconType) {
      case 'square':
        return (
          <div className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <rect width='16' height='16' x='4' y='4' strokeWidth='2' />
            </svg>
          </div>
        );
      case 'truck':
        return (
          <div className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 8h14M5 8a2 2 0 100-4h14a2 2 0 100 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
              />
            </svg>
          </div>
        );
      case 'dollar':
        return (
          <div className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
        );
      case 'utensils':
        return (
          <div className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3M3 11h18'
              />
            </svg>
          </div>
        );
      case 'clipboard':
        return (
          <div className='w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
              />
            </svg>
          </div>
        );
      default:
        return (
          <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <DashboardLayout>
      <div className='flex items-center mb-6 mt-7'>
        <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
        <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
          Setting &gt;{' '}
        </span>
        <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
          Integrations{' '}
        </span>
      </div>

      <div className='bg-white p-6 my-8 h-screen rounded-lg shadow-lg'>
        {/* Connected Integrations Section */}
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Connected Integrations</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-10'>
          {connectedIntegrations.map(integration => (
            <div key={integration.id} className='border border-gray-200 rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-semibold text-gray-800'>{integration.name}</h3>
                  <p className='text-sm text-gray-600 mt-1'>
                    Process payments and manage your
                  </p>
                  <p className='text-xs text-green-500 mt-1'>Connected</p>
                </div>
                {renderIcon(integration.icon)}
              </div>
              <div className='flex items-center mt-6'>
                <button className='p-2' onClick={() => handleOpenEditModal(integration)}>
                  <FiEdit stroke='#152c58' className='size-5' />
                </button>

                <button
                  className='p-2 text-gray-600 hover:text-gray-900'
                  onClick={() => handleDisconnect(integration.id)}
                >
                  <GoTrash className='size-5 text-[#da1000] hover:' />
                </button>

                <div className='ml-auto'>
                  <span
                    className={`text-xs font-medium border px-3.5 py-1 rounded-full ${integration.tagColor}`}
                  >
                    {integration.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Available Integrations Section */}
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Available Integrations</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {availableIntegrations.map(integration => (
            <div key={integration.id} className='border border-gray-200 rounded-lg p-4'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-semibold text-gray-800'>{integration.name}</h3>
                  <p className='text-sm text-gray-600 mt-1'>
                    Process payments and manage your
                  </p>
                </div>
                {renderIcon(integration.icon)}
              </div>
              <button
                onClick={() => handleConnect(integration.id)}
                className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200'
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Modal */}
      <IntegrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        integration={selectedIntegration}
      />
    </DashboardLayout>
  );
}
