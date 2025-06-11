// Page content definitions
const pages = {
  home: () => `
    <section class="relative text-white py-20 md:py-32 min-h-[70vh] flex items-center">
      <div class="absolute inset-0">
        <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg" alt="Beautiful mountain landscape with winding path, symbolizing the journey ahead" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative container mx-auto px-6 text-center z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">Stop Settling.<br>Start Living.</h1>
        <p class="text-xl md:text-2xl max-w-4xl mx-auto text-gray-100 mb-8 font-sans leading-relaxed">
          Most people don't know what they want out of life, let alone where they should travel. Ready Set Journey isn't just trip planning—it's your <strong>launchpad to your next chapter</strong>.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
            <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
            Book Your 15-Min Call
          </a>
          <p class="text-sm text-gray-200">
            15 minutes to change everything
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-8 font-display">The Problem With Travel Today</h2>
          <p class="text-xl text-slate-600 leading-relaxed">
            You either get cookie-cutter tourist traps or spend weeks researching only to end up with a mediocre experience. What if there was a better way?
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div class="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="clock" class="w-8 h-8 text-red-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Endless Research</h3>
            <p class="text-slate-600">Hours spent on travel blogs, forums, and reviews, only to feel more confused than when you started.</p>
          </div>
          <div class="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="users" class="w-8 h-8 text-yellow-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Generic Experiences</h3>
            <p class="text-slate-600">Cookie-cutter tours and "must-see" attractions that leave you feeling like just another tourist.</p>
          </div>
          <div class="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i data-lucide="map-pin" class="w-8 h-8 text-blue-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Missed Opportunities</h3>
            <p class="text-slate-600">You come back with photos but no real growth, connections, or clarity about your life.</p>
          </div>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-bold text-brand-dark mb-4 font-display">There's a Better Way</h3>
          <a href="/how-it-works" class="nav-link text-brand-orange hover:text-brand-orange/80 font-semibold text-lg transition-colors duration-300">
            See How We Do It Differently →
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-8 font-display">Why Ready Set Journey Works</h2>
          <p class="text-xl text-slate-600 leading-relaxed">
            We don't just plan trips. We design transformative experiences that align with your passions and goals.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="compass" class="w-8 h-8 text-brand-orange"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Deeply Personal</h3>
            <p class="text-slate-600">Every journey is crafted around your unique interests, passions, and goals—not generic templates.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="users" class="w-8 h-8 text-brand-teal"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Real Connections</h3>
            <p class="text-slate-600">Meet like-minded travelers and locals who share your interests, building relationships that last.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="trending-up" class="w-8 h-8 text-brand-green"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Growth Focused</h3>
            <p class="text-slate-600">Return with new skills, perspectives, and clarity for your next chapter in life.</p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i data-lucide="zap" class="w-8 h-8 text-purple-600"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Fast & Easy</h3>
            <p class="text-slate-600">Just 15 minutes to share your vision, then we handle all the research and planning.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-brand-dark mb-8 font-display">It's Not About the Destination.<br>It's About Who You Become.</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-brand-dark mb-2 font-display">Learn Skills That Matter</h3>
                    <p class="text-slate-600">Whether it's pottery in Portugal or podcasting in New York, gain abilities that enhance your life.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" class="w-5 h-5 text-brand-teal"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-brand-dark mb-2 font-display">Build Your Network</h3>
                    <p class="text-slate-600">Connect with inspiring people who could become lifelong friends, mentors, or collaborators.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green"></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-brand-dark mb-2 font-display">Discover Your Path</h3>
                    <p class="text-slate-600">Come back with clarity about your next career move, passion project, or life direction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg" alt="Person standing on mountain peak overlooking vast landscape, representing personal growth and discovery" class="rounded-xl shadow-2xl w-full">
              <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
                <div class="text-center">
                  <div class="text-2xl font-bold text-brand-orange mb-1">15min</div>
                  <div class="text-sm text-slate-600">to start your transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-dark text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 font-display">Ready to Break Free from Ordinary?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop dreaming about the life you want. Start building it, one transformative journey at a time.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
            <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
            Book Your Free 15-Min Call
          </a>
          <div class="text-center">
            <p class="text-sm text-gray-400 mb-1">No commitment required</p>
            <p class="text-sm text-gray-400">Just 15 minutes to explore possibilities</p>
          </div>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display">We Believe Travel Should Transform You</h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            Ready Set Journey exists to bridge the gap between wanderlust and purpose, creating experiences that prepare you for your future while enriching your present.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mb-8 font-display">Is This You?</h2>
          <p class="text-lg text-slate-600 leading-relaxed">
            RSJ is for anyone craving more than a standard checklist vacation. We work with people at crossroads, seeking change, or simply wanting to live more fully.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <i data-lucide="graduation-cap" class="w-6 h-6 text-brand-orange"></i>
            </div>
            <h3 class="text-xl font-semibold text-brand-dark mb-4 font-display">The "Now What?" Crowd</h3>
            <p class="text-slate-600 leading-relaxed">Just finished school and dreading the conventional path? Let's build an adventure that actually means something, helping you discover your passions before committing to the next big thing.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
              <i data-lucide="briefcase" class="w-6 h-6 text-brand-teal"></i>
            </div>
            <h3 class="text-xl font-semibold text-brand-dark mb-4 font-display">Burned-Out Professionals</h3>
            <p class="text-slate-600 leading-relaxed">Feeling depleted? Before making a drastic move, let's design a sabbatical that recharges you with purpose, networking opportunities, and new perspectives.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
              <i data-lucide="compass" class="w-6 h-6 text-brand-green"></i>
            </div>
            <h3 class="text-xl font-semibold text-brand-dark mb-4 font-display">Midlife Navigators</h3>
            <p class="text-slate-600 leading-relaxed">Contemplating your next act? Let's channel that energy into finding new passions, skills, or rediscovering old ones on the road to genuine fulfillment.</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <i data-lucide="sunset" class="w-6 h-6 text-purple-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-brand-dark mb-4 font-display">Discerning Retirees</h3>
            <p class="text-slate-600 leading-relaxed">You've earned more than generic getaways. How about immersive learning in Portugal, cultural exploration in Buenos Aires, or mastering a new skill?</p>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <i data-lucide="sparkles" class="w-6 h-6 text-yellow-600"></i>
            </div>
            <h3 class="text-xl font-semibold text-brand-dark mb-4 font-display">Anyone Who Demands More</h3>
            <p class="text-slate-600 leading-relaxed">If you're tired of superficial travel and crave depth, connection, learning, and real experiences, RSJ is your gateway to meaningful adventure.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg" alt="Diverse group of people engaged in meaningful conversation and connection" class="rounded-xl shadow-2xl w-full">
            </div>
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-display">More Than A Trip. It's Transformation.</h2>
              </div>
              <div>
                <div class="flex items-start space-x-4 mb-6">
                  <div class="w-8 h-8 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="compass" class="w-5 h-5 text-brand-orange"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-brand-dark mb-3 font-display">Learn, Network, Explore, Immerse</h3>
                    <p class="text-slate-600 leading-relaxed">Active participation over passive sightseeing. Learn new skills, engage with local cultures, build your network, and uncover hidden facets of yourself.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4 mb-6">
                  <div class="w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="lightbulb" class="w-5 h-5 text-brand-teal"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-brand-dark mb-3 font-display">An Alternative to the Default Script</h3>
                    <p class="text-slate-600 leading-relaxed">We offer a path that might genuinely alter your life's trajectory. Break free from expectations and align with who you want to become.</p>
                  </div>
                </div>
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i data-lucide="award" class="w-5 h-5 text-brand-green"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-brand-dark mb-3 font-display">Come Back Changed</h3>
                    <p class="text-slate-600 leading-relaxed">Return with new passions, meaningful connections, compelling stories, and clarity on your next steps. Save years by finding your true direction sooner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-dark text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 font-display">Ready to Design Your Transformation?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's have a conversation about what you're seeking and craft a journey that changes everything.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
          <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
          Start With a 15-Min Call
        </a>
      </div>
    </section>
  `,

  howItWorks: () => `
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display">How We Transform Your Travel</h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            Our process is designed to turn your passions into life-changing experiences. Here's how we craft your perfect journey in three simple steps.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="space-y-20">
            <!-- Step 1 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1</div>
                  <h2 class="text-3xl md:text-4xl font-bold text-brand-dark font-display">15-Minute Discovery Call</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  We start with a quick conversation to understand your passions, interests, and what you're seeking from your next chapter. Whether it's career clarity, new skills, or pure adventure—the more you share, the more personalized your journey becomes.
                </p>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h3 class="text-lg font-semibold text-brand-dark mb-4 font-display">What We'll Discuss:</h3>
                  <ul class="space-y-3 text-slate-600">
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0"></i>Your key interests and passions</li>
                    <li class="flex items-start"><i data-lucide-check" class="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0"></i>What you're seeking (skills, clarity, adventure)</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0"></i>Budget preferences and timeframe</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-orange mr-3 mt-0.5 flex-shrink-0"></i>Travel style and comfort level</li>
                  </ul>
                </div>
              </div>
              <div class="relative">
                <img src="https://images.pexels.com/photos/7689743/pexels-photo-7689743.jpeg" alt="Friendly consultation call between travel consultant and client" class="rounded-xl shadow-2xl w-full">
                <div class="absolute -bottom-4 -right-4 bg-brand-orange text-white p-4 rounded-xl shadow-xl">
                  <div class="text-center">
                    <div class="text-xl font-bold">FREE</div>
                    <div class="text-sm opacity-90">No obligation</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1 relative">
                <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg" alt="Detailed travel planning documents and research materials" class="rounded-xl shadow-2xl w-full">
                <div class="absolute -bottom-4 -left-4 bg-brand-teal text-white p-4 rounded-xl shadow-xl">
                  <div class="text-center">
                    <div class="text-xl font-bold">Custom</div>
                    <div class="text-sm opacity-90">Just for you</div>
                  </div>
                </div>
              </div>
              <div class="order-1 lg:order-2">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">2</div>
                  <h2 class="text-3xl md:text-4xl font-bold text-brand-dark font-display">We Craft Your Blueprint</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  Our team researches and curates a detailed digital document outlining your bespoke experience. No cookie-cutter templates—everything is tailored to your unique interests and goals.
                </p>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h3 class="text-lg font-semibold text-brand-dark mb-4 font-display">Your Blueprint Includes:</h3>
                  <ul class="space-y-3 text-slate-600">
                    <li class="flex items-start"><i data-lucide="map-pin" class="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0"></i>Strategic destination recommendations</li>
                    <li class="flex items-start"><i data-lucide="calendar" class="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0"></i>Day-by-day detailed itinerary</li>
                    <li class="flex items-start"><i data-lucide="users" class="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0"></i>Networking opportunities and events</li>
                    <li class="flex items-start"><i data-lucide="book-open" class="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0"></i>Learning workshops and experiences</li>
                    <li class="flex items-start"><i data-lucide="camera" class="w-5 h-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0"></i>Cultural immersion activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">3</div>
                  <h2 class="text-3xl md:text-4xl font-bold text-brand-dark font-display">You Book & Live It</h2>
                </div>
                <p class="text-lg text-slate-600 leading-relaxed mb-6">
                  Armed with your detailed blueprint, you handle the booking of flights, accommodations, and activities. We focus on the 'what' and 'why' - you handle the 'how' with complete clarity and confidence.
                </p>
                <div class="bg-brand-orange/5 border border-brand-orange/20 p-6 rounded-xl mb-6">
                  <p class="text-sm text-slate-700">
                    <strong>Important:</strong> We design your transformative travel blueprint but don't handle actual bookings. Our expertise lies in crafting the perfect experience for you.
                  </p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg">
                  <h3 class="text-lg font-semibold text-brand-dark mb-4 font-display">You're In Complete Control:</h3>
                  <ul class="space-y-3 text-slate-600">
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Book flights at your preferred times</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Choose accommodations within your budget</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Register for recommended activities</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>Customize based on your preferences</li>
                  </ul>
                </div>
              </div>
              <div class="relative">
                <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg" alt="Person with backpack walking on scenic mountain path, representing the journey beginning" class="rounded-xl shadow-2xl w-full">
                <div class="absolute -bottom-4 -right-4 bg-brand-green text-white p-4 rounded-xl shadow-xl">
                  <div class="text-center">
                    <div class="text-xl font-bold">Go!</div>
                    <div class="text-sm opacity-90">Live it</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-dark text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 font-display">Ready to Start Your Transformation?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          It all begins with a simple 15-minute conversation. No pressure, no commitment—just possibilities.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
          <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
          Book Your Free Call Now
        </a>
      </div>
    </section>
  `,

  journeys: () => `
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Your Passions. Your Journey.</h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            Imagine a trip meticulously woven from the threads of your unique interests, no matter how diverse. This is where RSJ shines—creating high-impact, deeply personal adventures.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <img src="https://images.pexels.com/photos/1230302/pexels-photo-1230302.jpeg" alt="Diverse group of travelers sharing experiences and connecting over meaningful conversation" class="rounded-xl shadow-2xl w-full mb-12 object-cover h-80">

          <div class="bg-white p-8 md:p-12 rounded-xl shadow-xl mb-12">
            <h2 class="text-2xl md:text-3xl font-semibold text-brand-dark mb-6 text-center font-display">
              <i data-lucide="compass" class="inline-block mr-2 w-8 h-8 align-text-bottom text-brand-orange"></i>
              Example: The Explorer's Immersive Week
            </h2>
            <p class="text-slate-600 leading-relaxed mb-8 text-lg text-center max-w-3xl mx-auto">
              Let's say you're fascinated by <strong class="text-brand-dark">space exploration</strong>, dream of <strong class="text-brand-dark">starting a podcast</strong>, love <strong class="text-brand-dark">night sky photography</strong>, and enjoy <strong class="text-brand-dark">curated camping</strong>.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-brand-light p-6 rounded-lg">
                <i data-lucide="map-pin" class="text-brand-orange w-7 h-7 mb-3"></i>
                <h3 class="font-semibold text-lg mb-2 font-display text-brand-dark">Strategic Destinations</h3>
                <p class="text-slate-600">We might send you to Florida's Space Coast—prime locations for space enthusiasts with access to launches and facilities.</p>
              </div>
              <div class="bg-brand-light p-6 rounded-lg">
                <i data-lucide="mic" class="text-brand-teal w-7 h-7 mb-3"></i>
                <h3 class="font-semibold text-lg mb-2 font-display text-brand-dark">Skill Development</h3>
                <p class="text-slate-600">Podcasting workshops, connections with local astrophotographers, and access to dark sky reserves for perfect shots.</p>
              </div>
              <div class="bg-brand-light p-6 rounded-lg">
                <i data-lucide="star" class="text-brand-green w-7 h-7 mb-3"></i>
                <h3 class="font-semibold text-lg mb-2 font-display text-brand-dark">Unique Activities</h3>
                <p class="text-slate-600">NASA facility tours, SpaceX viewing parties, themed dining experiences, guest lectures, and prime night sky viewing spots.</p>
              </div>
              <div class="bg-brand-light p-6 rounded-lg">
                <i data-lucide="tent" class="text-brand-orange w-7 h-7 mb-3"></i>
                <h3 class="font-semibold text-lg mb-2 font-display text-brand-dark">Comfortable Immersion</h3>
                <p class="text-slate-600">Carefully selected camping sites that blend adventure with comfort, ensuring every detail enhances your experience.</p>
              </div>
            </div>
            <p class="text-center text-brand-teal italic mt-8 text-lg">This is the RSJ difference: premium personalization that transforms your interests into unforgettable experiences.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12 font-display">Sample Journey Blueprints</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-orange/10 p-4 rounded-lg mb-4">
              <i data-lucide="wifi" class="text-brand-orange w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Digital Nomad Sprint</h3>
            </div>
            <p class="text-slate-600 mb-4">Perfect for remote workers seeking inspiration, networking, and skill development while exploring vibrant co-working scenes in Lisbon and Barcelona.</p>
            <div class="text-sm text-brand-teal font-semibold">7 days • Portugal & Spain • Mid-range</div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-green/10 p-4 rounded-lg mb-4">
              <i data-lucide="leaf" class="text-brand-green w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Sustainable Living Immersion</h3>
            </div>
            <p class="text-slate-600 mb-4">Learn permaculture, renewable energy, and sustainable practices while staying at eco-villages and organic farms across Costa Rica.</p>
            <div class="text-sm text-brand-teal font-semibold">10 days • Costa Rica • Eco-focused</div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-teal/10 p-4 rounded-lg mb-4">
              <i data-lucide="palette" class="text-brand-teal w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Creative Renaissance</h3>
            </div>
            <p class="text-slate-600 mb-4">Rediscover your artistic side through workshops in Florence, connecting with local artists, and exploring classical meets contemporary art.</p>
            <div class="text-sm text-brand-teal font-semibold">14 days • Italy • Cultural immersion</div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-orange/10 p-4 rounded-lg mb-4">
              <i data-lucide="brain" class="text-brand-orange w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Tech Innovation Deep Dive</h3>
            </div>
            <p class="text-slate-600 mb-4">Explore AI ethics, blockchain applications, and startup culture with exclusive access to Silicon Valley tech talks and networking events.</p>
            <div class="text-sm text-brand-teal font-semibold">5 days • California • Tech-focused</div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-green/10 p-4 rounded-lg mb-4">
              <i data-lucide="mountain" class="text-brand-green w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Mindful Adventure Quest</h3>
            </div>
            <p class="text-slate-600 mb-4">Combine meditation retreats with outdoor adventures in the Himalayas, focusing on personal growth and mental clarity.</p>
            <div class="text-sm text-brand-teal font-semibold">12 days • Nepal • Wellness & adventure</div>
          </div>
          
          <div class="bg-white border border-slate-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-teal/10 p-4 rounded-lg mb-4">
              <i data-lucide="globe" class="text-brand-teal w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-display text-brand-dark">Cultural Bridge Builder</h3>
            </div>
            <p class="text-slate-600 mb-4">Learn languages, understand cultural nuances, and build international connections through homestays and cultural exchange in Japan.</p>
            <div class="text-sm text-brand-teal font-semibold">21 days • Japan • Cultural exchange</div>
          </div>
        </div>
      </div>
    </section>

    <section id="sample-itinerary" class="py-16 md:py-24 bg-brand-light">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-12 font-display">A Glimpse Into Your Journey: Sample Day</h2>
        <div id="itinerary-content" class="prose prose-lg lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 rounded-xl shadow-xl">
          <p class="text-center text-slate-600">Loading sample itinerary...</p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-dark text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 font-display">Ready to Craft Your Custom Journey?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every journey starts with understanding what makes you unique. Let's design something extraordinary together.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
          <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
          Start With Your 15-Min Call
        </a>
      </div>
    </section>
  `,

  pricing: () => `
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Simple, Transparent Pricing</h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            Choose the blueprint that fits your journey. Every option includes our signature personalized approach and expert planning.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Starter -->
          <div class="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-brand-dark mb-4 font-display">Starter</h2>
              <div class="mb-4">
                <span class="text-4xl font-bold text-brand-dark">$99</span>
              </div>
              <p class="text-slate-600">Perfect for first-time travelers or shorter trips</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">One-page high-level game plan</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Key destination recommendations</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Must-do activities list</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Budget guidelines</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">3-5 day delivery</span>
              </li>
            </ul>
            <button class="w-full bg-slate-100 hover:bg-slate-200 text-brand-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Get Started
            </button>
          </div>

          <!-- Pro (Most Popular) -->
          <div class="bg-white p-8 rounded-xl shadow-xl border-2 border-brand-orange relative transform scale-105">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-brand-dark mb-4 font-display">Pro</h2>
              <div class="mb-4">
                <span class="text-4xl font-bold text-brand-dark">$299</span>
              </div>
              <p class="text-slate-600">Complete journey blueprint for transformative travel</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">5-10 page detailed blueprint</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Day-by-day itinerary with timing</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Direct links and booking info</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Interactive maps included</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Networking opportunities</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">7-day delivery</span>
              </li>
            </ul>
            <button class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Choose Pro
            </button>
          </div>

          <!-- Concierge -->
          <div class="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-brand-dark mb-4 font-display">Concierge</h2>
              <div class="mb-4">
                <span class="text-4xl font-bold text-brand-dark">$599</span>
              </div>
              <p class="text-slate-600">Premium support with live consultation</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Everything in Pro package</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Deep research & alternatives</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Packing & etiquette guide</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Emergency contact sheet</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">2 hours live support (pre-trip or during)</span>
              </li>
              <li class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span class="text-slate-700">Priority 3-day delivery</span>
              </li>
            </ul>
            <button class="w-full bg-slate-100 hover:bg-slate-200 text-brand-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-brand-dark mb-12 font-display">Why Our Pricing Makes Sense</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 class="text-xl font-semibold text-red-800 mb-4 font-display">DIY Travel Planning</h3>
              <ul class="space-y-2 text-red-700 text-sm">
                <li>• 20-40 hours of research time</li>
                <li>• Risk of tourist traps and missed opportunities</li>
                <li>• No guarantee of meaningful connections</li>
                <li>• Overwhelming choices and decision fatigue</li>
                <li>• Generic, uninspiring experiences</li>
              </ul>
              <div class="mt-4 text-red-800 font-semibold">Cost: Your time + mediocre results</div>
            </div>
            
            <div class="bg-green-50 border border-green-200 p-6 rounded-xl">
              <h3 class="text-xl font-semibold text-green-800 mb-4 font-display">Ready Set Journey</h3>
              <ul class="space-y-2 text-green-700 text-sm">
                <li>• 15-minute call + expert planning</li>
                <li>• Curated, transformative experiences</li>
                <li>• Built-in networking opportunities</li>
                <li>• Clear, actionable blueprint</li>
                <li>• Life-changing potential outcomes</li>
              </ul>
              <div class="mt-4 text-green-800 font-semibold">Cost: $99-$599 + incredible results</div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <p class="text-lg text-slate-600 mb-6">
              <strong>Think about it:</strong> If you're spending $3,000-$5,000 on a trip, investing $299 for a plan that could change your life is a no-brainer.
            </p>
            <div class="bg-brand-light p-6 rounded-xl inline-block">
              <div class="text-2xl font-bold text-brand-dark mb-2">100% Money-Back Guarantee</div>
              <div class="text-sm text-slate-600">If we don't deliver within our promised timeframe or you find major factual errors, we'll refund every penny.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-dark text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 font-display">Ready to Invest in Your Transformation?</h2>
        <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Every great journey begins with a single step. Let's start with a conversation about what's possible.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
          <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
          Book Your Free 15-Min Call
        </a>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display">Ready to Start Your Journey?</h1>
          <p class="text-xl text-slate-600 leading-relaxed">
            Stop dreaming, start planning. Let's craft an experience that transforms what travel means to you. It all begins with a simple 15-minute conversation.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-dark">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <h2 class="text-3xl font-bold text-brand-dark mb-8 text-center font-display">Tell Us About Your Dream Journey</h2>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="space-y-6">
                <div>
                  <label class="block font-semibold text-brand-dark mb-2 font-display">Your Key Interests/Passions:</label>
                  <p class="text-sm text-slate-500 mb-3 italic">e.g., AI ethics, street art, sustainable farming, ancient history, podcasting</p>
                  <div class="bg-brand-light p-4 rounded-lg">
                    <p class="text-slate-600">Share what truly excites you—the more specific, the better we can tailor your experience.</p>
                  </div>
                </div>
                
                <div>
                  <label class="block font-semibold text-brand-dark mb-2 font-display">What You're Seeking:</label>
                  <p class="text-sm text-slate-500 mb-3 italic">e.g., new skills, career clarity, adventure, networking, cultural immersion</p>
                  <div class="bg-brand-light p-4 rounded-lg">
                    <p class="text-slate-600">What do you hope to gain? Personal growth, professional development, or pure adventure?</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <label class="block font-semibold text-brand-dark mb-2 font-display">Your Budget Ideas:</label>
                  <p class="text-sm text-slate-500 mb-3 italic">e.g., 'Mid-range, comfortable', 'Luxury focus', 'Flexible up to $X,XXX'</p>
                  <div class="bg-brand-light p-4 rounded-lg">
                    <p class="text-slate-600">Help us understand your comfort level so we can recommend appropriate experiences.</p>
                  </div>
                </div>
                
                <div>
                  <label class="block font-semibold text-brand-dark mb-2 font-display">Preferred Timeframe:</label>
                  <p class="text-sm text-slate-500 mb-3 italic">e.g., 'A week in September', '10-14 days next quarter', 'Flexible timing'</p>
                  <div class="bg-brand-light p-4 rounded-lg">
                    <p class="text-slate-600">When are you hoping to travel and for how long? This helps us plan seasonal activities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <a href="mailto:launch@readysetjourney.com?subject=RSJ Journey Blueprint Request&body=Hi Ready Set Journey Team,%0D%0A%0D%0AI'm interested in a personalized journey blueprint!%0D%0A%0D%0AMy key interests/passions are: [Your Interests Here]%0D%0AWhat I'm seeking: [Your Goals Here]%0D%0AMy budget ideas: [Your Budget Range]%0D%0AMy preferred timeframe: [When & How Long]%0D%0AAdditional notes: [Any other preferences]%0D%0A%0D%0AThanks!"
                 class="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-display">
                <i data-lucide="mail" class="mr-3 w-6 h-6"></i>
                Book Your Free 15-Min Call
              </a>
              <p class="text-slate-500 mt-4 text-sm">
                Or send details directly to: <span class="font-semibold">launch@readysetjourney.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-brand-dark mb-12 font-display">Why Start With a Call?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="clock" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Quick & Easy</h3>
              <p class="text-slate-600">Just 15 minutes to understand your vision and see if we're a good fit. No pressure, no commitment.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="lightbulb" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Personalized Approach</h3>
              <p class="text-slate-600">We'll ask the right questions to understand what makes your ideal journey unique to you.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="heart" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-display text-brand-dark">Passionate Team</h3>
              <p class="text-slate-600">We're travelers and dreamers ourselves, dedicated to creating truly transformative experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-brand-dark mb-6 font-display">Frequently Asked Questions</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div class="bg-brand-light p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-3 font-display text-brand-dark">Do you handle bookings?</h3>
            <p class="text-slate-600 text-sm">We design your blueprint, you handle the bookings. Our expertise is in creating the perfect plan—you maintain control over timing and budget.</p>
          </div>
          <div class="bg-brand-light p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-3 font-display text-brand-dark">What makes RSJ different?</h3>
            <p class="text-slate-600 text-sm">We focus on transformation, not just transportation. Every journey is designed around your personal growth and unique interests.</p>
          </div>
          <div class="bg-brand-light p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-3 font-display text-brand-dark">How quickly do you deliver?</h3>
            <p class="text-slate-600 text-sm">Depending on your package: Starter (3-5 days), Pro (7 days), Concierge (3 days priority). We'll confirm timing during your call.</p>
          </div>
          <div class="bg-brand-light p-6 rounded-xl">
            <h3 class="text-lg font-semibold mb-3 font-display text-brand-dark">What if I'm not satisfied?</h3>
            <p class="text-slate-600 text-sm">100% money-back guarantee if we don't deliver on time or you find major factual errors. Your satisfaction is our priority.</p>
          </div>
        </div>
      </div>
    </section>
  `
};