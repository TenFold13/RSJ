import React from 'react';
import { Compass, Lightbulb, Award, BookCheck } from 'lucide-react';

const WhyRSJ = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Learn, Network, Explore, Immerse',
      description: 'Forget passive sightseeing. RSJ is about active participation. Learn new skills, engage with local cultures, build your network, and uncover hidden facets of yourself through immersive exploration. This is about experience, not just observation.'
    },
    {
      icon: Lightbulb,
      title: 'An Alternative to the Default Script',
      description: 'We offer a path that might genuinely alter the trajectory of your life. Break free from the expected and embark on a journey that aligns with who you are and who you want to become, ready for the future.'
    },
    {
      icon: Award,
      title: 'The Real Benefit: Come Back Changed',
      description: 'You\'ll return with more than just photos. Expect new passions, meaningful connections, compelling stories, and perhaps, crystal clarity on your next steps in life. Save years and resources by finding your true north, sooner.'
    },
    {
      icon: BookCheck,
      title: 'Our Approach: Strictly Booking First',
      description: 'At Ready Set Journey, we focus on what we do best: designing your transformative travel blueprint. We meticulously plan and curate your itinerary, connecting you with unique learning opportunities, networking events, and immersive cultural experiences. Please note: We are \'strictly booking first,\' meaning we do not handle the actual booking of flights, accommodations, or other logistical components. Our expertise lies in crafting the \'what\' and \'why\' of your journey, empowering you to then book the \'how\' with clarity and confidence.'
    }
  ];

  return (
    <section id="why-rsj" className="py-16 md:py-24 bg-brand-teal/5">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-12 md:mb-16 font-heading">
          More Than A Trip. It's Future-Ready Transformation.
        </h3>
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-2/5 lg:w-1/3 mb-10 md:mb-0">
            <img 
              src="https://r2.flowith.net/files/o/1748969252667-collaborative_professional_workshop_in_luxury_travel_setting_index_0@1024x1024.png" 
              alt="Professionals engaged in a collaborative workshop in a modern, inspiring setting, reflecting learning and networking." 
              className="rounded-xl shadow-2xl w-full object-cover h-auto max-h-[450px]"
            />
          </div>
          <div className="md:w-3/5 lg:w-2/3 space-y-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index}>
                  <div className="flex items-center mb-3">
                    <Icon className="text-brand-orange w-8 h-8 mr-3" />
                    <h4 className="text-2xl font-semibold text-brand-dark-neutral font-heading">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-brand-dark-neutral leading-relaxed text-lg font-sans">
                    {benefit.description.includes('Learn new skills') ? (
                      <>
                        Forget passive sightseeing. RSJ is about active participation. <strong>Learn new skills, engage with local cultures, build your network, and uncover hidden facets of yourself through immersive exploration.</strong> This is about experience, not just observation.
                      </>
                    ) : benefit.description.includes('strictly booking first') ? (
                      <>
                        At Ready Set Journey, we focus on what we do best: designing your transformative travel blueprint. We meticulously plan and curate your itinerary, connecting you with unique learning opportunities, networking events, and immersive cultural experiences. <strong>Please note: We are 'strictly booking first,' meaning we do not handle the actual booking of flights, accommodations, or other logistical components.</strong> Our expertise lies in crafting the 'what' and 'why' of your journey, empowering you to then book the 'how' with clarity and confidence.
                      </>
                    ) : (
                      benefit.description
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRSJ;