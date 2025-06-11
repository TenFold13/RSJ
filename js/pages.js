// Page content definitions
const pages = {
  home: () => `
    <section class="relative text-white py-20 md:py-32 min-h-[70vh] flex items-center overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=1000&fit=crop&crop=center" alt="Scenic mountain landscape with person overlooking vast valleys, representing adventure and new perspectives" class="w-full h-full object-cover scale-105">
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div class="relative container mx-auto px-6 z-10">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display animate-float">Stop Settling.<br>Start Living.</h1>
          <p class="text-xl md:text-2xl max-w-2xl text-slate-200 mb-8 leading-relaxed">
            Most people don't know what they want out of life, let alone where they should travel. We create <strong class="text-white">transformative journey blueprints</strong> that help you discover your next chapter through immersive experiences.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/contact" class="nav-link inline-flex bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
              <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
              Book Your 15-Min Call
            </a>
            <a href="/how-it-works" class="nav-link inline-flex bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-lg items-center justify-center transition-all duration-300 border border-white/20">
              <i data-lucide="arrow-right" class="mr-3 w-5 h-5"></i>
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">Why Choose Ready Set Journey?</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">We're not just trip planners—we're life change catalysts. Every journey blueprint is designed around your personal transformation.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-orange-100/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="compass" class="w-8 h-8 text-brand-orange"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">Personalized Adventures</h3>
            <p class="text-slate-600 leading-relaxed">Every journey is crafted specifically for your interests, passions, and goals. No cookie-cutter itineraries here.</p>
          </div>
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-brand-teal/5 to-teal-100/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="users" class="w-8 h-8 text-brand-teal"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">Meaningful Connections</h3>
            <p class="text-slate-600 leading-relaxed">Build lasting relationships with like-minded travelers and authentic local communities that matter.</p>
          </div>
          <div class="group p-8 rounded-2xl bg-gradient-to-br from-brand-green/5 to-lime-100/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <i data-lucide="trending-up" class="w-8 h-8 text-brand-green"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4 font-display text-brand-dark">Future-Ready Growth</h3>
            <p class="text-slate-600 leading-relaxed">Return with new skills, perspectives, and crystal clarity for your next chapter in life.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">Who Is This For?</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">RSJ speaks to anyone at a crossroads, seeking change, or wanting to live more fully and prepare for a dynamic future.</p>
        </div>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i data-lucide="graduation-cap" class="w-6 h-6 text-brand-orange"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">The "Now What?" Crowd</h3>
                <p class="text-slate-600 leading-relaxed">Just finished school and dreading the conventional path? Let's build an adventure that actually means something.</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i data-lucide="briefcase" class="w-6 h-6 text-brand-teal"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Burned-Out Professionals</h3>
                <p class="text-slate-600 leading-relaxed">Before making a drastic career move, let's design a sabbatical that recharges you with purpose and new perspectives.</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i data-lucide="compass" class="w-6 h-6 text-brand-green"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Midlife Navigators</h3>
                <p class="text-slate-600 leading-relaxed">Contemplating your next act? Channel that energy into finding new passions and genuine fulfillment.</p>
              </div>
            </div>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <i data-lucide="heart" class="w-6 h-6 text-brand-blue"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-3 font-display text-brand-dark">Anyone Who Demands More</h3>
                <p class="text-slate-600 leading-relaxed">Tired of superficial travel and craving depth, connection, and real experiences? This is your escape hatch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 font-display">Ready to Launch Your Next Chapter?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto text-teal-100">
          Stop dreaming and start doing. In just 15 minutes, we'll understand your passions and show you exactly how we can craft your perfect transformative journey.
        </p>
        <a href="/contact" class="nav-link inline-flex bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg items-center transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
          Book Your Free 15-Min Call
        </a>
      </div>
    </section>
  `,

  about: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-brand-dark mb-8 font-display">About Ready Set Journey</h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-16">
            We believe travel should be transformative, not just transactional. Ready Set Journey exists to bridge the gap between wanderlust and purpose, creating experiences that prepare you for the future while enriching your present.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" alt="Team collaboration and planning session" class="rounded-2xl shadow-2xl">
            </div>
            <div>
              <h2 class="text-4xl font-bold text-brand-dark mb-8 font-display">More Than A Trip. It's Transformation.</h2>
              <div class="space-y-8">
                <div>
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mr-4">
                      <i data-lucide="compass" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark font-display">Learn, Network, Explore, Immerse</h3>
                  </div>
                  <p class="text-slate-600 leading-relaxed pl-16">Forget passive sightseeing. RSJ is about active participation. Learn new skills, engage with local cultures, build your network, and uncover hidden facets of yourself.</p>
                </div>
                <div>
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mr-4">
                      <i data-lucide="lightbulb" class="w-6 h-6 text-brand-teal"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark font-display">An Alternative to the Default Script</h3>
                  </div>
                  <p class="text-slate-600 leading-relaxed pl-16">We offer a path that might genuinely alter the trajectory of your life. Break free from the expected and embark on a journey that aligns with who you want to become.</p>
                </div>
                <div>
                  <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mr-4">
                      <i data-lucide="award" class="w-6 h-6 text-brand-green"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-dark font-display">Come Back Changed</h3>
                  </div>
                  <p class="text-slate-600 leading-relaxed pl-16">You'll return with more than photos. Expect new passions, meaningful connections, compelling stories, and crystal clarity on your next steps in life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-brand-dark mb-12 font-display">Our Approach</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="heart" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">Passion-First Planning</h3>
              <p class="text-slate-600">We start with what truly excites you, then build everything around those core interests and aspirations.</p>
            </div>
            <div class="p-6">
              <div class="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="users" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">Community-Centered</h3>
              <p class="text-slate-600">Every journey includes meaningful opportunities to connect with like-minded travelers and local communities.</p>
            </div>
            <div class="p-6">
              <div class="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="trending-up" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">Growth-Oriented</h3>
              <p class="text-slate-600">We design experiences that challenge you, teach you new skills, and help you discover your next chapter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  howItWorks: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-brand-dark mb-8 font-display">How It Works & Sample Journeys</h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-16">
            Our process transforms your passions into unforgettable experiences. Here's how we craft your perfect journey in three simple steps, plus sample blueprints to inspire you.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="space-y-20">
            <!-- Step 1 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-brand-orange text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6">1</div>
                  <h2 class="text-3xl font-bold text-brand-dark font-display">15-Min Discovery Call</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  We start with a friendly conversation to understand your passions, interests, and what you're seeking from your next chapter. This isn't a sales pitch—it's genuine discovery.
                </p>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h4 class="font-bold text-brand-dark mb-3">What We'll Discuss:</h4>
                  <ul class="space-y-2 text-slate-600">
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Your key interests and passions</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>What you're seeking (skills, clarity, adventure)</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Budget preferences and timeframe</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Travel style and comfort level</li>
                  </ul>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center" alt="Friendly video call consultation" class="rounded-2xl shadow-xl">
              </div>
            </div>

            <!-- Step 2 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="lg:order-2">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-brand-teal text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6">2</div>
                  <h2 class="text-3xl font-bold text-brand-dark font-display">We Craft Your Blueprint</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  Our team researches and curates a detailed digital document outlining your bespoke immersive experience, packed with unique activities for learning, networking, exploration, and immersion.
                </p>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h4 class="font-bold text-brand-dark mb-3">Your Blueprint Includes:</h4>
                  <ul class="space-y-2 text-slate-600">
                    <li class="flex items-start"><i data-lucide="map-pin" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Strategic destination recommendations</li>
                    <li class="flex items-start"><i data-lucide="calendar" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Day-by-day detailed itinerary</li>
                    <li class="flex items-start"><i data-lucide="users" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Networking opportunities and events</li>
                    <li class="flex items-start"><i data-lucide="book-open" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Learning workshops and experiences</li>
                    <li class="flex items-start"><i data-lucide="camera" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Cultural immersion activities</li>
                  </ul>
                </div>
              </div>
              <div class="lg:order-1">
                <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&crop=center" alt="Detailed travel planning and documentation" class="rounded-2xl shadow-xl">
              </div>
            </div>

            <!-- Step 3 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center text-2xl font-bold mr-6">3</div>
                  <h2 class="text-3xl font-bold text-brand-dark font-display">You Book & Live It</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  Armed with your detailed blueprint, you handle the booking of flights, accommodations, and activities. We focus on the 'what' and 'why'—you handle the 'how' with complete clarity and confidence.
                </p>
                <div class="bg-brand-orange/5 border border-brand-orange/20 p-6 rounded-xl">
                  <p class="text-sm text-brand-dark">
                    <strong>Note:</strong> We design your transformative travel blueprint but don't handle actual bookings. Our expertise lies in crafting the perfect experience for you to implement.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center" alt="Person with backpack looking at scenic mountain view" class="rounded-2xl shadow-xl">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">Sample Journey Blueprints</h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">Get inspired by these example journeys we've crafted. Each one is completely personalized to the traveler's unique interests and goals.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="camera" class="w-6 h-6 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Digital Nomad Sprint</h3>
              <p class="text-slate-600 mb-4">Perfect for remote workers seeking inspiration, networking, and skill development while exploring vibrant co-working scenes in Lisbon and Barcelona.</p>
              <div class="text-sm text-brand-teal font-semibold">7 days • Portugal & Spain • Mid-range</div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="leaf" class="w-6 h-6 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Sustainable Living Immersion</h3>
              <p class="text-slate-600 mb-4">Learn permaculture, renewable energy, and sustainable practices while staying at eco-villages and organic farms across Costa Rica.</p>
              <div class="text-sm text-brand-teal font-semibold">10 days • Costa Rica • Eco-focused</div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="palette" class="w-6 h-6 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Creative Renaissance</h3>
              <p class="text-slate-600 mb-4">Rediscover your artistic side through workshops in Florence, connecting with local artists, and exploring classical and contemporary art.</p>
              <div class="text-sm text-brand-teal font-semibold">14 days • Italy • Cultural immersion</div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="brain" class="w-6 h-6 text-brand-blue"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Tech Innovation Deep Dive</h3>
              <p class="text-slate-600 mb-4">Explore AI ethics, blockchain applications, and startup culture in Silicon Valley, with exclusive access to tech talks and networking events.</p>
              <div class="text-sm text-brand-teal font-semibold">5 days • California • Tech-focused</div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="mountain" class="w-6 h-6 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Mindful Adventure Quest</h3>
              <p class="text-slate-600 mb-4">Combine meditation retreats with outdoor adventures in the Himalayas, focusing on personal growth and mental clarity.</p>
              <div class="text-sm text-brand-teal font-semibold">12 days • Nepal • Wellness & adventure</div>
            </div>
            
            <div class="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4">
                <i data-lucide="globe" class="w-6 h-6 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Cultural Bridge Builder</h3>
              <p class="text-slate-600 mb-4">Learn languages, understand cultural nuances, and build international connections through homestays and cultural exchange programs in Japan.</p>
              <div class="text-sm text-brand-teal font-semibold">21 days • Japan • Cultural exchange</div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-brand-green/10 to-brand-teal/10 p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 class="text-2xl md:text-3xl font-bold text-brand-dark mb-6 text-center font-display">
              <i data-lucide="rocket" class="inline-block mr-2 w-8 h-8 align-[-0.125em] text-brand-orange"></i>
              Example: The Explorer's Immersive Week
            </h2>
            <p class="text-slate-600 leading-relaxed mb-6 text-lg text-center max-w-2xl mx-auto">
              Let's say you're fascinated by <strong class="text-brand-teal font-semibold">space exploration</strong>, dream of <strong class="text-brand-teal font-semibold">starting a podcast</strong>, love <strong class="text-brand-teal font-semibold">night sky photography</strong>, and enjoy <strong class="text-brand-teal font-semibold">curated camping</strong>.
            </p>
            <div class="grid md:grid-cols-2 gap-6 text-slate-600">
              <div class="bg-white/70 p-6 rounded-xl shadow-md">
                <i data-lucide="map-pin" class="text-brand-teal w-7 h-7 mb-2"></i>
                <h3 class="font-bold text-xl mb-1 font-display">Strategic Destinations:</h3>
                <p>We might send you to Florida's Space Coast. Prime locations for space enthusiasts.</p>
              </div>
              <div class="bg-white/70 p-6 rounded-xl shadow-md">
                <i data-lucide="mic" class="text-brand-teal w-7 h-7 mb-2"></i>
                <h3 class="font-bold text-xl mb-1 font-display">Skill Development:</h3>
                <p>Podcasting workshops, connections with local astrophotographers, and access to dark sky reserves.</p>
              </div>
              <div class="bg-white/70 p-6 rounded-xl shadow-md">
                <i data-lucide="star" class="text-brand-teal w-7 h-7 mb-2"></i>
                <h3 class="font-bold text-xl mb-1 font-display">Unique Activities:</h3>
                <p>NASA/SpaceX facility tours, themed dining experiences, guest lectures, and prime night sky viewing spots.</p>
              </div>
              <div class="bg-white/70 p-6 rounded-xl shadow-md">
                <i data-lucide="tent" class="text-brand-teal w-7 h-7 mb-2"></i>
                <h3 class="font-bold text-xl mb-1 font-display">Comfortable Immersion:</h3>
                <p>Curated campgrounds that blend adventure with comfort. Every detail designed for an unforgettable week.</p>
              </div>
            </div>
            <p class="text-center text-brand-teal italic mt-8 text-lg">This is the RSJ difference: premium experiences born from genuine personalization.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="sample-itinerary" class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-12 font-display">A Glimpse Into Your Journey: Sample Day</h2>
        <div id="itinerary-content" class="prose prose-lg lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <p class="text-center text-slate-600">Loading sample itinerary...</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 font-display">Ready to Start Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-teal-100">
          Book your free 15-minute discovery call and let's craft your perfect journey blueprint together.
        </p>
        <a href="/contact" class="nav-link inline-flex bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg items-center transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
          Book Your Free Call
        </a>
      </div>
    </section>
  `,

  blog: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Journey Insights</h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-16">
            Discover travel wisdom, transformation stories, and actionable insights to make your next adventure meaningful and impactful.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Featured Article -->
            <article class="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=400&fit=crop&crop=center" alt="Solo traveler on mountain peak at sunrise" class="w-full h-64 object-cover">
              <div class="p-8">
                <div class="flex items-center space-x-4 mb-4">
                  <span class="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  <span class="text-slate-500 text-sm">March 15, 2024</span>
                </div>
                <h2 class="text-2xl font-bold text-brand-dark mb-4 font-display hover:text-brand-orange transition-colors cursor-pointer">
                  Why Your Next Trip Should Be About Transformation, Not Instagram
                </h2>
                <p class="text-slate-600 leading-relaxed mb-6">
                  In a world obsessed with documenting every moment, we've lost sight of what travel can truly offer: genuine transformation. Here's how to shift from collecting experiences to collecting growth...
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-orange-600 font-semibold">
                  Read Full Article
                  <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                </a>
              </div>
            </article>

            <!-- Sidebar Articles -->
            <aside class="space-y-8">
              <article class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-semibold">Tips</span>
                  <span class="text-slate-500 text-xs">March 12, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display hover:text-brand-teal transition-colors cursor-pointer">
                  5 Questions to Ask Before Planning Your Sabbatical
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Taking a break from work? Make it count with these essential questions that will help you design a sabbatical that truly transforms your perspective...
                </p>
              </article>

              <article class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-semibold">Story</span>
                  <span class="text-slate-500 text-xs">March 10, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display hover:text-brand-green transition-colors cursor-pointer">
                  How Sarah Found Her Calling in a Lisbon Café
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  A burned-out marketing manager's 10-day journey through Portugal led to discovering her passion for sustainable food systems...
                </p>
              </article>

              <article class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-xs font-semibold">Guide</span>
                  <span class="text-slate-500 text-xs">March 8, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display hover:text-brand-blue transition-colors cursor-pointer">
                  The Art of Slow Travel: Quality Over Quantity
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Why spending more time in fewer places leads to deeper connections and more meaningful experiences...
                </p>
              </article>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-brand-dark mb-12 font-display text-center">Latest Articles</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop&crop=center" alt="Digital nomad working by the beach" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full text-xs font-semibold">Remote Work</span>
                  <span class="text-slate-500 text-xs">March 5, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">Digital Nomad Destinations That Actually Help You Grow</h3>
                <p class="text-slate-600 text-sm">Beyond Bali and Bangkok: discover co-working hubs that offer community, learning, and personal development...</p>
              </div>
            </article>

            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop&crop=center" alt="Person learning pottery with local artisan" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-teal/10 text-brand-teal px-2 py-1 rounded-full text-xs font-semibold">Culture</span>
                  <span class="text-slate-500 text-xs">March 3, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">Learning From Locals: The Lost Art of Apprentice Travel</h3>
                <p class="text-slate-600 text-sm">How traditional skills and crafts can become the foundation for deeply meaningful travel experiences...</p>
              </div>
            </article>

            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=200&fit=crop&crop=center" alt="Sustainable travel and eco-tourism" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-semibold">Sustainability</span>
                  <span class="text-slate-500 text-xs">March 1, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">Responsible Travel: Making Your Adventures Matter</h3>
                <p class="text-slate-600 text-sm">Simple strategies to ensure your travels have a positive impact on the communities you visit...</p>
              </div>
            </article>

            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center" alt="Career transition and personal growth" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-xs font-semibold">Career</span>
                  <span class="text-slate-500 text-xs">February 28, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">Using Travel to Navigate Career Transitions</h3>
                <p class="text-slate-600 text-sm">Why stepping away from your desk might be the best career move you ever make...</p>
              </div>
            </article>

            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center" alt="Building meaningful connections while traveling" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full text-xs font-semibold">Networking</span>
                  <span class="text-slate-500 text-xs">February 25, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">Building Your Global Network Through Intentional Travel</h3>
                <p class="text-slate-600 text-sm">How to turn travel connections into lifelong professional and personal relationships...</p>
              </div>
            </article>

            <article class="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=200&fit=crop&crop=center" alt="Solo travel and self-discovery" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-semibold">Personal Growth</span>
                  <span class="text-slate-500 text-xs">February 22, 2024</span>
                </div>
                <h3 class="text-lg font-bold text-brand-dark mb-3 font-display">The Courage to Travel Solo: A Guide to Self-Discovery</h3>
                <p class="text-slate-600 text-sm">Practical tips and mindset shifts for making solo travel a transformative experience...</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 font-display">Ready to Create Your Own Journey Story?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-teal-100">
          Stop reading about transformation and start living it. Book your free discovery call today.
        </p>
        <a href="/contact" class="nav-link inline-flex bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg items-center transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
          Book Your Free 15-Min Call
        </a>
      </div>
    </section>
  `,

  pricing: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Simple, Transparent Pricing</h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-16">
            Choose the blueprint package that fits your journey. Every option includes our signature personalized approach and detailed planning.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Starter Package -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-brand-orange/20">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="map" class="w-8 h-8 text-brand-orange"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-dark mb-2 font-display">Starter</h3>
                <div class="text-4xl font-bold text-brand-dark mb-2">$99</div>
                <p class="text-slate-600">One-page game plan</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">15-minute discovery call</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">High-level journey overview</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">3-5 key destinations & activities</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Budget estimation</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Perfect for testing our approach</span>
                </li>
              </ul>
              <a href="/contact" class="nav-link w-full inline-flex justify-center bg-brand-orange/10 hover:bg-brand-orange text-brand-orange hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Get Started
              </a>
            </div>

            <!-- Pro Package (Most Popular) -->
            <div class="bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-teal transform scale-105 relative">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="bookmark" class="w-8 h-8 text-brand-teal"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-dark mb-2 font-display">Pro</h3>
                <div class="text-4xl font-bold text-brand-dark mb-2">$299</div>
                <p class="text-slate-600">Complete journey blueprint</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Everything in Starter</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">5-10 page detailed itinerary</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Day-by-day scheduling</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Direct links & booking resources</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Local contact recommendations</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Interactive maps</span>
                </li>
              </ul>
              <a href="/contact" class="nav-link w-full inline-flex justify-center bg-brand-teal hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                Choose Pro
              </a>
            </div>

            <!-- Concierge Package -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-brand-green/20">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i data-lucide="crown" class="w-8 h-8 text-brand-green"></i>
                </div>
                <h3 class="text-2xl font-bold text-brand-dark mb-2 font-display">Concierge</h3>
                <div class="text-4xl font-bold text-brand-dark mb-2">$599</div>
                <p class="text-slate-600">White-glove service</p>
              </div>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Everything in Pro</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Premium research & alternatives</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Packing lists & local etiquette</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Emergency contact cheat-sheet</span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600"><strong>2 hours live support</strong></span>
                </li>
                <li class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-600">Pre-trip or during-trip assistance</span>
                </li>
              </ul>
              <a href="/contact" class="nav-link w-full inline-flex justify-center bg-brand-green/10 hover:bg-brand-green text-brand-green hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                Go Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-brand-dark mb-12 text-center font-display">Frequently Asked Questions</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-50 p-6 rounded-xl">
              <h3 class="font-bold text-brand-dark mb-3 font-display">Do you handle bookings?</h3>
              <p class="text-slate-600 text-sm">No, we're "blueprint first" - we design your perfect journey and provide all the resources you need to book everything yourself with complete confidence.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl">
              <h3 class="font-bold text-brand-dark mb-3 font-display">What if I'm not satisfied?</h3>
              <p class="text-slate-600 text-sm">We offer a money-back guarantee if we don't deliver within 5 business days or if there are major factual errors in your blueprint.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl">
              <h3 class="font-bold text-brand-dark mb-3 font-display">How does pricing work for couples?</h3>
              <p class="text-slate-600 text-sm">We charge per traveler, but offer a 50% discount for companions. So a couple would pay 150% of the listed price (not double).</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-xl">
              <h3 class="font-bold text-brand-dark mb-3 font-display">How long does it take?</h3>
              <p class="text-slate-600 text-sm">Starter blueprints are delivered within 2-3 business days. Pro and Concierge packages typically take 5-7 business days for full completion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-6 font-display">Ready to Invest in Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-teal-100">
          If you're spending $3-5k on your trip, a $299 custom plan feels like a steal. Let's make every dollar count.
        </p>
        <a href="/contact" class="nav-link inline-flex bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg items-center transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl">
          <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
          Book Your Free Discovery Call
        </a>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Ready to Launch Your Next Chapter?</h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-16">
            Stop dreaming, start doing. Book your free 15-minute discovery call and let's craft an experience that redefines what travel means to you.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div class="text-center mb-12">
              <div class="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="calendar" class="w-10 h-10 text-brand-orange"></i>
              </div>
              <h2 class="text-3xl font-bold text-brand-dark mb-4 font-display">Schedule Your Discovery Call</h2>
              <p class="text-slate-600 max-w-2xl mx-auto">Tell us about your dream journey and we'll show you exactly how we can make it happen. No pressure, just genuine conversation about your next adventure.</p>
            </div>
            
            <form id="scheduling-form" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Full Name *</label>
                  <input type="text" name="fullName" required class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                </div>
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Email Address *</label>
                  <input type="email" name="email" required class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Phone Number (Optional)</label>
                  <input type="tel" name="phone" class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                </div>
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Preferred Time *</label>
                  <select name="timeSlot" id="time-slots" required class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                    <option value="">Loading available times...</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block font-semibold text-brand-dark mb-2">Your Travel Interests & Passions *</label>
                <textarea name="interests" required rows="3" placeholder="e.g., AI ethics, street art, sustainable farming, ancient history, podcasting..." class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"></textarea>
                <p class="text-sm text-slate-500 mt-1">The more specific, the better we can tailor your experience</p>
              </div>
              
              <div>
                <label class="block font-semibold text-brand-dark mb-2">What You're Seeking *</label>
                <textarea name="goals" required rows="3" placeholder="e.g., new skills, career clarity, adventure, networking, cultural immersion..." class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"></textarea>
                <p class="text-sm text-slate-500 mt-1">What do you hope to gain from this journey?</p>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Budget Range *</label>
                  <select name="budget" required class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                    <option value="">Select budget range...</option>
                    <option value="Budget-conscious ($1,000-$2,500)">Budget-conscious ($1,000-$2,500)</option>
                    <option value="Mid-range ($2,500-$5,000)">Mid-range ($2,500-$5,000)</option>
                    <option value="Comfortable ($5,000-$10,000)">Comfortable ($5,000-$10,000)</option>
                    <option value="Luxury ($10,000+)">Luxury ($10,000+)</option>
                    <option value="Flexible/TBD">Flexible/TBD</option>
                  </select>
                </div>
                <div>
                  <label class="block font-semibold text-brand-dark mb-2">Travel Timeframe *</label>
                  <select name="timeframe" required class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors">
                    <option value="">Select timeframe...</option>
                    <option value="Next 1-2 months">Next 1-2 months</option>
                    <option value="Next 3-6 months">Next 3-6 months</option>
                    <option value="Next 6-12 months">Next 6-12 months</option>
                    <option value="12+ months (planning ahead)">12+ months (planning ahead)</option>
                    <option value="Flexible timing">Flexible timing</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block font-semibold text-brand-dark mb-2">Additional Information (Optional)</label>
                <textarea name="additionalInfo" rows="3" placeholder="Any constraints, special interests, or things we should know..." class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-colors"></textarea>
              </div>
              
              <div class="text-center pt-6">
                <button type="submit" class="inline-flex items-center bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  <i data-lucide="send" class="mr-3 w-6 h-6"></i>
                  Schedule My Free Discovery Call
                </button>
                <p class="text-sm text-slate-500 mt-4">
                  We'll send you a calendar invite within 24 hours to confirm your slot
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-brand-dark mb-12 font-display">Why Start With a Discovery Call?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="clock" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">Quick & Focused</h3>
              <p class="text-slate-600">Just 15 minutes of your time. We'll quickly understand your interests and show you what's possible.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="shield-check" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">No Pressure</h3>
              <p class="text-slate-600">This is discovery, not sales. You only proceed if you love the direction we're heading together.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i data-lucide="heart" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-bold mb-4 font-display">Passionate Team</h3>
              <p class="text-slate-600">We're travelers and dreamers ourselves, dedicated to creating transformative experiences that matter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-brand-dark mb-8 font-display">Still Have Questions?</h2>
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="text-xl font-bold mb-3 font-display">What makes RSJ different?</h3>
              <p class="text-slate-600 text-sm">We focus on transformation, not just transportation. Every journey is designed around your personal growth and future readiness.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-lg">
              <h3 class="text-xl font-bold mb-3 font-display">Do you handle bookings?</h3>
              <p class="text-slate-600 text-sm">We're "blueprint first" - we design your perfect journey, you handle the actual bookings with complete clarity and confidence.</p>
            </div>
          </div>
          <p class="text-slate-600 mb-8">
            Prefer to reach out directly? Email us at 
            <a href="mailto:hello@readysetjourney.com" class="text-brand-orange hover:text-orange-600 font-semibold">hello@readysetjourney.com</a>
          </p>
        </div>
      </div>
    </section>
  `
};