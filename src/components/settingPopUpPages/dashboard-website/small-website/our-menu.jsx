import { useState } from 'react';

const OurMenu = () => {
  const [activeTab, setActiveTab] = useState('Starters');

  const menuCategories = ['Starters', 'Main Course', 'Lunch', 'Desserts', 'Drinks'];

  const menuItems = {
    Starters: [
      {
        img: 'https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R2FybGljJTIwQnJlYWR8ZW58MHx8MHx8fDA%3D',
        name: 'Garlic Bread',
        description: 'Freshly baked bread topped with garlic butter and herbs',
      },
      {
        img: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW96emFyZWxsYSUyMFN0aWNrc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Mozzarella Sticks',
        description: 'Golden fried mozzarella sticks served with marinara sauce',
      },
      {
        img: 'https://images.unsplash.com/photo-1536739782508-c2388552aad3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Bruschetta',
        description: 'Toasted bread topped with fresh tomatoes, basil, and olive oil',
      },
      {
        img: 'https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FsYW1hcml8ZW58MHx8MHx8fDA%3D',
        name: 'Calamari',
        description: 'Crispy fried squid rings served with tangy dipping sauce',
      },
    ],

    'Main Course': [
      {
        img: '../src/assets/images/alfreddo.png',
        name: 'Fettuccine Alfredo',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Sed ut perspiciatis unde omnis iste',
      },
      {
        img: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMFNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Grilled Salmon',
        description: 'Fresh salmon fillet grilled to perfection with lemon herb butter',
      },
      {
        img: 'https://images.unsplash.com/photo-1546964053-d018e345e490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlZiUyMFdlbGxpbmd0b258ZW58MHx8MHx8fDA%3D',
        name: 'Beef Wellington',
        description: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles',
      },
      {
        img: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMFBhcm1lc2FufGVufDB8fDB8fHww',
        name: 'Chicken Parmesan',
        description:
          'Breaded chicken breast topped with marinara sauce and melted cheese',
      },
    ],

    Lunch: [
      {
        img: 'https://plus.unsplash.com/premium_photo-1664478283448-94d7b72a23ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D',
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons and parmesan',
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1673809798692-494b974088a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2x1YiUyMFNhbmR3aWNofGVufDB8fDB8fHww',
        name: 'Club Sandwich',
        description: 'Triple-decker sandwich with chicken, bacon, lettuce, and tomato',
      },
      {
        img: 'https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
      },
      {
        img: 'https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBhc3RhJTIwUHJpbWF2ZXJhfGVufDB8fDB8fHww',
        name: 'Pasta Primavera',
        description: 'Light pasta dish with seasonal vegetables in cream sauce',
      },
    ],

    Desserts: [
      {
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D',
        name: 'Tiramisu',
        description:
          'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone',
      },
      {
        img: 'https://media.istockphoto.com/id/1466703271/photo/chocolate-mousse.webp?a=1&b=1&s=612x612&w=0&k=20&c=SIlevcuLQ6ZGbjhKdcgf_o8dZ6Tga5O8gCx8yK64ohM=',
        name: 'Chocolate Mousse',
        description: 'Rich and creamy chocolate dessert with whipped cream topping',
      },
      {
        img: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Cheesecake',
        description:
          'New York style cheesecake with graham cracker crust and berry compote',
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1713840472256-44579289f607?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3IlQzMlQThtZSUyMEJyJUMzJUJCbCVDMyVBOWV8ZW58MHx8MHx8fDA%3D',
        name: 'Crème Brûlée',
        description: 'Creamy custard topped with a layer of caramelized sugar',
      },
    ],

    Drinks: [
      {
        img: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXNwcmVzc298ZW58MHx8MHx8fDA%3D',
        name: 'Espresso',
        description:
          'Strong black coffee made by forcing hot water through finely ground coffee beans',
      },
      {
        img: 'https://plus.unsplash.com/premium_photo-1687354256687-b5ee47c043c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BhcmtsaW5nJTIwV2F0ZXJ8ZW58MHx8MHx8fDA%3D',
        name: 'Sparkling Water',
        description: 'Refreshing carbonated water served with a slice of lemon',
      },
      {
        img: 'https://images.unsplash.com/photo-1621797350488-fb28c9217e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyMFNtb290aGllfGVufDB8fDB8fHww',
        name: 'Strawberry Smoothie',
        description: 'Blended strawberries with yogurt and a touch of honey',
      },
      {
        img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWNlZCUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'Iced Tea',
        description: 'Freshly brewed tea served over ice with lemon and mint',
      },
    ],
  };
  return (
    <div className='bg-blue-50 min-h-screen py-24'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl text-[#131313] font-bold text-center mb-2.5'>Our Menu</h1>
        <p className='text-center text-[#696969] mb-10'>
          View your restaurant and make reservations through QR Codes
        </p>

        {/* Menu Tabs */}
        <div className='flex justify-center mb-8 duration-300'>
          {menuCategories.map(category => (
            <button
              key={category}
              className={`px-10 py-2 duration-300 ${
                activeTab === category
                  ? 'text-black font-bold duration-300'
                  : 'text-[#696969] font-medium duration-300'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {menuItems[activeTab].map((item, index) => (
            <div
              key={index}
              className='bg-white border border-[#C1C1C1C1] rounded-[10px] shadow-md py-11 px-9 flex items-center'
            >
              <div className='w-28 h-28 mr-8 flex-shrink-0'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>
                <h3 className='text-xl font-bold text-black mb-2'>{item.name}</h3>
                <p className='text-gray-700'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
