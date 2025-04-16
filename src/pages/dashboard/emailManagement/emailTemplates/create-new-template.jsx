'use client';

import { useState, useRef } from 'react';
import EmailHeader from './emailHeader';
import EmailTemplateForm from './emailTemplateForm';
import EmailContent from './emailContent';
import EmailContactTemplate from './emailContactTemplate';
import EmailFooter from './emailFooter';

const CreateNewTemplate = () => {
  // State for active tab (layout or editing options)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeTab, setActiveTab] = useState('invoice');
  const [activeEditSection, setActiveEditSection] = useState('layout');

  // State for invoice data
  const [invoiceData, setInvoiceData] = useState({
    // Company info
    companyName: 'Easy Dine Bistro',
    companyType: 'Dine-in / Takeaway / Catering',
    companyAddress: '123 Main Street, Zurich',
    companyPhone: 'Tel: 032 633 00 63',
    companyEmail: 'E-Mail: orders@easydine.ch',
    companyUID: 'UID: CHE-199-819.522',

    // Invoice details
    invoiceNumber: '42',
    invoiceDate: '01.02.2018',
    orderDate: '01.02.2018',
    orderTime: '01.02.2018-10.02.2018',
    customerID: '20001',
    customerName: 'Max Mustermann',
    customerAddress: 'Musterstrasse 13a',
    customerCity: 'Musterstadt 4000',
    ihreUID: 'A19999999',
    paymentType: 'Rechnung',

    // Items
    items: [
      {
        id: 1,
        item: 'Grilled Salmon',
        category: 'Main Course',
        quantity: 3,
        unitPrice: '25.00 CHF',
        total: '75.00 CHF',
      },
    ],

    // Positions
    positions: [
      {
        id: 1,
        pos: '1',
        artNr: 'OUG',
        bezeichnung: 'Spiegel',
        einzelpreis: '100.00 CHF',
        gesamt: '225.00 CHF',
      },
    ],

    // Footer
    accountName: 'Account: Easy Dine Bistro',
    bank: 'Bank: BEKB',
    bic: 'BIC: KBBECH22XXX',
    iban: 'IBAN: CH93 0079 0016 9158 4493 3',
    website: 'Website: www.easydinebistrp.ch',
    footerEmail: 'Email: orders@easydine.ch',

    // Thank you text
    thankYouText:
      'Thank you for dining with Easy Dine Bistro! We appreciate your visit and look forward to serving you again.',

    // Additional text
    additionalText:
      'Das Autocenter Niederbipp AG Team dankt Ihnen für den Auftrag und wünscht gute Fahrt',
  });

  // State for layout options
  const [layoutOptions, setLayoutOptions] = useState({
    headerStyle: 1, // 1: Logo right / Company data left
    footerStyle: 1, // 1: Company data in 3 columns
    addressPosition: 'left',
    nameArrangement: 'lastFirst',
    printOptions: {
      sameIndentation: true,
      dueDate: true,
      acceptance: true,
      customerNumber: false,
      customerPhone: false,
      sender: true,
      tireStorage: false,
      amountPaid: true,
      orderNumberOnOrder: false,
      orderNumberOnDraft: false,
      orderNumberOnInvoice: false,
      offerNumberOnOffer: true,
      pricesOnOrder: false,
    },
    printQRCode: true,
    printHeader: true,
    printFooter: true,
    useStandardLogo: true,
    useBackgroundImage: false,
    printBackgroundImage: false,
    textAboveItems: '',
    textBelowItems:
      'The Easy Dine Bistro Team Thanks You For Your Order And Wishes You A Pleasant Dining Experience.',
  });

  // Logo image state
  const [logoImage, setLogoImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Reference for printing
  const componentRef = useRef();

  // Simple print function

  // Standard logo component
  const StandardLogo = () => (
    <div className='flex items-center justify-center'>
      <img src='../src/assets/images/easyDineLogo.png' alt='logo' />
    </div>
  );

  // Render header based on selected style
  const renderHeader = () => {
    if (!layoutOptions.printHeader) return null;

    const logo = layoutOptions.useStandardLogo ? (
      <StandardLogo />
    ) : (
      logoImage && (
        <img
          src={logoImage || '/placeholder.svg'}
          alt='Company Logo'
          className='h-16 object-contain'
        />
      )
    );

    const companyData = (
      <div className='text-sm'>
        <div className='font-semibold'>{invoiceData.companyName}</div>
        <div>{invoiceData.companyType}</div>
        <div>{invoiceData.companyAddress}</div>
        <div>{invoiceData.companyPhone}</div>
        <div>{invoiceData.companyEmail}</div>
        <div>{invoiceData.companyUID}</div>
      </div>
    );

    switch (layoutOptions.headerStyle) {
      case 1:
        return (
          <div className='border border-dashed border-[#0075FF] rounded-sm'>
            <div className='text-end'>
              <button
                onClick={() => {
                  setActiveTab('invoice');
                }}
                className='bg-[#DDEAFF] text-[#696969] font-medium px-10 py-1 rounded text-xs hover:bg-[#0075FF] hover:text-white transition'
              >
                Header
              </button>
            </div>
            <div className='flex justify-between items-start border-gray-300 p-3'>
              {companyData}
              <div className='ml-4'>{logo}</div>
            </div>
          </div>
        );
      case 2: // Logo left / Company data right
        return (
          <div className='flex justify-between items-start border-b border-dashed border-gray-300 p-4'>
            <div>{logo}</div>
            <div className='ml-4'>{companyData}</div>
          </div>
        );
      case 3: // No logo / Company data centered
        return (
          <div className='flex justify-center items-center border-b border-dashed border-gray-300 p-4'>
            <div className='text-center'>{companyData}</div>
          </div>
        );
      case 4: // Only logo / No company data
        return (
          <div className='flex justify-center items-center border-b border-dashed border-gray-300 p-4'>
            <div>{logo}</div>
          </div>
        );
      case 5: // Empty header area
        return <div className='h-20 border-b border-dashed border-gray-300'></div>;
      default:
        return null;
    }
  };

  // Render invoice details
  const renderInvoiceDetails = () => {
    return (
      <div className='border border-dashed border-[#0075FF] rounded-sm mt-4'>
        <div className='text-end'>
          <button
            onClick={() => {
              setActiveTab('edit');
            }}
            className='bg-[#DDEAFF] text-[#696969] font-medium px-8 py-1 rounded text-xs hover:bg-[#0075FF] hover:text-white transition'
          >
            Subject and Name{' '}
          </button>
        </div>
        <div className='flex flex-col p-3'>
          <h2 className='text-[#131313] text-base font-semibold'>
            Invoice Letter Payment
          </h2>
          <span className='text-sm text-[#131313]'>Your invoice #(number)</span>
        </div>
      </div>
    );
  };

  // Render items table
  const renderItemsTable = () => {
    return (
      <div className='border border-dashed border-[#0075FF] rounded-sm mt-4'>
        <div className='text-end'>
          <button
            onClick={() => {
              setActiveTab('standard');
            }}
            className='bg-[#DDEAFF] text-[#696969] font-medium px-4 py-1 rounded text-xs hover:bg-[#0075FF] hover:text-white transition'
          >
            Paragraph Message{' '}
          </button>
        </div>

        <div className='border-b border-dashed border-gray-300 p-4'></div>
      </div>
    );
  };

  // Render positions table
  const renderPositionsTable = () => {
    return (
      <div className='border border-dashed border-[#0075FF] rounded-sm mt-4'>
        <div className='text-end'>
          <button
            onClick={() => setActiveTab('restaurant')}
            className='bg-[#DDEAFF] text-[#696969] font-medium px-4 py-1 rounded text-xs hover:bg-[#0075FF] hover:text-white transition'
          >
            Contact Information{' '}
          </button>
        </div>
        <div className='border-b border-dashed border-gray-300 p-4'>
          <table className='w-full text-sm'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='text-left p-2'>Pos.</th>
                <th className='text-left p-2'>Art.Nr.</th>
                <th className='text-left p-2'>Bezeichnung</th>
                <th className='text-left p-2'>Einzelpreis</th>
                <th className='text-left p-2'>Gesamt</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.positions.map(pos => (
                <tr key={pos.id}>
                  <td className='p-2'>{pos.pos}</td>
                  <td className='p-2'>{pos.artNr}</td>
                  <td className='p-2'>{pos.bezeichnung}</td>
                  <td className='p-2'>{pos.einzelpreis}</td>
                  <td className='p-2'>{pos.gesamt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Render thank you text
  const renderThankYouText = () => {
    return <></>;
  };

  // Render additional text
  const renderAdditionalText = () => {
    return (
      <div className='border border-dashed border-[#0075FF] rounded-sm mt-4'>
        <div className='border-b border-dashed border-gray-300 p-4 text-sm'>
          {invoiceData.additionalText}
        </div>
      </div>
    );
  };

  // Render footer based on selected style
  const renderFooter = () => {
    if (!layoutOptions.printFooter) return null;

    const companyData = (
      <div className='text-xs'>
        <div>{invoiceData.accountName}</div>
        <div>{invoiceData.bank}</div>
        <div>{invoiceData.bic}</div>
        <div>{invoiceData.iban}</div>
      </div>
    );

    const contactData = (
      <div className='text-xs'>
        <div>UID-NR.: CHE-199.819.522</div>
        <div>{invoiceData.companyPhone}</div>
        <div>{invoiceData.website}</div>
        <div>{invoiceData.footerEmail}</div>
      </div>
    );

    switch (layoutOptions.footerStyle) {
      case 1: // Company data in 3 columns
        return (
          <div className='border border-dashed border-[#0075FF] rounded-sm mt-4'>
            <div className='text-end'>
              <button
                onClick={() => setActiveTab('footer')}
                className='bg-[#DDEAFF] text-[#696969] font-medium px-12 py-1 rounded text-xs hover:bg-[#0075FF] hover:text-white transition'
              >
                Footer{' '}
              </button>
            </div>
            <div className='flex justify-between items-start p-4'>
              {companyData}
              <div className='text-xs text-center'>
                <div>UID-NR.: CHE-199.819.522</div>
              </div>
              {contactData}
            </div>
          </div>
        );
      case 2: // Image over the entire foot area
        return (
          <div className='border-t border-gray-300 p-4 flex justify-center'>
            <div className='w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center'>
              <span className='text-gray-500'>LOGO</span>
            </div>
          </div>
        );
      case 3: // Blank footer area
        return <div className='h-20 border-t border-gray-300'></div>;
      case 4: // Enter your own text
        return (
          <div className='border-t border-gray-300 p-4'>
            <p className='text-sm'>Custom footer text goes here</p>
          </div>
        );
      default:
        return null;
    }
  };

  // Render QR code if enabled
  const renderQRCode = () => {
    if (!layoutOptions.printQRCode) return null;

    // Simple QR code representation
    return <></>;
  };

  // Render the invoice preview
  const renderInvoicePreview = () => {
    const backgroundStyle =
      layoutOptions.useBackgroundImage && backgroundImage
        ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
        : {};

    return (
      <div ref={componentRef} className='overflow-hidden w-full' style={backgroundStyle}>
        {renderHeader()}
        {renderInvoiceDetails()}
        {renderItemsTable()}
        {renderPositionsTable()}
        {renderThankYouText()}
        {renderAdditionalText()}
        {renderQRCode()}
        {renderFooter()}
      </div>
    );
  };

  // Main render function
  return (
    <div className='min-h-screen'>
      <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <h1 className='text-[#131313] text-2xl font-bold mb-4'>Email Layout</h1>
            {activeEditSection === 'layout' ? (
              <div className='rounded-xl border border-[#CCCCCC] px-4 py-5'>
                {renderInvoicePreview()}
              </div>
            ) : null}
          </div>
          <div>
            <div className=''>
              <h2 className='text-[#131313] text-2xl font-bold mb-2 px-4'>
                Create new Template
              </h2>
              {activeTab === 'invoice' ? (
                <EmailHeader />
              ) : activeTab === 'edit' ? (
                <EmailTemplateForm />
              ) : activeTab === 'standard' ? (
                <EmailContent />
              ) : activeTab === 'restaurant' ? (
                <EmailContactTemplate />
              ) : activeTab === 'footer' ? (
                <EmailFooter />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTemplate;
