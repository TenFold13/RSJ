import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-brand-dark-neutral text-brand-light-gray/70 text-center">
      <div className="container mx-auto px-6 font-sans">
        <p>&copy; {currentYear} Ready Set Journey. Your adventure starts here.</p>
      </div>
    </footer>
  );
};

export default Footer;