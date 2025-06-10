import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoItsFor from './components/WhoItsFor';
import WhyRSJ from './components/WhyRSJ';
import ImmersiveJourneys from './components/ImmersiveJourneys';
import SampleItinerary from './components/SampleItinerary';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-light-gray text-brand-dark-neutral antialiased font-sans">
      <Header />
      <main>
        <Hero />
        <WhoItsFor />
        <WhyRSJ />
        <ImmersiveJourneys />
        <SampleItinerary />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;