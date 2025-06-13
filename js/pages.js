const pages = {
  home: () => `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-teal-50 overflow-hidden" style="background-image: url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'); background-size: cover; background-position: center; background-blend-mode: overlay;">
      <div class="absolute inset-0 bg-white/80"></div>
      <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div class="mb-6">
          <span class="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Blueprints that fuse sabbaticals with design-thinking sprints
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
          Launch Your Next Chapter with 
          <span class="text-brand-orange">Purpose</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Get a personalized journey blueprint that combines meaningful travel with career clarity—trusted by 137 professionals who pivoted after their adventure.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Book Your Free 15-Min Call
          </a>
          <a href="#lead-magnet" class="nav-link border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out">
            Get Free 3-Day Challenge
          </a>
        </div>
        <p class="text-sm text-slate-500">Free consultation • No obligation • 92% say their career clarity improved</p>
      </div>
    </section>

    <!-- Is This You? Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Is This You?</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Find your cohort and discover how RSJ can transform your next chapter</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer group" onclick="scrollToSection('value-props')">
            <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="graduation-cap" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-brand-dark">Recent Graduates</h3>
            <p class="text-slate-600 text-sm">The "Now What?" crowd seeking direction and purpose</p>
          </div>
          <div class="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer group" onclick="scrollToSection('value-props')">
            <div class="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="briefcase" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-brand-dark">Burned-Out Professionals</h3>
            <p class="text-slate-600 text-sm">Seeking meaningful sabbaticals and career clarity</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer group" onclick="scrollToSection('value-props')">
            <div class="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="compass" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-brand-dark">Midlife Navigators</h3>
            <p class="text-slate-600 text-sm">Contemplating their next act and seeking new passions</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 cursor-pointer group" onclick="scrollToSection('value-props')">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="heart" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 text-brand-dark">Discerning Retirees</h3>
            <p class="text-slate-600 text-sm">Wanting more than generic getaways</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works - Simplified 3-Step Process -->
    <section id="value-props" class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Problem → Blueprint → Transform</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Three steps to your career-changing adventure</p>
        </div>
        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="search" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">1. Share Your Spark</h3>
            <p class="text-slate-600 leading-relaxed">Tell us your career goals and interests. We identify the gap between where you are and where you want to be.</p>
          </div>
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="map" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">2. Get Your Blueprint</h3>
            <p class="text-slate-600 leading-relaxed">Get a detailed journey blueprint with vetted local mentors in your field (like a Finnish game-studio tour for UX designers).</p>
          </div>
          <div class="text-center group">
            <div class="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="trending-up" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">3. Transform & Return</h3>
            <p class="text-slate-600 leading-relaxed">Return with new skills, network, and clarity. 92% report improved career direction within 6 months.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lead Magnet Section -->
    <section id="lead-magnet" class="py-20 bg-brand-orange text-white">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Get Your Free 3-Day Career Clarity Challenge</h2>
          <p class="text-xl mb-8 opacity-90">Discover your next career move with our proven framework—no travel required (yet!)</p>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div class="grid md:grid-cols-3 gap-6 text-left">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Day 1: Passion Audit</h4>
                  <p class="text-sm opacity-80">Identify what truly energizes you</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Day 2: Skills Gap Analysis</h4>
                  <p class="text-sm opacity-80">Map your current vs. dream role</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Day 3: Action Blueprint</h4>
                  <p class="text-sm opacity-80">Create your 90-day transformation plan</p>
                </div>
              </div>
            </div>
          </div>
          <form id="lead-magnet-form" class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input type="email" id="lead-email" placeholder="Enter your email" required class="flex-1 px-6 py-4 rounded-full text-brand-dark text-lg focus:outline-none focus:ring-4 focus:ring-white/30">
              <button type="submit" class="bg-white text-brand-orange font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300">
                Get Free Challenge
              </button>
            </div>
            <p class="text-sm mt-4 opacity-80">No spam. Unsubscribe anytime. Used by 2,847 career changers.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- Value Propositions -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Why Choose Ready Set Journey?</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">We don't just plan trips—we design transformative experiences.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="user-check" class="w-8 h-8 text-brand-orange"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Vetted Local Mentors</h3>
            <p class="text-slate-600 leading-relaxed">Connect with professionals in your target field—from Helsinki tech founders to Lisbon design studios.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="users" class="w-8 h-8 text-brand-teal"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Career-Focused Network</h3>
            <p class="text-slate-600 leading-relaxed">Meet fellow career-changers and industry insiders who become your long-term professional network.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="trending-up" class="w-8 h-8 text-brand-green"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Measurable Career Impact</h3>
            <p class="text-slate-600 leading-relaxed">Average 23% salary increase within 12 months. Track your progress with our post-journey integration workbook.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="globe" class="w-8 h-8 text-purple-600"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Skills-Based Immersion</h3>
            <p class="text-slate-600 leading-relaxed">Learn by doing—from coding bootcamps in Estonia to sustainable farming in Costa Rica.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof & Testimonials -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Success Stories</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Real outcomes from real travelers</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Sarah Chen" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-dark">Sarah Chen</h4>
                <p class="text-sm text-slate-600">Marketing → UX Design</p>
              </div>
            </div>
            <p class="text-slate-600 mb-4">"The Helsinki design sprint changed everything. I landed a senior UX role at a fintech startup 3 months after returning."</p>
            <div class="text-brand-orange font-semibold">+47% salary increase</div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Marcus Rodriguez" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-dark">Marcus Rodriguez</h4>
                <p class="text-sm text-slate-600">Finance → Social Impact</p>
              </div>
            </div>
            <p class="text-slate-600 mb-4">"The Costa Rica sustainability immersion led me to launch my own B-Corp. Revenue hit $2M in year one."</p>
            <div class="text-brand-orange font-semibold">Founded successful startup</div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex items-center mb-6">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Emma Thompson" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-bold text-brand-dark">Emma Thompson</h4>
                <p class="text-sm text-slate-600">Corporate Law → Tech Policy</p>
              </div>
            </div>
            <p class="text-slate-600 mb-4">"The Berlin tech policy immersion connected me with EU regulators. Now I'm head of policy at a major platform."</p>
            <div class="text-brand-orange font-semibold">+62% salary increase</div>
          </div>
        </div>
        <div class="text-center">
          <div class="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-full shadow-lg">
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-orange">92%</div>
              <div class="text-sm text-slate-600">Career clarity improved</div>
            </div>
            <div class="w-px h-12 bg-slate-200"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-teal">137</div>
              <div class="text-sm text-slate-600">Successful career pivots</div>
            </div>
            <div class="w-px h-12 bg-slate-200"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-green">23%</div>
              <div class="text-sm text-slate-600">Average salary increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Safety -->
    <section class="py-16 bg-white border-t border-slate-200">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="shield-check" class="w-8 h-8 text-green-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">14-Day Money-Back Guarantee</h4>
            <p class="text-sm text-slate-600">Full refund if not satisfied with your blueprint</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="credit-card" class="w-8 h-8 text-blue-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">Secure Payment</h4>
            <p class="text-sm text-slate-600">Stripe & PayPal protected checkout</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="users" class="w-8 h-8 text-purple-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">ATTA Member</h4>
            <p class="text-sm text-slate-600">Adventure Travel Trade Association certified</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="dollar-sign" class="w-8 h-8 text-orange-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">No Hidden Fees</h4>
            <p class="text-sm text-slate-600">You control flights & accommodation booking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Design Your Future?</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Join 137 professionals who've transformed their careers through purposeful travel.</p>
        <a href="/contact" class="nav-link inline-flex bg-white text-brand-orange font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          Book Your Free Discovery Call
        </a>
        <p class="text-sm mt-4 opacity-80">Free consultation • No obligation • Response within 24 hours</p>
      </div>
    </section>
  `,

  howItWorks: () => `
    <!-- How It Works Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            How It Works
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            From spark to transformation in three simple steps
          </p>
        </div>
      </div>
    </section>

    <!-- 3-Step Process -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-white">1</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Share Your Spark</h3>
            <p class="text-slate-600 leading-relaxed">Tell us your career goals, interests, and what you're seeking. We identify the gap between where you are and where you want to be.</p>
          </div>
          <div class="text-center">
            <div class="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-white">2</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Get Your Blueprint</h3>
            <p class="text-slate-600 leading-relaxed">Receive a detailed journey blueprint with vetted local mentors in your field and curated experiences designed for your goals.</p>
          </div>
          <div class="text-center">
            <div class="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-white">3</span>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-brand-dark font-display">Transform & Return</h3>
            <p class="text-slate-600 leading-relaxed">Return with new skills, network, and clarity. 92% report improved career direction within 6 months.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sample Journey -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Sample Journey</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Experience a day in the life of a Ready Set Journey adventure</p>
        </div>
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div id="itinerary-content" class="prose prose-lg max-w-none">
            <!-- Markdown content will be loaded here -->
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Quiz CTA -->
    <section class="py-20 bg-brand-orange text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Discover Your Journey Style</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Take our 5-question quiz to find your perfect journey blueprint</p>
        <button onclick="startPersonalityQuiz()" class="bg-white text-brand-orange font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          Take the Quiz
        </button>
      </div>
    </section>
  `,

  blog: () => `
    <!-- Blog Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            Success Stories & Insights
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Real transformations from real travelers
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Stories -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Career transformation story" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-brand-dark">From Burnout to Breakthrough: Sarah's Helsinki Journey</h3>
              <p class="text-slate-600 mb-4">How a marketing manager transformed into a UX designer through a 3-week immersion in Finland's design scene.</p>
              <div class="flex items-center text-sm text-slate-500">
                <span>5 min read</span>
                <span class="mx-2">•</span>
                <span>Career Change</span>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Entrepreneurship story" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-brand-dark">Building a $2M B-Corp After Costa Rica</h3>
              <p class="text-slate-600 mb-4">Marcus Rodriguez shares how sustainable farming immersion led to launching his successful social impact startup.</p>
              <div class="flex items-center text-sm text-slate-500">
                <span>7 min read</span>
                <span class="mx-2">•</span>
                <span>Entrepreneurship</span>
              </div>
            </div>
          </article>

          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Policy career story" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-brand-dark">From Corporate Law to EU Tech Policy</h3>
              <p class="text-slate-600 mb-4">Emma Thompson's journey from corporate lawyer to head of policy at a major tech platform.</p>
              <div class="flex items-center text-sm text-slate-500">
                <span>6 min read</span>
                <span class="mx-2">•</span>
                <span>Career Pivot</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Insights Section -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Travel Insights</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Expert advice for transformational travel</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-brand-dark">Sabbatical vs. Career Break: Which Yields Bigger Salary Bumps?</h3>
            <p class="text-slate-600 mb-6">A data-driven analysis of 500+ professionals who took extended time off for travel and learning.</p>
            <button class="text-brand-orange font-semibold hover:underline">Read Full Analysis →</button>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-brand-dark">The ROI of Transformational Travel</h3>
            <p class="text-slate-600 mb-6">How to measure and maximize the return on investment from your journey experience.</p>
            <button class="text-brand-orange font-semibold hover:underline">Download Template →</button>
          </div>
        </div>
      </div>
    </section>
  `,

  pricing: () => `
    <!-- Pricing Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            Simple, Transparent Pricing
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Choose the blueprint that fits your journey length and support needs
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Tiers -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Explorer Blueprint -->
          <div class="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-brand-orange transition-colors duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2 text-brand-dark">Explorer Blueprint</h3>
              <p class="text-slate-600 mb-6">Perfect for 1-week adventures</p>
              <div class="text-4xl font-bold text-brand-orange mb-2">$179</div>
              <p class="text-sm text-slate-500">One-time payment</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Detailed 7-day itinerary</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">3 vetted local connections</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Digital blueprint document</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Email support</span>
              </li>
            </ul>
            <button onclick="trackPricingTier('explorer')" class="w-full bg-brand-orange text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-orange/90 transition-colors duration-300">
              Choose Explorer
            </button>
          </div>

          <!-- Guided Pathfinder -->
          <div class="bg-white border-2 border-brand-orange rounded-2xl p-8 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2 text-brand-dark">Guided Pathfinder</h3>
              <p class="text-slate-600 mb-6">Ideal for 2-3 week journeys</p>
              <div class="text-4xl font-bold text-brand-orange mb-2">$449</div>
              <p class="text-sm text-slate-500">One-time payment</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Everything in Explorer</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Up to 21-day itinerary</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">7 vetted local connections</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">2 video coaching calls</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">WhatsApp support during journey</span>
              </li>
            </ul>
            <button onclick="trackPricingTier('pathfinder')" class="w-full bg-brand-orange text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-orange/90 transition-colors duration-300">
              Choose Pathfinder
            </button>
          </div>

          <!-- Transformation Pro -->
          <div class="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-brand-orange transition-colors duration-300">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold mb-2 text-brand-dark">Transformation Pro</h3>
              <p class="text-slate-600 mb-6">For 4+ week immersions</p>
              <div class="text-4xl font-bold text-brand-orange mb-2">$949</div>
              <p class="text-sm text-slate-500">One-time payment</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Everything in Pathfinder</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Up to 28-day itinerary</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">15+ vetted local connections</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">4 video coaching calls</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Post-journey integration workbook</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Alumni salon access</span>
              </li>
            </ul>
            <button onclick="trackPricingTier('transformation')" class="w-full bg-brand-orange text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-orange/90 transition-colors duration-300">
              Choose Transformation
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Frequently Asked Questions</h2>
        </div>
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-white rounded-lg shadow-sm">
            <button onclick="toggleFAQ('faq1')" class="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
              <span class="font-semibold text-brand-dark">Why three tiers?</span>
              <i data-lucide="chevron-down" id="faq1-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
            </button>
            <div id="faq1" class="hidden px-6 pb-6">
              <p class="text-slate-600">We keep choices simple: one week, three weeks, or one month of design depth. Each tier is optimized for different journey lengths and support needs.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm">
            <button onclick="toggleFAQ('faq2')" class="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
              <span class="font-semibold text-brand-dark">Can I upgrade later?</span>
              <i data-lucide="chevron-down" id="faq2-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
            </button>
            <div id="faq2" class="hidden px-6 pb-6">
              <p class="text-slate-600">Yes—pay the difference anytime before your first coaching call. Many clients start with Explorer Blueprint and upgrade to Guided Pathfinder.</p>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-sm">
            <button onclick="toggleFAQ('faq3')" class="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
              <span class="font-semibold text-brand-dark">What if I need a longer journey?</span>
              <i data-lucide="chevron-down" id="faq3-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
            </button>
            <div id="faq3" class="hidden px-6 pb-6">
              <p class="text-slate-600">We can extend any blueprint for +$125 per additional week (maximum 56 days total).</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="shield-check" class="w-8 h-8 text-green-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">14-Day Money-Back Guarantee</h4>
            <p class="text-sm text-slate-600">Full refund if not satisfied with your blueprint</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="credit-card" class="w-8 h-8 text-blue-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">Secure Payment</h4>
            <p class="text-sm text-slate-600">Stripe & PayPal protected checkout</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i data-lucide="users" class="w-8 h-8 text-purple-600"></i>
            </div>
            <h4 class="font-semibold text-brand-dark mb-2">ATTA Certified</h4>
            <p class="text-sm text-slate-600">Adventure Travel Trade Association member</p>
          </div>
        </div>
      </div>
    </section>
  `,

  contact: () => `
    <!-- Contact Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            Book Your Free Discovery Call
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Let's design your perfect journey in just 15 minutes
          </p>
        </div>
      </div>
    </section>

    <!-- Scheduling Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto">
          <form id="scheduling-form" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-brand-dark mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-brand-dark mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-brand-dark mb-2">Email Address</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-brand-dark mb-2">Phone Number (Optional)</label>
              <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
            </div>

            <div>
              <label for="timeSlot" class="block text-sm font-medium text-brand-dark mb-2">Preferred Time</label>
              <select id="time-slots" name="timeSlot" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                <option value="">Select a time...</option>
              </select>
            </div>

            <div>
              <label for="interests" class="block text-sm font-medium text-brand-dark mb-2">What type of travel interests you most?</label>
              <select name="interests" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                <option value="">Select your interest...</option>
                <option value="career-change">Career change and skill building</option>
                <option value="cultural-immersion">Cultural immersion and language learning</option>
                <option value="entrepreneurship">Entrepreneurship and business networking</option>
                <option value="wellness">Wellness and personal development</option>
                <option value="adventure">Adventure and outdoor experiences</option>
                <option value="creative">Creative pursuits and artistic exploration</option>
              </select>
            </div>

            <div>
              <label for="goals" class="block text-sm font-medium text-brand-dark mb-2">What are you hoping to achieve?</label>
              <textarea name="goals" rows="3" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" placeholder="Tell us about your goals and what you're seeking from your journey..."></textarea>
            </div>

            <div>
              <label for="budget" class="block text-sm font-medium text-brand-dark mb-2">Budget Range (excluding flights)</label>
              <select name="budget" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                <option value="">Select budget range...</option>
                <option value="under-2000">Under $2,000</option>
                <option value="2000-5000">$2,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-plus">$10,000+</option>
                <option value="flexible">Flexible based on value</option>
              </select>
            </div>

            <div>
              <label for="timeframe" class="block text-sm font-medium text-brand-dark mb-2">When are you planning to travel?</label>
              <select name="timeframe" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                <option value="">Select timeframe...</option>
                <option value="next-3-months">Next 3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12-plus-months">12+ months</option>
                <option value="flexible">Flexible timing</option>
              </select>
            </div>

            <div>
              <label for="additionalInfo" class="block text-sm font-medium text-brand-dark mb-2">Additional Information (Optional)</label>
              <textarea name="additionalInfo" rows="3" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent" placeholder="Any specific destinations, requirements, or questions?"></textarea>
            </div>

            <button type="submit" class="w-full bg-brand-orange text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-brand-orange/90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
              Schedule My Free Call
            </button>

            <p class="text-sm text-slate-500 text-center">
              We'll send you a calendar invite and journey preparation guide within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Get In Touch</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Have questions? We're here to help you plan your transformative journey.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="mail" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-brand-dark">Email Us</h3>
            <p class="text-slate-600">hello@readysetjourney.com</p>
            <p class="text-sm text-slate-500 mt-2">Response within 24 hours</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="clock" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-brand-dark">Office Hours</h3>
            <p class="text-slate-600">Monday - Friday</p>
            <p class="text-slate-600">9:00 AM - 6:00 PM EST</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="globe" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-brand-dark">Global Reach</h3>
            <p class="text-slate-600">Serving travelers worldwide</p>
            <p class="text-sm text-slate-500 mt-2">Remote consultations available</p>
          </div>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <!-- About Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            About Ready Set Journey
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            We believe travel should transform you, not just transport you. 
            Every journey we design is a catalyst for growth, connection, and discovery.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-6 font-display text-brand-dark">Our Mission</h2>
            <p class="text-lg text-slate-600 mb-6 leading-relaxed">
              Ready Set Journey exists to bridge the gap between where you are and where you want to be. 
              We craft personalized travel experiences that don't just show you the world—they prepare you for your future.
            </p>
            <p class="text-lg text-slate-600 leading-relaxed">
              Through meaningful connections, immersive learning, and authentic exploration, 
              we help you return home with more than memories—you return with clarity, skills, and purpose.
            </p>
          </div>
          <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 p-8 rounded-2xl">
            <h3 class="text-2xl font-semibold mb-4 font-display text-brand-dark">What Makes Us Different</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Personalized blueprints, not cookie-cutter packages</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Focus on growth and future-readiness</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Meaningful connections with locals and fellow travelers</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Immersive experiences that expand your worldview</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">
            Our Approach
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine four essential elements to create transformative travel experiences.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="book-open" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Learning</h3>
            <p class="text-slate-600">Gain new skills, knowledge, and perspectives that prepare you for the future.</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="users" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Networking</h3>
            <p class="text-slate-600">Build meaningful relationships with like-minded individuals and local communities.</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="map-pin" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Exploration</h3>
            <p class="text-slate-600">Discover hidden gems and experience destinations beyond the tourist trail.</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="heart" class="w-10 h-10 text-white"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Immersion</h3>
            <p class="text-slate-600">Engage authentically with local cultures, traditions, and ways of life.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-8 font-display text-brand-dark">Our Values</h2>
          <div class="grid md:grid-cols-2 gap-8 text-left">
            <div class="bg-slate-50 p-8 rounded-2xl">
              <h3 class="text-xl font-semibold mb-4 text-brand-dark">Authentic Connection</h3>
              <p class="text-slate-600">We believe in creating genuine relationships between travelers and local communities, fostering mutual understanding and respect.</p>
            </div>
            <div class="bg-slate-50 p-8 rounded-2xl">
              <h3 class="text-xl font-semibold mb-4 text-brand-dark">Purposeful Growth</h3>
              <p class="text-slate-600">Every experience is designed with intention, helping you develop skills and perspectives that serve your future goals.</p>
            </div>
            <div class="bg-slate-50 p-8 rounded-2xl">
              <h3 class="text-xl font-semibold mb-4 text-brand-dark">Sustainable Impact</h3>
              <p class="text-slate-600">We prioritize responsible travel that benefits local communities and preserves the destinations we visit.</p>
            </div>
            <div class="bg-slate-50 p-8 rounded-2xl">
              <h3 class="text-xl font-semibold mb-4 text-brand-dark">Personalized Excellence</h3>
              <p class="text-slate-600">No two journeys are alike. We craft each experience to match your unique goals, interests, and aspirations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Start Your Journey?</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Let's create a transformative experience that aligns with your goals and dreams.</p>
        <a href="/contact" class="nav-link inline-flex bg-white text-brand-orange font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          Book Your Free Discovery Call
        </a>
      </div>
    </section>
  `
};