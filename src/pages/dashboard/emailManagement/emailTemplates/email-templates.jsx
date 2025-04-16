'use client';

import { useState } from 'react';
import { Eye, Trash2, Plus, SquarePen } from 'lucide-react';
import CreateNewTemplate from './create-new-template';

<CreateNewTemplate />;

export default function EmailTemplates() {
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: 'Invoice Template',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
    {
      id: 2,
      title: 'Reservation',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
    {
      id: 3,
      title: 'Welcome Email',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
    {
      id: 4,
      title: 'Announcement',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
    {
      id: 5,
      title: 'Follow Up',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
    {
      id: 6,
      title: 'Review',
      subject: 'Your Invoice #(number)',
      content:
        "Hi [Recipient name],\nI hope you're well. Please see attached invoice number...",
      lastModified: '2024-03-09',
    },
  ]);

  // Replace modal state with page state
  const [currentPage, setCurrentPage] = useState('templates'); // 'templates' or 'create'
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [newTemplate, setNewTemplate] = useState({
    title: '',
    subject: '',
    content: '',
  });

  const handleCreateTemplate = () => {
    setCurrentTemplate(null);
    setNewTemplate({
      title: '',
      subject: '',
      content: '',
    });
    // Instead of opening modal, navigate to create page
    setCurrentPage('create');
  };

  const handleEditTemplate = template => {
    setCurrentTemplate(template);
    setNewTemplate({
      title: template.title,
      subject: template.subject,
      content: template.content,
    });
    // Instead of opening modal, navigate to create/edit page
    setCurrentPage('create');
  };

  const handleDeleteTemplate = id => {
    setTemplates(templates.filter(template => template.id !== id));
  };

  const handleSaveTemplate = () => {
    if (currentTemplate) {
      // Edit existing template
      setTemplates(
        templates.map(template =>
          template.id === currentTemplate.id
            ? {
                ...template,
                title: newTemplate.title,
                subject: newTemplate.subject,
                content: newTemplate.content,
                lastModified: new Date().toISOString().split('T')[0],
              }
            : template
        )
      );
    } else {
      // Create new template
      const newId = Math.max(...templates.map(t => t.id), 0) + 1;
      setTemplates([
        ...templates,
        {
          id: newId,
          title: newTemplate.title,
          subject: newTemplate.subject,
          content: newTemplate.content,
          lastModified: new Date().toISOString().split('T')[0],
        },
      ]);
    }
    // Return to templates page after saving
    setCurrentPage('templates');
  };

  const goBackToTemplates = () => {
    setCurrentPage('templates');
  };

  // Conditionally render the appropriate page
  if (currentPage === 'create') {
    return (
      <CreateNewTemplate
        currentTemplate={currentTemplate}
        newTemplate={newTemplate}
        setNewTemplate={setNewTemplate}
        handleSaveTemplate={handleSaveTemplate}
        goBackToTemplates={goBackToTemplates}
      />
    );
  }

  // Templates listing page (default view)
  return (
    <div className='container mx-auto px-4 py-8 max-w-7xl'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-bold'>Email Templates</h1>
          <p className='text-gray-600'>
            Add and Customized emails templates that can be used
          </p>
        </div>
        <button
          onClick={handleCreateTemplate}
          className='bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white px-4 py-2 rounded-xl flex items-center gap-2'
        >
          <span>Create Template</span>
          <Plus size={16} />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {templates.map(template => (
          <div
            key={template.id}
            className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'
          >
            <div className='flex justify-between items-start mb-2'>
              <h2 className='text-xl font-semibold'>{template.title}</h2>
              <button className='bg-[#0075FF] text-sm hover:bg-[#0055FF] text-white px-3 py-1 rounded-xl flex items-center gap-1'>
                <Eye size={16} />
                View
              </button>
            </div>
            <p className='font-medium text-gray-800 mb-1'>{template.subject}</p>
            <p className='text-gray-600 text-sm mb-4 whitespace-pre-line line-clamp-2'>
              {template.content}
            </p>
            <div className='flex justify-between items-center mt-4 pt-2 border-t border-gray-100'>
              <span className='text-sm text-gray-500'>
                Last modified: {template.lastModified}
              </span>
              <div className='flex gap-2'>
                <button
                  onClick={() => handleEditTemplate(template)}
                  className='p-1.5 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50'
                >
                  <SquarePen size={16} />
                </button>
                <button
                  onClick={() => handleDeleteTemplate(template.id)}
                  className='p-1.5 rounded-md border border-red-500 text-red-500 hover:bg-red-50'
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
