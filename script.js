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
          console.log(`Loading markdown from: ${filePath}`);
          const response = await fetch(filePath, {
              cache: 'no-cache',
              headers: {
                  'Content-Type': 'text/markdown',
                  'Accept': 'text/markdown'
              }
          });
          
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const markdownText = await response.text();
          console.log('Markdown content received:', markdownText.substring(0, 100) + '...');
          
          const container = document.getElementById(containerId);
          if (container) {
              // Parse markdown to HTML
              const html = marked.parse(markdownText);
              container.innerHTML = html;
              
              // Add some basic styling to the rendered markdown
              container.classList.add('prose', 'max-w-4xl', 'mx-auto', 'p-6', 'bg-white', 'rounded-xl', 'shadow-lg');
          } else {
              console.error(`Container with id ${containerId} not found.`);
          }
      } catch (error) {
          console.error('Error loading or parsing markdown:', error);
          const container = document.getElementById(containerId);
          if (container) {
              container.innerHTML = `
                  <div class="text-center p-6 bg-red-50 rounded-lg">
                      <h3 class="text-red-600 font-semibold text-lg mb-2">Oops! Couldn't load the itinerary</h3>
                      <p class="text-gray-600">${error.message || 'Please try refreshing the page.'}</p>
                      <button onclick="window.location.reload()" class="mt-3 px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90 transition-colors">
                          Reload Page
                      </button>
                  </div>`;
          }
      }
    }
  
    if (document.getElementById('itinerary-content')) {
      loadMarkdownFile('future_ready_exploration_and_growth_itinerary.md', 'itinerary-content');
    }
  
  });
  