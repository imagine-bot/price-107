// components/Pricing.tsx
import React from 'react';

interface PricingProps {
  pricingTypes: {
    name: string;
    price: number;
    features: string[];
    cta: string;
  }[];
}

const Pricing: React.FC<PricingProps> = ({ pricingTypes }) => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 p-10">
      <div className="flex justify-center mb-10">
        <button
          className={`px-4 py-2 mr-2 ${isAnnual ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 ${isAnnual ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'}`}
          onClick={() => setIsAnnual(true)}
        >
          Annual
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {pricingTypes.map((type) => (
          <div key={type.name} className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl mb-2">{type.name}</h2>
            <p className="text-xl mb-4">${isAnnual ? type.price * 12 : type.price} / {isAnnual ? 'year' : 'month'}</p>
            <ul className="mb-4">
              {type.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">{type.cta}</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-purple-500 text-white px-4 py-2 rounded flex items-center">
          Yahoo
          <span className="material-icons text-yellow-500 ml-2">favorite</span>
        </button>
      </div>
    </div>
  );
};

export default Pricing;