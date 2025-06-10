import React from 'react';
import { Award } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      title: 'Pioneer Offer',
      price: 'FREE',
      subtitle: 'For the First 5 Users',
      description: 'Be among the first to experience Ready Set Journey and get your personalized immersive journey blueprint completely free. Your insights will shape the future of transformative travel.',
      highlight: false
    },
    {
      title: 'Standard Blueprint',
      price: '$79',
      subtitle: 'Per Personalized Journey Blueprint',
      description: 'Receive a meticulously crafted digital document outlining your bespoke immersive experience, packed with unique activities for growth and discovery.',
      highlight: false
    },
    {
      title: 'Upcoming Price',
      price: '$149',
      subtitle: 'Effective July 1st',
      description: 'Our standard price will increase as we expand our offerings. Secure your journey blueprint at the current rate.',
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-brand-orange text-black">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <Award className="w-16 h-16 text-brand-orange-accent" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-8 font-heading">
          Invest in Your Transformation
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto font-sans">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`bg-brand-white/30 p-8 rounded-xl shadow-lg border-2 border-brand-white ${
                tier.highlight ? 'ring-4 ring-brand-orange-accent' : ''
              }`}
            >
              <h4 className="text-2xl font-semibold mb-3 font-heading">
                {tier.title}
              </h4>
              <p className="text-4xl font-bold text-brand-teal mb-3">
                {tier.price}
              </p>
              <p className={`text-sm mb-4 ${
                tier.highlight ? 'text-brand-orange-accent font-semibold' : ''
              }`}>
                {tier.subtitle}
              </p>
              <p className="leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-lg">Your adventure is the start of something bigger.</p>
      </div>
    </section>
  );
};

export default Pricing;