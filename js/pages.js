const pages = {
  home: () => `
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop&crop=center')] bg-cover bg-center opacity-5"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-6">
              <h1 class="text-5xl lg:text-7xl font-display font-bold leading-tight">
                Launch Your 
                <span class="text-brand-orange">Next</span> 
                <span class="text-brand-teal">Chapter</span>
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
            <p class="text-xl text-slate-600 max-w-2xl mx-auto">
              Your transformation begins with a single conversation. Book your free 15-minute call today.
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
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Real Cost of Not Taking That Sabbatical
                </h2>
                <p class="text-slate-600">
                  Burned out but afraid to take a break? Let's talk about what staying in the grind actually costs you in the long run.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center" 
                   alt="Cultural immersion" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  How to Travel Without Being a Tourist (And Why It Matters)
                </h2>
                <p class="text-slate-600">
                  There's a difference between seeing a place and understanding it. Here's how to cross that line and why it changes everything.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&h=250&fit=crop&crop=center" 
                   alt="Digital nomad" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  Midlife Crisis or Midlife Awakening? Choosing Your Adventure
                </h2>
                <p class="text-slate-600">
                  That restless feeling isn't a crisis – it's your authentic self trying to break free. Here's how to listen and respond wisely.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=250&fit=crop&crop=center" 
                   alt="Learning experience" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  The Skills You Actually Need for the Future (And Where to Learn Them)
                </h2>
                <p class="text-slate-600">
                  Forget traditional education. The most valuable skills for tomorrow are being taught in unexpected places around the world.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>

            <article class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=250&fit=crop&crop=center" 
                   alt="Personal growth" 
                   class="w-full h-48 object-cover">
              <div class="p-6 space-y-4">
                <div class="flex items-center space-x-2 text-sm text-slate-500">
                  <span>January 19, 2025</span>
                  <span>•</span>
                  <span>4 min read</span>
                </div>
                <h2 class="text-xl font-display font-bold text-brand-dark hover:text-brand-orange transition-colors">
                  Why "Following Your Passion" Is Terrible Advice (And What to Do Instead)
                </h2>
                <p class="text-slate-600">
                  The passion myth has led more people astray than any other career advice. Here's a better framework for finding meaningful work.
                </p>
                <a href="#" class="inline-flex items-center text-brand-orange hover:text-brand-teal font-semibold transition-colors">
                  Read More <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                </a>
              </div>
            </article>
          </div>

          <div class="text-center mt-16 space-y-6">
            <h2 class="text-3xl font-display font-bold text-brand-dark">Ready for Your Own Story?</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Stop reading about other people's adventures and start planning your own transformative journey.
            </p>
            <a href="/contact" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
              Book Your 15-Min Call
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
              Simple <span class="text-brand-orange">Pricing</span>
            </h1>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Three tiers designed to match your needs and budget. Every plan starts with a free 15-minute discovery call to understand exactly what you're looking for.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            <!-- Starter Plan -->
            <div class="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-slate-100 overflow-hidden">
              <div class="p-8 space-y-6">
                <div class="text-center space-y-4">
                  <h3 class="text-2xl font-display font-bold text-brand-dark">Starter Blueprint</h3>
                  <div class="space-y-2">
                    <div class="text-4xl font-bold text-brand-orange">$179</div>
                    <p class="text-slate-600">Perfect for focused adventures</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="bg-brand-orange/10 rounded-xl p-4">
                    <h4 class="font-semibold text-brand-dark mb-2">What's Included:</h4>
                    <ul class="space-y-2 text-sm text-slate-700">
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Free 15-minute discovery call</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>3-5 page custom blueprint</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>1-2 destinations focus</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Key activities & experiences</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Essential contact information</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>Basic accommodation guidance</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-orange mr-2"></i>5-day delivery</li>
                    </ul>
                  </div>
                </div>
                
                <a href="/contact" class="block w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105">
                  Start with Discovery Call
                </a>
              </div>
            </div>

            <!-- Pro Plan -->
            <div class="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-brand-teal relative overflow-hidden">
              <div class="absolute top-0 left-0 right-0 bg-brand-teal text-white text-center py-2 text-sm font-semibold">
                Most Popular
              </div>
              <div class="p-8 pt-12 space-y-6">
                <div class="text-center space-y-4">
                  <h3 class="text-2xl font-display font-bold text-brand-dark">Pro Blueprint</h3>
                  <div class="space-y-2">
                    <div class="text-4xl font-bold text-brand-teal">$349</div>
                    <p class="text-slate-600">For comprehensive adventures</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="bg-brand-teal/10 rounded-xl p-4">
                    <h4 class="font-semibold text-brand-dark mb-2">Everything in Starter, plus:</h4>
                    <ul class="space-y-2 text-sm text-slate-700">
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>7-12 page detailed blueprint</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>2-4 destinations coverage</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Day-by-day flow & timeline</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Local connections & communities</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Interactive maps & resources</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Budget breakdown & tips</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Alternative options included</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-teal mr-2"></i>Cultural etiquette guide</li>
                    </ul>
                  </div>
                </div>
                
                <a href="/contact" class="block w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-4 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105">
                  Start with Discovery Call
                </a>
              </div>
            </div>

            <!-- Concierge Plan -->
            <div class="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-slate-100 overflow-hidden">
              <div class="p-8 space-y-6">
                <div class="text-center space-y-4">
                  <h3 class="text-2xl font-display font-bold text-brand-dark">Concierge Experience</h3>
                  <div class="space-y-2">
                    <div class="text-4xl font-bold text-brand-green">$729</div>
                    <p class="text-slate-600">Complete support & guidance</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="bg-brand-green/10 rounded-xl p-4">
                    <h4 class="font-semibold text-brand-dark mb-2">Everything in Pro, plus:</h4>
                    <ul class="space-y-2 text-sm text-slate-700">
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>15-20 page premium blueprint</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Multiple destination options</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Detailed packing lists</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Emergency support guide</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Pre-trip preparation call (30 min)</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>On-trip support (90 minutes total)</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Post-trip integration call</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-4 h-4 text-brand-green mr-2"></i>Priority email support</li>
                    </ul>
                  </div>
                </div>
                
                <a href="/contact" class="block w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-4 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105">
                  Start with Discovery Call
                </a>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 mb-16">
            <h2 class="text-3xl font-display font-bold text-brand-dark mb-8 text-center">How the Process Works</h2>
            <div class="grid md:grid-cols-4 gap-8">
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="phone" class="w-8 h-8 text-brand-orange"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">1. Free Discovery Call</h3>
                <p class="text-sm text-slate-600">15-minute conversation to understand your goals and interests</p>
              </div>
              
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="credit-card" class="w-8 h-8 text-brand-teal"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">2. Choose Your Plan</h3>
                <p class="text-sm text-slate-600">Select the blueprint level that matches your needs</p>
              </div>
              
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="edit" class="w-8 h-8 text-brand-green"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">3. We Craft Your Blueprint</h3>
                <p class="text-sm text-slate-600">Personalized itinerary delivered within 5 business days</p>
              </div>
              
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="compass" class="w-8 h-8 text-purple-600"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">4. Live Your Adventure</h3>
                <p class="text-sm text-slate-600">Book and experience your transformative journey</p>
              </div>
            </div>
          </div>

          <div class="text-center space-y-8">
            <h2 class="text-3xl font-display font-bold text-brand-dark">Questions? Let's Talk.</h2>
            <p class="text-lg text-slate-600 max-w-2xl mx-auto">
              Every journey starts with a conversation. Book your free 15-minute discovery call to explore which blueprint is right for you.
            </p>
            <div class="space-y-4">
              <a href="/contact" class="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                <i data-lucide="calendar" class="w-6 h-6 mr-3"></i>
                Book Your Free Discovery Call
              </a>
              <p class="text-sm text-slate-500">
                No commitment required • Get clarity on your perfect adventure • Takes just 15 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center space-y-6 mb-16">
            <h1 class="text-5xl lg:text-6xl font-display font-bold text-brand-dark">
              Let's <span class="text-brand-orange">Talk</span>
            </h1>
            <p class="text-xl text-slate-600 leading-relaxed">
              Your transformation begins with a conversation. Book your free 15-minute discovery call to explore your perfect adventure.
            </p>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl">
            <div class="grid lg:grid-cols-2 gap-12">
              <div class="space-y-8">
                <div>
                  <h2 class="text-3xl font-display font-bold text-brand-dark mb-6">What to Expect</h2>
                  <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                      <div class="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="clock" class="w-4 h-4 text-brand-orange"></i>
                      </div>
                      <div>
                        <h3 class="font-semibold text-brand-dark mb-2">Just 15 Minutes</h3>
                        <p class="text-slate-600 text-sm">A focused conversation about your goals, interests, and what you're seeking from travel.</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="w-8 h-8 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="heart" class="w-4 h-4 text-brand-teal"></i>
                      </div>
                      <div>
                        <h3 class="font-semibold text-brand-dark mb-2">No Pressure</h3>
                        <p class="text-slate-600 text-sm">This is about understanding if we're a good fit for each other. No hard sell, just honest conversation.</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="w-8 h-8 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i data-lucide="lightbulb" class="w-4 h-4 text-brand-green"></i>
                      </div>
                      <div>
                        <h3 class="font-semibold text-brand-dark mb-2">Immediate Clarity</h3>
                        <p class="text-slate-600 text-sm">Even if we don't work together, you'll leave with clearer direction about your next adventure.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-brand-orange/10 rounded-2xl p-6">
                  <h3 class="font-semibold text-brand-dark mb-3">What We'll Discuss:</h3>
                  <ul class="space-y-2 text-sm text-slate-700">
                    <li>• Your current situation and what you're seeking</li>
                    <li>• Travel interests and bucket list destinations</li>
                    <li>• Skills you'd like to develop or passions to explore</li>
                    <li>• Timeline, budget, and practical considerations</li>
                    <li>• Which blueprint option might be perfect for you</li>
                  </ul>
                </div>
              </div>

              <div>
                <form id="scheduling-form" class="space-y-6">
                  <h2 class="text-2xl font-display font-bold text-brand-dark mb-6">Schedule Your Call</h2>
                  
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label for="firstName" class="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required 
                             class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required 
                             class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                    </div>
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required 
                           class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                  </div>
                  
                  <div>
                    <label for="phone" class="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" 
                           class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                  </div>
                  
                  <div>
                    <label for="timeSlot" class="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                    <select id="time-slots" name="timeSlot" required 
                            class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                      <option value="">Loading available times...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="interests" class="block text-sm font-medium text-slate-700 mb-2">Travel Interests *</label>
                    <textarea id="interests" name="interests" rows="3" required 
                              placeholder="What type of experiences are you most drawn to?"
                              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors resize-none"></textarea>
                  </div>
                  
                  <div>
                    <label for="goals" class="block text-sm font-medium text-slate-700 mb-2">What You're Seeking *</label>
                    <textarea id="goals" name="goals" rows="3" required 
                              placeholder="Career clarity? New skills? Personal growth? Adventure?"
                              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors resize-none"></textarea>
                  </div>
                  
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label for="budget" class="block text-sm font-medium text-slate-700 mb-2">Budget Range *</label>
                      <select id="budget" name="budget" required 
                              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                        <option value="">Select budget range...</option>
                        <option value="Under $2,000">Under $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                        <option value="$20,000+">$20,000+</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label for="timeframe" class="block text-sm font-medium text-slate-700 mb-2">When to Travel *</label>
                      <select id="timeframe" name="timeframe" required 
                              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors">
                        <option value="">Select timeframe...</option>
                        <option value="Next 1-3 months">Next 1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="1+ years">1+ years</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label for="additionalInfo" class="block text-sm font-medium text-slate-700 mb-2">Anything Else?</label>
                    <textarea id="additionalInfo" name="additionalInfo" rows="2" 
                              placeholder="Any specific questions or additional information you'd like to share?"
                              class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors resize-none"></textarea>
                  </div>
                  
                  <button type="submit" 
                          class="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center">
                    <i data-lucide="calendar" class="w-5 h-5 mr-2"></i>
                    Request This Time Slot
                  </button>
                  
                  <p class="text-xs text-slate-500 text-center">
                    By submitting this form, you're requesting a specific time slot. Bobby Jones will confirm availability and send you calendar details.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          <div class="mt-16 text-center space-y-6">
            <h2 class="text-2xl font-display font-bold text-brand-dark">Other Ways to Connect</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="space-y-3">
                <div class="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="mail" class="w-6 h-6 text-brand-orange"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">Email</h3>
                <p class="text-slate-600">hello@bobbyjonesadventures.com</p>
              </div>
              
              <div class="space-y-3">
                <div class="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="clock" class="w-6 h-6 text-brand-teal"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">Response Time</h3>
                <p class="text-slate-600">Within 24 hours</p>
              </div>
              
              <div class="space-y-3">
                <div class="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto">
                  <i data-lucide="globe" class="w-6 h-6 text-brand-green"></i>
                </div>
                <h3 class="font-semibold text-brand-dark">Time Zone</h3>
                <p class="text-slate-600">Eastern Time (ET)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};