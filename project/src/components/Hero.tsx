import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative text-brand-white py-20 md:py-32 min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://r2.flowith.net/files/o/1748969255266-transformative_future_ready_travel_landscape_index_2@1024x1024.png" 
          alt="Panoramic view of a breathtaking, futuristic landscape blending nature and innovation, symbolizing a transformative future-ready journey" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative container mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-heading">
          Design Your Future-Ready Chapter.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-8 font-sans">
          Ready Set Journey isn't just a trip planner; it's your launchpad to a <strong>future-ready</strong> life filled with passion, <strong>learning, networking, exploration, and genuine immersion</strong>. We craft experiences tailored to what truly ignites you.
        </p>
      </div>
    </section>
  );
};

export default Hero;