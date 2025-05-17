import { useState } from 'react';

type TipCategory = 'general' | 'manicure' | 'health' | 'seasonal' | 'salon-feature' | 'service' | 'policy';

interface NailTips {
  general: string[];
  manicure: string[];
  health: string[];
  seasonal: string[];
  'salon-feature'?: string[];
  service?: string[];
  policy?: string[];
}

const TipsPage = () => {
  const [activeCategory, setActiveCategory] = useState<TipCategory>('general');

  const nailTips: NailTips = {
    general: [
      "💧 Keep your nails clean and dry to prevent bacterial growth",
      "✂️ Trim your nails regularly with sharp manicure scissors or clippers",
      "🔴 Always file in one direction to prevent splitting and weakening",
      "🧴 Apply moisturizer to your nails and cuticles daily",
      "🧤 Wear gloves when doing household chores or working with chemicals"
    ],
    manicure: [
      "💅 Always start with clean, dry nails before applying polish",
      "🖍️ Use thin coats of polish rather than one thick coat",
      "🌬️ Allow each coat to dry completely before applying the next",
      "🚱️ Apply a base coat to prevent staining and extend polish life",
      "✨ Finish with a top coat for extra shine and protection"
    ],
    health: [
      "🍎 Eat a balanced diet rich in biotin (eggs, nuts, salmon)",
      "💧 Stay hydrated to prevent brittle nails",
      "🚭 Avoid using your nails as tools to prevent breakage",
      "🧺 Consult a dermatologist for persistent nail problems",
      "🧴 Don't cut your cuticles - gently push them back instead"
    ],
    seasonal: [
      "❄️ In winter, apply extra moisturizer to combat dryness",
      "☀️ Use UV-protective top coats in summer to prevent discoloration",
      "🌧️ Wear gloves in rainy weather to prevent waterlogged nails",
      "🍂 Fall is perfect for deep conditioning treatments",
      "🌸 Spring is ideal for lighter, breathable polish formulas"
    ],
    'salon-feature': [
      "👑 10+ years in Brantford with 20+ years combined experience",
      "🏱 Gift certificates NEVER expire - perfect anytime gift",
      "💫 Special packages available"
    ],
    service: [
      "♿ Wheelchair-friendly pedicure stations available",
      "🧳 Special pink butterfly chairs for kids' manicures",
      "💼 Expert grooming services for gentlemen",
      "🧼 Hospital-grade sterilization for all tools"
    ],
    policy: [
      "💖 No cancellation fees - we understand life happens",
      "🔒 Privacy-focused service with discreet options",
      "🔄 100% satisfaction guarantee on all services"
    ]
  };

  const handleCategoryChange = (category: TipCategory) => {
    setActiveCategory(category);
  };

  const categories: TipCategory[] = [
    'general',
    'manicure',
    'health',
    'seasonal',
    'salon-feature',
    'service',
    'policy'
  ];

  return (
    <div className="relative z-10 max-w-5xl mx-auto p-6 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">Nail Care Tips & Advice</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Expert recommendations from Royal Nails & Spa</p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 border ${
              activeCategory === category
                ? 'bg-pink-600 text-white shadow-md'
                : 'bg-white text-pink-600 border-pink-600 hover:bg-pink-50'
            }`}
          >
            {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {(nailTips[activeCategory] || []).map((tip, index) => {
          const emojiMatch = tip.match(/^[^\s]+/);
          const emoji = emojiMatch ? emojiMatch[0] : '💅';
          const text = tip.replace(/^[^\s]+\s/, '');

          return (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{emoji}</div>
                <div className="text-sm leading-relaxed">{text}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-pink-600 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">Professional Advice</h3>
        <p className="mb-4 max-w-xl mx-auto">
          While these tips are helpful, nothing beats professional care. Visit us at <strong>Royal Nails & Spa</strong> for
          personalized nail care recommendations and premium treatments tailored to your nail type and lifestyle.
        </p>
        <button className="bg-white text-pink-600 font-bold px-6 py-2 rounded-full hover:bg-gray-100 transition-all">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default TipsPage;
