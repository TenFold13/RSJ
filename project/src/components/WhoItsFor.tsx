import React from 'react';
import { GraduationCap, Briefcase as BriefcaseBusiness, Gem, Sunset, Sparkles } from 'lucide-react';

const WhoItsFor = () => {
  const personas = [
    {
      icon: GraduationCap,
      title: 'The "Now What?" Crowd',
      description: 'Finished school and dreading the conventional path? Let\'s build an adventure that actually means something, helping you discover your passions and skills for the future before committing to the next big thing.'
    },
    {
      icon: BriefcaseBusiness,
      title: 'Burned-Out Professionals',
      description: 'Feeling depleted? Before a drastic move, let\'s design a sabbatical that recharges you with purpose, networking opportunities, and new perspectives, not just poolside cocktails.'
    },
    {
      icon: Gem,
      title: 'Midlife Navigators',
      description: 'Contemplating your next act? Let\'s channel that energy into finding new passions, skills, or rediscovering old ones on the road to genuine, future-ready fulfillment.'
    },
    {
      icon: Sunset,
      title: 'Discerning Retirees',
      description: 'You\'ve earned more than generic getaways. How about immersive learning in Portugal, cultural exploration in Buenos Aires, or mastering a new skill? Let\'s find experiences with a pulse.'
    },
    {
      icon: Sparkles,
      title: 'Anyone Who Demands More',
      description: 'If you\'re tired of superficial travel and crave depth, connection, learning, and real experiences, RSJ is your escape hatch. We believe travel should change you and equip you for the future.'
    }
  ];

  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-4 font-heading">
          Is This You?
        </h3>
        <p className="text-center text-brand-dark-neutral max-w-2xl mx-auto mb-12 md:mb-16 text-lg font-sans">
          RSJ is for anyone craving more than a standard checklist vacation. We speak to those at a crossroads, seeking change, or simply wanting to live more fully and prepare for a dynamic future.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div 
                key={index}
                className={`bg-brand-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 3 ? 'md:col-start-1 lg:col-start-auto' : ''
                } ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-brand-orange w-10 h-10 mr-4 flex-shrink-0" />
                  <h4 className="text-2xl font-semibold text-brand-dark-neutral font-heading">
                    {persona.title}
                  </h4>
                </div>
                <p className="text-brand-dark-neutral leading-relaxed font-sans">
                  {persona.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;