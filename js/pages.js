const pages = {
  home: () => `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-teal-50 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-display leading-tight">
            <span class="text-brand-orange">Adventure,</span>
            <span class="text-brand-teal block md:inline"> Unlocked.</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your launchpad to a future-ready life filled with <strong class="text-brand-orange">passion</strong>, 
            <strong class="text-brand-teal">learning</strong>, <strong class="text-brand-green">networking</strong>, 
            exploration, and genuine immersion.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
              Book Your 15-Min Call
            </a>
            <a href="/how-it-works" class="nav-link border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out">
              <i data-lucide="compass" class="w-5 h-5 mr-2 inline"></i>
              See How It Works
            </a>
          </div>
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="users" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Meaningful Connections</h3>
              <p class="text-slate-600">Build lasting relationships with like-minded travelers and local communities.</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="trending-up" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Future-Ready Growth</h3>
              <p class="text-slate-600">Return with new skills, perspectives, and clarity for your next chapter.</p>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="heart" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Authentic Immersion</h3>
              <p class="text-slate-600">Experience genuine local culture beyond typical tourist attractions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Serve Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">Who We Serve</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">Ready Set Journey is designed for those who demand more from their travel experiences.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="graduation-cap" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Recent Graduates</h3>
            <p class="text-slate-600">The "Now What?" crowd seeking direction, purpose, and their next adventure.</p>
          </div>
          <div class="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="briefcase" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Burned-Out Professionals</h3>
            <p class="text-slate-600">Looking for meaningful sabbaticals and career clarity through transformative experiences.</p>
          </div>
          <div class="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="compass" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Midlife Navigators</h3>
            <p class="text-slate-600">Contemplating their next act and seeking new passions and perspectives.</p>
          </div>
          <div class="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="sunset" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Discerning Retirees</h3>
            <p class="text-slate-600">Wanting more than generic getaways - seeking depth and meaningful connections.</p>
          </div>
          <div class="bg-brand-light p-8 rounded-2xl hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="star" class="w-6 h-6 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Anyone Who Demands More</h3>
            <p class="text-slate-600">Tired of superficial travel and craving authentic, transformative experiences.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Launch Your Next Chapter?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Get your personalized journey blueprint in just 15 minutes. No commitment, just possibilities.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
          Book Your Free Discovery Call
        </a>
      </div>
    </section>
  `,

  about: () => `
    <!-- About Hero -->
    <section class="py-20 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">About Ready Set Journey</h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            We're not just another travel company. We're your partners in transformation, 
            crafting experiences that prepare you for what's next while enriching your present.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold mb-8 font-display text-brand-dark">Our Mission</h2>
            <p class="text-lg text-slate-600 mb-6 leading-relaxed">
              Ready Set Journey exists to bridge the gap between where you are and where you want to be. 
              We believe that travel, when done intentionally, becomes a powerful catalyst for personal 
              and professional growth.
            </p>
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">
              Our carefully curated experiences combine learning, networking, exploration, and authentic 
              cultural immersion to create transformative journeys that prepare you for the future while 
              enriching your present.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-brand-orange mb-2">100%</div>
                <div class="text-sm text-slate-600">Personalized</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-brand-teal mb-2">15min</div>
                <div class="text-sm text-slate-600">Discovery Call</div>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-6 font-display text-brand-dark">What Makes Us Different</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Every journey is crafted specifically for your interests and goals</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Focus on meaningful connections and authentic experiences</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Emphasis on future-ready skills and perspectives</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check-circle" class="w-6 h-6 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <span class="text-slate-600">Beyond tourism - genuine cultural immersion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6 font-display text-brand-dark">Our Values</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            These principles guide everything we do, from crafting your journey to supporting you along the way.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="heart" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Authenticity</h3>
            <p class="text-slate-600">Real experiences with genuine local communities, not staged tourist attractions.</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="users" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Connection</h3>
            <p class="text-slate-600">Building meaningful relationships that extend far beyond your journey.</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="trending-up" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Growth</h3>
            <p class="text-slate-600">Every experience designed to expand your horizons and capabilities.</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="compass" class="w-8 h-8 text-white"></i>
            </div>
            <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Purpose</h3>
            <p class="text-slate-600">Travel with intention, returning with clarity and direction for your future.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-brand-teal to-brand-green text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 font-display">Ready to Begin Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Let's discuss how we can craft your perfect journey in just 15 minutes.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-teal hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
          Book Your Discovery Call
        </a>
      </div>
    </section>
  `,

  howItWorks: () => `
    <!-- How It Works Hero -->
    <section class="py-20 bg-gradient-to-br from-brand-light via-white to-lime-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">How It Works</h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Three simple steps to your transformative journey. From discovery to blueprint to adventure.
          </p>
        </div>
      </div>
    </section>

    <!-- Process Steps -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Step 1 -->
            <div class="text-center group">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl font-bold text-white">1</span>
                </div>
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-brand-orange/30 hidden lg:block"></div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">Share Your Unique Spark</h3>
              <p class="text-slate-600 mb-6 leading-relaxed">
                In a 15-minute discovery call, tell us about your passions, interests, goals, and what you're seeking. 
                We listen deeply to understand what makes you tick.
              </p>
              <div class="bg-brand-orange/5 p-4 rounded-lg">
                <p class="text-sm text-brand-orange font-medium">✓ 15-minute call</p>
                <p class="text-sm text-brand-orange font-medium">✓ No commitment</p>
                <p class="text-sm text-brand-orange font-medium">✓ Completely free</p>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="text-center group">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl font-bold text-white">2</span>
                </div>
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-brand-teal/30 hidden lg:block"></div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">We Craft Your Blueprint</h3>
              <p class="text-slate-600 mb-6 leading-relaxed">
                Within 48 hours, receive a detailed digital document outlining your bespoke experience. 
                Every detail is personalized to your interests and goals.
              </p>
              <div class="bg-brand-teal/5 p-4 rounded-lg">
                <p class="text-sm text-brand-teal font-medium">✓ Detailed itinerary</p>
                <p class="text-sm text-brand-teal font-medium">✓ Local connections</p>
                <p class="text-sm text-brand-teal font-medium">✓ Learning opportunities</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="text-center group">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">You Book & Live It</h3>
              <p class="text-slate-600 mb-6 leading-relaxed">
                Use your blueprint to book and experience your transformative journey. 
                Return with new skills, connections, and clarity for your future.
              </p>
              <div class="bg-brand-green/5 p-4 rounded-lg">
                <p class="text-sm text-brand-green font-medium">✓ Transform your perspective</p>
                <p class="text-sm text-brand-green font-medium">✓ Build lasting connections</p>
                <p class="text-sm text-brand-green font-medium">✓ Gain future-ready skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sample Journey -->
    <section class="py-20 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-6 font-display text-brand-dark">Sample Journey Blueprint</h2>
            <p class="text-xl text-slate-600">
              Here's a glimpse of what a Ready Set Journey experience looks like in practice.
            </p>
          </div>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="p-8">
              <div id="itinerary-content" class="prose prose-lg max-w-none">
                <div class="text-center py-8">
                  <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto mb-4"></div>
                  <p class="text-slate-600">Loading sample itinerary...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-brand-green to-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 font-display">Ready to Start Your Journey?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Book your free 15-minute discovery call and let's craft your perfect adventure.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-green hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
          Book Your Discovery Call
        </a>
      </div>
    </section>
  `,

  blog: () => `
    <!-- Blog Hero -->
    <section class="py-20 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">Travel Insights & Stories</h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Discover inspiration, tips, and stories from transformative journeys around the world.
          </p>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 p-12 rounded-2xl">
            <div class="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
              <i data-lucide="edit-3" class="w-12 h-12 text-white"></i>
            </div>
            <h2 class="text-3xl font-bold mb-6 font-display text-brand-dark">Blog Coming Soon!</h2>
            <p class="text-xl text-slate-600 mb-8 leading-relaxed">
              We're crafting amazing content about transformative travel, future-ready skills, 
              and inspiring stories from our community. Stay tuned for insights that will fuel your wanderlust!
            </p>
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <i data-lucide="map-pin" class="w-8 h-8 text-brand-orange mb-4"></i>
                <h3 class="font-bold mb-2 text-brand-dark">Destination Guides</h3>
                <p class="text-sm text-slate-600">In-depth guides to transformative destinations</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <i data-lucide="users" class="w-8 h-8 text-brand-teal mb-4"></i>
                <h3 class="font-bold mb-2 text-brand-dark">Success Stories</h3>
                <p class="text-sm text-slate-600">Real stories from our journey community</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm">
                <i data-lucide="lightbulb" class="w-8 h-8 text-brand-green mb-4"></i>
                <h3 class="font-bold mb-2 text-brand-dark">Travel Tips</h3>
                <p class="text-sm text-slate-600">Expert advice for meaningful travel</p>
              </div>
            </div>
            <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              <i data-lucide="bell" class="w-5 h-5 mr-2 inline"></i>
              Get Notified When We Launch
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-20 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 font-display text-brand-dark">Stay Connected</h2>
          <p class="text-lg text-slate-600 mb-8">
            Be the first to know when we publish new travel insights and stories.
          </p>
          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                class="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              >
              <button class="bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p class="text-sm text-slate-500 mt-4">
              No spam, just inspiring travel content. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  pricing: () => `
    <!-- Pricing Hero -->
    <section class="py-20 bg-gradient-to-br from-brand-light via-white to-lime-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">Simple, Transparent Pricing</h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            One personalized blueprint. Endless possibilities. Your transformation starts here.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Pioneer Offer -->
            <div class="relative bg-gradient-to-br from-brand-orange to-brand-orange/80 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div class="absolute top-4 right-4 bg-white text-brand-orange px-3 py-1 rounded-full text-sm font-bold">
                LIMITED TIME
              </div>
              <div class="mb-6">
                <h3 class="text-2xl font-bold mb-2 font-display">Pioneer Offer</h3>
                <p class="opacity-90">Be among the first 5 adventurers</p>
              </div>
              <div class="mb-8">
                <div class="text-5xl font-bold mb-2">FREE</div>
                <div class="text-lg opacity-90">Complete journey blueprint</div>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                  <span>15-minute discovery call</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                  <span>Personalized journey blueprint</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                  <span>Local connections & recommendations</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                  <span>Learning opportunities guide</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                  <span>Networking event suggestions</span>
                </li>
              </ul>
              <a href="/contact" class="nav-link block w-full bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105">
                Claim Your Free Blueprint
              </a>
              <p class="text-center text-sm opacity-75 mt-4">
                Only 5 spots available
              </p>
            </div>

            <!-- Standard Pricing -->
            <div class="bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="mb-6">
                <h3 class="text-2xl font-bold mb-2 font-display text-brand-dark">Standard Blueprint</h3>
                <p class="text-slate-600">After pioneer offer ends</p>
              </div>
              <div class="mb-8">
                <div class="text-5xl font-bold mb-2 text-brand-dark">$79</div>
                <div class="text-lg text-slate-600">Per journey blueprint</div>
                <div class="text-sm text-brand-orange font-medium mt-2">
                  Future rate: $149 (effective July 1st)
                </div>
              </div>
              <ul class="space-y-3 mb-8 text-slate-600">
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>15-minute discovery call</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>Personalized journey blueprint</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>Local connections & recommendations</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>Learning opportunities guide</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>Networking event suggestions</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="check" class="w-5 h-5 mr-3 flex-shrink-0 text-brand-green"></i>
                  <span>Follow-up support</span>
                </li>
              </ul>
              <a href="/contact" class="nav-link block w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105">
                Get Your Blueprint
              </a>
              <p class="text-center text-sm text-slate-500 mt-4">
                Available after pioneer spots fill
              </p>
            </div>
          </div>

          <!-- Value Proposition -->
          <div class="mt-16 text-center">
            <h2 class="text-3xl font-bold mb-8 font-display text-brand-dark">Why Our Blueprints Are Worth It</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-brand-light p-6 rounded-xl">
                <div class="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="clock" class="w-6 h-6 text-white"></i>
                </div>
                <h3 class="text-lg font-bold mb-3 text-brand-dark">Save 20+ Hours</h3>
                <p class="text-slate-600 text-sm">
                  Skip the endless research. We've done the work to find the perfect experiences for you.
                </p>
              </div>
              <div class="bg-brand-light p-6 rounded-xl">
                <div class="w-12 h-12 bg-brand-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="users" class="w-6 h-6 text-white"></i>
                </div>
                <h3 class="text-lg font-bold mb-3 text-brand-dark">Exclusive Access</h3>
                <p class="text-slate-600 text-sm">
                  Connect with local communities and experiences you'd never find on your own.
                </p>
              </div>
              <div class="bg-brand-light p-6 rounded-xl">
                <div class="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="target" class="w-6 h-6 text-white"></i>
                </div>
                <h3 class="text-lg font-bold mb-3 text-brand-dark">Guaranteed Results</h3>
                <p class="text-slate-600 text-sm">
                  Return with new skills, connections, and clarity for your future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center font-display text-brand-dark">Frequently Asked Questions</h2>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">What exactly do I get in my blueprint?</h3>
              <p class="text-slate-600">
                Your blueprint includes a detailed day-by-day itinerary, local contact information, 
                learning opportunities, networking events, cultural experiences, and practical logistics 
                - all personalized to your interests and goals.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">Do you book the travel for me?</h3>
              <p class="text-slate-600">
                We provide the blueprint and connections, but you handle your own bookings. 
                This gives you full control over your budget and preferences while ensuring 
                you have all the information needed for an amazing experience.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">How long does it take to receive my blueprint?</h3>
              <p class="text-slate-600">
                After your discovery call, you'll receive your personalized blueprint within 48 hours. 
                We work quickly to get you excited about your upcoming adventure!
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">What if I'm not satisfied with my blueprint?</h3>
              <p class="text-slate-600">
                We're confident you'll love your blueprint, but if you're not completely satisfied, 
                we'll work with you to revise it until it's perfect. Your transformation is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 font-display">Ready to Claim Your Free Blueprint?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join the first 5 pioneers and get your personalized journey blueprint completely free.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
          Book Your Free Discovery Call
        </a>
      </div>
    </section>
  `,

  contact: () => `
    <!-- Contact Hero -->
    <section class="py-20 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">Let's Plan Your Adventure</h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Book your free 15-minute discovery call and let's craft your perfect journey blueprint.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Form -->
            <div class="bg-brand-light p-8 rounded-2xl">
              <h2 class="text-2xl font-bold mb-6 font-display text-brand-dark">Schedule Your Discovery Call</h2>
              <form id="scheduling-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-brand-dark mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-brand-dark mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-brand-dark mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-brand-dark mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                </div>
                
                <div>
                  <label for="timeSlot" class="block text-sm font-medium text-brand-dark mb-2">Preferred Time *</label>
                  <select id="time-slots" name="timeSlot" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                    <option value="">Loading available times...</option>
                  </select>
                </div>
                
                <div>
                  <label for="interests" class="block text-sm font-medium text-brand-dark mb-2">What are your travel interests? *</label>
                  <textarea id="interests" name="interests" required rows="3" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" placeholder="e.g., cultural immersion, learning new skills, networking, adventure..."></textarea>
                </div>
                
                <div>
                  <label for="goals" class="block text-sm font-medium text-brand-dark mb-2">What are you seeking from this journey? *</label>
                  <textarea id="goals" name="goals" required rows="3" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" placeholder="e.g., career clarity, new perspectives, personal growth..."></textarea>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="budget" class="block text-sm font-medium text-brand-dark mb-2">Budget Range</label>
                    <select id="budget" name="budget" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                      <option value="">Select budget range</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-5k">$2,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label for="timeframe" class="block text-sm font-medium text-brand-dark mb-2">When do you want to travel?</label>
                    <select id="timeframe" name="timeframe" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                      <option value="">Select timeframe</option>
                      <option value="next-month">Next month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label for="additionalInfo" class="block text-sm font-medium text-brand-dark mb-2">Anything else you'd like us to know?</label>
                  <textarea id="additionalInfo" name="additionalInfo" rows="3" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent" placeholder="Special interests, accessibility needs, travel experience..."></textarea>
                </div>
                
                <button type="submit" class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
                  Schedule My Discovery Call
                </button>
              </form>
            </div>
            
            <!-- Contact Info -->
            <div class="space-y-8">
              <div>
                <h2 class="text-2xl font-bold mb-6 font-display text-brand-dark">Get In Touch</h2>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mr-4">
                      <i data-lucide="mail" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <div>
                      <p class="font-medium text-brand-dark">Email</p>
                      <p class="text-slate-600">hello@readysetjourney.com</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mr-4">
                      <i data-lucide="clock" class="w-6 h-6 text-brand-teal"></i>
                    </div>
                    <div>
                      <p class="font-medium text-brand-dark">Response Time</p>
                      <p class="text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mr-4">
                      <i data-lucide="calendar" class="w-6 h-6 text-brand-green"></i>
                    </div>
                    <div>
                      <p class="font-medium text-brand-dark">Call Duration</p>
                      <p class="text-slate-600">15 minutes, no commitment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 p-6 rounded-xl">
                <h3 class="text-lg font-bold mb-4 font-display text-brand-dark">What to Expect</h3>
                <ul class="space-y-3 text-sm text-slate-600">
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                    <span>Friendly, no-pressure conversation about your travel dreams</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                    <span>Discussion of your interests, goals, and ideal experiences</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                    <span>Overview of how we can craft your perfect journey</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                    <span>Next steps if you decide to move forward</span>
                  </li>
                </ul>
              </div>
              
              <div class="text-center">
                <h3 class="text-lg font-bold mb-4 font-display text-brand-dark">Follow Our Journey</h3>
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/company/readysetjourney/" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/readysetjourney" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300">
                    <i data-lucide="instagram" class="w-6 h-6"></i>
                  </a>
                  <a href="https://tiktok.com/@readysetjourney" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/readysetjourney" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300">
                    <i data-lucide="facebook" class="w-6 h-6"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-12 text-center font-display text-brand-dark">Common Questions</h2>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">Is the discovery call really free?</h3>
              <p class="text-slate-600">
                Absolutely! The 15-minute discovery call is completely free with no strings attached. 
                It's our way of getting to know you and understanding how we can help.
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">What happens after the call?</h3>
              <p class="text-slate-600">
                If we're a good fit, we'll create your personalized journey blueprint within 48 hours. 
                If you're one of our first 5 pioneers, this is completely free!
              </p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-bold mb-3 text-brand-dark">Do I have to commit to anything?</h3>
              <p class="text-slate-600">
                Not at all! The discovery call is just that - a conversation to discover if we can help you. 
                There's no pressure or commitment required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};

// Make pages available globally
window.pages = pages;