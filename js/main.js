document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Set current year in footer
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Set up routes
  router.addRoute('/', () => {
    document.getElementById('main-content').innerHTML = pages.home();
    document.title = 'Ready Set Journey - Launch Your Next Chapter';
    lucide.createIcons();
  });

  router.addRoute('/about', () => {
    document.getElementById('main-content').innerHTML = pages.about();
    document.title = 'About RSJ - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/how-it-works', () => {
    document.getElementById('main-content').innerHTML = pages.howItWorks();
    document.title = 'How It Works - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/journeys', () => {
    document.getElementById('main-content').innerHTML = pages.journeys();
    document.title = 'Journeys - Ready Set Journey';
    lucide.createIcons();
    
    // Load the markdown itinerary if the element exists
    setTimeout(() => {
      if (document.getElementById('itinerary-content')) {
        loadMarkdownFile('future_ready_exploration_and_growth_itinerary.md', 'itinerary-content');
      }
    }, 100);
  });

  router.addRoute('/pricing', () => {
    document.getElementById('main-content').innerHTML = pages.pricing();
    document.title = 'Pricing - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/contact', () => {
    document.getElementById('main-content').innerHTML = pages.contact();
    document.title = 'Contact - Ready Set Journey';
    lucide.createIcons();
  });

  // Initialize router
  router.init();

  // Markdown loading function
  async function loadMarkdownFile(filePath, containerId) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to load markdown file: ${response.status} ${response.statusText}`);
      }
      const markdownText = await response.text();
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = marked.parse(markdownText);
      } else {
        console.error(`Container with id ${containerId} not found.`);
      }
    } catch (error) {
      console.error('Error loading or parsing markdown:', error);
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = '<p class="text-center text-red-600 font-semibold">Sorry, the sample itinerary could not be loaded at this time. Please check back later.</p>';
      }
    }
  }

  // Make loadMarkdownFile available globally for use in route handlers
  window.loadMarkdownFile = loadMarkdownFile;
});