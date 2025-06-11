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
    document.title = 'About - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/how-it-works', () => {
    document.getElementById('main-content').innerHTML = pages.howItWorks();
    document.title = 'How It Works & Sample Journeys - Ready Set Journey';
    lucide.createIcons();
    
    // Load the markdown itinerary if the element exists
    setTimeout(() => {
      if (document.getElementById('itinerary-content')) {
        loadMarkdownFile('future_ready_exploration_and_growth_itinerary.md', 'itinerary-content');
      }
    }, 100);
  });

  router.addRoute('/blog', () => {
    document.getElementById('main-content').innerHTML = pages.blog();
    document.title = 'Blog - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/pricing', () => {
    document.getElementById('main-content').innerHTML = pages.pricing();
    document.title = 'Pricing - Ready Set Journey';
    lucide.createIcons();
  });

  router.addRoute('/contact', () => {
    document.getElementById('main-content').innerHTML = pages.contact();
    document.title = 'Contact & Book Your Call - Ready Set Journey';
    lucide.createIcons();
    initializeSchedulingForm();
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

  // Initialize scheduling form functionality
  function initializeSchedulingForm() {
    const form = document.getElementById('scheduling-form');
    if (!form) return;

    // Generate time slots for next 14 days (excluding weekends)
    const timeSlots = document.getElementById('time-slots');
    if (timeSlots) {
      generateTimeSlots(timeSlots);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSchedulingSubmission(form);
    });
  }

  // Generate available time slots
  function generateTimeSlots(container) {
    const slots = [];
    const now = new Date();
    
    // Generate slots for next 14 business days
    for (let i = 1; i <= 20; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() + i);
      
      // Skip weekends
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;
      
      // Generate time slots for each day (9 AM - 5 PM ET)
      const times = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
        '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
      ];
      
      times.forEach(time => {
        const dateStr = date.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
        
        slots.push({
          value: `${date.toISOString().split('T')[0]}_${time}`,
          display: `${dateStr} at ${time} ET`
        });
      });
      
      // Limit to 50 slots to keep it manageable
      if (slots.length >= 50) break;
    }
    
    // Populate the select dropdown
    container.innerHTML = '<option value="">Select a time...</option>' +
      slots.map(slot => `<option value="${slot.value}">${slot.display}</option>`).join('');
  }

  // Handle form submission
  function handleSchedulingSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Format the email body
    const [date, time] = data.timeSlot.split('_');
    const emailBody = `Hi Ready Set Journey Team!

I'd love to schedule my 15-minute discovery call to discuss my custom journey blueprint.

PERSONAL DETAILS:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}

PREFERRED TIME:
${time} ET on ${new Date(date).toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}

MY TRAVEL INTERESTS:
${data.interests}

WHAT I'M SEEKING:
${data.goals}

BUDGET RANGE:
${data.budget}

TRAVEL TIMEFRAME:
${data.timeframe}

${data.additionalInfo ? `ADDITIONAL INFO:\n${data.additionalInfo}` : ''}

Looking forward to discussing how Ready Set Journey can create my perfect adventure!

Best regards,
${data.fullName}`;

    // Create mailto link
    const mailtoLink = `mailto:hello@readysetjourney.com?subject=15-Min Call Request - ${data.fullName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="check" class="w-5 h-5 mr-2"></i>Email Opened! Check Your Email Client';
    submitBtn.disabled = true;
    submitBtn.classList.remove('bg-brand-orange', 'hover:bg-brand-orange/90');
    submitBtn.classList.add('bg-brand-green', 'cursor-not-allowed');
    
    lucide.createIcons();
    
    // Reset after 5 seconds
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.classList.remove('bg-brand-green', 'cursor-not-allowed');
      submitBtn.classList.add('bg-brand-orange', 'hover:bg-brand-orange/90');
      form.reset();
      lucide.createIcons();
    }, 5000);
  }

  // Make functions available globally
  window.loadMarkdownFile = loadMarkdownFile;
  window.initializeSchedulingForm = initializeSchedulingForm;
});