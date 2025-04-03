'use client';
import { useEffect, useRef, useState } from 'react';
import { Trash2, User, X } from 'lucide-react';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { MdRemoveRedEye } from 'react-icons/md';
import DashboardLayout from '../../../layouts/dashboardLayout';
import MyProfile from './my-profile';
import WorkSchedule from './work-schedule';
import VacationPlanner from './vacation-planner';

const UserTabs = () => {
  const [activeTab, setActiveTab] = useState('all-users');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [allUsers, setUsers] = useState([
    {
      id: '1',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 1,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-1.png',
    },
    {
      id: '2',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 2,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-2.png',
    },
    {
      id: '3',
      name: 'Kristian Kovac',
      customerType: 'Private Person',
      customerNumber: 3,
      dateOfBirth: '01.01.2012',
      role: 'CEO',
      telephone: '0797895571',
      address: 'Langenthalerstrasse 12',
      email: 'Dallaskeuchel12@gmail.com',
      active: true,
      profileImage: '/src/assets/images/user-3.png',
    },
  ]);

  const [newUser, setNewUser] = useState({
    customerType: 'Private Person',
    customerNumber: allUsers.length + 1,
    active: true,
    profileImage: '/placeholder.svg?height=80&width=80',
  });

  const toggleUserActive = userId => {
    setUsers(
      allUsers.map(user =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );

    // Update selected user if it's the one being toggled
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(prev => ({ ...prev, active: !prev.active }));
    }
  };

  const deleteUser = userId => {
    setUsers(allUsers.filter(user => user.id !== userId));

    // Clear selected user if it's the one being deleted
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    }
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const user = {
        id: String(Date.now()),
        name: newUser.name || '',
        customerType: newUser.customerType || 'Private Person',
        customerNumber: newUser.customerNumber || allUsers.length + 1,
        dateOfBirth: newUser.dateOfBirth || '',
        role: newUser.role || '',
        telephone: newUser.telephone || '',
        address: newUser.address || '',
        email: newUser.email || '',
        active: true,
        profileImage: '/placeholder.svg?height=80&width=80',
      };

      setUsers([...allUsers, user]);
      setNewUser({
        customerType: 'Private Person',
        customerNumber: allUsers.length + 2,
        active: true,
        profileImage: '/placeholder.svg?height=80&width=80',
      });
      setIsAddUserOpen(false);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const [roles, setRoles] = useState([
    {
      id: '1',
      name: 'Admin',
      permissions: ['All Access', 'Manage Users', 'View Reports'],
    },
    {
      id: '2',
      name: 'Admin',
      permissions: ['All Access', 'Manage Users', 'View Reports'],
    },
    {
      id: '3',
      name: 'Manager',
      permissions: ['All Access', 'Manage Users', 'View Reports'],
    },
  ]);

  const [newRole, setNewRole] = useState({
    name: '',
    permissions: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const availablePermissions = [
    'All Access',
    'Manage Users',
    'View Reports',
    'Edit Content',
    'Approve Requests',
  ];

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handlePermissionChange = permission => {
    setNewRole(prevRole => ({
      ...prevRole,
      permissions: prevRole.permissions.includes(permission)
        ? prevRole.permissions.filter(p => p !== permission)
        : [...prevRole.permissions, permission],
    }));
  };

  const handleAddRole = () => {
    if (newRole.name.trim() === '') return;

    const newRoleWithId = {
      id: Date.now().toString(),
      name: newRole.name,
      permissions: newRole.permissions,
    };

    setRoles([...roles, newRoleWithId]);
    setNewRole({ name: '', permissions: [] });
    setIsModalOpen(false);
  };

  const handleDeleteRole = id => {
    setRoles(roles.filter(role => role.id !== id));
  };

  const handleViewProfile = user => {
    setSelectedUser(user);
    setActiveTab('my-profile');
  };

  return (
    <DashboardLayout>
      <div className='w-full'>
        <div className='px-4'>
          <div className='flex items-center mb-6 mt-7'>
            <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
            <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
              Setting &gt;{' '}
            </span>
            <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
              User{' '}
            </span>
          </div>
          {/* Tabs Navigation */}
          <div className='border-b w-full flex'>
            <button
              onClick={() => setActiveTab('my-profile')}
              className={`px-4 py-2 ${
                activeTab === 'my-profile'
                  ? 'border-b-2 font-semibold border-[#00925C] text-[#00925C]'
                  : 'font-medium text-[#717B8C]'
              }`}
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveTab('all-users')}
              className={`px-4 py-2 ${
                activeTab === 'all-users'
                  ? 'border-b-2 font-semibold border-[#00925C] text-[#00925C]'
                  : 'font-medium text-[#717B8C]'
              }`}
            >
              All Users
            </button>
            <button
              onClick={() => setActiveTab('work-schedule')}
              className={`px-4 py-2 ${
                activeTab === 'work-schedule'
                  ? 'border-b-2 font-semibold border-[#00925C] text-[#00925C]'
                  : 'font-medium text-[#717B8C]'
              }`}
            >
              Work Schedule
            </button>
            <button
              onClick={() => setActiveTab('vacation-planner')}
              className={`px-4 py-2 ${
                activeTab === 'vacation-planner'
                  ? 'border-b-2 font-semibold border-[#00925C] text-[#00925C]'
                  : 'font-medium text-[#717B8C]'
              }`}
            >
              Vacation Planner
            </button>
          </div>

          {/* All Users Tab Content */}
          {activeTab === 'all-users' && (
            <>
              <div className='mt-6 px-6 py-8 mb-5 rounded-[20px] bg-white'>
                <div className='flex justify-between mb-4'>
                  <h2 className='text-xl font-semibold text-[#131313]'>Users</h2>
                  <button
                    onClick={() => setIsAddUserOpen(true)}
                    className='bg-[#0075FF] hover:bg-[#0055FF] text-white text-sm px-8 py-2.5 rounded-xl flex items-center'
                  >
                    <UserPlus className='size-5 mr-2' />
                    Add User
                  </button>
                </div>

                <div className='space-y-4'>
                  {allUsers.map(user => (
                    <div key={user.id} className='border border-[#CCCCCC] rounded pb-2.5'>
                      <div className='flex justify-between border-b border-[#CCCCCC] items-center px-5 mb-4'>
                        <div className='flex items-center py-2.5'>
                          <h3 className='text-lg font-medium pr-5'>{user.name}</h3>
                          <div>
                            <button
                              onClick={() => toggleUserActive(user.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                                user.active ? 'bg-[#19DB8C]' : 'bg-gray-400'
                              } transition-colors focus:outline-none`}
                            >
                              <span className='sr-only'>Toggle user active state</span>
                              <span
                                className={`${
                                  user.active ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                              />
                            </button>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <button
                            onClick={() => handleViewProfile(user)}
                            className='flex items-center gap-1 text-xs text-white bg-[#0075FF] hover:bg-[#0055FF] px-3.5 py-1.5 rounded-full'
                          >
                            <MdRemoveRedEye className='w-4 h-4' />
                            View
                          </button>
                          <button
                            onClick={() => deleteUser(user.id)}
                            className='text-red-500 hover:text-red-700 p-2 rounded-md'
                          >
                            <Trash2 className='h-5 w-5 mr-3' />
                          </button>
                        </div>
                      </div>

                      <div className='flex justify-between px-5 pb-5'>
                        <div className='flex gap-x-36'>
                          <div className='space-y-3'>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Customer Type
                              </p>
                              <p className='text-[#696969] text-sm'>
                                {user.customerType}
                              </p>
                            </div>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Date Of Birth
                              </p>
                              <p className='text-[#696969] text-sm'>{user.dateOfBirth}</p>
                            </div>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Telefonnummer
                              </p>
                              <p className='text-[#696969] text-sm'>{user.telephone}</p>
                            </div>
                          </div>
                          <div className='space-y-3'>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Customer Number
                              </p>
                              <p className='text-[#696969] text-sm'>
                                {user.customerNumber}
                              </p>
                            </div>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>Role</p>
                              <p className='text-[#696969] text-sm'>{user.role}</p>
                            </div>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Adresse
                              </p>
                              <p className='text-[#696969] text-sm'>{user.address}</p>
                            </div>
                          </div>
                          <div className='space-y-3 flex flex-col'>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>Name</p>
                              <p className='text-[#696969] text-sm'>{user.name}</p>
                            </div>
                            <div>
                              <p className='text-base font-medium text-[#1A2042]'>
                                Email Adresse
                              </p>
                              <p className='text-[#696969] text-sm'>{user.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <img
                            src={user.profileImage || '/placeholder.svg'}
                            alt={user.name}
                            className='w-36 h-36 rounded-full object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roles Section - Only shown in All Users tab */}
              <div className='pt-7 px-6 pb-24 bg-white rounded-xl mb-6 shadow-sm'>
                <div className='flex justify-between items-center mb-6'>
                  <h1 className='text-2xl font-semibold'>Roles</h1>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className='bg-[#0075FF] hover:bg-[#0055FF] text-white text-sm px-8 py-2.5 rounded-xl flex items-center'
                  >
                    <UserPlus className='w-5 h-5 mr-2' />
                    Add Role
                  </button>
                </div>

                <div className='space-y-4'>
                  {roles.map(role => (
                    <div
                      key={role.id}
                      className='border border-[#C1C1C1C1] rounded-[10px] shadow p-4 flex flex-col space-y-3'
                    >
                      <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                          <User className='w-6 h-6 mr-2' />
                          <span className='text-lg font-medium'>{role.name}</span>
                        </div>
                        <button
                          size='icon'
                          className='text-[#E54B47] hover:text-red-700'
                          onClick={() => handleDeleteRole(role.id)}
                        >
                          <Trash2 className='h-5 w-5' />
                        </button>
                      </div>

                      <div>
                        <p className='text-sm text-[#696969] font-medium my-2'>
                          Permissions:
                        </p>
                        <div className='flex flex-wrap gap-2'>
                          {role.permissions.map(permission => (
                            <span
                              key={`${role.id}-${permission}`}
                              className='px-3 py-1 bg-[#EEF5FF] text-[#696969] border border-[#9EC3FF] text-xs rounded-full'
                            >
                              {permission}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* My Profile Tab Content */}
          {activeTab === 'my-profile' && <MyProfile user={selectedUser} />}

          {/* Work Schedule Tab Content */}
          {activeTab === 'work-schedule' && <WorkSchedule />}

          {/* Vacation Planner Tab Content */}
          {activeTab === 'vacation-planner' && <VacationPlanner />}

          {/* Add User Modal */}
          {isAddUserOpen && (
            <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4'>
              <div className='bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto'>
                {/* Header */}
                <div className='px-6 py-4 bg-blue-50 flex justify-between items-center rounded-t-lg'>
                  <div>
                    <h2 className='text-xl font-semibold'>Add User</h2>
                    <p className='text-gray-500 text-sm'>
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                  <button
                    onClick={() => setIsAddUserOpen(false)}
                    className='bg-white rounded-full p-2 hover:bg-gray-100'
                  >
                    <X className='h-5 w-5' />
                  </button>
                </div>

                {/* Profile Image Update */}
                <div className='px-6 py-6'>
                  <h3 className='text-lg font-medium mb-2'>Update Profile</h3>
                  <p className='text-gray-500 text-sm mb-4'>
                    The site icon is what you see in browser tabs etc. It should be square
                    and at least 512 x 512 pixels.
                  </p>

                  <div className='flex items-center gap-4'>
                    <div className='h-32 w-32 rounded-full bg-gray-200 overflow-hidden flex-shrink-0'>
                      <img
                        src={
                          newUser.profileImage || '/placeholder.svg?height=128&width=128'
                        }
                        alt='Profile'
                        className='h-full w-full object-cover'
                      />
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className='px-6 py-4'>
                  <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='firstName'
                        className='block text-sm font-medium mb-2'
                      >
                        First Name
                      </label>
                      <input
                        id='firstName'
                        name='firstName'
                        placeholder='Type First Name ....'
                        value={newUser.firstName || ''}
                        onChange={e =>
                          setNewUser({
                            ...newUser,
                            firstName: e.target.value,
                            name: `${e.target.value} ${newUser.lastName || ''}`,
                          })
                        }
                        className='w-full px-4 py-3 border rounded-lg text-gray-700'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='lastName'
                        className='block text-sm font-medium mb-2'
                      >
                        Last Name
                      </label>
                      <input
                        id='lastName'
                        name='lastName'
                        placeholder='Type Last Name ....'
                        value={newUser.lastName || ''}
                        onChange={e =>
                          setNewUser({
                            ...newUser,
                            lastName: e.target.value,
                            name: `${newUser.firstName || ''} ${e.target.value}`,
                          })
                        }
                        className='w-full px-4 py-3 border rounded-lg text-gray-700'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label
                        htmlFor='telephone'
                        className='block text-sm font-medium mb-2'
                      >
                        Phone Number
                      </label>
                      <div className='flex'>
                        <div className='flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-lg'>
                          <span className='text-sm'>+1</span>
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='ml-1'
                          >
                            <polyline points='6 9 12 15 18 9'></polyline>
                          </svg>
                        </div>
                        <input
                          id='telephone'
                          name='telephone'
                          placeholder='Type phone number.....'
                          value={newUser.telephone || ''}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border rounded-r-lg text-gray-700'
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor='email' className='block text-sm font-medium mb-2'>
                        Email Address
                      </label>
                      <input
                        id='email'
                        name='email'
                        placeholder='Type email address.......'
                        value={newUser.email || ''}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border rounded-lg text-gray-700'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-6 mb-6'>
                    <div>
                      <label htmlFor='role' className='block text-sm font-medium mb-2'>
                        Roles
                      </label>
                      <div className='relative'>
                        <select
                          id='role'
                          name='role'
                          value={newUser.role || ''}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border rounded-lg text-gray-700 appearance-none'
                        >
                          <option value=''>Select a role</option>
                          <option value='Chef'>Chef</option>
                          <option value='Manager'>Manager</option>
                          <option value='Admin'>Admin</option>
                        </select>
                        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <polyline points='6 9 12 15 18 9'></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor='customerType'
                        className='block text-sm font-medium mb-2'
                      >
                        Customer Type
                      </label>
                      <div className='relative'>
                        <select
                          id='customerType'
                          name='customerType'
                          value={newUser.customerType || 'Private Person'}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border rounded-lg text-gray-700 appearance-none'
                        >
                          <option value='Private Person'>Private Person</option>
                          <option value='Company'>Company</option>
                          <option value='Cooking'>Cooking</option>
                        </select>
                        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <polyline points='6 9 12 15 18 9'></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='px-6 py-4 flex justify-end gap-4 border-t'>
                  <button
                    onClick={() => setIsAddUserOpen(false)}
                    className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleAddUser}
                    className='bg-navy-900 hover:bg-navy-950 text-white font-medium px-8 py-3 rounded-lg'
                    style={{ backgroundColor: '#151935' }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Add Role Modal */}
          {isModalOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
              <div
                ref={modalRef}
                className='bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden'
              >
                <div className='flex justify-between items-center p-4 border-b'>
                  <h2 className='text-lg font-semibold'>Add New Role</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className='text-gray-500 hover:text-gray-700'
                  >
                    <X className='h-5 w-5' />
                  </button>
                </div>

                <div className='p-4 space-y-4'>
                  <div className='space-y-2 space-x-2'>
                    <label htmlFor='role-name'>Role Name</label>
                    <input
                      id='role-name'
                      placeholder='Enter role name'
                      className='outline-none'
                      value={newRole.name}
                      onChange={e => setNewRole({ ...newRole, name: e.target.value })}
                    />
                  </div>

                  <div className='space-y-2'>
                    <label>Permissions</label>
                    <div className='grid grid-cols-1 gap-2'>
                      {availablePermissions.map(permission => (
                        <div key={permission} className='flex items-center space-x-2'>
                          <input
                            type='checkbox'
                            id={`permission-${permission}`}
                            checked={newRole.permissions.includes(permission)}
                            onChange={() => handlePermissionChange(permission)}
                          />
                          <label
                            htmlFor={`permission-${permission}`}
                            className='text-sm font-medium leading-none cursor-pointer peer-disabled:opacity-70'
                          >
                            {permission}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className='w-full bg-blue-500 hover:bg-blue-600 text-white'
                    onClick={handleAddRole}
                  >
                    Add Role
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserTabs;
