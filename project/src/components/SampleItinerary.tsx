import React, { useEffect, useState } from 'react';

const SampleItinerary = () => {
  const [itineraryContent, setItineraryContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading the Lisbon sample itinerary
    const sampleContent = `
      <div class="mb-8">
        <h4 class="text-2xl md:text-3xl font-bold text-brand-teal mb-4 font-heading">Ready Set Journey: A Sample Day of Future-Ready Exploration & Growth</h4>
        <p class="text-brand-dark-neutral leading-relaxed mb-6 font-sans">Experience the pulse of innovation, culture, and connection on a typical day with Ready Set Journey. This itinerary offers a glimpse into how we blend learning, networking, exploration, and immersion to expand your horizons and equip you for what's next.</p>
        
        <div class="bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 p-6 rounded-lg mb-6">
          <p class="text-lg font-semibold text-brand-teal mb-2 font-heading"><strong>Theme for the Day:</strong> <em>Navigating Horizons: From Ancient Roots to Future Frontiers</em></p>
          <p class="text-brand-dark-neutral font-sans"><strong>Location:</strong> Lisbon, Portugal (Hypothetical Base)</p>
        </div>
      </div>

      <div class="space-y-4 mb-8">
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-orange">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">9:00 AM - Future Lab Workshop</p>
            <span class="inline-block bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Learning</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">Dive deep into a critical topic for future readiness, such as <em>Ethical AI</em>, <em>Sustainable Urbanism</em>, or <em>Design Thinking for Impact</em>, led by local innovators or experts.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-teal">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">11:30 AM - Architectural Storytelling Walk</p>
            <span class="inline-block bg-brand-teal/20 text-brand-teal px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Exploration</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">A guided walk through a historic district (e.g., Alfama), understanding the city's evolution, resilience, and how past designs inform future urban landscapes.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-green">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">1:00 PM - Local Flavors & Perspectives Lunch</p>
            <span class="inline-block bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Networking</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">Enjoy a curated lunch at a restaurant showcasing regional cuisine. Casual conversation provides opportunity to connect with fellow journeyers and local hosts.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-orange-accent">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">3:00 PM - Azulejo Art & Cultural Craft Session</p>
            <span class="inline-block bg-brand-orange-accent/20 text-brand-orange-accent px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Immersion</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">Participate in a hands-on workshop learning the traditional Portuguese art of <em>azulejo</em> (tile) painting, connecting with cultural heritage through creative expression.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-teal">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">5:30 PM - Coastal Viewpoint Reflection</p>
            <span class="inline-block bg-brand-teal/20 text-brand-teal px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Exploration</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">Visit a breathtaking viewpoint overlooking the Tagus River and the Atlantic. Time for personal reflection and absorbing new perspectives against a vast backdrop.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-green">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">7:30 PM - Curated Dinner & Connection Event</p>
            <span class="inline-block bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Networking</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">A special dinner designed for deeper connection. Share insights from the day, engage in guided discussions, and network with a diverse group of participants.</p>
        </div>
        
        <div class="bg-brand-light-gray/50 p-6 rounded-lg border-l-4 border-brand-orange-accent">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <p class="font-bold text-brand-dark-neutral text-lg font-heading">9:00 PM - Optional: Live Music Experience (e.g., Fado)</p>
            <span class="inline-block bg-brand-orange-accent/20 text-brand-orange-accent px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">Immersion</span>
          </div>
          <p class="text-brand-dark-neutral font-sans">Experience the soulful sounds of Fado in an authentic setting, immersing yourself in Portugal's emotive musical tradition.</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 p-8 rounded-xl">
        <h5 class="text-2xl font-bold text-brand-teal mb-6 text-center font-heading">Key Highlights</h5>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-brand-white/70 p-4 rounded-lg">
            <h6 class="font-semibold text-brand-dark-neutral mb-2 font-heading">Targeted Learning:</h6>
            <p class="text-brand-dark-neutral font-sans">Gain cutting-edge knowledge and skills relevant to emerging trends and challenges.</p>
          </div>
          <div class="bg-brand-white/70 p-4 rounded-lg">
            <h6 class="font-semibold text-brand-dark-neutral mb-2 font-heading">Meaningful Connections:</h6>
            <p class="text-brand-dark-neutral font-sans">Forge relationships with inspiring peers and valuable local contacts.</p>
          </div>
          <div class="bg-brand-white/70 p-4 rounded-lg">
            <h6 class="font-semibold text-brand-dark-neutral mb-2 font-heading">Enriching Exploration:</h6>
            <p class="text-brand-dark-neutral font-sans">Discover hidden gems and gain new perspectives on history, culture, and urban life.</p>
          </div>
          <div class="bg-brand-white/70 p-4 rounded-lg">
            <h6 class="font-semibold text-brand-dark-neutral mb-2 font-heading">Authentic Immersion:</h6>
            <p class="text-brand-dark-neutral font-sans">Engage directly with local traditions and contemporary culture.</p>
          </div>
        </div>
        <p class="text-center text-brand-teal italic mt-8 text-lg font-sans">This sample day is just a taste of the transformative experiences awaiting you on a Ready Set Journey week, designed to inspire growth, foster connection, and prepare you for the journey ahead.</p>
      </div>
    `;
    
    setTimeout(() => {
      setItineraryContent(sampleContent);
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <section id="sample-itinerary" className="py-16 md:py-24 bg-brand-light-gray">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-12 font-heading">
          A Glimpse Into Your Journey: Sample Day
        </h3>
        <div className="max-w-none mx-auto bg-white p-6 md:p-8 rounded-xl shadow-xl">
          {isLoading ? (
            <div className="text-center text-brand-dark-neutral">
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-brand-light-gray rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-brand-light-gray rounded w-1/2 mx-auto"></div>
                <div className="h-4 bg-brand-light-gray rounded w-2/3 mx-auto"></div>
                <div className="space-y-3 mt-8">
                  <div className="h-20 bg-brand-light-gray rounded"></div>
                  <div className="h-20 bg-brand-light-gray rounded"></div>
                  <div className="h-20 bg-brand-light-gray rounded"></div>
                </div>
              </div>
              <p className="mt-6 text-brand-dark-neutral/70 font-sans">Loading sample itinerary...</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: itineraryContent }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SampleItinerary;