import React from 'react';
import { Rocket, MapPin, Mic, MoonStar, Tent, Send, FileText } from 'lucide-react';

const ImmersiveJourneys = () => {
  const exampleFeatures = [
    {
      icon: MapPin,
      title: 'Strategic Destinations:',
      description: 'We might send you to Florida\'s Space Coast. Prime locations for space enthusiasts.'
    },
    {
      icon: Mic,
      title: 'Skill Development:',
      description: 'We\'d find podcasting workshops or meetups, connect you with local astrophotographers, or arrange entry to dark sky reserves.'
    },
    {
      icon: MoonStar,
      title: 'Unique Activities:',
      description: 'Think NASA/SpaceX facility tours, themed dining, guest lectures, and prime night sky viewing spots.'
    },
    {
      icon: Tent,
      title: 'Comfortable Immersion:',
      description: 'A great campground nearby, blending adventure with comfort. Every detail, curated for an unforgettable week of immersion.'
    }
  ];

  const steps = [
    {
      icon: Send,
      title: '1. Share Your Unique Spark',
      description: 'Tell us your passions, interests, and what you\'re seeking from your next chapter. The more you share, the more tailored your journey.'
    },
    {
      icon: FileText,
      title: '2. Receive Your Blueprint for Transformation',
      description: 'We research and curate a detailed digital document outlining your bespoke immersive experience, packed with unique activities for learning, networking, exploration, and immersion.'
    }
  ];

  return (
    <section id="immersive-journeys" className="py-16 md:py-24 bg-brand-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-4 font-heading">
          Your Passions. Your Future-Ready Crafted Journey.
        </h3>
        <p className="text-center text-brand-dark-neutral max-w-3xl mx-auto mb-12 md:mb-16 text-lg font-sans">
          Imagine a trip meticulously woven from the threads of your unique interests, no matter how diverse. This is where RSJ shines, creating high-impact, deeply personal adventures designed for growth and discovery.
        </p>

        <img 
          src="https://r2.flowith.net/files/o/1748969252951-elegant_networking_event_for_highend_travel_services_index_1@1024x1024.png" 
          alt="Diverse group of professionals networking at an elegant, modern event, symbolizing connection opportunities with Ready Set Journey." 
          className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto mb-12 md:mb-16 object-cover h-auto max-h-[450px]"
        />

        <div className="bg-gradient-to-r from-brand-green/10 to-brand-teal/10 p-8 md:p-12 rounded-xl shadow-xl mb-12">
          <h4 className="text-2xl md:text-3xl font-semibold text-brand-teal mb-6 text-center font-heading">
            <Rocket className="inline-block mr-2 w-8 h-8 align-[-0.125em] text-brand-orange" />
            An Example: The Explorer's Immersive Week
          </h4>
          <p className="text-brand-dark-neutral leading-relaxed mb-6 text-lg text-center max-w-2xl mx-auto font-sans">
            Let's say you're fascinated by <strong className="text-brand-teal font-semibold">space exploration</strong>, dream of <strong className="text-brand-teal font-semibold">starting a podcast</strong>, love <strong className="text-brand-teal font-semibold">night sky photography</strong>, and enjoy <strong className="text-brand-teal font-semibold">curated camping</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-brand-dark-neutral font-sans">
            {exampleFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-brand-white/70 p-6 rounded-lg shadow-md">
                  <Icon className="text-brand-teal w-7 h-7 mb-2" />
                  <h5 className="font-semibold text-xl mb-1 font-heading">
                    {feature.title}
                  </h5>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-brand-teal italic mt-8 text-lg font-sans">
            This is the RSJ difference: a high-ticket feel, born from genuine personalization for future readiness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-brand-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Icon className="text-brand-orange w-10 h-10 mr-4 flex-shrink-0" />
                  <h4 className="text-2xl font-semibold text-brand-dark-neutral font-heading">
                    {step.title}
                  </h4>
                </div>
                <p className="text-brand-dark-neutral leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImmersiveJourneys;