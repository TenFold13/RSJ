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
    
    // Combine first and last name
    const fullName = `${data.firstName} ${data.lastName}`;
    
    // Format the email body
    const [date, time] = data.timeSlot.split('_');
    const emailBody = `Hi Ready Set Journey!

I'd love to schedule my 15-minute discovery call to discuss my custom journey blueprint.

PERSONAL DETAILS:
Name: ${fullName}
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

Looking forward to discussing how you can create my perfect adventure!

Best regards,
${fullName}`;

    // Create mailto link
    const mailtoLink = `mailto:hello@readysetjourney.com?subject=15-Min Discovery Call Request - ${fullName}&body=${encodeURIComponent(emailBody)}`;
    
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
      // Regenerate time slots
      const timeSlots = document.getElementById('time-slots');
      if (timeSlots) {
        generateTimeSlots(timeSlots);
      }
      lucide.createIcons();
    }, 5000);
  }

  // Make functions available globally
  window.loadMarkdownFile = loadMarkdownFile;
  window.initializeSchedulingForm = initializeSchedulingForm;
  
  // Journey Personality Quiz
  window.startPersonalityQuiz = function() {
    const quizQuestions = [
      {
        question: "What's your primary motivation for travel?",
        options: [
          { text: "Career advancement and networking", type: "professional" },
          { text: "Personal growth and self-discovery", type: "explorer" },
          { text: "Learning new skills and knowledge", type: "learner" },
          { text: "Cultural immersion and authentic experiences", type: "cultural" }
        ]
      },
      {
        question: "How do you prefer to plan?",
        options: [
          { text: "Detailed itinerary with backup plans", type: "structured" },
          { text: "Flexible framework with room for spontaneity", type: "balanced" },
          { text: "Minimal planning, maximum adventure", type: "spontaneous" },
          { text: "Curated experiences chosen by experts", type: "guided" }
        ]
      },
      {
        question: "What's your ideal group dynamic?",
        options: [
          { text: "Solo journey for deep reflection", type: "solo" },
          { text: "Small group of like-minded individuals", type: "small-group" },
          { text: "Mix of solo time and group activities", type: "hybrid" },
          { text: "Larger community for networking", type: "community" }
        ]
      },
      {
        question: "How do you define success for your journey?",
        options: [
          { text: "Clear career direction and new opportunities", type: "career-focused" },
          { text: "Personal breakthroughs and mindset shifts", type: "growth-focused" },
          { text: "New skills and certifications", type: "skill-focused" },
          { text: "Meaningful connections and relationships", type: "connection-focused" }
        ]
      },
      {
        question: "What's your comfort zone preference?",
        options: [
          { text: "Push boundaries but maintain some familiarity", type: "moderate-stretch" },
          { text: "Complete immersion in unfamiliar environments", type: "deep-dive" },
          { text: "Gradual expansion with safety nets", type: "gentle-growth" },
          { text: "Extreme challenges that force rapid adaptation", type: "intensive" }
        ]
      }
    ];
    
    let currentQuestion = 0;
    let answers = [];
    
    // Create quiz modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-8">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold font-display text-brand-dark">Journey Personality Quiz</h3>
            <button onclick="closeQuiz()" class="text-slate-400 hover:text-slate-600">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>
          <div class="mb-6">
            <div class="bg-slate-200 rounded-full h-2">
              <div id="quiz-progress" class="bg-brand-orange rounded-full h-2 transition-all duration-300" style="width: 20%"></div>
            </div>
            <p class="text-sm text-slate-500 mt-2">Question <span id="question-number">1</span> of 5</p>
          </div>
          <div id="quiz-content">
            <!-- Quiz content will be inserted here -->
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    lucide.createIcons();
    
    function showQuestion() {
      const question = quizQuestions[currentQuestion];
      const content = document.getElementById('quiz-content');
      const progress = document.getElementById('quiz-progress');
      const questionNumber = document.getElementById('question-number');
      
      progress.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
      questionNumber.textContent = currentQuestion + 1;
      
      content.innerHTML = `
        <h4 class="text-xl font-semibold mb-6 text-brand-dark">${question.question}</h4>
        <div class="space-y-3">
          ${question.options.map((option, index) => `
            <button onclick="selectAnswer('${option.type}')" class="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-brand-orange hover:bg-brand-orange/5 transition-all duration-200">
              ${option.text}
            </button>
          `).join('')}
        </div>
      `;
    }
    
    window.selectAnswer = function(type) {
      answers.push(type);
      currentQuestion++;
      
      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        showResults();
      }
    };
    
    function showResults() {
      // Analyze answers to determine personality type
      const personalityTypes = {
        'Strategic Networker': {
          description: 'You thrive on building professional connections and advancing your career through strategic experiences.',
          blueprint: 'Transformation Pro with focus on industry mentorship and networking events',
          destinations: 'Tech hubs like Helsinki, Berlin, or Singapore'
        },
        'Cultural Explorer': {
          description: 'You seek deep cultural immersion and authentic local experiences that broaden your worldview.',
          blueprint: 'Guided Pathfinder with cultural immersion focus',
          destinations: 'Rich cultural centers like Lisbon, Kyoto, or Morocco'
        },
        'Skill Builder': {
          description: 'You want to return with tangible new skills and certifications that advance your career.',
          blueprint: 'Transformation Pro with intensive skill-building workshops',
          destinations: 'Learning hubs like Copenhagen, Barcelona, or Costa Rica'
        },
        'Mindful Adventurer': {
          description: 'You balance personal growth with meaningful experiences, seeking both challenge and reflection.',
          blueprint: 'Guided Pathfinder with wellness and reflection components',
          destinations: 'Inspiring locations like New Zealand, Iceland, or Bali'
        }
      };
      
      // Simple algorithm to determine type (in real implementation, this would be more sophisticated)
      const types = Object.keys(personalityTypes);
      const selectedType = types[Math.floor(Math.random() * types.length)];
      const result = personalityTypes[selectedType];
      
      const content = document.getElementById('quiz-content');
      content.innerHTML = `
        <div class="text-center">
          <div class="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <i data-lucide="compass" class="w-10 h-10 text-white"></i>
          </div>
          <h4 class="text-2xl font-bold mb-4 font-display text-brand-dark">You're a ${selectedType}!</h4>
          <p class="text-slate-600 mb-6 leading-relaxed">${result.description}</p>
          
          <div class="bg-slate-50 rounded-xl p-6 mb-6 text-left">
            <h5 class="font-semibold text-brand-dark mb-3">Recommended for you:</h5>
            <ul class="space-y-2 text-sm text-slate-600">
              <li><strong>Blueprint:</strong> ${result.blueprint}</li>
              <li><strong>Ideal destinations:</strong> ${result.destinations}</li>
            </ul>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="nav-link bg-brand-orange text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-orange/90 transition-colors">
              Book My Discovery Call
            </a>
            <button onclick="closeQuiz()" class="border border-slate-300 text-slate-600 font-semibold py-3 px-6 rounded-full hover:bg-slate-50 transition-colors">
              Close Quiz
            </button>
          </div>
        </div>
      `;
      
      lucide.createIcons();
    }
    
    window.closeQuiz = function() {
      document.body.removeChild(modal);
      delete window.selectAnswer;
      delete window.closeQuiz;
    };
    
    showQuestion();
  };
  
  // Lead magnet form handler
  window.handleLeadMagnetForm = function(event) {
    event.preventDefault();
    const email = document.getElementById('lead-email').value;
    
    // Create mailto link for lead magnet
    const emailBody = `Hi Ready Set Journey!

I'd like to receive the free 3-Day Career Clarity Challenge.

Email: ${email}

Please send me the challenge materials and add me to your newsletter for career transformation tips.

Thanks!`;

    const mailtoLink = `mailto:hello@readysetjourney.com?subject=Free 3-Day Career Clarity Challenge Request&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Show success message
    const form = document.getElementById('lead-magnet-form');
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<i data-lucide="check" class="w-5 h-5 mr-2"></i>Email Opened!';
    button.disabled = true;
    button.classList.add('opacity-75');
    
    lucide.createIcons();
    
    // Reset after 3 seconds
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
      button.classList.remove('opacity-75');
      form.reset();
    }, 3000);
  };
  
  // Scroll to section function
  window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pricing page functions
  window.trackPricingTier = function(tier) {
    // Track pricing tier selection event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'pricing_tier_selected', {
        'tier': tier,
        'value': tier
      });
    }
    
    // For now, redirect to contact page
    router.navigate('/contact');
  };

  window.toggleFAQ = function(faqId) {
    const faqContent = document.getElementById(faqId);
    const faqIcon = document.getElementById(faqId + '-icon');
    
    if (faqContent && faqIcon) {
      faqContent.classList.toggle('hidden');
      faqIcon.classList.toggle('rotate-180');
    }
  };
  
  // Alumni salon signup
  window.joinAlumniSalon = function() {
    const emailBody = `Hi Ready Set Journey!

I'm interested in joining the Alumni Salon community. Please send me more information about membership and upcoming events.

Looking forward to connecting with fellow journey alumni!`;
    const mailtoLink = \`mailto:hello@readysetjourney.com?subject=Alumni Salon Interest&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };
});