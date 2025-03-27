import { ArrowLeft, Trash2, User, UserPlus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../../layouts/dashboardLayout';
import { MdRemoveRedEye } from 'react-icons/md';

const AllUsersProfile = () => {
  const [activeTab, setActiveTab] = useState('all-users');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [users, setUsers] = useState([
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
      customerNumber: 1,
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
      customerNumber: 1,
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
    customerNumber: users.length + 1,
    active: true,
    profileImage: '/placeholder.svg?height=80&width=80',
  });

  const toggleUserActive = userId => {
    setUsers(
      users.map(user => (user.id === userId ? { ...user, active: !user.active } : user))
    );
  };

  const deleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const user = {
        id: String(Date.now()),
        name: newUser.name || '',
        customerType: newUser.customerType || 'Private Person',
        customerNumber: newUser.customerNumber || users.length + 1,
        dateOfBirth: newUser.dateOfBirth || '',
        role: newUser.role || '',
        telephone: newUser.telephone || '',
        address: newUser.address || '',
        email: newUser.email || '',
        active: true,
        profileImage: '/placeholder.svg?height=80&width=80',
      };

      setUsers([...users, user]);
      setNewUser({
        customerType: 'Private Person',
        customerNumber: users.length + 2,
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

  return (
    <DashboardLayout>
      <div className='px-4'>
        <div className='flex items-center mb-6 mt-7'>
          <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
          <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
            Setting &gt;{' '}
          </span>
          <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
            Webpage{' '}
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

        {/* Tab Content */}
        <div className='mt-6 px-6 py-8 mb-5 rounded-[20px] bg-white'>
          {/* Users */}
          {activeTab === 'all-users' && (
            <div>
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
                {users.map(user => (
                  <div key={user.id} className='border border-[#CCCCCC] rounded pb-2.5'>
                    <div className='flex justify-between border-b border-[#CCCCCC] items-center px-5 mb-4'>
                      <div className='flex items-center py-2.5'>
                        <h3 className='text-lg font-medium pr-5'>{user.name}</h3>
                        <div>
                          <button
                            onClick={() => toggleUserActive(user.id)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                              user.active ? 'bg-[#19DB8C]' : 'bg-gray-200'
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
                        <button className='flex items-center gap-1 text-xs text-white bg-[#0075FF] hover:bg-[#0055FF] px-3.5 py-1.5 rounded-full'>
                          <MdRemoveRedEye className='size-4' />
                          {/* <Eye size={20} /> */}
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
                            <p className='text-[#696969] text-sm'>{user.customerType}</p>
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
                          className='size-36 rounded-full object-cover'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* My Profile Tab */}
          {activeTab === 'my-profile' && (
            <div className='p-4 text-center'>
              <h2 className='text-xl font-medium'>My Profile Content</h2>
              <p className='text-gray-500'>Profile information would appear here</p>
            </div>
          )}
          {/* Work Schedule Tab */}
          {activeTab === 'work-schedule' && (
            <div className='p-4 text-center'>
              <h2 className='text-xl font-medium'>Work Schedule Content</h2>
              <p className='text-gray-500'>Work schedule information would appear here</p>
            </div>
          )}
          {/* Vacation Planner Tab */}
          {activeTab === 'vacation-planner' && (
            <div className='p-4 text-center'>
              <h2 className='text-xl font-medium'>Vacation Planner Content</h2>
              <p className='text-gray-500'>
                Vacation planning information would appear here
              </p>
            </div>
          )}
        </div>
        {/* Add User Modal */}
        {isAddUserOpen && (
          <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4'>
            <div className='bg-white rounded-lg shadow-lg max-w-md w-full max-h-[85vh] overflow-auto'>
              <div className='px-6 py-4 border-b flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>Add New User</h2>
                <button
                  onClick={() => setIsAddUserOpen(false)}
                  className='text-gray-500 hover:text-gray-700'
                >
                  ✕
                </button>
              </div>
              <div className='grid gap-4 py-4 px-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      Name
                    </label>
                    <input
                      id='name'
                      name='name'
                      value={newUser.name || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email Address
                    </label>
                    <input
                      id='email'
                      name='email'
                      value={newUser.email || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='dateOfBirth' className='text-sm font-medium'>
                      Date Of Birth
                    </label>
                    <input
                      id='dateOfBirth'
                      name='dateOfBirth'
                      value={newUser.dateOfBirth || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='role' className='text-sm font-medium'>
                      Role
                    </label>
                    <input
                      id='role'
                      name='role'
                      value={newUser.role || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='telephone' className='text-sm font-medium'>
                      Telephone
                    </label>
                    <input
                      id='telephone'
                      name='telephone'
                      value={newUser.telephone || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='address' className='text-sm font-medium'>
                      Address
                    </label>
                    <input
                      id='address'
                      name='address'
                      value={newUser.address || ''}
                      onChange={handleInputChange}
                      className='w-full px-3 py-2 border rounded-md'
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddUser}
                  className='mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='pt-7 px-6 pb-24 bg-white rounded-xl mb-6 shadow-sm'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-semibold'>Roles</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className='bg-[#0075FF] hover:bg-[#0055FF] text-white text-sm px-8 py-2.5 rounded-xl flex items-center'
            >
              <UserPlus className='size-5 mr-2' />
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
                    <User className='size-6 mr-2' />
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
                  <p className='text-sm text-[#696969] font-medium my-2'>Permissions:</p>
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

          {/* Custom Modal Implementation */}
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
        {/* Role */}
      </div>
    </DashboardLayout>
  );
};

export default AllUsersProfile;
