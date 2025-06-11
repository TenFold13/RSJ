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
              <a href="/contact" class="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Book Your 15-Min Call
              </a>
              <a href="/how-it-works" class="inline-flex items-center justify-center border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
              <h3 class="text-xl font-semibold text-slate-800">Generic Travel Sucks</h3>
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
            <a href="/contact" class="inline-flex items-center bg-white text-brand-orange hover:bg-slate-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
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
              About <span class="text-brand-orange">Bobby</span> <span class="text-brand-teal">Jones</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed">
              Travel isn't just about seeing places – it's about discovering who you're meant to become.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div class="space-y-6">
              <h2 class="text-3xl font-display font-bold text-brand-dark">Why This Matters</h2>
              <div class="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Most people don't even know what they want out of life, let alone where they should travel. 
                  So what do they do? They default to whatever their parents did: university, some dead-end job, 
                  or a bland all-inclusive vacation where the only adventure is not getting food poisoning.
                </p>
                <p>
                  Bobby Jones isn't just a trip planning service. It's a launchpad for your next chapter — 
                  whether that's a gap year, a midlife pivot, a break from the grind, or figuring out what 
                  you want to do before wasting years in the wrong direction.
                </p>
              </div>
            </div>
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=center" 
                   alt="Bobby Jones" 
                   class="rounded-2xl shadow-xl w-full">
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 mb-16">
            <h2 class="text-3xl font-display font-bold text-brand-dark mb-8 text-center">What Makes This Different</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <i data-lucide="compass" class="w-6 h-6 text-brand-orange"></i>
                </div>
                <h3 class="text-xl font-semibold text-brand-dark">Purpose Over Tourism</h3>
                <p class="text-slate-600">This isn't about seeing stuff. It's about doing and discovering — new skills, new people, new sides of yourself.</p>
              </div>
              
              <div class="space-y-4">
                <div class="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center">
                  <i data-lucide="users" class="w-6 h-6 text-brand-teal"></i>
                </div>
                <h3 class="text-xl font-semibold text-brand-dark">Meaningful Connections</h3>
                <p class="text-slate-600">Build relationships with inspiring locals and fellow travelers who share your values and ambitions.</p>
              </div>
              
              <div class="space-y-4">
                <div class="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center">
                  <i data-lucide="trending-up" class="w-6 h-6 text-brand-green"></i>
                </div>
                <h3 class="text-xl font-semibold text-brand-dark">Future-Ready Skills</h3>
                <p class="text-slate-600">Return with practical abilities and insights that directly apply to your career and life goals.</p>
              </div>
              
              <div class="space-y-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i data-lucide="lightbulb" class="w-6 h-6 text-purple-600"></i>
                </div>
                <h3 class="text-xl font-semibold text-brand-dark">Clarity & Direction</h3>
                <p class="text-slate-600">Come back knowing exactly what you want to do next — and save yourself years of uncertainty.</p>
              </div>
            </div>
          </div>

          <div class="text-center space-y-8">
            <h2 class="text-3xl font-display font-bold text-brand-dark">The Real Benefit</h2>
            <div class="bg-gradient-to-br from-brand-orange/10 to-brand-teal/10 rounded-2xl p-8 space-y-4">
              <p class="text-xl text-slate-700 leading-relaxed">
                You come back with more than souvenirs. You come back with new passions, connections, 
                and a story you don't have to embellish. Most importantly, you figure out what you want 
                to do next — potentially saving yourself years and thousands of dollars in the wrong direction.
              </p>
            </div>
            
            <a href="/contact" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
              Start Your Journey Today
            </a>
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
              <a href="/contact" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                Book Your 15-Min Call
              </a>
              <a href="/pricing" class="inline-flex items-center border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
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
                  More young people are saying no to the traditional college rush and yes to discovering themselves first. Here's why this trend matters for everyone.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
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
                  The Death of "Follow Your Passion" (And What Actually Works)
                </h2>
                <p class="text-slate-600">
                  That advice everyone gives you? It's terrible. Here's what successful people actually do to find meaningful work.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center" 
                   alt="City exploration" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 12, 2025</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  Why Your Quarter-Life Crisis Is Actually a Gift
                </h2>
                <p class="text-slate-600">
                  That feeling of being lost? It's not a bug, it's a feature. Here's how to use uncertainty as your compass.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&h=250&fit=crop&crop=center" 
                   alt="Cultural immersion" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 8, 2025</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Real Reason Most Travel Doesn't Change You
                </h2>
                <p class="text-slate-600">
                  You've been to 20 countries but feel exactly the same? Here's what transformative travel actually looks like.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center" 
                   alt="Adventure planning" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 5, 2025</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  How to Escape the "What Should I Do With My Life?" Loop
                </h2>
                <p class="text-slate-600">
                  Stop overthinking and start experimenting. A practical guide to finding direction through action.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=250&fit=crop&crop=center" 
                   alt="Sunset journey" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 1, 2025</span>
                  <span>•</span>
                  <span>9 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Midlife Pivot: It's Never Too Late to Start Over
                </h2>
                <p class="text-slate-600">
                  Success without fulfillment is the ultimate failure. Here's how to redesign your life at any age.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="text-center mt-16">
            <a href="/contact" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
              Ready to Start Your Journey?
            </a>
          </div>
        </div>
      </div>
    </section>
  `
};