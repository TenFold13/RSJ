// Page content definitions
const pages = {
  home: () => `
    <section class="relative text-brand-white py-20 md:py-32 min-h-[60vh] md:min-h-[70vh] flex items-center">
      <div class="absolute inset-0">
        <img src="https://r2.flowith.net/files/o/1748969255266-transformative_future_ready_travel_landscape_index_2@1024x1024.png" alt="Panoramic view of a breathtaking, futuristic landscape blending nature and innovation, symbolizing a transformative future-ready journey" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/60"></div>
      </div>
      <div class="relative container mx-auto px-6 text-center z-10">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-heading">Adventure, Unlocked.</h1>
        <p class="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 mb-8 font-sans">
          Ready Set Journey isn't just a trip planner; it's your launchpad to a <strong>future-ready</strong> life filled with passion, <strong>learning, networking, exploration, and genuine immersion</strong>. We craft experiences tailored to what truly ignites you.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg md:text-xl inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl font-heading">
          <i data-lucide="rocket" class="mr-3 w-6 h-6"></i>
          Start Your Journey
        </a>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-brand-teal mb-8 font-heading">Why Choose Ready Set Journey?</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="p-6">
            <i data-lucide="compass" class="w-12 h-12 text-brand-orange mx-auto mb-4"></i>
            <h3 class="text-xl font-semibold mb-3 font-heading">Personalized Adventures</h3>
            <p class="text-brand-dark-neutral">Every journey is crafted specifically for your interests, passions, and goals.</p>
          </div>
          <div class="p-6">
            <i data-lucide="users" class="w-12 h-12 text-brand-orange mx-auto mb-4"></i>
            <h3 class="text-xl font-semibold mb-3 font-heading">Meaningful Connections</h3>
            <p class="text-brand-dark-neutral">Build lasting relationships with like-minded travelers and local communities.</p>
          </div>
          <div class="p-6">
            <i data-lucide="trending-up" class="w-12 h-12 text-brand-orange mx-auto mb-4"></i>
            <h3 class="text-xl font-semibold mb-3 font-heading">Future-Ready Growth</h3>
            <p class="text-brand-dark-neutral">Return with new skills, perspectives, and clarity for your next chapter.</p>
          </div>
        </div>
        <div class="mt-12">
          <a href="/about" class="nav-link text-brand-teal hover:text-brand-orange font-semibold transition-colors duration-300">
            Learn more about our approach →
          </a>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-8 font-heading">About Ready Set Journey</h1>
        <div class="max-w-3xl mx-auto text-center mb-16">
          <p class="text-lg text-brand-dark-neutral leading-relaxed font-sans">
            We believe travel should be transformative, not just transactional. Ready Set Journey exists to bridge the gap between wanderlust and purpose, creating experiences that prepare you for the future while enriching your present.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-4 font-heading">Is This You?</h2>
        <p class="text-center text-brand-dark-neutral max-w-2xl mx-auto mb-12 md:mb-16 text-lg font-sans">RSJ is for anyone craving more than a standard checklist vacation. We speak to those at a crossroads, seeking change, or simply wanting to live more fully and prepare for a dynamic future.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <i data-lucide="graduation-cap" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">The "Now What?" Crowd</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">Finished school and dreading the conventional path? Let's build an adventure that actually means something, helping you discover your passions and skills for the future before committing to the next big thing.</p>
          </div>
          <div class="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <i data-lucide="briefcase-business" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">Burned-Out Professionals</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">Feeling depleted? Before a drastic move, let's design a sabbatical that recharges you with purpose, networking opportunities, and new perspectives, not just poolside cocktails.</p>
          </div>
          <div class="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <i data-lucide="gem" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">Midlife Navigators</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">Contemplating your next act? Let's channel that energy into finding new passions, skills, or rediscovering old ones on the road to genuine, future-ready fulfillment.</p>
          </div>
          <div class="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-start-1 lg:col-start-auto">
            <div class="flex items-center mb-4">
              <i data-lucide="sunset" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">Discerning Retirees</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">You've earned more than generic getaways. How about immersive learning in Portugal, cultural exploration in Buenos Aires, or mastering a new skill? Let's find experiences with a pulse.</p>
          </div>
          <div class="bg-brand-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div class="flex items-center mb-4">
              <i data-lucide="sparkles" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">Anyone Who Demands More</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">If you're tired of superficial travel and crave depth, connection, learning, and real experiences, RSJ is your escape hatch. We believe travel should change you and equip you for the future.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-brand-teal/5">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-12 md:mb-16 font-heading">More Than A Trip. It's Future-Ready Transformation.</h2>
        <div class="md:flex md:items-center md:space-x-12">
          <div class="md:w-2/5 lg:w-1/3 mb-10 md:mb-0">
            <img src="https://r2.flowith.net/files/o/1748969252667-collaborative_professional_workshop_in_luxury_travel_setting_index_0@1024x1024.png" alt="Professionals engaged in a collaborative workshop in a modern, inspiring setting, reflecting learning and networking." class="rounded-xl shadow-2xl w-full object-cover h-auto max-h-[450px]">
          </div>
          <div class="md:w-3/5 lg:w-2/3 space-y-8">
            <div>
              <div class="flex items-center mb-3">
                <i data-lucide="compass" class="text-brand-orange w-8 h-8 mr-3"></i>
                <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">Learn, Network, Explore, Immerse</h3>
              </div>
              <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans">Forget passive sightseeing. RSJ is about active participation. <strong>Learn new skills, engage with local cultures, build your network, and uncover hidden facets of yourself through immersive exploration.</strong> This is about experience, not just observation.</p>
            </div>
            <div>
              <div class="flex items-center mb-3">
                <i data-lucide="lightbulb" class="text-brand-orange w-8 h-8 mr-3"></i>
                <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">An Alternative to the Default Script</h3>
              </div>
              <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans">We offer a path that might genuinely alter the trajectory of your life. Break free from the expected and embark on a journey that aligns with who you are and who you want to become, ready for the future.</p>
            </div>
            <div>
              <div class="flex items-center mb-3">
                <i data-lucide="award" class="text-brand-orange w-8 h-8 mr-3"></i>
                <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">The Real Benefit: Come Back Changed</h3>
              </div>
              <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans">You'll return with more than just photos. Expect new passions, meaningful connections, compelling stories, and perhaps, crystal clarity on your next steps in life. Save years and resources by finding your true north, sooner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  howItWorks: () => `
    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-8 font-heading">How It Works</h1>
        <p class="text-center text-brand-dark-neutral max-w-3xl mx-auto mb-16 text-lg font-sans">
          Our process is designed to transform your passions into unforgettable experiences. Here's how we craft your perfect journey in three simple steps.
        </p>
      </div>
    </section>

    <section class="py-16 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="space-y-16">
            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row items-center md:space-x-12">
              <div class="md:w-1/2 mb-8 md:mb-0">
                <div class="bg-brand-orange text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">1</div>
                <h2 class="text-3xl font-bold text-brand-teal mb-4 font-heading text-center md:text-left">Share Your Unique Spark</h2>
                <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans text-center md:text-left">
                  Tell us your passions, interests, and what you're seeking from your next chapter. Whether it's space exploration, sustainable farming, or ancient history - the more you share, the more tailored your journey becomes.
                </p>
                <div class="mt-6 text-center md:text-left">
                  <a href="/contact" class="nav-link text-brand-orange hover:text-brand-orange-accent font-semibold transition-colors duration-300">
                    Start sharing your interests →
                  </a>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class="bg-brand-white p-8 rounded-xl shadow-lg">
                  <i data-lucide="send" class="text-brand-orange w-12 h-12 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-3 font-heading">What We Need to Know</h3>
                  <ul class="space-y-2 text-brand-dark-neutral">
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Your key interests and passions</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>What you're seeking (skills, clarity, adventure)</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Budget preferences and constraints</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Desired timeframe and duration</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-12">
              <div class="md:w-1/2 mb-8 md:mb-0">
                <div class="bg-brand-orange text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">2</div>
                <h2 class="text-3xl font-bold text-brand-teal mb-4 font-heading text-center md:text-left">We Craft Your Blueprint</h2>
                <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans text-center md:text-left">
                  Our team researches and curates a detailed digital document outlining your bespoke immersive experience, packed with unique activities for learning, networking, exploration, and immersion.
                </p>
                <div class="mt-6 text-center md:text-left">
                  <a href="/journeys" class="nav-link text-brand-orange hover:text-brand-orange-accent font-semibold transition-colors duration-300">
                    See example blueprints →
                  </a>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class="bg-brand-white p-8 rounded-xl shadow-lg">
                  <i data-lucide="file-text" class="text-brand-orange w-12 h-12 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-3 font-heading">Your Blueprint Includes</h3>
                  <ul class="space-y-2 text-brand-dark-neutral">
                    <li class="flex items-start"><i data-lucide="map-pin" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Strategic destination recommendations</li>
                    <li class="flex items-start"><i data-lucide="calendar" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Day-by-day detailed itinerary</li>
                    <li class="flex items-start"><i data-lucide="users" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Networking opportunities and events</li>
                    <li class="flex items-start"><i data-lucide="book-open" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Learning workshops and experiences</li>
                    <li class="flex items-start"><i data-lucide="camera" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Cultural immersion activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row items-center md:space-x-12">
              <div class="md:w-1/2 mb-8 md:mb-0">
                <div class="bg-brand-orange text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto md:mx-0">3</div>
                <h2 class="text-3xl font-bold text-brand-teal mb-4 font-heading text-center md:text-left">You Book & Live It</h2>
                <p class="text-brand-dark-neutral leading-relaxed text-lg font-sans text-center md:text-left">
                  Armed with your detailed blueprint, you handle the booking of flights, accommodations, and activities. We focus on the 'what' and 'why' - you handle the 'how' with complete clarity and confidence.
                </p>
                <div class="bg-brand-orange/10 p-4 rounded-lg mt-6">
                  <p class="text-sm text-brand-dark-neutral font-sans">
                    <strong>Note:</strong> We are 'strictly booking first' - we design your transformative travel blueprint but don't handle actual bookings. Our expertise lies in crafting the perfect experience for you.
                  </p>
                </div>
              </div>
              <div class="md:w-1/2">
                <div class="bg-brand-white p-8 rounded-xl shadow-lg">
                  <i data-lucide="plane" class="text-brand-orange w-12 h-12 mb-4"></i>
                  <h3 class="text-xl font-semibold mb-3 font-heading">You're In Control</h3>
                  <ul class="space-y-2 text-brand-dark-neutral">
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Book flights at your preferred times</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Choose accommodations within your budget</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Register for recommended activities</li>
                    <li class="flex items-start"><i data-lucide="check" class="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0"></i>Customize based on your preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 font-heading">Ready to Start Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Join the first 5 pioneers and get your personalized journey blueprint completely free.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 font-heading">
          <i data-lucide="rocket" class="mr-3 w-6 h-6"></i>
          Get Your Free Blueprint
        </a>
      </div>
    </section>
  `,

  journeys: () => `
    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-8 font-heading">Your Passions. Your Future-Ready Journey.</h1>
        <p class="text-center text-brand-dark-neutral max-w-3xl mx-auto mb-16 text-lg font-sans">
          Imagine a trip meticulously woven from the threads of your unique interests, no matter how diverse. This is where RSJ shines, creating high-impact, deeply personal adventures designed for growth and discovery.
        </p>
      </div>
    </section>

    <section class="py-16 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <img src="https://r2.flowith.net/files/o/1748969252951-elegant_networking_event_for_highend_travel_services_index_1@1024x1024.png" alt="Diverse group of professionals networking at an elegant, modern event, symbolizing connection opportunities with Ready Set Journey." class="rounded-xl shadow-2xl w-full max-w-4xl mx-auto mb-12 md:mb-16 object-cover h-auto max-h-[450px]">

        <div class="bg-gradient-to-r from-brand-green/10 to-brand-teal/10 p-8 md:p-12 rounded-xl shadow-xl mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-brand-teal mb-6 text-center font-heading">
            <i data-lucide="rocket" class="inline-block mr-2 w-8 h-8 align-[-0.125em] text-brand-orange"></i>
            An Example: The Explorer's Immersive Week
          </h2>
          <p class="text-brand-dark-neutral leading-relaxed mb-6 text-lg text-center max-w-2xl mx-auto font-sans">
            Let's say you're fascinated by <strong class="text-brand-teal font-semibold">space exploration</strong>, dream of <strong class="text-brand-teal font-semibold">starting a podcast</strong>, love <strong class="text-brand-teal font-semibold">night sky photography</strong>, and enjoy <strong class="text-brand-teal font-semibold">curated camping</strong>.
          </p>
          <div class="grid md:grid-cols-2 gap-6 text-brand-dark-neutral font-sans">
            <div class="bg-brand-white/70 p-6 rounded-lg shadow-md">
              <i data-lucide="map-pin" class="text-brand-teal w-7 h-7 mb-2"></i>
              <h3 class="font-semibold text-xl mb-1 font-heading">Strategic Destinations:</h3>
              <p>We might send you to Florida's Space Coast. Prime locations for space enthusiasts.</p>
            </div>
            <div class="bg-brand-white/70 p-6 rounded-lg shadow-md">
              <i data-lucide="mic" class="text-brand-teal w-7 h-7 mb-2"></i>
              <h3 class="font-semibold text-xl mb-1 font-heading">Skill Development:</h3>
              <p>We'd find podcasting workshops or meetups, connect you with local astrophotographers, or arrange entry to dark sky reserves.</p>
            </div>
            <div class="bg-brand-white/70 p-6 rounded-lg shadow-md">
              <i data-lucide="moon-star" class="text-brand-teal w-7 h-7 mb-2"></i>
              <h3 class="font-semibold text-xl mb-1 font-heading">Unique Activities:</h3>
              <p>Think NASA/SpaceX facility tours, themed dining, guest lectures, and prime night sky viewing spots.</p>
            </div>
            <div class="bg-brand-white/70 p-6 rounded-lg shadow-md">
              <i data-lucide="tent" class="text-brand-teal w-7 h-7 mb-2"></i>
              <h3 class="font-semibold text-xl mb-1 font-heading">Comfortable Immersion:</h3>
              <p>A great campground nearby, blending adventure with comfort. Every detail, curated for an unforgettable week of immersion.</p>
            </div>
          </div>
          <p class="text-center text-brand-teal italic mt-8 text-lg font-sans">This is the RSJ difference: a high-ticket feel, born from genuine personalization for future readiness.</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-brand-teal mb-12 font-heading">Sample Journey Blueprints</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-orange/10 p-4 rounded-lg mb-4">
              <i data-lucide="camera" class="text-brand-orange w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Digital Nomad Sprint</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Perfect for remote workers seeking inspiration, networking, and skill development while exploring vibrant co-working scenes in Lisbon and Barcelona.</p>
            <div class="text-sm text-brand-teal font-semibold">7 days • Portugal & Spain • Mid-range</div>
          </div>
          
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-green/10 p-4 rounded-lg mb-4">
              <i data-lucide="leaf" class="text-brand-green w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Sustainable Living Immersion</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Learn permaculture, renewable energy, and sustainable practices while staying at eco-villages and organic farms across Costa Rica.</p>
            <div class="text-sm text-brand-teal font-semibold">10 days • Costa Rica • Eco-focused</div>
          </div>
          
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-teal/10 p-4 rounded-lg mb-4">
              <i data-lucide="palette" class="text-brand-teal w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Creative Renaissance</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Rediscover your artistic side through workshops in Florence, connecting with local artists, and exploring the intersection of classical and contemporary art.</p>
            <div class="text-sm text-brand-teal font-semibold">14 days • Italy • Cultural immersion</div>
          </div>
          
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-orange/10 p-4 rounded-lg mb-4">
              <i data-lucide="brain" class="text-brand-orange w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Tech Innovation Deep Dive</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Explore AI ethics, blockchain applications, and startup culture in Silicon Valley, with exclusive access to tech talks and networking events.</p>
            <div class="text-sm text-brand-teal font-semibold">5 days • California • Tech-focused</div>
          </div>
          
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-green/10 p-4 rounded-lg mb-4">
              <i data-lucide="mountain" class="text-brand-green w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Mindful Adventure Quest</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Combine meditation retreats with outdoor adventures in the Himalayas, focusing on personal growth and mental clarity.</p>
            <div class="text-sm text-brand-teal font-semibold">12 days • Nepal • Wellness & adventure</div>
          </div>
          
          <div class="bg-brand-light-gray p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="bg-brand-teal/10 p-4 rounded-lg mb-4">
              <i data-lucide="globe" class="text-brand-teal w-8 h-8 mb-2"></i>
              <h3 class="text-xl font-semibold font-heading">Cultural Bridge Builder</h3>
            </div>
            <p class="text-brand-dark-neutral mb-4 font-sans">Learn languages, understand cultural nuances, and build international connections through homestays and cultural exchange programs in Japan.</p>
            <div class="text-sm text-brand-teal font-semibold">21 days • Japan • Cultural exchange</div>
          </div>
        </div>
      </div>
    </section>

    <section id="sample-itinerary" class="py-16 md:py-24 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-brand-teal mb-12 font-heading">A Glimpse Into Your Journey: Sample Day</h2>
        <div id="itinerary-content" class="prose prose-lg lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 rounded-xl shadow-xl">
          <p class="text-center text-brand-dark-neutral">Loading sample itinerary...</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div class="bg-brand-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <i data-lucide="send" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">1. Share Your Unique Spark</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">
              Tell us your passions, interests, and what you're seeking from your next chapter. The more you share, the more tailored your journey.
            </p>
          </div>
          <div class="bg-brand-light-gray p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <i data-lucide="file-text" class="text-brand-orange w-10 h-10 mr-4 flex-shrink-0"></i>
              <h3 class="text-2xl font-semibold text-brand-dark-neutral font-heading">2. Receive Your Blueprint</h3>
            </div>
            <p class="text-brand-dark-neutral leading-relaxed font-sans">
              We research and curate a detailed digital document outlining your bespoke immersive experience, packed with unique activities for learning, networking, exploration, and immersion.
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 font-heading">
            <i data-lucide="rocket" class="mr-3 w-6 h-6"></i>
            Start Your Custom Journey
          </a>
        </div>
      </div>
    </section>
  `,

  pricing: () => `
    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-8 font-heading">Invest in Your Transformation</h1>
        <p class="text-center text-brand-dark-neutral max-w-3xl mx-auto mb-16 text-lg font-sans">
          Choose the blueprint package that fits your journey. Every option includes our signature personalized approach and detailed planning.
        </p>
      </div>
    </section>

    <section class="py-16 bg-brand-orange text-black">
      <div class="container mx-auto px-6">
        <div class="flex justify-center mb-8">
          <i data-lucide="award" class="w-16 h-16 text-brand-orange-accent"></i>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto font-sans">
          <div class="bg-brand-white/30 p-8 rounded-xl shadow-lg border-2 border-brand-white hover:shadow-2xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <i data-lucide="gift" class="w-12 h-12 text-brand-orange-accent mx-auto mb-4"></i>
              <h2 class="text-2xl font-semibold mb-3 font-heading">Pioneer Offer</h2>
              <p class="text-4xl font-bold text-brand-teal mb-3">FREE</p>
              <p class="text-sm mb-4 font-semibold text-brand-orange-accent">For the First 5 Users</p>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Complete personalized journey blueprint</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Detailed day-by-day itinerary</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Curated learning & networking opportunities</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Cultural immersion activities</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="star" class="w-5 h-5 text-brand-orange-accent mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Help shape the future of RSJ</span>
              </div>
            </div>
            <p class="leading-relaxed text-sm">Be among the first to experience Ready Set Journey and get your personalized immersive journey blueprint completely free. Your insights will shape the future of transformative travel.</p>
          </div>
          
          <div class="bg-brand-white/30 p-8 rounded-xl shadow-lg border-2 border-brand-white hover:shadow-2xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <i data-lucide="map" class="w-12 h-12 text-brand-teal mx-auto mb-4"></i>
              <h2 class="text-2xl font-semibold mb-3 font-heading">Standard Blueprint</h2>
              <p class="text-4xl font-bold text-brand-teal mb-3">$79</p>
              <p class="text-sm mb-4">Per Personalized Journey Blueprint</p>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Complete personalized journey blueprint</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Detailed day-by-day itinerary</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Curated learning & networking opportunities</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Cultural immersion activities</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Budget optimization recommendations</span>
              </div>
            </div>
            <p class="leading-relaxed text-sm">Receive a meticulously crafted digital document outlining your bespoke immersive experience, packed with unique activities for growth and discovery.</p>
          </div>
          
          <div class="bg-brand-white/30 p-8 rounded-xl shadow-lg border-2 border-brand-white ring-4 ring-brand-orange-accent hover:shadow-2xl transition-shadow duration-300">
            <div class="text-center mb-6">
              <i data-lucide="trending-up" class="w-12 h-12 text-brand-orange-accent mx-auto mb-4"></i>
              <h2 class="text-2xl font-semibold mb-3 font-heading">Upcoming Price</h2>
              <p class="text-4xl font-bold text-brand-teal mb-3">$149</p>
              <p class="text-sm mb-4 text-brand-orange-accent font-semibold">Effective July 1st</p>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-start">
                <i data-lucide="check" class="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Everything in Standard Blueprint</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="plus" class="w-5 h-5 text-brand-orange-accent mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Enhanced destination research</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="plus" class="w-5 h-5 text-brand-orange-accent mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Priority customer support</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="plus" class="w-5 h-5 text-brand-orange-accent mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Exclusive access to new features</span>
              </div>
              <div class="flex items-start">
                <i data-lucide="plus" class="w-5 h-5 text-brand-orange-accent mr-3 mt-0.5 flex-shrink-0"></i>
                <span>Follow-up consultation call</span>
              </div>
            </div>
            <p class="leading-relaxed text-sm">Our standard price will increase as we expand our offerings and add premium features. Secure your journey blueprint at the current rate.</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-lg mb-6">Your adventure is the start of something bigger.</p>
          <a href="/contact" class="nav-link bg-brand-white hover:bg-gray-100 text-brand-teal font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl font-heading">
            <i data-lucide="rocket" class="mr-3 w-6 h-6"></i>
            Claim Your Pioneer Blueprint (FREE!)
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-brand-teal mb-12 font-heading">Which Blueprint Is Right for You?</h2>
        <div class="max-w-4xl mx-auto">
          <div class="bg-brand-white p-8 rounded-xl shadow-lg">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <i data-lucide="users" class="w-12 h-12 text-brand-orange mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold mb-3 font-heading">Pioneer (FREE)</h3>
                <p class="text-brand-dark-neutral text-sm">Perfect if you're curious about RSJ and want to experience our approach while helping us refine our service.</p>
              </div>
              <div>
                <i data-lucide="compass" class="w-12 h-12 text-brand-teal mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold mb-3 font-heading">Standard ($79)</h3>
                <p class="text-brand-dark-neutral text-sm">Ideal for travelers ready to invest in a transformative experience with comprehensive planning and personalization.</p>
              </div>
              <div>
                <i data-lucide="star" class="w-12 h-12 text-brand-orange-accent mx-auto mb-4"></i>
                <h3 class="text-xl font-semibold mb-3 font-heading">Premium ($149)</h3>
                <p class="text-brand-dark-neutral text-sm">Best for those who want the ultimate RSJ experience with enhanced features and priority support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-teal text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6 font-heading">Questions About Pricing?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          We're here to help you choose the perfect blueprint for your transformative journey.
        </p>
        <a href="/contact" class="nav-link bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 font-heading">
          <i data-lucide="message-circle" class="mr-3 w-6 h-6"></i>
          Get in Touch
        </a>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-16 md:py-24 bg-brand-white">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold text-center text-brand-teal mb-8 font-heading">Ready to Launch Your Future-Ready Chapter?</h1>
        <p class="text-center text-brand-dark-neutral max-w-3xl mx-auto mb-16 text-lg font-sans">
          Stop dreaming, start doing. Let's craft an experience that redefines what travel means to you. Share your passions and we'll create your perfect journey blueprint.
        </p>
      </div>
    </section>

    <section class="py-16 bg-brand-teal">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-brand-white rounded-xl shadow-2xl p-8 md:p-12">
            <h2 class="text-3xl font-bold text-brand-teal mb-8 text-center font-heading">Tell Us About Your Dream Journey</h2>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="space-y-6">
                <div>
                  <label class="block font-semibold text-brand-dark-neutral mb-2 font-heading">Your Key Interests/Passions:</label>
                  <p class="text-sm text-gray-600 mb-3 italic">e.g., AI ethics, street art, sustainable farming, ancient history, podcasting</p>
                  <div class="bg-brand-light-gray p-4 rounded-lg">
                    <p class="text-brand-dark-neutral">Share what truly excites you - the more specific, the better we can tailor your experience.</p>
                  </div>
                </div>
                
                <div>
                  <label class="block font-semibold text-brand-dark-neutral mb-2 font-heading">What You're Seeking:</label>
                  <p class="text-sm text-gray-600 mb-3 italic">e.g., new skills, career clarity, adventure, networking, cultural immersion</p>
                  <div class="bg-brand-light-gray p-4 rounded-lg">
                    <p class="text-brand-dark-neutral">What do you hope to gain from this journey? Personal growth, professional development, or pure adventure?</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-6">
                <div>
                  <label class="block font-semibold text-brand-dark-neutral mb-2 font-heading">Your Budget Ideas:</label>
                  <p class="text-sm text-gray-600 mb-3 italic">e.g., 'Mid-range, comfortable', 'Luxury focus', 'Flexible up to $X,XXX', 'Budget-conscious exploration'</p>
                  <div class="bg-brand-light-gray p-4 rounded-lg">
                    <p class="text-brand-dark-neutral">Help us understand your comfort level so we can recommend appropriate experiences and destinations.</p>
                  </div>
                </div>
                
                <div>
                  <label class="block font-semibold text-brand-dark-neutral mb-2 font-heading">Desired Travel Time Frame/Duration:</label>
                  <p class="text-sm text-gray-600 mb-3 italic">e.g., 'A week in September', '10-14 days next quarter', 'Flexible, looking for 2 weeks'</p>
                  <div class="bg-brand-light-gray p-4 rounded-lg">
                    <p class="text-brand-dark-neutral">When are you hoping to travel and for how long? This helps us plan seasonal activities and experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <a href="mailto:launch@readysetjourney.example.com?subject=RSJ Immersive Journey Inquiry&body=Hi Ready Set Journey Team,%0D%0A%0D%0AI'm interested in a personalized immersive journey blueprint!%0D%0A%0D%0AMy key interests/passions are: [Your Interests Here]%0D%0AWhat I'm seeking (e.g., new skills, clarity, adventure): [Your Goals Here]%0D%0AMy budget ideas: [e.g., Mid-range, Luxury, Specific Cap]%0D%0AMy desired travel time frame/duration: [e.g., Dates, Length of Trip]%0D%0AOptional: Other preferences: [Your Constraints Here]%0D%0A%0D%0AThanks!"
                 class="bg-brand-orange hover:bg-brand-orange-accent text-black font-bold py-4 px-8 rounded-lg text-lg md:text-xl inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl font-heading">
                <i data-lucide="mail-plus" class="mr-3 w-6 h-6"></i>
                Claim Your Pioneer Blueprint (FREE for First 5!)
              </a>
              <p class="text-gray-600 mt-4 text-sm font-sans">
                Or send details directly to: <span class="font-semibold">launch@readysetjourney.example.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-light-gray">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-brand-teal mb-12 font-heading">Why Start With Us?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="clock" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-heading">Quick Response</h3>
              <p class="text-brand-dark-neutral">We'll get back to you within 24 hours with initial thoughts and next steps.</p>
            </div>
            <div class="text-center">
              <div class="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="shield-check" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-heading">No Commitment</h3>
              <p class="text-brand-dark-neutral">Our initial consultation is free. You only proceed if you love the direction we're heading.</p>
            </div>
            <div class="text-center">
              <div class="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="heart" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-semibold mb-3 font-heading">Passionate Team</h3>
              <p class="text-brand-dark-neutral">We're travelers and dreamers ourselves, dedicated to creating transformative experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-brand-teal mb-6 font-heading">Still Have Questions?</h2>
        <p class="text-lg text-brand-dark-neutral mb-8 max-w-2xl mx-auto">
          We're here to help you understand how Ready Set Journey can transform your next adventure into a life-changing experience.
        </p>
        <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div class="bg-brand-light-gray p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3 font-heading">What makes RSJ different?</h3>
            <p class="text-brand-dark-neutral text-sm">We focus on transformation, not just transportation. Every journey is designed around your personal growth and future readiness.</p>
          </div>
          <div class="bg-brand-light-gray p-6 rounded-xl">
            <h3 class="text-xl font-semibold mb-3 font-heading">Do you handle bookings?</h3>
            <p class="text-brand-dark-neutral text-sm">We're "strictly booking first" - we design your blueprint, you handle the actual bookings with complete clarity and confidence.</p>
          </div>
        </div>
      </div>
    </section>
  `
};