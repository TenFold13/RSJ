const pages = {
  home: () => `
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-5"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-6">
              <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight font-display">
                <span class="text-brand-orange">Ready</span>
                <span class="text-brand-teal"> Set</span>
                <span class="text-brand-green"> Journey</span>
              </h1>
              <p class="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Stop wondering "what's next" and start living it. We craft personalized journey blueprints that transform your travel into your future.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/contact" class="nav-link inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Book Your 15-Min Call
              </a>
              <a href="/how-it-works" class="nav-link inline-flex items-center justify-center border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <i data-lucide="play-circle" class="w-5 h-5 mr-2"></i>
                See How It Works
              </a>
            </div>

            <div class="flex items-center space-x-8 pt-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-orange">15min</div>
                <div class="text-sm text-slate-600">Discovery Call</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-teal">Custom</div>
                <div class="text-sm text-slate-600">Blueprint</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-brand-green">Life-Changing</div>
                <div class="text-sm text-slate-600">Adventure</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="relative z-10">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop&crop=center" 
                   alt="Adventure awaits" 
                   class="rounded-3xl shadow-2xl w-full animate-float">
            </div>
            <div class="absolute -top-6 -right-6 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div class="absolute -bottom-6 -left-6 w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center space-y-12">
          <h2 class="text-4xl lg:text-5xl font-display font-bold text-brand-dark">
            Stop Living Someone Else's Life
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="space-y-4">
              <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <i data-lucide="alert-circle" class="w-8 h-8 text-red-600"></i>
              </div>
              <h3 class="text-xl font-semibold text-slate-800">The "Now What?" Trap</h3>
              <p class="text-slate-600">You've done what you were "supposed" to do. Now you're stuck wondering what actually matters to you.</p>
            </div>
            
            <div class="space-y-4">
              <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <i data-lucide="clock" class="w-8 h-8 text-yellow-600"></i>
              </div>
              <h3 class="text-xl font-semibold text-slate-800">Time is Slipping Away</h3>
              <p class="text-slate-600">Every day you wait is another day living on autopilot instead of designing your ideal life.</p>
            </div>
            
            <div class="space-y-4">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <i data-lucide="map" class="w-8 h-8 text-blue-600"></i>
              </div>
              <h3 class="text-xl font-semibold text-brand-dark">Generic Travel Sucks</h3>
              <p class="text-slate-600">Tourist traps and Instagram spots won't give you the clarity and direction you're looking for.</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-3xl p-12 space-y-6">
            <h3 class="text-3xl font-display font-bold text-brand-dark">Here's What Actually Works</h3>
            <p class="text-xl text-slate-700 leading-relaxed">
              Instead of wandering aimlessly or following someone else's path, you get a <strong>personalized blueprint</strong> 
              that combines meaningful travel with intentional growth. You come back with new skills, genuine connections, 
              and most importantly – <span class="text-brand-orange font-semibold">clarity about what you want to do next</span>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who It's For Section -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h2 class="text-4xl lg:text-5xl font-display font-bold text-brand-dark">
              This Is For You If...
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">
              You're at a crossroads and know you want something more meaningful than the default path.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="graduation-cap" class="w-8 h-8 text-brand-orange"></i>
              </div>
              <h3 class="text-xl font-semibold text-brand-dark mb-4">Recent Graduates</h3>
              <p class="text-slate-600">Just finished school and not ready for the 9-to-5 grind? Find your actual passion before committing to a career.</p>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="briefcase" class="w-8 h-8 text-brand-teal"></i>
              </div>
              <h3 class="text-xl font-semibold text-brand-dark mb-4">Burned-Out Professionals</h3>
              <p class="text-slate-600">Your soul is dying in that office. Before you make any rash decisions, get clarity on what you actually want.</p>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="compass" class="w-8 h-8 text-brand-green"></i>
              </div>
              <h3 class="text-xl font-semibold text-brand-dark mb-4">Midlife Navigators</h3>
              <p class="text-slate-600">Successful but unfulfilled? Time to discover what your next chapter actually looks like.</p>
            </div>
            
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i data-lucide="heart" class="w-8 h-8 text-purple-600"></i>
              </div>
              <h3 class="text-xl font-semibold text-brand-dark mb-4">Anyone Who Demands More</h3>
              <p class="text-slate-600">Tired of superficial experiences and cookie-cutter advice. You want depth, authenticity, and real transformation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center space-y-12">
          <h2 class="text-4xl font-display font-bold text-brand-dark">
            Real Stories, Real Transformations
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-slate-50 rounded-2xl p-8 space-y-4">
              <div class="flex items-center space-x-1 text-yellow-400">
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
              </div>
              <p class="text-slate-700 italic">"I was completely lost after graduation. Bobby's blueprint didn't just give me a trip – it gave me direction. I'm now pursuing sustainable architecture because of what I discovered in Copenhagen."</p>
              <div class="font-semibold text-brand-dark">Sarah, 23</div>
            </div>
            
            <div class="bg-slate-50 rounded-2xl p-8 space-y-4">
              <div class="flex items-center space-x-1 text-yellow-400">
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
              </div>
              <p class="text-slate-700 italic">"After 15 years in corporate, I needed a reset. The Barcelona experience Bobby designed helped me realize I wanted to teach. Best investment I've ever made."</p>
              <div class="font-semibold text-brand-dark">Marcus, 38</div>
            </div>
            
            <div class="bg-slate-50 rounded-2xl p-8 space-y-4">
              <div class="flex items-center space-x-1 text-yellow-400">
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
                <i data-lucide="star" class="w-5 h-5 fill-current"></i>
              </div>
              <p class="text-slate-700 italic">"This isn't travel planning – it's life planning. The connections I made in Tokyo led to a complete career pivot. I'm finally doing work that matters."</p>
              <div class="font-semibold text-brand-dark">Jennifer, 29</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-brand-orange to-brand-teal">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center space-y-8 text-white">
          <h2 class="text-4xl lg:text-5xl font-display font-bold">
            Stop Wondering. Start Living.
          </h2>
          <p class="text-xl lg:text-2xl opacity-90 leading-relaxed">
            Your next chapter is waiting. It starts with a 15-minute conversation.
          </p>
          
          <div class="space-y-4">
            <a href="/contact" class="nav-link inline-flex items-center bg-white text-brand-orange hover:bg-slate-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
              <i data-lucide="calendar" class="w-6 h-6 mr-3"></i>
              Book Your Free 15-Min Call
            </a>
            <p class="text-sm opacity-75">
              No commitment. No pressure. Just clarity about your next adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              About <span class="text-brand-orange">Ready Set Journey</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed">
              Adventure, unlocked. Your launchpad to a future-ready life filled with passion, learning, networking, exploration, and genuine immersion.
            </p>
          </div>

          <div class="space-y-16">
            <div class="text-center space-y-8">
              <h2 class="text-3xl font-display font-bold text-brand-dark">Our Mission</h2>
              <p class="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                We believe travel should be more than just checking destinations off a list. Ready Set Journey creates 
                transformative experiences that prepare you for the future while enriching your present. Every journey 
                is designed to expand your horizons, build meaningful connections, and equip you with the skills and 
                perspectives needed for what's next.
              </p>
            </div>

            <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12">
              <h2 class="text-3xl font-display font-bold text-brand-dark mb-8 text-center">Our Core Values</h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="text-center space-y-4">
                  <div class="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
                    <i data-lucide="heart" class="w-8 h-8 text-brand-orange"></i>
                  </div>
                  <h3 class="text-xl font-semibold text-brand-dark">Passion</h3>
                  <p class="text-slate-600">Discover what truly ignites your soul through immersive experiences.</p>
                </div>
                
                <div class="text-center space-y-4">
                  <div class="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto">
                    <i data-lucide="book-open" class="w-8 h-8 text-brand-teal"></i>
                  </div>
                  <h3 class="text-xl font-semibold text-brand-dark">Learning</h3>
                  <p class="text-slate-600">Gain future-ready skills and knowledge that prepare you for tomorrow's challenges.</p>
                </div>
                
                <div class="text-center space-y-4">
                  <div class="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                    <i data-lucide="users" class="w-8 h-8 text-brand-green"></i>
                  </div>
                  <h3 class="text-xl font-semibold text-brand-dark">Networking</h3>
                  <p class="text-slate-600">Build meaningful relationships with inspiring people who share your values.</p>
                </div>
                
                <div class="text-center space-y-4">
                  <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <i data-lucide="compass" class="w-8 h-8 text-purple-600"></i>
                  </div>
                  <h3 class="text-xl font-semibold text-brand-dark">Exploration</h3>
                  <p class="text-slate-600">Venture beyond tourist traps to discover authentic cultures and hidden gems.</p>
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
                <h3 class="text-2xl font-display font-bold text-brand-orange">Recent Graduates</h3>
                <p class="text-slate-600">The "Now What?" crowd seeking direction and purpose beyond the traditional path.</p>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
                <h3 class="text-2xl font-display font-bold text-brand-teal">Burned-Out Professionals</h3>
                <p class="text-slate-600">Looking for meaningful sabbaticals and career clarity away from the corporate grind.</p>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
                <h3 class="text-2xl font-display font-bold text-brand-green">Midlife Navigators</h3>
                <p class="text-slate-600">Contemplating their next act and seeking new passions and perspectives.</p>
              </div>
              
              <div class="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
                <h3 class="text-2xl font-display font-bold text-purple-600">Discerning Retirees</h3>
                <p class="text-slate-600">Wanting more than generic getaways and seeking meaningful adventures.</p>
              </div>
            </div>

            <div class="text-center space-y-8">
              <h2 class="text-3xl font-display font-bold text-brand-dark">Ready to Begin?</h2>
              <p class="text-lg text-slate-600 max-w-2xl mx-auto">
                Your transformative journey starts with a simple conversation. Let's discover what adventure awaits you.
              </p>
              <a href="/contact" class="nav-link inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Book Your 15-Min Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  howItWorks: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              How It <span class="text-brand-orange">Works</span>
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Three simple steps to transform your travel from generic tourism into life-changing adventure.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-12 mb-20">
            <div class="text-center space-y-6">
              <div class="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
                <span class="text-2xl font-bold text-brand-orange">1</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-brand-dark">Share Your Spark</h3>
              <p class="text-slate-600 leading-relaxed">
                Book a free 15-minute call where we dive deep into your interests, goals, and what you're seeking. 
                No generic questionnaires – just a real conversation about what matters to you.
              </p>
              <div class="bg-slate-50 rounded-xl p-6 space-y-3">
                <h4 class="font-semibold text-brand-dark">We'll Discuss:</h4>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li>• Your passions and interests</li>
                  <li>• What you're seeking from travel</li>
                  <li>• Your timeline and budget</li>
                  <li>• Skills you want to develop</li>
                  <li>• The type of connections you crave</li>
                </ul>
              </div>
            </div>

            <div class="text-center space-y-6">
              <div class="w-20 h-20 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto">
                <span class="text-2xl font-bold text-brand-teal">2</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-brand-dark">We Craft Your Blueprint</h3>
              <p class="text-slate-600 leading-relaxed">
                Within 5 business days, you receive a detailed digital blueprint outlining your bespoke experience. 
                This isn't a generic itinerary – it's a personalized roadmap to transformation.
              </p>
              <div class="bg-slate-50 rounded-xl p-6 space-y-3">
                <h4 class="font-semibold text-brand-dark">Your Blueprint Includes:</h4>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li>• Curated destinations that match your goals</li>
                  <li>• Meaningful activities and experiences</li>
                  <li>• Local connections and communities</li>
                  <li>• Skill-building opportunities</li>
                  <li>• Accommodation and logistics guidance</li>
                </ul>
              </div>
            </div>

            <div class="text-center space-y-6">
              <div class="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                <span class="text-2xl font-bold text-brand-green">3</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-brand-dark">Live Your Adventure</h3>
              <p class="text-slate-600 leading-relaxed">
                Use your blueprint to book and experience your transformative journey. We don't book anything for you – 
                you maintain complete control while having expert guidance every step of the way.
              </p>
              <div class="bg-slate-50 rounded-xl p-6 space-y-3">
                <h4 class="font-semibold text-brand-dark">You Get:</h4>
                <ul class="text-sm text-slate-600 space-y-2">
                  <li>• Complete booking flexibility</li>
                  <li>• Detailed contact information</li>
                  <li>• Local insider tips and recommendations</li>
                  <li>• Emergency support resources</li>
                  <li>• Follow-up guidance (premium plans)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-3xl p-12 mb-16">
            <h2 class="text-3xl font-display font-bold text-brand-dark mb-8 text-center">Sample Journey Blueprint</h2>
            <div class="prose prose-lg max-w-none" id="itinerary-content">
              <div class="text-center text-brand-orange">
                <i data-lucide="loader" class="w-8 h-8 mx-auto animate-spin"></i>
                <p class="mt-2">Loading sample itinerary...</p>
              </div>
            </div>
          </div>

          <div class="text-center space-y-8">
            <h2 class="text-3xl font-display font-bold text-brand-dark">Ready to Start Your Journey?</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Every journey starts with a conversation. Book your free 15-minute call today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="nav-link inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Book Your 15-Min Call
              </a>
              <a href="/pricing" class="nav-link inline-flex items-center border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                <i data-lucide="dollar-sign" class="w-5 h-5 mr-2"></i>
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  blog: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              Travel <span class="text-brand-orange">Insights</span>
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Honest perspectives on transformative travel, personal growth, and designing a life worth living.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center" 
                   alt="Mountain adventure" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  Why Gap Years Are Making a Comeback (And Why That's Good News)
                </h2>
                <p class="text-slate-600">
                  More young people are saying no to the traditional college rush and yes to intentional exploration. Here's why this trend is creating better humans.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop&crop=center" 
                   alt="Solo traveler" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 15, 2025</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Death of Generic Travel (And What's Rising From Its Ashes)
                </h2>
                <p class="text-slate-600">
                  Instagram-worthy destinations and cookie-cutter itineraries are losing their appeal. Here's what conscious travelers are choosing instead.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center" 
                   alt="Mountain landscape" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 10, 2025</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  How to Know When You're Ready for a Life-Changing Journey
                </h2>
                <p class="text-slate-600">
                  Not every trip needs to be transformative. But when you're at a crossroads, here are the signs it's time for something bigger.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=250&fit=crop&crop=center" 
                   alt="City exploration" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 5, 2025</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Burnout Epidemic: Why Taking a Break Isn't Selfish
                </h2>
                <p class="text-slate-600">
                  Society tells us to push through, but sometimes the most productive thing you can do is step away. Here's how to do it right.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=250&fit=crop&crop=center" 
                   alt="Sunset journey" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>December 28, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  What Nobody Tells You About Finding Your Purpose
                </h2>
                <p class="text-slate-600">
                  Spoiler alert: It's not a lightning bolt moment. Here's what the journey of self-discovery actually looks like.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=250&fit=crop&crop=center" 
                   alt="Ocean view" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>December 20, 2024</span>
                  <span>•</span>
                  <span>9 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Art of Slow Travel: Why Rushing Ruins Everything
                </h2>
                <p class="text-slate-600">
                  In our Instagram-driven world, we've forgotten how to truly experience a place. Here's how to travel like you mean it.
                </p>
                <a href="#" class="text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>
          </div>

          <div class="text-center mt-16">
            <a href="#" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              Load More Articles
              <i data-lucide="arrow-right" class="w-5 h-5 ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  pricing: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              Simple, <span class="text-brand-orange">Transparent</span> Pricing
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              One personalized blueprint. One transformative journey. No hidden fees, no recurring charges.
            </p>
          </div>

          <!-- Pioneer Offer Banner -->
          <div class="bg-gradient-to-r from-brand-green to-brand-teal rounded-2xl p-8 mb-12 text-center text-white">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <i data-lucide="star" class="w-8 h-8 text-yellow-300"></i>
              <h2 class="text-3xl font-display font-bold">Pioneer Offer</h2>
              <i data-lucide="star" class="w-8 h-8 text-yellow-300"></i>
            </div>
            <p class="text-xl mb-4">Be one of our first 5 adventurers and get your custom blueprint completely FREE!</p>
            <p class="text-lg opacity-90">Help us perfect our process while getting the full Ready Set Journey experience at no cost.</p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            <!-- Pioneer Plan -->
            <div class="relative bg-gradient-to-br from-brand-green/10 to-brand-teal/10 rounded-3xl p-8 border-2 border-brand-green shadow-xl">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-brand-green text-white px-6 py-2 rounded-full text-sm font-semibold">LIMITED TIME</span>
              </div>
              <div class="text-center space-y-6">
                <h3 class="text-2xl font-display font-bold text-brand-dark">Pioneer</h3>
                <div class="space-y-2">
                  <div class="text-5xl font-bold text-brand-green">FREE</div>
                  <p class="text-slate-600">For the first 5 adventurers</p>
                </div>
                <ul class="space-y-4 text-left">
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green mt-1 flex-shrink-0"></i>
                    <span>15-minute discovery call</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green mt-1 flex-shrink-0"></i>
                    <span>Custom journey blueprint</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green mt-1 flex-shrink-0"></i>
                    <span>Detailed itinerary & recommendations</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green mt-1 flex-shrink-0"></i>
                    <span>Local contacts & connections</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-green mt-1 flex-shrink-0"></i>
                    <span>Booking guidance & support</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="star" class="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0"></i>
                    <span class="font-semibold">Feedback session to help us improve</span>
                  </li>
                </ul>
                <a href="/contact" class="nav-link w-full inline-flex items-center justify-center bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                  <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                  Claim Your Free Spot
                </a>
              </div>
            </div>

            <!-- Standard Plan -->
            <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
              <div class="text-center space-y-6">
                <h3 class="text-2xl font-display font-bold text-brand-dark">Standard Blueprint</h3>
                <div class="space-y-2">
                  <div class="text-5xl font-bold text-brand-orange">$79</div>
                  <p class="text-slate-600">One-time payment</p>
                </div>
                <ul class="space-y-4 text-left">
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>15-minute discovery call</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>Custom journey blueprint</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>Detailed itinerary & recommendations</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>Local contacts & connections</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>Booking guidance & support</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-brand-orange mt-1 flex-shrink-0"></i>
                    <span>Email support during planning</span>
                  </li>
                </ul>
                <a href="/contact" class="nav-link w-full inline-flex items-center justify-center border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                  <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                  Book Your Blueprint
                </a>
              </div>
            </div>

            <!-- Future Pricing -->
            <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div class="text-center space-y-6">
                <h3 class="text-2xl font-display font-bold text-brand-dark">Future Rate</h3>
                <div class="space-y-2">
                  <div class="text-5xl font-bold text-slate-600">$149</div>
                  <p class="text-slate-600">Starting July 1st, 2025</p>
                </div>
                <ul class="space-y-4 text-left">
                  <li class="flex items-start space-x-3">
                    <i data-lucide="check" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Everything in Standard</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="plus" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Extended 30-minute discovery call</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="plus" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Post-journey follow-up session</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="plus" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Priority support & faster delivery</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="plus" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Access to exclusive community</span>
                  </li>
                  <li class="flex items-start space-x-3">
                    <i data-lucide="plus" class="w-5 h-5 text-slate-600 mt-1 flex-shrink-0"></i>
                    <span>Quarterly group check-ins</span>
                  </li>
                </ul>
                <div class="w-full inline-flex items-center justify-center bg-slate-300 text-slate-600 font-semibold py-4 px-6 rounded-full text-lg cursor-not-allowed">
                  <i data-lucide="clock" class="w-5 h-5 mr-2"></i>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Section -->
          <div class="bg-slate-50 rounded-3xl p-12">
            <h2 class="text-3xl font-display font-bold text-brand-dark mb-8 text-center">Frequently Asked Questions</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">What exactly do I get?</h3>
                  <p class="text-slate-600">A detailed digital blueprint tailored to your interests, goals, and budget. This includes destinations, activities, local contacts, accommodation suggestions, and a day-by-day itinerary.</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">Do you book anything for me?</h3>
                  <p class="text-slate-600">No, we provide the blueprint and you maintain complete control over your bookings. This gives you flexibility and ensures you get the best deals.</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">How long does it take?</h3>
                  <p class="text-slate-600">After your discovery call, you'll receive your custom blueprint within 5 business days. The call itself is just 15 minutes.</p>
                </div>
              </div>
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">What if I don't like my blueprint?</h3>
                  <p class="text-slate-600">We offer one round of revisions to ensure your blueprint matches your vision. Our goal is your complete satisfaction.</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">Is this just for solo travelers?</h3>
                  <p class="text-slate-600">Not at all! We create blueprints for solo adventurers, couples, friends, and even small groups. Just let us know your situation during the call.</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-brand-dark mb-2">What about travel insurance and visas?</h3>
                  <p class="text-slate-600">We'll include guidance on visa requirements and travel insurance recommendations in your blueprint, but you'll handle the actual applications.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-16 space-y-8">
            <h2 class="text-3xl font-display font-bold text-brand-dark">Ready to Transform Your Travel?</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop planning generic trips. Start designing transformative journeys that prepare you for what's next.
            </p>
            <a href="/contact" class="nav-link inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
              Book Your 15-Min Call
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              Book Your <span class="text-brand-orange">Discovery Call</span>
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your travel into your future? Let's start with a 15-minute conversation about your next adventure.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-16">
            <!-- Booking Form -->
            <div class="bg-slate-50 rounded-3xl p-8">
              <h2 class="text-2xl font-display font-bold text-brand-dark mb-6">Schedule Your Free Call</h2>
              <form id="scheduling-form" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-brand-dark mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required 
                           class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-brand-dark mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required 
                           class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                  </div>
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-semibold text-brand-dark mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required 
                         class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-semibold text-brand-dark mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" 
                         class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                </div>
                
                <div>
                  <label for="timeSlot" class="block text-sm font-semibold text-brand-dark mb-2">Preferred Time *</label>
                  <select id="time-slots" name="timeSlot" required 
                          class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                    <option value="">Loading available times...</option>
                  </select>
                </div>
                
                <div>
                  <label for="interests" class="block text-sm font-semibold text-brand-dark mb-2">What interests you most about travel? *</label>
                  <textarea id="interests" name="interests" rows="3" required 
                            placeholder="e.g., Learning new skills, meeting locals, adventure activities, cultural immersion..."
                            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"></textarea>
                </div>
                
                <div>
                  <label for="goals" class="block text-sm font-semibold text-brand-dark mb-2">What are you seeking from your next journey? *</label>
                  <textarea id="goals" name="goals" rows="3" required 
                            placeholder="e.g., Career clarity, new perspectives, personal growth, skill development..."
                            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"></textarea>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="budget" class="block text-sm font-semibold text-brand-dark mb-2">Budget Range *</label>
                    <select id="budget" name="budget" required 
                            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                      <option value="">Select budget range...</option>
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                      <option value="$20,000+">$20,000+</option>
                    </select>
                  </div>
                  <div>
                    <label for="timeframe" class="block text-sm font-semibold text-brand-dark mb-2">When do you want to travel? *</label>
                    <select id="timeframe" name="timeframe" required 
                            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                      <option value="">Select timeframe...</option>
                      <option value="Next 1-3 months">Next 1-3 months</option>
                      <option value="Next 3-6 months">Next 3-6 months</option>
                      <option value="Next 6-12 months">Next 6-12 months</option>
                      <option value="More than 1 year">More than 1 year</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label for="additionalInfo" class="block text-sm font-semibold text-brand-dark mb-2">Anything else you'd like us to know?</label>
                  <textarea id="additionalInfo" name="additionalInfo" rows="3" 
                            placeholder="Special interests, accessibility needs, travel experience, etc."
                            class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"></textarea>
                </div>
                
                <button type="submit" 
                        class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <i data-lucide="calendar" class="w-5 h-5 mr-2 inline"></i>
                  Book My Discovery Call
                </button>
              </form>
            </div>

            <!-- What to Expect & Contact Info -->
            <div class="space-y-8">
              <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-3xl p-8">
                <h3 class="text-2xl font-display font-bold text-brand-dark mb-6">What to Expect</h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-sm font-bold text-brand-orange">1</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark mb-1">Quick & Focused</h4>
                      <p class="text-slate-600">Just 15 minutes to understand your travel goals and interests.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-sm font-bold text-brand-teal">2</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark mb-1">No Pressure</h4>
                      <p class="text-slate-600">This is about understanding if we're a good fit for each other.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span class="text-sm font-bold text-brand-green">3</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark mb-1">Immediate Value</h4>
                      <p class="text-slate-600">You'll leave with clarity and actionable insights, regardless of next steps.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h3 class="text-2xl font-display font-bold text-brand-dark mb-6">Get in Touch</h3>
                <div class="space-y-6">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <i data-lucide="mail" class="w-6 h-6 text-brand-orange"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark">Email</h4>
                      <a href="mailto:hello@readysetjourney.com" class="text-brand-orange hover:text-brand-orange/80 transition-colors">
                        hello@readysetjourney.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center">
                      <i data-lucide="clock" class="w-6 h-6 text-brand-teal"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark">Response Time</h4>
                      <p class="text-slate-600">Within 24 hours (usually much faster)</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center">
                      <i data-lucide="globe" class="w-6 h-6 text-brand-green"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-brand-dark">Time Zone</h4>
                      <p class="text-slate-600">Eastern Time (ET)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-slate-50 rounded-3xl p-8">
                <h3 class="text-xl font-display font-bold text-brand-dark mb-4">Follow Our Journey</h3>
                <div class="flex space-x-4">
                  <a href="https://www.linkedin.com/company/readysetjourney/" target="_blank" rel="noopener noreferrer" 
                     class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <i data-lucide="linkedin" class="w-6 h-6"></i>
                  </a>
                  <a href="https://instagram.com/readysetjourney" target="_blank" rel="noopener noreferrer" 
                     class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <i data-lucide="instagram" class="w-6 h-6"></i>
                  </a>
                  <a href="https://tiktok.com/@readysetjourney" target="_blank" rel="noopener noreferrer" 
                     class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <i data-lucide="video" class="w-6 h-6"></i>
                  </a>
                  <a href="https://facebook.com/readysetjourney" target="_blank" rel="noopener noreferrer" 
                     class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-brand-orange hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                    <i data-lucide="facebook" class="w-6 h-6"></i>
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