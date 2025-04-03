import { useState } from 'react';
import { Edit, Save, X } from 'lucide-react';

// This would typically come from a layout file in your project
const DashboardLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto'>{children}</div>
    </div>
  );
};

// Header Editor Component
const HeaderEditor = ({ headerData, onSave }) => {
  const [open, setOpen] = useState(false);
  const [tempData, setTempData] = useState({ ...headerData });

  const handleSave = () => {
    onSave(tempData);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          className='absolute right-2 top-2 h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
          onClick={() => setOpen(!open)}
        >
          <Edit className='h-3 w-3 mr-1 inline' /> Kopfbereich bearbeiten
        </button>
      </div>

      {open && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Edit Header Information</h2>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='name' className='text-right text-sm'>
                  Name
                </label>
                <input
                  id='name'
                  value={tempData.name}
                  onChange={e => setTempData({ ...tempData, name: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='type' className='text-right text-sm'>
                  Type
                </label>
                <input
                  id='type'
                  value={tempData.type}
                  onChange={e => setTempData({ ...tempData, type: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='address' className='text-right text-sm'>
                  Address
                </label>
                <input
                  id='address'
                  value={tempData.address}
                  onChange={e => setTempData({ ...tempData, address: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='tel' className='text-right text-sm'>
                  Tel
                </label>
                <input
                  id='tel'
                  value={tempData.tel}
                  onChange={e => setTempData({ ...tempData, tel: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='email' className='text-right text-sm'>
                  Email
                </label>
                <input
                  id='email'
                  value={tempData.email}
                  onChange={e => setTempData({ ...tempData, email: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='uid' className='text-right text-sm'>
                  UID
                </label>
                <input
                  id='uid'
                  value={tempData.uid}
                  onChange={e => setTempData({ ...tempData, uid: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
            </div>
            <div className='flex justify-end gap-2'>
              <button
                onClick={() => setOpen(false)}
                className='px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Invoice Details Editor Component
const InvoiceDetailsEditor = ({ invoiceDetails, onSave }) => {
  const [open, setOpen] = useState(false);
  const [tempData, setTempData] = useState({ ...invoiceDetails });

  const handleSave = () => {
    onSave(tempData);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          className='absolute right-2 top-2 h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
          onClick={() => setOpen(!open)}
        >
          <Edit className='h-3 w-3 mr-1 inline' /> Positionen bearbeiten
        </button>
      </div>

      {open && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Edit Invoice Details</h2>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='number' className='text-right text-sm'>
                  Number
                </label>
                <input
                  id='number'
                  value={tempData.number}
                  onChange={e => setTempData({ ...tempData, number: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='date' className='text-right text-sm'>
                  Date
                </label>
                <input
                  id='date'
                  value={tempData.date}
                  onChange={e => setTempData({ ...tempData, date: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='orderDate' className='text-right text-sm'>
                  Order Date
                </label>
                <input
                  id='orderDate'
                  value={tempData.orderDate}
                  onChange={e => setTempData({ ...tempData, orderDate: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='duringTime' className='text-right text-sm'>
                  During Time
                </label>
                <input
                  id='duringTime'
                  value={tempData.duringTime}
                  onChange={e => setTempData({ ...tempData, duringTime: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='ihreUID' className='text-right text-sm'>
                  Ihre UID
                </label>
                <input
                  id='ihreUID'
                  value={tempData.ihreUID}
                  onChange={e => setTempData({ ...tempData, ihreUID: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='zahlungsart' className='text-right text-sm'>
                  Zahlungsart
                </label>
                <input
                  id='zahlungsart'
                  value={tempData.zahlungsart}
                  onChange={e =>
                    setTempData({ ...tempData, zahlungsart: e.target.value })
                  }
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
            </div>
            <div className='flex justify-end gap-2'>
              <button
                onClick={() => setOpen(false)}
                className='px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Thank You Message Editor Component
const ThankYouEditor = ({ message, onSave }) => {
  const [open, setOpen] = useState(false);
  const [tempMessage, setTempMessage] = useState(message);

  const handleSave = () => {
    onSave(tempMessage);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          className='absolute right-2 top-2 h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
          onClick={() => setOpen(!open)}
        >
          <Edit className='h-3 w-3 mr-1 inline' /> Text bearbeiten
        </button>
      </div>

      {open && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Edit Thank You Message</h2>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='message' className='text-right text-sm'>
                  Message
                </label>
                <textarea
                  id='message'
                  value={tempMessage}
                  onChange={e => setTempMessage(e.target.value)}
                  className='col-span-3 border rounded px-2 py-1'
                  rows={4}
                />
              </div>
            </div>
            <div className='flex justify-end gap-2'>
              <button
                onClick={() => setOpen(false)}
                className='px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Footer Editor Component
const FooterEditor = ({ footerData, onSave }) => {
  const [open, setOpen] = useState(false);
  const [tempData, setTempData] = useState({ ...footerData });

  const handleSave = () => {
    onSave(tempData);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          className='absolute right-2 top-2 h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
          onClick={() => setOpen(!open)}
        >
          <Edit className='h-3 w-3 mr-1 inline' /> Fussbereich bearbeiten
        </button>
      </div>

      {open && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-bold mb-4'>Edit Footer Information</h2>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='account' className='text-right text-sm'>
                  Account
                </label>
                <input
                  id='account'
                  value={tempData.account}
                  onChange={e => setTempData({ ...tempData, account: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='bank' className='text-right text-sm'>
                  Bank
                </label>
                <input
                  id='bank'
                  value={tempData.bank}
                  onChange={e => setTempData({ ...tempData, bank: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='iban' className='text-right text-sm'>
                  IBAN
                </label>
                <input
                  id='iban'
                  value={tempData.iban}
                  onChange={e => setTempData({ ...tempData, iban: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label htmlFor='bic' className='text-right text-sm'>
                  BIC
                </label>
                <input
                  id='bic'
                  value={tempData.bic}
                  onChange={e => setTempData({ ...tempData, bic: e.target.value })}
                  className='col-span-3 border rounded px-2 py-1'
                />
              </div>
            </div>
            <div className='flex justify-end gap-2'>
              <button
                onClick={() => setOpen(false)}
                className='px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TemplatesPlates = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('invoice');

  // State for editable data
  const [invoiceData, setInvoiceData] = useState({
    restaurant: {
      name: 'Easy Dine Bistro',
      type: 'Dine-in / Takeaway / Catering',
      address: '123 Main Street, Zurich',
      tel: '032 633 00 63',
      email: 'orders@easydine.ch',
      uid: 'CHE-199-519-522',
    },
    customer: {
      id: '20001',
      name: 'Max Mustermann',
      address: 'Musterstrasse 15a',
      city: 'Musterstadt 4900',
    },
    invoice: {
      number: '42',
      date: '01.02.2018',
      orderDate: '01.02.2018',
      duringTime: '01.02.2018-10.02.2018',
      ihreUID: 'XXXXXXXX',
      zahlungsart: 'Rechnung',
    },
    items: [
      {
        name: 'Grilled Salmon',
        category: 'Main Course',
        quantity: 3,
        unitPrice: '25.00',
        total: '75.00',
      },
    ],
    fahrzeugItems: [
      {
        pos: 1,
        artNr: 'OUG',
        bezeichnung: 'Spiegel',
        einzelpreis: '100.00',
        gesamt: '225.00',
      },
    ],
    recipient: {
      name: 'Autocenter Niederbipp AG',
      serviceDept: 'Service/Reparatur | Carrosserie/Spritzwerk | Ankauf/Verkauf',
      address: 'Leenrütimattwag 3, 4704 Niederbipp',
      tel: '032 633 00 53',
      email: 'verkauf@acroag.ch',
      uid: 'CHE-199-519-522',
    },
    bankInfo: {
      account: 'Easy Dine Bistro',
      bank: 'BEKB',
      iban: 'CHXXXXXXXX',
      bic: 'KBBECH22XXX',
    },
    thankYouMessage:
      'Thank you for dining with Easy Dine Bistro! We appreciate your visit and look forward to serving you again.',
  });

  // State for editing food items
  const [editingFoodItems, setEditingFoodItems] = useState(false);
  const [tempFoodItems, setTempFoodItems] = useState([...invoiceData.items]);

  // State for editing vehicle items
  const [editingVehicleItems, setEditingVehicleItems] = useState(false);
  const [tempVehicleItems, setTempVehicleItems] = useState([
    ...invoiceData.fahrzeugItems,
  ]);

  // Function to update header information
  const updateHeader = updatedHeader => {
    setInvoiceData({
      ...invoiceData,
      restaurant: updatedHeader,
    });
  };

  // Function to update invoice details
  const updateInvoiceDetails = updatedDetails => {
    setInvoiceData({
      ...invoiceData,
      invoice: updatedDetails,
    });
  };

  // Function to update food items
  const saveFoodItems = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...tempFoodItems],
    });
    setEditingFoodItems(false);
  };

  // Function to update vehicle items
  const saveVehicleItems = () => {
    setInvoiceData({
      ...invoiceData,
      fahrzeugItems: [...tempVehicleItems],
    });
    setEditingVehicleItems(false);
  };

  // Function to update thank you message
  const updateThankYouMessage = message => {
    setInvoiceData({
      ...invoiceData,
      thankYouMessage: message,
    });
  };

  // Function to update footer information
  const updateFooter = updatedFooter => {
    setInvoiceData({
      ...invoiceData,
      bankInfo: updatedFooter,
    });
  };

  // Add a new food item
  const addFoodItem = () => {
    setTempFoodItems([
      ...tempFoodItems,
      {
        name: '',
        category: '',
        quantity: 1,
        unitPrice: '0.00',
        total: '0.00',
      },
    ]);
  };

  // Remove a food item
  const removeFoodItem = index => {
    setTempFoodItems(tempFoodItems.filter((_, i) => i !== index));
  };

  // Add a new vehicle item
  const addVehicleItem = () => {
    setTempVehicleItems([
      ...tempVehicleItems,
      {
        pos: tempVehicleItems.length + 1,
        artNr: '',
        bezeichnung: '',
        einzelpreis: '0.00',
        gesamt: '0.00',
      },
    ]);
  };

  // Remove a vehicle item
  const removeVehicleItem = index => {
    setTempVehicleItems(tempVehicleItems.filter((_, i) => i !== index));
  };

  // Update food item field
  const updateFoodItem = (index, field, value) => {
    const updatedItems = [...tempFoodItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    // Auto-calculate total if quantity or unitPrice changes
    if (field === 'quantity' || field === 'unitPrice') {
      const quantity =
        field === 'quantity' ? Number(value) : Number(updatedItems[index].quantity);
      const unitPrice =
        field === 'unitPrice' ? String(value) : updatedItems[index].unitPrice;
      updatedItems[index].total = (quantity * Number.parseFloat(unitPrice)).toFixed(2);
    }

    setTempFoodItems(updatedItems);
  };

  // Update vehicle item field
  const updateVehicleItem = (index, field, value) => {
    const updatedItems = [...tempVehicleItems];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    // Auto-calculate total if einzelpreis changes
    if (field === 'einzelpreis') {
      updatedItems[index].gesamt = (Number.parseFloat(String(value)) * 2.25).toFixed(2); // Example calculation
    }

    setTempVehicleItems(updatedItems);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <DashboardLayout>
        <div className='p-4'>
          {/* Tabs */}
          <div className='w-full'>
            <div className='mb-6 flex border-b'>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'invoice'
                    ? 'border-b-2 border-blue-500 font-medium'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('invoice')}
              >
                Invoice
              </button>
              <button
                className={`px-4 py-2 ${
                  activeTab === 'receipt'
                    ? 'border-b-2 border-blue-500 font-medium'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('receipt')}
              >
                Cash Receipt
              </button>
            </div>

            {/* Content for Invoice Tab */}
            <div className={`space-y-4 ${activeTab === 'invoice' ? '' : 'hidden'}`}>
              {/* Main Content */}
              <div className='flex flex-col lg:flex-row gap-6'>
                {/* Left Column - Layout */}
                <div className='lg:w-1/2'>
                  <h2 className='text-2xl font-bold mb-6'>Layout Invoice</h2>

                  {/* Company Info Section */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <HeaderEditor
                      headerData={invoiceData.restaurant}
                      onSave={updateHeader}
                    />
                    <div className='flex justify-between items-start'>
                      <div>
                        <h3 className='font-bold'>{invoiceData.restaurant.name}</h3>
                        <p className='text-sm text-gray-600'>
                          {invoiceData.restaurant.type}
                        </p>
                        <p className='text-sm'>{invoiceData.restaurant.address}</p>
                        <p className='text-sm'>Tel: {invoiceData.restaurant.tel}</p>
                        <p className='text-sm'>E-Mail: {invoiceData.restaurant.email}</p>
                        <p className='text-sm'>UID: {invoiceData.restaurant.uid}</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='bg-white rounded p-2'>
                          <div className='text-2xl font-bold text-blue-500'>EASY</div>
                          <div className='text-2xl font-bold text-blue-500'>DINE</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Details Section */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <InvoiceDetailsEditor
                      invoiceDetails={invoiceData.invoice}
                      onSave={updateInvoiceDetails}
                    />
                    <div>
                      <h3 className='font-bold'>Invoice {invoiceData.invoice.number}</h3>
                      <div className='grid grid-cols-2 gap-2'>
                        <div>
                          <p className='text-sm'>Invoice Date:</p>
                          <p className='text-sm'>Order Date:</p>
                          <p className='text-sm'>During Time:</p>
                          <p className='text-sm'>Customer ID:</p>
                          <p className='text-sm'>Customer Name:</p>
                        </div>
                        <div>
                          <p className='text-sm'>{invoiceData.invoice.date}</p>
                          <p className='text-sm'>{invoiceData.invoice.orderDate}</p>
                          <p className='text-sm'>{invoiceData.invoice.duringTime}</p>
                          <p className='text-sm'>{invoiceData.customer.id}</p>
                          <p className='text-sm'>{invoiceData.customer.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Food Items Table */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <div className='absolute right-2 top-2 flex gap-2'>
                      {editingFoodItems ? (
                        <>
                          <button
                            className='h-7 px-2 text-xs'
                            onClick={() => {
                              setEditingFoodItems(false);
                              setTempFoodItems([...invoiceData.items]);
                            }}
                          >
                            <X className='h-3 w-3 mr-1 inline' /> Cancel
                          </button>
                          <button className='h-7 px-2 text-xs' onClick={saveFoodItems}>
                            <Save className='h-3 w-3 mr-1 inline' /> Save
                          </button>
                        </>
                      ) : (
                        <button
                          className='h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
                          onClick={() => setEditingFoodItems(true)}
                        >
                          <Edit className='h-3 w-3 mr-1 inline' /> Tabelle bearbeiten
                        </button>
                      )}
                    </div>

                    {editingFoodItems ? (
                      <div className='mt-4'>
                        <table className='w-full'>
                          <thead>
                            <tr className='bg-gray-100'>
                              <th className='text-left p-2'>Item</th>
                              <th className='text-left p-2'>Category</th>
                              <th className='text-left p-2'>Quantity</th>
                              <th className='text-left p-2'>Unit Price</th>
                              <th className='text-left p-2'>Total</th>
                              <th className='text-left p-2'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tempFoodItems.map((item, index) => (
                              <tr key={index}>
                                <td className='p-2'>
                                  <input
                                    value={item.name}
                                    onChange={e =>
                                      updateFoodItem(index, 'name', e.target.value)
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.category}
                                    onChange={e =>
                                      updateFoodItem(index, 'category', e.target.value)
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    type='number'
                                    value={item.quantity}
                                    onChange={e =>
                                      updateFoodItem(index, 'quantity', e.target.value)
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.unitPrice}
                                    onChange={e =>
                                      updateFoodItem(index, 'unitPrice', e.target.value)
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.total}
                                    readOnly
                                    className='h-8 text-sm bg-gray-50 border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <button
                                    className='h-8 text-xs bg-red-100 hover:bg-red-200 rounded px-2'
                                    onClick={() => removeFoodItem(index)}
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          className='mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm'
                          onClick={addFoodItem}
                        >
                          Add Item
                        </button>
                      </div>
                    ) : (
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-gray-100'>
                            <th className='text-left p-2'>Item</th>
                            <th className='text-left p-2'>Category</th>
                            <th className='text-left p-2'>Quantity</th>
                            <th className='text-left p-2'>Unit Price</th>
                            <th className='text-left p-2'>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                              <td className='p-2'>{item.name}</td>
                              <td className='p-2'>{item.category}</td>
                              <td className='p-2'>{item.quantity}</td>
                              <td className='p-2'>{item.unitPrice} CHF</td>
                              <td className='p-2'>{item.total} CHF</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>

                  {/* Fahrzeugteilen Table */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <div className='absolute right-2 top-2 flex gap-2'>
                      {editingVehicleItems ? (
                        <>
                          <button
                            className='h-7 px-2 text-xs'
                            onClick={() => {
                              setEditingVehicleItems(false);
                              setTempVehicleItems([...invoiceData.fahrzeugItems]);
                            }}
                          >
                            <X className='h-3 w-3 mr-1 inline' /> Cancel
                          </button>
                          <button className='h-7 px-2 text-xs' onClick={saveVehicleItems}>
                            <Save className='h-3 w-3 mr-1 inline' /> Save
                          </button>
                        </>
                      ) : (
                        <button
                          className='h-7 px-2 text-xs bg-blue-100 hover:bg-blue-200 border-blue-200'
                          onClick={() => setEditingVehicleItems(true)}
                        >
                          <Edit className='h-3 w-3 mr-1 inline' /> Fahrzeugteilen
                          bearbeiten
                        </button>
                      )}
                    </div>

                    {editingVehicleItems ? (
                      <div className='mt-4'>
                        <table className='w-full'>
                          <thead>
                            <tr className='bg-gray-100'>
                              <th className='text-left p-2'>Pos.</th>
                              <th className='text-left p-2'>Art.Nr.</th>
                              <th className='text-left p-2'>Bezeichnung</th>
                              <th className='text-left p-2'>Einzelpreis</th>
                              <th className='text-left p-2'>Gesamt</th>
                              <th className='text-left p-2'>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tempVehicleItems.map((item, index) => (
                              <tr key={index}>
                                <td className='p-2'>
                                  <input
                                    value={item.pos}
                                    readOnly
                                    className='h-8 text-sm bg-gray-50 border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.artNr}
                                    onChange={e =>
                                      updateVehicleItem(index, 'artNr', e.target.value)
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.bezeichnung}
                                    onChange={e =>
                                      updateVehicleItem(
                                        index,
                                        'bezeichnung',
                                        e.target.value
                                      )
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.einzelpreis}
                                    onChange={e =>
                                      updateVehicleItem(
                                        index,
                                        'einzelpreis',
                                        e.target.value
                                      )
                                    }
                                    className='h-8 text-sm border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <input
                                    value={item.gesamt}
                                    readOnly
                                    className='h-8 text-sm bg-gray-50 border rounded px-2'
                                  />
                                </td>
                                <td className='p-2'>
                                  <button
                                    className='h-8 text-xs bg-red-100 hover:bg-red-200 rounded px-2'
                                    onClick={() => removeVehicleItem(index)}
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          className='mt-2 bg-blue-500 text-white px-3 py-1 rounded text-sm'
                          onClick={addVehicleItem}
                        >
                          Add Item
                        </button>
                      </div>
                    ) : (
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-gray-100'>
                            <th className='text-left p-2'>Pos.</th>
                            <th className='text-left p-2'>Art.Nr.</th>
                            <th className='text-left p-2'>Bezeichnung</th>
                            <th className='text-left p-2'>Einzelpreis</th>
                            <th className='text-left p-2'>Gesamt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.fahrzeugItems.map((item, index) => (
                            <tr key={index}>
                              <td className='p-2'>{item.pos}</td>
                              <td className='p-2'>{item.artNr}</td>
                              <td className='p-2'>{item.bezeichnung}</td>
                              <td className='p-2'>{item.einzelpreis} CHF</td>
                              <td className='p-2'>{item.gesamt} CHF</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>

                  {/* Thank You Message */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <ThankYouEditor
                      message={invoiceData.thankYouMessage}
                      onSave={updateThankYouMessage}
                    />
                    <p className='text-sm'>{invoiceData.thankYouMessage}</p>
                  </div>

                  {/* Footer Section */}
                  <div className='border rounded p-4 mb-4 relative'>
                    <FooterEditor
                      footerData={invoiceData.bankInfo}
                      onSave={updateFooter}
                    />
                    <div className='text-sm'>
                      <p className='font-bold'>Account: {invoiceData.bankInfo.account}</p>
                      <p>Bank: {invoiceData.bankInfo.bank}</p>
                      <p>BIC: {invoiceData.bankInfo.bic}</p>
                      <p>IBAN: {invoiceData.bankInfo.iban}</p>
                    </div>
                    <div className='text-sm mt-2'>
                      <p>Tel: {invoiceData.restaurant.tel}</p>
                      <p>Website: www.easydine.ch</p>
                      <p>Email: {invoiceData.restaurant.email}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Preview */}
                <div className='lg:w-1/2'>
                  <h2 className='text-2xl font-bold mb-6'>Preview</h2>
                  <div className='border rounded p-6 bg-white shadow'>
                    {/* Header - Restaurant and Client Info */}
                    <div className='flex justify-between items-start mb-8'>
                      <div>
                        <h3 className='font-bold'>{invoiceData.recipient.name}</h3>
                        <p className='text-sm'>{invoiceData.recipient.serviceDept}</p>
                        <p className='text-sm'>{invoiceData.recipient.address}</p>
                        <p className='text-sm'>Tel: {invoiceData.recipient.tel}</p>
                        <p className='text-sm'>E-Mail: {invoiceData.recipient.email}</p>
                        <p className='text-sm'>UID: {invoiceData.recipient.uid}</p>
                      </div>
                      <div className='flex items-center'>
                        <div className='bg-white rounded p-2'>
                          <div className='text-2xl font-bold text-blue-500'>EASY</div>
                          <div className='text-2xl font-bold text-blue-500'>DINE</div>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Details */}
                    <div className='mb-8'>
                      <h3 className='font-bold mb-2'>
                        Rechnung {invoiceData.invoice.number}
                      </h3>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-sm'>Rechnungsdatum:</p>
                          <p className='text-sm'>Fällig am:</p>
                          <p className='text-sm'>Annahme:</p>
                          <p className='text-sm'>Ihre UID:</p>
                          <p className='text-sm'>Zahlungsart:</p>
                        </div>
                        <div>
                          <p className='text-sm'>{invoiceData.invoice.date}</p>
                          <p className='text-sm'>{invoiceData.invoice.date}</p>
                          <p className='text-sm'>{invoiceData.invoice.duringTime}</p>
                          <p className='text-sm'>{invoiceData.invoice.ihreUID}</p>
                          <p className='text-sm'>{invoiceData.invoice.zahlungsart}</p>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div>
                          <p className='text-sm'>Kd-Nr:</p>
                          <p className='text-sm'>{invoiceData.customer.name}</p>
                          <p className='text-sm'>{invoiceData.customer.address}</p>
                          <p className='text-sm'>{invoiceData.customer.city}</p>
                        </div>
                        <div>
                          <p className='text-sm'>{invoiceData.customer.id}</p>
                        </div>
                      </div>
                    </div>

                    {/* Food Items Table */}
                    <div className='mb-6'>
                      <table className='w-full mb-6'>
                        <thead>
                          <tr className='bg-gray-100'>
                            <th className='text-left p-2'>Item</th>
                            <th className='text-left p-2'>Category</th>
                            <th className='text-right p-2'>Quantity</th>
                            <th className='text-right p-2'>Unit Price</th>
                            <th className='text-right p-2'>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.items.map((item, index) => (
                            <tr key={index}>
                              <td className='p-2'>{item.name}</td>
                              <td className='p-2'>{item.category}</td>
                              <td className='p-2 text-right'>{item.quantity}</td>
                              <td className='p-2 text-right'>{item.unitPrice} CHF</td>
                              <td className='p-2 text-right'>{item.total} CHF</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Fahrzeugteilen Table */}
                    <div className='mb-6'>
                      <table className='w-full'>
                        <thead>
                          <tr className='bg-gray-100'>
                            <th className='text-left p-2'>Pos</th>
                            <th className='text-left p-2'>Art.Nr</th>
                            <th className='text-left p-2'>Bezeichnung</th>
                            <th className='text-right p-2'>Einzelpreis</th>
                            <th className='text-right p-2'>Gesamt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceData.fahrzeugItems.map((item, index) => (
                            <tr key={index}>
                              <td className='p-2'>{item.pos}</td>
                              <td className='p-2'>{item.artNr}</td>
                              <td className='p-2'>{item.bezeichnung}</td>
                              <td className='p-2 text-right'>{item.einzelpreis} CHF</td>
                              <td className='p-2 text-right'>{item.gesamt} CHF</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Thank You Message */}
                    <div className='mb-6 text-sm'>
                      <p>{invoiceData.thankYouMessage}</p>
                    </div>

                    {/* Footer Section */}
                    <div className='border-t pt-4 mt-8 text-xs'>
                      <div className='flex justify-between'>
                        <div>
                          <p>Konto: {invoiceData.bankInfo.account}</p>
                          <p>Bank: {invoiceData.bankInfo.bank}</p>
                          <p>BIC: {invoiceData.bankInfo.bic}</p>
                          <p>IBAN: {invoiceData.bankInfo.iban}</p>
                        </div>
                        <div>
                          <p>Tel: {invoiceData.recipient.tel}</p>
                          <p>Website: www.easydine.ch</p>
                          <p>E-Mail: {invoiceData.recipient.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content for Receipt Tab */}
            <div className={`${activeTab === 'receipt' ? '' : 'hidden'}`}>
              <div className='flex justify-center items-center h-64'>
                <p className='text-gray-500'>
                  Cash Receipt template will be available soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default TemplatesPlates;
