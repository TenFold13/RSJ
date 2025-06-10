document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }

  document.querySelectorAll('header nav a[href^="#"], a.text-2xl.md\\:text-3xl[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('header').offsetHeight || 70;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
  });

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

  if (document.getElementById('itinerary-content')) {
    loadMarkdownFile('future_ready_exploration_and_growth_itinerary.md', 'itinerary-content');
  }

});
