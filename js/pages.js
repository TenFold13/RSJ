const pages = {
  home: () => `
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold mb-8 font-display leading-tight">
            <span class="text-brand-orange">Launch</span>
            <span class="text-brand-teal"> Your</span>
            <span class="text-brand-green"> Next</span>
            <span class="text-brand-dark"> Chapter</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Transformative travel experiences designed for growth, connection, and discovery. 
            Your adventure starts with a personalized blueprint crafted just for you.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your 15-Min Call
            </a>
            <a href="/how-it-works" class="nav-link text-brand-orange hover:text-brand-orange/80 font-semibold py-4 px-8 rounded-full text-lg border-2 border-brand-orange hover:bg-brand-orange/5 transition-all duration-300">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Propositions -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">
            Why Choose Ready Set Journey?
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just plan trips—we design transformative experiences that prepare you for what's next.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
              <i data-lucide="compass" class="w-8 h-8 text-brand-orange"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Personalized Adventures</h3>
            <p class="text-slate-600">Every journey is crafted specifically for your interests, passions, and goals.</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-teal/20 transition-colors duration-300">
              <i data-lucide="users" class="w-8 h-8 text-brand-teal"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Meaningful Connections</h3>
            <p class="text-slate-600">Build lasting relationships with like-minded travelers and local communities.</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-green/20 transition-colors duration-300">
              <i data-lucide="trending-up" class="w-8 h-8 text-brand-green"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Future-Ready Growth</h3>
            <p class="text-slate-600">Return with new skills, perspectives, and clarity for your next chapter.</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
              <i data-lucide="heart" class="w-8 h-8 text-purple-500"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Immersive Experiences</h3>
            <p class="text-slate-600">Learn, network, explore, and immerse yourself in authentic local cultures.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">
            Perfect For Adventurous Souls
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're at a crossroads or ready for your next adventure, we're here to guide your journey.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="graduation-cap" class="w-6 h-6 text-brand-orange"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Recent Graduates</h3>
            <p class="text-slate-600">The "Now What?" crowd seeking direction and purpose after completing their studies.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="briefcase" class="w-6 h-6 text-brand-teal"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Burned-Out Professionals</h3>
            <p class="text-slate-600">Looking for meaningful sabbaticals and career clarity away from the daily grind.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="map" class="w-6 h-6 text-brand-green"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Midlife Navigators</h3>
            <p class="text-slate-600">Contemplating their next act and seeking new passions and perspectives.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="sunset" class="w-6 h-6 text-purple-500"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Discerning Retirees</h3>
            <p class="text-slate-600">Wanting more than generic getaways—seeking meaningful, enriching experiences.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="star" class="w-6 h-6 text-rose-500"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Anyone Who Demands More</h3>
            <p class="text-slate-600">Tired of superficial travel and craving depth, growth, and authentic connections.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-lucide="globe" class="w-6 h-6 text-emerald-500"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">Global Citizens</h3>
            <p class="text-slate-600">Ready to expand their worldview and make meaningful connections across cultures.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
          Ready to Launch Your Adventure?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book your 15-minute discovery call and get your personalized journey blueprint.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          Book Your Free Call Now
        </a>
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

    <!-- Company Manifesto -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">
              Our Manifesto
            </h2>
            <p class="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-brand-orange/5 to-brand-teal/5 p-8 md:p-12 rounded-2xl">
            <div class="prose prose-lg max-w-none">
              <p class="text-lg text-slate-700 mb-6 leading-relaxed">
                <strong class="text-brand-dark">We believe in the power of intentional travel.</strong> 
                Not the kind that checks boxes or collects passport stamps, but the kind that changes you from the inside out.
              </p>
              
              <p class="text-lg text-slate-700 mb-6 leading-relaxed">
                <strong class="text-brand-dark">We believe everyone deserves more than a vacation.</strong> 
                You deserve an adventure that prepares you for what's next, connects you with your purpose, 
                and expands your understanding of what's possible.
              </p>
              
              <p class="text-lg text-slate-700 mb-6 leading-relaxed">
                <strong class="text-brand-dark">We believe in the magic of human connection.</strong> 
                The conversations with strangers who become friends, the local guides who become mentors, 
                and the fellow travelers who become your chosen family.
              </p>
              
              <p class="text-lg text-slate-700 leading-relaxed">
                <strong class="text-brand-dark">We believe your next chapter starts with your next journey.</strong> 
                Ready Set Journey isn't just our name—it's our promise. 
                We're here to help you get ready, set your intentions, and embark on the journey that changes everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
          Ready to Start Your Journey?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's create your personalized blueprint for transformation and growth.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          Book Your Discovery Call
        </a>
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
            Three simple steps to your transformative journey. 
            From discovery to blueprint to adventure—we guide you every step of the way.
          </p>
        </div>
      </div>
    </section>

    <!-- 3-Step Process -->
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
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-brand-orange/20 lg:hidden"></div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">Share Your Unique Spark</h3>
              <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                Tell us your passions, interests, and what you're seeking. 
                We dive deep into your goals, dreams, and the experiences that will fuel your growth.
              </p>
              <div class="bg-brand-orange/5 p-6 rounded-xl">
                <h4 class="font-semibold text-brand-dark mb-3">What We Explore:</h4>
                <ul class="text-sm text-slate-600 space-y-2 text-left">
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Your current life stage and goals</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Interests and passions to explore</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Skills you want to develop</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Connections you want to make</li>
                </ul>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="text-center group">
              <div class="relative mb-8">
                <div class="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-3xl font-bold text-white">2</span>
                </div>
                <div class="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-16 bg-brand-teal/20 lg:hidden"></div>
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">We Craft Your Blueprint</h3>
              <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                Receive a detailed digital document outlining your bespoke experience. 
                Every recommendation is personally curated for your unique journey of growth.
              </p>
              <div class="bg-brand-teal/5 p-6 rounded-xl">
                <h4 class="font-semibold text-brand-dark mb-3">Your Blueprint Includes:</h4>
                <ul class="text-sm text-slate-600 space-y-2 text-left">
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Personalized itinerary and activities</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Learning opportunities and workshops</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Networking events and connections</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Cultural immersion experiences</li>
                </ul>
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
              <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                Use our blueprint to book and experience your transformative journey. 
                Return home with new skills, connections, and clarity for your next chapter.
              </p>
              <div class="bg-brand-green/5 p-6 rounded-xl">
                <h4 class="font-semibold text-brand-dark mb-3">You'll Return With:</h4>
                <ul class="text-sm text-slate-600 space-y-2 text-left">
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>New skills and knowledge</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Meaningful relationships</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Expanded worldview</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Clarity for your future</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sample Journey -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-brand-dark">
            Sample Journey Blueprint
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Here's an example of what a Ready Set Journey experience looks like in practice.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="bg-gradient-to-r from-brand-orange to-brand-teal p-8 text-white text-center">
            <h3 class="text-2xl font-bold mb-2 font-display">Future-Ready Exploration & Growth</h3>
            <p class="text-lg opacity-90">A Sample Day in Lisbon, Portugal</p>
          </div>
          
          <div class="p-8">
            <div id="itinerary-content" class="prose prose-lg max-w-none">
              <!-- Markdown content will be loaded here -->
              <div class="text-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-orange mx-auto"></div>
                <p class="text-slate-500 mt-4">Loading sample itinerary...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
          Ready to Create Your Blueprint?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book your 15-minute discovery call and let's design your transformative journey.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start My Journey
        </a>
      </div>
    </section>
  `,

  blog: () => `
    <!-- Blog Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            Travel Insights & Stories
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Discover inspiration, tips, and stories from fellow travelers on their transformative journeys.
          </p>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center">
          <div class="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <i data-lucide="edit-3" class="w-12 h-12 text-brand-orange"></i>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 font-display text-brand-dark">
            Coming Soon
          </h2>
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            We're crafting amazing content to inspire your next adventure. 
            Our blog will feature travel insights, destination guides, personal growth tips, 
            and stories from fellow journeyers who've transformed their lives through travel.
          </p>
          
          <div class="bg-slate-50 p-8 rounded-xl mb-8">
            <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">What to Expect:</h3>
            <div class="grid md:grid-cols-2 gap-6 text-left">
              <div class="flex items-start">
                <i data-lucide="compass" class="w-5 h-5 text-brand-orange mr-3 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 class="font-semibold text-brand-dark">Destination Deep Dives</h4>
                  <p class="text-sm text-slate-600">Beyond the tourist trail insights</p>
                </div>
              </div>
              <div class="flex items-start">
                <i data-lucide="trending-up" class="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 class="font-semibold text-brand-dark">Growth & Development</h4>
                  <p class="text-sm text-slate-600">Personal transformation through travel</p>
                </div>
              </div>
              <div class="flex items-start">
                <i data-lucide="users" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 class="font-semibold text-brand-dark">Traveler Stories</h4>
                  <p class="text-sm text-slate-600">Real experiences from our community</p>
                </div>
              </div>
              <div class="flex items-start">
                <i data-lucide="lightbulb" class="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 class="font-semibold text-brand-dark">Travel Tips & Hacks</h4>
                  <p class="text-sm text-slate-600">Practical advice for better journeys</p>
                </div>
              </div>
            </div>
          </div>
          
          <p class="text-slate-600 mb-8">
            Want to be notified when we launch? Book a discovery call and we'll keep you in the loop!
          </p>
          
          <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
            Stay Connected
          </a>
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
            Pick the Journey Design that Fits Your Leap
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            All tiers include a tailor-made Blueprint—choose how much coaching and on-trip backup you need.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Tiers -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8 mb-12">
            
            <!-- Transformation Pro (First) -->
            <div class="relative bg-white border-2 border-brand-orange rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-semibold">🏅 Deepest Dive</span>
              </div>
              <div class="text-center mb-8 pt-4">
                <h3 class="text-2xl font-bold mb-2 font-display text-brand-dark">Transformation Pro</h3>
                <div class="text-4xl font-bold text-brand-orange mb-2">$949</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">Personalised Blueprint (up to 30 days)</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">3 × 45-min coaching calls (pre, mid, post)</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">24/7 WhatsApp support while travelling</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">Integration workbook & lifetime mastermind</span>
                </li>
              </ul>
              
              <button onclick="trackPricingTier('transformation-pro')" class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Apply for Pro
              </button>
            </div>

            <!-- Guided Pathfinder (Most Popular) -->
            <div class="relative bg-white border-2 border-brand-teal rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-semibold">⭐ Most Popular</span>
              </div>
              <div class="text-center mb-8 pt-4">
                <h3 class="text-2xl font-bold mb-2 font-display text-brand-dark">Guided Pathfinder</h3>
                <div class="text-4xl font-bold text-brand-teal mb-2">$449</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">Personalised Blueprint (up to 21 days)</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">45-min pre-trip coaching call</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">On-trip chat support (office hours)</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">One revision round</span>
                </li>
              </ul>
              
              <button onclick="trackPricingTier('guided-pathfinder')" class="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start My Path
              </button>
            </div>

            <!-- Explorer Blueprint -->
            <div class="relative bg-white border-2 border-slate-200 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
              <div class="text-center mb-8">
                <h3 class="text-2xl font-bold mb-2 font-display text-brand-dark">Explorer Blueprint</h3>
                <div class="text-4xl font-bold text-brand-green mb-2">$179</div>
              </div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">Personalised Blueprint (7-10 days)</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">7-day e-mail Q&A window</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                  <span class="text-slate-600">Self-guided booking links</span>
                </li>
              </ul>
              
              <button onclick="trackPricingTier('explorer-blueprint')" class="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get My Blueprint
              </button>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="text-center text-sm text-slate-600 mb-12">
            <p>Need a longer immersion? <strong>+$125 per extra week</strong> (max 56 days).</p>
            <p>Planning for a team? See Corporate pricing ↓</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate/Team Sprint -->
    <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="text-center mb-8">
              <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display text-brand-dark">
                Culture Shift Off-Site
              </h2>
              <div class="text-2xl font-bold text-purple-600 mb-4">From $2,500 pp (min 4)</div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-xl font-semibold mb-4 font-display text-brand-dark">What's Included:</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">Everything in Transformation Pro</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">Pre-departure strategy workshop</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">On-trip group challenges & facilitation kit</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="check-circle" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">Post-journey culture report</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-50 p-6 rounded-xl">
                <h4 class="font-semibold text-brand-dark mb-3">Perfect For:</h4>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li>• Leadership teams seeking alignment</li>
                  <li>• Companies planning retreats</li>
                  <li>• Organizations fostering innovation</li>
                  <li>• Teams building stronger culture</li>
                </ul>
              </div>
            </div>
            
            <div class="text-center">
              <button onclick="trackPricingTier('corporate-team')" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                <i data-lucide="shield-check" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="font-semibold text-brand-dark mb-2">14-Day Money-Back Guarantee</h3>
              <p class="text-sm text-slate-600">On Explorer tier - your satisfaction guaranteed</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                <i data-lucide="dollar-sign" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="font-semibold text-brand-dark mb-2">No Hidden Booking Fees</h3>
              <p class="text-sm text-slate-600">You control flights & stays - transparent pricing</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
                <i data-lucide="lock" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="font-semibold text-brand-dark mb-2">Secure Checkout</h3>
              <p class="text-sm text-slate-600">Stripe & PayPal - your payment is protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 font-display text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div class="space-y-4">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <button onclick="toggleFAQ('faq1')" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
                <span class="font-semibold text-brand-dark">Why three tiers?</span>
                <i data-lucide="chevron-down" id="faq1-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
              </button>
              <div id="faq1" class="hidden px-6 pb-4">
                <p class="text-slate-600">We keep choices simple: one week, three weeks, or one month of design depth. Each tier is crafted to match different journey lengths and support needs, ensuring you get exactly the right level of guidance for your adventure.</p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <button onclick="toggleFAQ('faq2')" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
                <span class="font-semibold text-brand-dark">Can I upgrade later?</span>
                <i data-lucide="chevron-down" id="faq2-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
              </button>
              <div id="faq2" class="hidden px-6 pb-4">
                <p class="text-slate-600">Yes—pay the difference anytime before your first coaching call. We want to make sure you have the right level of support for your journey, so upgrading is always an option.</p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <button onclick="toggleFAQ('faq3')" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
                <span class="font-semibold text-brand-dark">What if I need a longer trip?</span>
                <i data-lucide="chevron-down" id="faq3-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
              </button>
              <div id="faq3" class="hidden px-6 pb-4">
                <p class="text-slate-600">We can extend any blueprint up to 56 days maximum. Each additional week beyond the base tier costs $125, giving you the flexibility to create longer, more immersive experiences.</p>
              </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <button onclick="toggleFAQ('faq4')" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200">
                <span class="font-semibold text-brand-dark">Do you book flights and hotels?</span>
                <i data-lucide="chevron-down" id="faq4-icon" class="w-5 h-5 text-slate-400 transition-transform duration-200"></i>
              </button>
              <div id="faq4" class="hidden px-6 pb-4">
                <p class="text-slate-600">No, you maintain full control over your bookings. We provide detailed recommendations and booking links in your blueprint, but you handle the actual reservations. This keeps costs transparent and gives you flexibility with your travel preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-brand-orange to-brand-teal">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
          Ready to Design Your Journey?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book your 15-minute discovery call and let's create your personalized blueprint for transformation.
        </p>
        <a href="/contact" class="nav-link bg-white text-brand-orange hover:bg-gray-50 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
          Book Your Discovery Call
        </a>
      </div>
    </section>
  `,

  contact: () => `
    <!-- Contact Hero -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-teal-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-8 font-display text-brand-dark">
            Book Your 15-Min Discovery Call
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Let's explore your travel dreams and create a personalized blueprint for your next adventure.
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
            <div class="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h2 class="text-2xl font-bold mb-6 font-display text-brand-dark">Schedule Your Call</h2>
              
              <form id="scheduling-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-brand-dark mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-brand-dark mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-semibold text-brand-dark mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-semibold text-brand-dark mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                </div>
                
                <div>
                  <label for="time-slots" class="block text-sm font-semibold text-brand-dark mb-2">Preferred Time *</label>
                  <select id="time-slots" name="timeSlot" required class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                    <option value="">Loading available times...</option>
                  </select>
                </div>
                
                <div>
                  <label for="interests" class="block text-sm font-semibold text-brand-dark mb-2">Travel Interests *</label>
                  <textarea id="interests" name="interests" required rows="3" placeholder="What excites you most about travel? (e.g., culture, adventure, learning, networking)" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200"></textarea>
                </div>
                
                <div>
                  <label for="goals" class="block text-sm font-semibold text-brand-dark mb-2">What Are You Seeking? *</label>
                  <textarea id="goals" name="goals" required rows="3" placeholder="What do you hope to gain from your journey? (e.g., career clarity, new skills, personal growth)" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200"></textarea>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="budget" class="block text-sm font-semibold text-brand-dark mb-2">Budget Range</label>
                    <select id="budget" name="budget" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                      <option value="">Select budget range</option>
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                      <option value="Over $20,000">Over $20,000</option>
                    </select>
                  </div>
                  <div>
                    <label for="timeframe" class="block text-sm font-semibold text-brand-dark mb-2">Travel Timeframe</label>
                    <select id="timeframe" name="timeframe" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200">
                      <option value="">When are you thinking?</option>
                      <option value="Next 3 months">Next 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="More than a year">More than a year</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label for="additionalInfo" class="block text-sm font-semibold text-brand-dark mb-2">Additional Information</label>
                  <textarea id="additionalInfo" name="additionalInfo" rows="3" placeholder="Anything else you'd like us to know?" class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors duration-200"></textarea>
                </div>
                
                <button type="submit" class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
                  Schedule My Discovery Call
                </button>
              </form>
            </div>
            
            <!-- Info -->
            <div class="space-y-8">
              <div class="bg-gradient-to-br from-brand-orange/5 to-brand-teal/5 p-8 rounded-2xl">
                <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">What to Expect</h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <i data-lucide="clock" class="w-5 h-5 text-brand-orange mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">15-minute friendly conversation</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="heart" class="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">Discover your travel dreams and goals</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="map" class="w-5 h-5 text-brand-green mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">Learn how we create personalized blueprints</span>
                  </li>
                  <li class="flex items-start">
                    <i data-lucide="gift" class="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0"></i>
                    <span class="text-slate-600">No pressure, just possibilities</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Contact Information</h3>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <i data-lucide="mail" class="w-5 h-5 text-brand-orange mr-3"></i>
                    <a href="mailto:hello@readysetjourney.com" class="text-slate-600 hover:text-brand-orange transition-colors duration-200">hello@readysetjourney.com</a>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="clock" class="w-5 h-5 text-brand-teal mr-3"></i>
                    <span class="text-slate-600">Available Mon-Fri, 9 AM - 5 PM ET</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="globe" class="w-5 h-5 text-brand-green mr-3"></i>
                    <span class="text-slate-600">Serving adventurers worldwide</span>
                  </div>
                </div>
              </div>
              
              <div class="bg-slate-50 p-8 rounded-2xl">
                <h3 class="text-xl font-bold mb-4 font-display text-brand-dark">Follow Our Journey</h3>
                <div class="flex space-x-4">
                  <a href="https://www.linkedin.com/company/readysetjourney/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-sm">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/readysetjourney" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-sm">
                    <i data-lucide="instagram" class="w-5 h-5"></i>
                  </a>
                  <a href="https://tiktok.com/@readysetjourney" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-sm">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/readysetjourney" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:bg-brand-orange/10 transition-all duration-300 shadow-sm">
                    <i data-lucide="facebook" class="w-5 h-5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};