import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: 'CHF 59.90/month',
      for: 'Small dining establishments (cafés, food stands)',
      features: [
        'Digital menu with QR code',
        'Ordering and payment processing',
        'Basic inventory management',
        'Email support',
        'Up to 50 products',
      ],
    },
    {
      title: 'Business Plan',
      price: 'CHF 99.90/month',
      for: 'Medium-sized restaurants',
      features: [
        'All Basic features',
        'Employee management (e.g., vacation and shift planning)',
        'Live table plan',
        'Advanced analytics',
        'Multilingual menus',
        'Up to 250 products',
        'Priority support',
      ],
      highlight: true, // Highlight the Business Plan
    },
    {
      title: 'Enterprise Plan',
      price: 'CHF 189.90/month',
      for: 'Large restaurant chains',
      features: [
        'All Business features',
        'Multi-location management',
        'Unlimited products',
        'AI-powered menu optimization',
        '24/7 premium support',
        'Customizations available',
      ],
    },
  ];

  const addOns = [
    { feature: 'Multiple Restaurants', price: 'CHF 19.90 / month per restaurant' },
    { feature: 'Table Reservation', price: 'CHF 29.90 / month' },
    { feature: 'Advanced Analytics', price: 'CHF 39.90 / month' },
    { feature: 'Mobile Guest App', price: 'CHF 69.90 / month' },
    { feature: 'POS Integration', price: 'CHF 49.90 / month' },
    { feature: 'Loyalty Program (VIP Strategies)', price: 'CHF 39.90 / month' },
    { feature: 'Custom API Integration', price: 'CHF 99.90 (one-time fee)' },
  ];

  const setupFee = 'CHF 199.00 (one-time fee)';

  return (
    <DefaultLayout>
    <div className="bg-black text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">OUR PRICING</h2>
        <p className="text-lg text-gray-400 mt-2">
          Pricing built for businesses of all sizes
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border ${
              plan.highlight
                ? 'border-blue-500 bg-black'
                : 'border-gray-700 bg-[#0d0d2b]'
            }`}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="text-3xl font-extrabold mt-4">{plan.price}</p>
              <p className="text-sm text-gray-400 mt-2">{plan.for}</p>
            </div>
            <button
              className={`w-full py-3 rounded ${
                plan.highlight
                  ? 'bg-white text-black font-semibold'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Get Started
            </button>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">What you will get</h4>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-500 mr-2">●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Add-Ons */}
      <div className="max-w-4xl mx-auto mt-16 px-4">
        <h3 className="text-2xl font-bold mb-4">Add-Ons (Optional)</h3>
        <div className="bg-[#0d0d2b] p-6 rounded-lg border border-gray-700">
          <ul className="space-y-3">
            {addOns.map((addOn, index) => (
              <li key={index} className="flex justify-between">
                <span>{addOn.feature}</span>
                <span className="text-gray-400">{addOn.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Setup Fee */}
      <div className="max-w-4xl mx-auto mt-8 px-4 text-center">
        <h4 className="text-lg font-semibold">Setup Fee</h4>
        <p className="text-gray-400 mt-2">{setupFee}</p>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default Pricing;
