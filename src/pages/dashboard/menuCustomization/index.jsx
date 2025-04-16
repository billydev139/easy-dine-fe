'use client';

import { useState, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DashboardLayout from '../../../layouts/dashboardLayout';

import {
  ImageIcon,
  MenuIcon,
  Hand,
  CircleDot,
  Trash2,
  ArrowLeftToLine,
  ExternalLink,
  GripVertical,
  Lock,
} from 'lucide-react';
import { RiImage2Fill } from 'react-icons/ri';
import { PiHandTapFill } from 'react-icons/pi';
import { TbLogout } from 'react-icons/tb';

const MenuCustomization = () => {
  // State for active tab and sub-tab
  const [activeTab, setActiveTab] = useState('Components');
  const [activeSubTab, setActiveSubTab] = useState('Background');
  const [activePlanType, setActivePlanType] = useState('Basic');
  const [activeTestTab, setActiveTestTab] = useState('Test link');

  // State for menu items
  const [menuItems, setMenuItems] = useState([]);
  const [previewContent, setPreviewContent] = useState({
    slide: {
      image: '/placeholder.svg?height=150&width=250',
      title: 'New Slide',
      description: 'Add a description here',
    },
    section: {
      title: 'New Section',
      items: [
        { name: 'Menu Item 1', description: 'Description text', price: '$9.99' },
        { name: 'Menu Item 2', description: 'Description text', price: '$9.99' },
      ],
    },
    cta: {
      text: 'Click Here',
    },
  });

  // Handle tab change
  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  // Handle sub-tab change
  const handleSubTabChange = subTab => {
    setActiveSubTab(subTab);
  };

  // Handle test tab change
  const handleTestTabChange = tab => {
    setActiveTestTab(tab);
  };

  // Handle plan type change
  const handlePlanTypeChange = () => {
    setActivePlanType(activePlanType === 'Basic' ? 'Premium' : 'Basic');
  };

  // Handle adding component to menu
  const handleAddComponent = type => {
    const newItem = {
      id: `item-${Date.now()}`,
      type,
      title:
        type === 'Promotional Slide'
          ? 'Promotional Slide'
          : type === 'Menu Section'
          ? 'Menu Section'
          : 'Call-to-Action',
      subtitle:
        type === 'Call-to-Action' ? 'Add button to drive' : 'Add components to your menu',
    };

    setMenuItems([...menuItems, newItem]);
  };

  // Handle removing component from menu
  const handleRemoveComponent = id => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  // Handle drag end event from react-beautiful-dnd
  const handleDragEnd = result => {
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    // Handle dropping from components to menu
    if (
      result.source.droppableId === 'component-types' &&
      result.destination.droppableId === 'menu-items'
    ) {
      // Get the component type that was dragged
      const componentType = result.draggableId;
      handleAddComponent(componentType);
      return;
    }

    // Handle reordering within menu items
    if (
      result.source.droppableId === 'menu-items' &&
      result.destination.droppableId === 'menu-items'
    ) {
      const reorderedItems = Array.from(menuItems);
      const [removed] = reorderedItems.splice(result.source.index, 1);
      reorderedItems.splice(result.destination.index, 0, removed);
      setMenuItems(reorderedItems);
    }
  };

  // Save changes
  const handleSaveChanges = () => {
    alert('Changes saved successfully (frontend only)');
  };

  // Force a rerender after initial load to fix react-beautiful-dnd issues
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <DashboardLayout>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='my-6'>
          <div className=''>
            {/* Header with plan info */}
            <div className='bg-white rounded-xl border border-[#C1C1C1] mb-6 p-5 flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-[#00AFEC33] rounded-lg flex items-center justify-center'>
                  <CircleDot className='text-[#0075FF]' size={20} />
                </div>
                <div>
                  <h2 className='font-semibold text-lg'>{activePlanType} Plan</h2>
                  <p className='text-sm text-gray-600'>Upgrade to access all features</p>
                </div>
              </div>
              <button
                onClick={handlePlanTypeChange}
                className='flex items-center justify-center gap-x-2 w-[220px] py-2 whitespace-nowrap bg-[#0075FF] text-white text-lg font-medium rounded-xl hover:bg-[#0055FF] transition-colors'
              >
                {activePlanType === 'Basic' ? (
                  'Upgrade'
                ) : (
                  <>
                    <TbLogout size={20} />
                    Switch to Basic
                  </>
                )}
              </button>
            </div>
            {/* Tabs */}
            <div className='mb-6'>
              <div className='flex gap-8'>
                {['Components', 'Design', 'Testing'].map(tab => (
                  <button
                    key={tab}
                    className={`pb-2.5 px-3 ${
                      activeTab === tab
                        ? 'text-[#00925C] border-b-2 text-xl border-[#00925C] font-bold'
                        : 'text-gray-500 text-xl font-semibold'
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Main content */}
            <div className='flex gap-6 flex-col md:flex-row'>
              {/* Left panel */}
              <div className='w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6'>
                {activeTab === 'Components' && (
                  <ComponentsPanel onAddComponent={handleAddComponent} />
                )}
                {activeTab === 'Design' && (
                  <DesignPanel
                    activeSubTab={activeSubTab}
                    onSubTabChange={handleSubTabChange}
                  />
                )}
                {activeTab === 'Testing' && (
                  <TestingPanel
                    activeTestTab={activeTestTab}
                    onTestTabChange={handleTestTabChange}
                  />
                )}
              </div>
              {/* Center panel - Phone preview */}
              <div className='w-full md:w-1/3 flex flex-col items-center'>
                <div className='bg-[#252525] rounded-3xl py-3 px-2 shadow-lg'>
                  <div className='py-0.5 mb-2 gap-x-2 flex items-center justify-center'>
                    <div className='w-28 h-1.5 bg-[#818181] rounded-full'></div>
                    <div className='size-2 rounded-full bg-[#0075FF]'></div>
                  </div>
                  <div className='bg-white rounded-2xl h-[500px] w-[250px] overflow-hidden'>
                    <div className='p-4 overflow-y-auto h-full'>
                      {/* Preview content */}
                      <div className='space-y-4'>
                        {menuItems.map((item, idx) => (
                          <PreviewItem
                            key={idx}
                            item={item}
                            previewContent={previewContent}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right panel */}
              <div className='w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6'>
                <div className='mb-4'>
                  <h2 className='font-semibold text-lg'>Menu Structure</h2>
                  <p className='text-sm text-gray-600'>
                    Arrange the structure of your menu
                  </p>
                </div>
                {menuItems.length > 0 ? (
                  <Droppable droppableId='menu-items'>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`space-y-3 mb-6 min-h-[200px] ${
                          snapshot.isDraggingOver
                            ? 'bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-2'
                            : ''
                        }`}
                      >
                        {menuItems.map((item, index) => (
                          <DraggableMenuItem
                            key={item.id}
                            item={item}
                            index={index}
                            onRemove={handleRemoveComponent}
                          />
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                ) : (
                  <div className='border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center mb-6 min-h-[200px]'>
                    <div className='bg-blue-100 p-4 rounded-lg mb-4'>
                      <img
                        src='/placeholder.svg?height=80&width=80'
                        alt='Empty state'
                        className='w-20 h-20'
                      />
                    </div>
                    <p className='font-medium text-center'>
                      You haven&apos;t added anything to your Menu!
                    </p>
                    <p className='text-sm text-gray-500 text-center mt-1'>
                      Drag & Drop Menu Items
                    </p>
                  </div>
                )}
                <button
                  onClick={handleSaveChanges}
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </DashboardLayout>
  );
};

// Preview Item Component
const PreviewItem = ({ item, previewContent }) => {
  switch (item.type) {
    case 'Menu Section':
      return (
        <div className='mt-4'>
          <h3 className='font-medium text-gray-800 mb-2'>
            {previewContent.section.title}
          </h3>
          <p className='text-sm text-gray-500 mb-3'>Add items to this section</p>
          <div className='space-y-2'>
            {previewContent.section.items.map((menuItem, idx) => (
              <div
                key={idx}
                className='bg-gray-100 rounded-lg p-3 flex justify-between items-center'
              >
                <div>
                  <p className='font-medium text-sm'>{menuItem.name}</p>
                  <p className='text-xs text-gray-500'>{menuItem.description}</p>
                </div>
                <p className='font-medium text-sm'>{menuItem.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'Call-to-Action':
      return (
        <div className='mt-4'>
          <button className='w-full bg-blue-500 text-white py-4 rounded-lg font-medium'>
            {previewContent.cta.text}
          </button>
        </div>
      );
    case 'Promotional Slide':
      return (
        <div className='bg-white shadow-md border p-2.5 rounded-lg overflow-hidden mt-4'>
          <img
            src='https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVlZiUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='Promotional Slide'
            className='w-full h-32 object-cover'
          />
          <div className='mt-2'>
            <h3 className='font-semibold text-[#131313]'>{previewContent.slide.title}</h3>
            <p className='text-sm text-[#696969]'>{previewContent.slide.description}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

// Components Panel
const ComponentsPanel = ({ onAddComponent }) => {
  const componentTypes = [
    {
      id: 'Promotional Slide',
      type: 'Promotional Slide',
      icon: <RiImage2Fill size={22} className='text-[#00AFEC]' />,
    },
    {
      id: 'Menu Section',
      type: 'Menu Section',
      icon: <MenuIcon size={22} className='text-[#00AFEC]' />,
      locked: false, // Changed to false to make it functional
    },
    {
      id: 'Call-to-Action',
      type: 'Call-to-Action',
      icon: <PiHandTapFill size={22} className='text-[#00AFEC]' />,
      locked: false, // Changed to false to make it functional
    },
    {
      id: 'Promotional Slide 2',
      type: 'Promotional Slide',
      icon: <RiImage2Fill size={22} className='text-[#00AFEC]' />,
      locked: true,
    },
    {
      id: 'Promotional Slide 3',
      type: 'Promotional Slide',
      icon: <RiImage2Fill size={22} className='text-[#00AFEC]' />,
      locked: true,
    },
  ];

  return (
    <>
      <div className='mb-4'>
        <h2 className='font-semibold text-lg'>Add Components</h2>
        <p className='text-sm text-gray-600'>Add components to your menu</p>
      </div>
      <Droppable droppableId='component-types' isDropDisabled={true}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className='space-y-3'>
            {componentTypes.map((component, index) => (
              <Draggable
                key={component.id}
                draggableId={component.type}
                index={index}
                isDragDisabled={component.locked}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`border border-[#C1C1C1] rounded-xl p-4 flex items-center ${
                      component.locked ? 'opacity-60' : 'cursor-grab hover:bg-gray-50'
                    } ${
                      snapshot.isDragging ? 'opacity-50 bg-gray-50' : ''
                    } transition-colors`}
                    onClick={() => !component.locked && onAddComponent(component.type)}
                  >
                    <div className='w-10 h-10 bg-[#00AFEC33] rounded-xl flex items-center justify-center mr-3'>
                      {component.icon}
                    </div>
                    <div className='flex-1'>
                      <p className='font-medium flex items-center'>
                        {component.type}
                        {component.locked && (
                          <span className='ml-1 text-gray-400'>
                            <Lock className='size-4' />
                          </span>
                        )}
                      </p>
                      <p className='text-sm text-gray-600'>
                        {component.type === 'Call-to-Action'
                          ? 'Add button to drive'
                          : 'Add components to your menu'}
                      </p>
                    </div>
                    <GripVertical className='text-gray-400' size={20} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

// Design Panel
const DesignPanel = ({ activeSubTab, onSubTabChange }) => {
  const colorOptions = [
    'bg-gray-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-blue-600',
    'bg-gray-300',
    'bg-yellow-300',
  ];

  const gradientOptions = [
    { name: 'Ocean', classes: 'bg-gradient-to-r from-[#95CFFF] to-[#56A5FF]' },
    { name: 'Lavender', classes: 'bg-gradient-to-r from-[#CFCAFF] to-[#A77BFF]' },
    { name: 'Light Blue', classes: 'bg-gradient-to-r from-[#C9F3FF] to-[#49DDFF]' },
    { name: 'Forest', classes: 'bg-gradient-to-r from-[#D7FFAE] to-[#9DE356]' },
  ];

  const fontOptions = ['Poppins', 'Inter', 'Playfair Display', 'Roboto', 'Montserrat'];

  const layoutOptions = ['Compact', 'Default', 'Spacious'];

  // New state variables for color picker
  const [selectedColor, setSelectedColor] = useState(colorOptions[6]); // Default selected color
  const [hexColor, setHexColor] = useState('#ff0000');
  const colorPickerRef = useRef(null);

  // New functions for color picker
  const handleColorSelect = color => {
    setSelectedColor(color);
    // Convert Tailwind class to hex color (simplified version)
    const colorMap = {
      'bg-gray-200': '#e5e7eb',
      'bg-yellow-200': '#fef08a',
      'bg-green-200': '#bbf7d0',
      'bg-blue-200': '#bfdbfe',
      'bg-purple-200': '#e9d5ff',
      'bg-pink-200': '#fbcfe8',
      'bg-blue-600': '#2563eb',
      'bg-gray-300': '#d1d5db',
      'bg-yellow-300': '#fde047',
    };
    setHexColor(colorMap[color] || '#ff0000');
  };

  const validateHexColor = () => {
    // Basic validation for hex color
    const isValid = /^#([0-9A-F]{3}){1,2}$/i.test(hexColor);
    if (!isValid) {
      setHexColor('#ff0000'); // Reset to default if invalid
    }
  };

  const applyColor = () => {
    // Function to apply the selected color to your design
    // This would typically update some parent state or context
    console.log('Applying color:', hexColor);
    // You could implement something like:
    // props.onColorChange(hexColor);
    alert(`Color ${hexColor} applied to design!`);
  };

  return (
    <>
      <div className='bg-[#F4F9FF] px-5 py-3 mb-4'>
        <h2 className='font-medium text-xl'>Design Settings</h2>
      </div>

      <div className='flex justify-between bg-[#F4F9FF] mb-4 space-x-2'>
        {['Background', 'Typography', 'Layout'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm ${
              activeSubTab === tab
                ? 'bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] font-medium'
                : 'text-[#696969]'
            }`}
            onClick={() => onSubTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeSubTab === 'Background' && (
        <div className='space-y-6'>
          <div className='border border-[#C1C1C1] shadow-md shadow-[#0000001A] rounded-xl p-4'>
            <h3 className='font-medium mb-3'>Colors</h3>
            <div className='grid grid-cols-9 gap-2 mb-4'>
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  className={`w-6 h-6 rounded-full ${color} ${
                    selectedColor === color ? 'ring-2 ring-offset-2 ring-[#0075FF]' : ''
                  }`}
                  onClick={() => handleColorSelect(color)}
                ></button>
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <input
                ref={colorPickerRef}
                type='color'
                value={hexColor}
                className='h-10 rounded-lg cursor-pointer bg-white'
                onChange={e => setHexColor(e.target.value)}
              />
              <input
                type='text'
                className='flex-1 border border-[#9EC3FF] bg-[#EEF5FF] rounded px-3 outline-none py-2 text-sm'
                value={hexColor}
                onChange={e => setHexColor(e.target.value)}
                onBlur={validateHexColor}
              />

              <button
                className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-3 py-2 rounded text-sm'
                onClick={applyColor}
              >
                Apply
              </button>
            </div>
          </div>

          <div className='border border-[#C1C1C1] shadow-md shadow-[#0000000D] rounded-xl p-4'>
            <h3 className='font-medium mb-3'>Gradients</h3>
            <div className='grid grid-cols-2 gap-2'>
              {gradientOptions.map((gradient, index) => (
                <button
                  key={index}
                  className={`${gradient.classes} py-2 px-4 rounded-lg text-center text-sm font-medium`}
                >
                  {gradient.name}
                </button>
              ))}
            </div>
          </div>

          <div className='border border-[#C1C1C1] shadow-md shadow-[#0000000D] rounded-xl p-4'>
            <h3 className='font-medium mb-3'>Custom Image</h3>
            <input
              type='text'
              className='w-full border border-[#9EC3FF] bg-[#EEF5FF] rounded-md outline-none px-3 py-2 text-sm mb-3'
              placeholder='#ff0000'
            />
            <button className='w-full bg-blue-500 text-white py-2 rounded text-sm flex items-center justify-center gap-2'>
              Set Image as Background
            </button>
          </div>
        </div>
      )}

      {activeSubTab === 'Typography' && (
        <div className='border rounded-lg p-4'>
          <h3 className='font-medium mb-3'>Font Family</h3>
          <div className='space-y-2'>
            {fontOptions.map((font, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  index === 0 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                } cursor-pointer`}
              >
                <p className={`${index === 0 ? 'text-blue-600' : 'text-gray-700'}`}>
                  {font}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'Layout' && (
        <div className='border rounded-lg p-4'>
          <h3 className='font-medium mb-3'>Layout Setting</h3>
          <div className='space-y-2'>
            {layoutOptions.map((layout, index) => (
              <div
                key={index}
                className={`p-3 rounded flex items-center ${
                  index === 0 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                } cursor-pointer`}
              >
                <div className={`w-10 h-4 rounded bg-gray-300 mr-3`}></div>
                <p className={`${index === 0 ? 'text-blue-600' : 'text-gray-700'}`}>
                  {layout}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Testing Panel
const TestingPanel = ({ activeTestTab, onTestTabChange }) => {
  const phoneOptions = [
    'Android Compact',
    'iPhone 12 Pro Max',
    'iPhone 13 mini',
    'iPhone 11',
    'iPhone 13',
    'iPhone XR',
  ];

  return (
    <>
      <div className='mb-4'>
        <h2 className='font-semibold text-lg'>Testing</h2>
      </div>

      <div className='flex mb-4 space-x-2'>
        {['Test link', 'Screen Sizes'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTestTab === tab ? 'bg-gray-100 font-medium' : 'text-gray-600'
            }`}
            onClick={() => onTestTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTestTab === 'Test link' && (
        <div className='border rounded-lg p-4'>
          <h3 className='font-medium mb-3'>Link</h3>
          <input
            type='text'
            className='w-full border rounded px-3 py-2 text-sm mb-3'
            value='https://Development.easydine.ch/{customer}/UI'
            readOnly
          />
          <button className='w-full bg-blue-500 text-white py-2 rounded text-sm flex items-center justify-center gap-2'>
            <ExternalLink size={16} />
            Navigate to Link
          </button>
        </div>
      )}

      {activeTestTab === 'Screen Sizes' && (
        <div className='border rounded-lg p-4'>
          <h3 className='font-medium mb-3'>Phone Sizes</h3>
          <div className='space-y-2'>
            {phoneOptions.map((phone, index) => (
              <div
                key={index}
                className={`p-3 rounded flex items-center ${
                  index === 0 ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                } cursor-pointer`}
              >
                <div className='w-6 h-10 rounded border border-gray-300 mr-3'></div>
                <p className={`${index === 0 ? 'text-blue-600' : 'text-gray-700'}`}>
                  {phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Draggable Menu Item Component using react-beautiful-dnd
const DraggableMenuItem = ({ item, index, onRemove }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'Promotional Slide':
        return <RiImage2Fill size={22} className='text-[#00AFEC]' />;

      case 'Menu Section':
        return <MenuIcon size={22} className='text-[#00AFEC]' />;
      case 'Call-to-Action':
        return <PiHandTapFill size={22} className='text-[#00AFEC]' />;
      default:
        return <RiImage2Fill size={22} className='text-[#00AFEC]' />;
    }
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`border rounded-lg p-4 flex items-center ${
            snapshot.isDragging ? 'opacity-70 bg-gray-50 shadow-lg' : ''
          }`}
        >
          <div className='mr-2 text-gray-400' {...provided.dragHandleProps}>
            <GripVertical size={20} />
          </div>
          <div className='w-10 h-10 bg-[#00AFEC33] rounded-lg flex items-center justify-center mr-3'>
            {getIcon()}
          </div>
          <div className='flex-1'>
            <p className='font-medium'>{item.title}</p>
            <p className='text-sm text-gray-600'>{item.subtitle}</p>
          </div>
          <button
            onClick={e => {
              e.stopPropagation();
              onRemove(item.id);
            }}
            className='text-red-500 hover:text-red-700'
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default MenuCustomization;
