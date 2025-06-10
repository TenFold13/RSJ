export const initializeSmoothScrolling = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return scrollToSection;
};