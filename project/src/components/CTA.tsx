import React from 'react';
import { MailPlus } from 'lucide-react';

const CTA = () => {
  const emailSubject = 'RSJ Immersive Journey Inquiry';
  const emailBody = `Hi Ready Set Journey Team,%0D%0A%0D%0AI'm interested in a personalized immersive journey blueprint!%0D%0A%0D%0AMy key interests/passions are: [Your Interests Here]%0D%0AWhat I'm seeking (e.g., new skills, clarity, adventure): [Your Goals Here]%0D%0AMy budget ideas: [e.g., Mid-range, Luxury, Specific Cap]%0D%0AMy desired travel time frame/duration: [e.g., Dates, Length of Trip]%0D%0AOptional: Other preferences: [Your Constraints Here]%0D%0A%0D%0AThanks!`;
  
  const emailUrl = `mailto:launch@readysetjourney.example.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="cta" className="py-20 md:py-32 bg-brand-teal">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 font-heading">
          Ready to Launch Your Future-Ready Chapter?
        </h3>
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
          Stop dreaming, start doing. Let's craft an experience that redefines what travel means to you.
          To help us create your initial blueprint, please tell us about:
        </p>
        <div className="max-w-2xl mx-auto text-left text-gray-200 mb-10 space-y-4 bg-brand-white/10 p-6 rounded-lg">
          <div>
            <label className="font-semibold block mb-1">Your Key Interests/Passions:</label>
            <p className="text-sm italic">[e.g., AI ethics, street art, sustainable farming, ancient history, podcasting]</p>
          </div>
          <div>
            <label className="font-semibold block mb-1">What You're Seeking:</label>
            <p className="text-sm italic">[e.g., new skills, career clarity, adventure, networking, cultural immersion]</p>
          </div>
          <div>
            <label className="font-semibold block mb-1">Your Budget Ideas:</label>
            <p className="text-sm italic">[e.g., 'Mid-range, comfortable', 'Luxury focus', 'Flexible up to $X,XXX', 'Budget-conscious exploration']</p>
          </div>
          <div>
            <label className="font-semibold block mb-1">Desired Travel Time Frame/Duration:</label>
            <p className="text-sm italic">[e.g., 'A week in September', '10-14 days next quarter', 'Flexible, looking for 2 weeks']</p>
          </div>
        </div>

        <a 
          href={emailUrl}
          className="bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg md:text-xl inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl font-heading"
        >
          <MailPlus className="mr-3 w-6 h-6" />
          Claim Your Pioneer Blueprint (FREE for First 5!)
        </a>
        <p className="text-gray-200 mt-6 text-sm font-sans">
          Or send details directly to: <span className="font-semibold">launch@readysetjourney.example.com</span>
        </p>
      </div>
    </section>
  );
};

export default CTA;