import React, { useState, useEffect } from 'react';
import { initializeSmoothScrolling } from '../utils/smoothScroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollToSection, setScrollToSection] = useState<((sectionId: string) => void) | null>(null);

  useEffect(() => {
    // Initialize smooth scrolling
    const scrollFunction = initializeSmoothScrolling();
    setScrollToSection(() => scrollFunction);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  return (
    <header className={`py-4 md:py-5 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-white/95 backdrop-blur-md shadow-md' : 'bg-brand-white/95 backdrop-blur-md shadow-md'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => handleSectionClick('hero')}
          className="text-2xl md:text-3xl font-extrabold text-brand-teal tracking-tight font-heading hover:text-brand-orange transition-colors duration-300"
        >
          Ready Set Journey
        </button>
        <nav>
          <ul className="flex flex-wrap justify-end space-x-2 sm:space-x-3 md:space-x-4">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'who-its-for', label: 'Who For' },
              { id: 'why-rsj', label: 'Why RSJ' },
              { id: 'immersive-journeys', label: 'Journeys' },
              { id: 'sample-itinerary', label: 'Itinerary' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'cta', label: 'Contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className="text-xs sm:text-sm text-brand-dark-neutral hover:text-brand-orange transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;