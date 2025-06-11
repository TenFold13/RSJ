// Page content definitions
const pages = {
  home: () => `
    <section class="relative text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-emerald-500/20 opacity-50"></div>
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(249, 115, 22, 0.2) 0%, transparent 50%);"></div>
      </div>
      <div class="relative container mx-auto px-6 py-24 md:py-32 text-center z-10">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-display bg-gradient-to-r from-white via-white to-slate-200 bg-clip-text text-transparent">
            Stop Settling.<br/>
            <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Start Living.</span>
          </h1>
          <p class="text-xl md:text-2xl max-w-4xl mx-auto text-slate-200 mb-12 leading-relaxed font-medium">
            Most people don't even know what they want out of life, let alone where they should travel. 
            <span class="text-white font-semibold">RSJ is your launchpad</span> to a life that actually means something.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/contact" class="nav-link group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 flex items-center">
              <i data-lucide="phone" class="mr-3 w-6 h-6 group-hover:animate-pulse"></i>
              Book Your 15-Min Call (FREE)
            </a>
            <p class="text-slate-300 text-sm">No bullshit. No bookings. Just your perfect journey blueprint.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="compass" class="w-6 h-6 text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Fuck Generic Travel</h3>
              <p class="text-slate-200">Your passions become your itinerary. Space exploration? Ancient pottery? Street art? We got you.</p>
            </div>
            <div class="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="users" class="w-6 h-6 text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Real Connections</h3>
              <p class="text-slate-200">Meet people who actually matter. Build your network while building yourself.</p>
            </div>
            <div class="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="trending-up" class="w-6 h-6 text-white"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 font-display">Come Back Changed</h3>
              <p class="text-slate-200">New skills, new clarity, new direction. Save years of wandering aimlessly.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <section class="py-24 bg-white relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display">
            This Isn't About <span class="text-primary-600">Seeing Stuff</span>
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            It's about discovering who you really are and what you're capable of. 
            <span class="font-semibold text-slate-900">Your journey blueprint isn't just an itinerary—it's your roadmap to transformation.</span>
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div class="space-y-8">
            <div class="group flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="lightbulb" class="w-6 h-6 text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Skip The Default Script</h3>
                <p class="text-slate-600">University → boring job → retirement isn't the only path. Let's find one that actually fits you.</p>
              </div>
            </div>
            
            <div class="group flex items-start space-x-4 p-6 bg-gradient-to-r from-emerald-50 to-primary-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="target" class="w-6 h-6 text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Learn What Actually Matters</h3>
                <p class="text-slate-600">AI ethics in Tokyo. Pottery in Portugal. Sustainable farming in Costa Rica. Skills that prepare you for what's next.</p>
              </div>
            </div>
            
            <div class="group flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="award" class="w-6 h-6 text-white"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2 font-display">Return With Purpose</h3>
                <p class="text-slate-600">Not just photos and stories. Come back with clarity on your next move and the network to make it happen.</p>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-[4/5] bg-gradient-to-br from-primary-500 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Young person exploring a vibrant city street with notebook in hand" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300">
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <p class="text-sm font-semibold text-slate-900">Live Blueprint Session</p>
              </div>
              <p class="text-xs text-slate-600 mt-1">Building your perfect journey...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-emerald-500/10"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-6 font-display">
            Ready to Stop <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Wondering "What If?"</span>
          </h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your perfect journey is one conversation away. Let's build something that actually changes your life.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 class="text-3xl font-bold mb-6 font-display">Here's How This Works:</h3>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 class="font-semibold mb-1">15-Minute Call</h4>
                      <p class="text-slate-300 text-sm">Tell us your passions, goals, and what's missing from your life.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 class="font-semibold mb-1">We Build Your Blueprint</h4>
                      <p class="text-slate-300 text-sm">Custom itinerary crafted around your interests, not generic tourist traps.</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 class="font-semibold mb-1">You Book & Go</h4>
                      <p class="text-slate-300 text-sm">We don't handle bookings—you get the blueprint, you make it happen.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div class="bg-gradient-to-r from-primary-500 to-emerald-500 p-8 rounded-2xl mb-6">
                  <i data-lucide="phone" class="w-16 h-16 text-white mx-auto mb-4 animate-pulse-slow"></i>
                  <h4 class="text-2xl font-bold mb-2">Your Call Awaits</h4>
                  <p class="text-white/90 mb-4">No sales pitch. No pressure. Just clarity.</p>
                </div>
                <a href="/contact" class="nav-link bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center">
                  <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
                  Book Your Free Call Now
                </a>
                <p class="text-slate-400 text-xs mt-3">Seriously, what do you have to lose?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  about: () => `
    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-display">
            Most People Are <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">Living Someone Else's Life</span>
          </h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-12">
            They follow the script: school, job, retirement. But what if there's something better? 
            <span class="font-semibold text-slate-900">What if you could design a life that's actually yours?</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-black text-center text-slate-900 mb-4 font-display">Is This You?</h2>
          <p class="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
            If any of these hit home, you're exactly who we built RSJ for.
          </p>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="graduation-cap" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 font-display">The "Now What?" Crowd</h3>
              <p class="text-slate-600 leading-relaxed">
                Just finished school? Don't want to rot in a classroom for 4 more years or jump into some soul-crushing job? 
                <span class="font-semibold text-slate-900">Let's build you an adventure that actually means something.</span>
              </p>
            </div>
            
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="briefcase-business" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 font-display">Burned-Out Professionals</h3>
              <p class="text-slate-600 leading-relaxed">
                Your soul is dying in that 9-to-5. Before you quit your job (or burn down the office), 
                <span class="font-semibold text-slate-900">let's get you a real sabbatical that doesn't just involve yoga and green juice.</span>
              </p>
            </div>
            
            <div class="group bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="gem" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 font-display">Midlife Crisis Legends</h3>
              <p class="text-slate-600 leading-relaxed">
                Sports car or actual life reboot? 
                <span class="font-semibold text-slate-900">Fuck it, let's find your new passion on the road to genuine fulfillment.</span>
              </p>
            </div>
            
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="sunset" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 font-display">Discerning Retirees</h3>
              <p class="text-slate-600 leading-relaxed">
                You've earned more than generic getaways. 
                <span class="font-semibold text-slate-900">How about pottery in Portugal, street art in Buenos Aires, or mastering something with a pulse?</span>
              </p>
            </div>
            
            <div class="group bg-gradient-to-br from-primary-50 to-emerald-50 p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="sparkles" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-4 font-display">Anyone Who Wants More</h3>
              <p class="text-slate-600 leading-relaxed">
                If you're sick of "regular" travel and crave depth, connection, and real experiences, 
                <span class="font-semibold text-slate-900">this is your escape hatch.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 font-display">
              Why RSJ <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Actually Works</span>
            </h2>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We're not just another travel agency. We're your transformation catalyst.
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="compass" class="w-6 h-6 text-white"></i>
                  </div>
                  <h3 class="text-2xl font-bold font-display">It's About Discovery, Not Sightseeing</h3>
                </div>
                <p class="text-slate-300 leading-relaxed">
                  Forget passive tourism. RSJ is about active participation—learning new skills, building your network, 
                  and uncovering parts of yourself you didn't know existed.
                </p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="lightbulb" class="w-6 h-6 text-white"></i>
                  </div>
                  <h3 class="text-2xl font-bold font-display">An Alternative to the Script</h3>
                </div>
                <p class="text-slate-300 leading-relaxed">
                  We offer a path that might genuinely alter your life's trajectory. Break free from expectations 
                  and design something that actually fits who you are.
                </p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="award" class="w-6 h-6 text-white"></i>
                  </div>
                  <h3 class="text-2xl font-bold font-display">Come Back Transformed</h3>
                </div>
                <p class="text-slate-300 leading-relaxed">
                  You'll return with more than stories. Expect new passions, real connections, 
                  and crystal clarity on your next steps. Save years of wandering aimlessly.
                </p>
              </div>
            </div>
            
            <div class="relative">
              <div class="aspect-[3/4] bg-gradient-to-br from-primary-500 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Person journaling while overlooking a stunning landscape" class="w-full h-full object-cover opacity-90">
              </div>
              <div class="absolute -bottom-8 -right-8 bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
                <div class="text-center">
                  <div class="text-3xl font-bold text-primary-600 mb-1">47</div>
                  <div class="text-sm font-semibold">Life-Changing Journeys</div>
                  <div class="text-xs text-slate-600">And counting...</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-16">
            <a href="/contact" class="nav-link bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-primary-500/25 inline-flex items-center">
              <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
              Ready to Break Free? Book Your Call
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  howItWorks: () => `
    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-display">
            Dead Simple. <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">Life-Changing.</span>
          </h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-12">
            Skip the endless research and generic recommendations. 
            <span class="font-semibold text-slate-900">We turn your passions into your perfect journey in three simple steps.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="space-y-24">
            <!-- Step 1 -->
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="lg:order-1">
                <div class="flex items-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mr-6">1</div>
                  <h2 class="text-4xl font-black text-slate-900 font-display">One 15-Minute Call</h2>
                </div>
                <div class="space-y-6">
                  <p class="text-xl text-slate-600 leading-relaxed">
                    No sales pitch. No 2-hour "discovery session." Just 15 minutes where you tell us what actually excites you.
                  </p>
                  <div class="bg-gradient-to-r from-primary-50 to-emerald-50 p-6 rounded-2xl border border-primary-100">
                    <h3 class="font-bold text-slate-900 mb-3">We'll Ask About:</h3>
                    <ul class="space-y-2 text-slate-700">
                      <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>Your obsessions and interests</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>What you're seeking (skills, clarity, adventure)</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>Your budget reality</li>
                      <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>When you want to go</li>
                    </ul>
                  </div>
                  <p class="text-sm text-slate-500 italic">
                    "Space exploration, starting a podcast, night photography, and glamping." 
                    Cool, we can work with that.
                  </p>
                </div>
              </div>
              <div class="lg:order-2">
                <div class="relative">
                  <div class="aspect-square bg-gradient-to-br from-primary-500 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Person on a video call with travel maps in background" class="w-full h-full object-cover opacity-90">
                  </div>
                  <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span class="text-sm font-semibold text-slate-900">Live Call</span>
                    </div>
                    <p class="text-xs text-slate-600 mt-1">15 min • No pressure</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div class="relative">
                  <div class="aspect-[4/5] bg-gradient-to-br from-emerald-500 to-primary-500 rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div class="w-full h-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div class="text-center text-white p-8">
                        <i data-lucide="file-text" class="w-20 h-20 mx-auto mb-4 opacity-80"></i>
                        <h3 class="text-2xl font-bold mb-2">Your Blueprint</h3>
                        <p className="text-white/80">Custom-crafted itinerary</p>
                      </div>
                    </div>
                  </div>
                  <div class="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-primary-600 mb-1">5-10</div>
                      <div class="text-xs font-semibold text-slate-900">Pages</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex items-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mr-6">2</div>
                  <h2 class="text-4xl font-black text-slate-900 font-display">We Build Your Blueprint</h2>
                </div>
                <div class="space-y-6">
                  <p class="text-xl text-slate-600 leading-relaxed">
                    No generic templates. No cookie-cutter itineraries. We research the hell out of your interests and craft something unique.
                  </p>
                  <div class="bg-gradient-to-r from-emerald-50 to-primary-50 p-6 rounded-2xl border border-emerald-100">
                    <h3 class="font-bold text-slate-900 mb-3">Your Blueprint Includes:</h3>
                    <ul class="space-y-2 text-slate-700">
                      <li class="flex items-center"><i data-lucide="map-pin" class="w-5 h-5 text-primary-500 mr-3"></i>Strategic destinations that make sense</li>
                      <li class="flex items-center"><i data-lucide="calendar" class="w-5 h-5 text-primary-500 mr-3"></i>Day-by-day detailed flow</li>
                      <li class="flex items-center"><i data-lucide="users" class="w-5 h-5 text-primary-500 mr-3"></i>Networking events and meetups</li>
                      <li class="flex items-center"><i data-lucide="book-open" class="w-5 h-5 text-primary-500 mr-3"></i>Learning workshops and experiences</li>
                      <li class="flex items-center"><i data-lucide="heart" class="w-5 h-5 text-primary-500 mr-3"></i>Cultural immersion that matters</li>
                    </ul>
                  </div>
                  <p class="text-sm text-slate-500 italic">
                    Delivered within 5 business days. No endless back-and-forth.
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="lg:order-1">
                <div class="flex items-center mb-8">
                  <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl font-black mr-6">3</div>
                  <h2 class="text-4xl font-black text-slate-900 font-display">You Book & Go Live It</h2>
                </div>
                <div class="space-y-6">
                  <p class="text-xl text-slate-600 leading-relaxed">
                    We don't handle bookings—you do. You get complete control over flights, hotels, and activities. 
                    <span class="font-semibold text-slate-900">We just make sure you know exactly what to book.</span>
                  </p>
                  <div class="bg-gradient-to-r from-primary-50 to-emerald-50 p-6 rounded-2xl border border-primary-100">
                    <h3 class="font-bold text-slate-900 mb-3">You're In Complete Control:</h3>
                    <ul class="space-y-2 text-slate-700">
                      <li class="flex items-center"><i data-lucide="plane" class="w-5 h-5 text-emerald-500 mr-3"></i>Book flights when you want</li>
                      <li class="flex items-center"><i data-lucide="bed" class="w-5 h-5 text-emerald-500 mr-3"></i>Choose accommodations in your budget</li>
                      <li class="flex items-center"><i data-lucide="ticket" class="w-5 h-5 text-emerald-500 mr-3"></i>Register for recommended activities</li>
                      <li class="flex items-center"><i data-lucide="edit" class="w-5 h-5 text-emerald-500 mr-3"></i>Customize however you want</li>
                    </ul>
                  </div>
                  <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                    <p class="text-sm text-amber-800">
                      <strong>Why we don't book for you:</strong> You know your preferences better than anyone. 
                      Plus, this keeps our costs (and your costs) way down.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:order-2">
                <div class="relative">
                  <div class="aspect-square bg-gradient-to-br from-emerald-500 to-primary-500 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Person with backpack looking at a beautiful destination" class="w-full h-full object-cover opacity-90">
                  </div>
                  <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-emerald-600 mb-1">🎯</div>
                      <div class="text-sm font-semibold text-slate-900">Mission: Accomplished</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black mb-8 font-display">
            Stop Overthinking. <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Start Living.</span>
          </h2>
          <p class="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            You could spend months researching, or you could have your perfect blueprint in 5 days. 
            <span class="text-white font-semibold">Your choice.</span>
          </p>
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="clock" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">15 Minutes</h3>
                <p class="text-slate-300 text-sm">One short call to understand your goals</p>
              </div>
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="calendar" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">5 Business Days</h3>
                <p class="text-slate-300 text-sm">Your custom blueprint delivered</p>
              </div>
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="rocket" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">Life Changed</h3>
                <p class="text-slate-300 text-sm">Return with new clarity and purpose</p>
              </div>
            </div>
          </div>
          <a href="/contact" class="nav-link bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-primary-500/25 inline-flex items-center">
            <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
            Book Your Call (It's Free)
          </a>
          <p class="text-slate-400 text-sm mt-4">Seriously, what's the worst that could happen?</p>
        </div>
      </div>
    </section>
  `,

  journeys: () => `
    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-display">
            Your Weird Interests = <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">Your Perfect Journey</span>
          </h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-12">
            Most travel is boring as hell. Generic tours, tourist traps, and Instagram photo ops. 
            <span class="font-semibold text-slate-900">We turn your actual passions into incredible adventures.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-primary-500 to-emerald-500 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black mb-6 font-display">Let's Get Specific</h2>
            <p class="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Say you love space exploration, want to start a podcast, enjoy night photography, and dig glamping. 
              Here's how we'd turn that into your perfect week:
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 class="text-3xl font-bold mb-8 font-display">Florida Space Coast Adventure</h3>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i data-lucide="map-pin" class="w-6 h-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-2">Strategic Location</h4>
                      <p class="text-white/90">Kennedy Space Center, SpaceX launch viewing, dark sky preserves for astrophotography</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i data-lucide="mic" class="w-6 h-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-2">Skill Building</h4>
                      <p class="text-white/90">Podcasting workshop in Orlando, connect with space journalists, interview opportunities</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i data-lucide="camera" class="w-6 h-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-2">Photography Magic</h4>
                      <p class="text-white/90">Night sky photography meetup, rocket launch shoot, astrophotography gear rental</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i data-lucide="tent" class="w-6 h-6 text-white"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-lg mb-2">Comfort Camping</h4>
                      <p class="text-white/90">Luxury glamping near Merritt Island, perfect for stargazing and rocket viewing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="relative">
                <div class="aspect-[4/5] bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Rocket launch with photographers in foreground" class="w-full h-full object-cover">
                </div>
                <div class="absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl">
                  <div class="text-center">
                    <div class="text-xl font-bold text-primary-600 mb-1">🚀</div>
                    <div class="text-sm font-semibold">Mission: Epic</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center mt-12">
              <p class="text-xl text-white/90 italic">
                This is the RSJ difference: <span class="font-bold text-white">high-impact experiences born from genuine personalization.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-black text-center text-slate-900 mb-4 font-display">More Blueprint Examples</h2>
          <p class="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
            Every journey is unique, but here are some real blueprints we've crafted for clients with specific interests.
          </p>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="laptop" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Digital Nomad Accelerator</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                Remote work burnout meets co-working culture in Lisbon + Barcelona. 
                Networking events, productivity workshops, and the perfect work-life blend.
              </p>
              <div class="text-xs text-primary-600 font-semibold">7 days • Portugal & Spain • €1,200-2,000</div>
            </div>
            
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="leaf" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Sustainability Deep Dive</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                Permaculture, renewable energy, and eco-villages across Costa Rica. 
                Perfect for career-switchers eyeing the green economy.
              </p>
              <div class="text-xs text-emerald-600 font-semibold">10 days • Costa Rica • $2,500-4,000</div>
            </div>
            
            <div class="group bg-gradient-to-br from-primary-50 to-emerald-50 p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="palette" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Creative Renaissance</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                Art workshops in Florence, connecting with local artists, 
                exploring how classical techniques inform modern creativity.
              </p>
              <div class="text-xs text-primary-600 font-semibold">14 days • Italy • €3,000-5,000</div>
            </div>
            
            <div class="group bg-gradient-to-br from-emerald-50 to-primary-50 p-8 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="brain" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Tech Ethics Explorer</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                AI ethics conferences, blockchain meetups, and startup culture in Silicon Valley. 
                Network with the people shaping our digital future.
              </p>
              <div class="text-xs text-emerald-600 font-semibold">5 days • California • $3,500-6,000</div>
            </div>
            
            <div class="group bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="mountain" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Mindful Adventure Quest</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                Meditation retreats + trekking in the Himalayas. 
                Perfect for burned-out executives seeking clarity and physical challenge.
              </p>
              <div class="text-xs text-primary-600 font-semibold">12 days • Nepal • $2,000-3,500</div>
            </div>
            
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i data-lucide="globe" class="w-8 h-8 text-white"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Cultural Bridge Builder</h3>
              <p class="text-slate-600 mb-4 text-sm leading-relaxed">
                Language immersion, homestays, and cultural exchange programs in Japan. 
                Build international connections and global perspective.
              </p>
              <div class="text-xs text-emerald-600 font-semibold">21 days • Japan • $4,000-7,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sample-itinerary" class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-black text-center text-slate-900 mb-8 font-display">
            A Real Day From A Real Blueprint
          </h2>
          <p class="text-center text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
            This is what your detailed journey blueprint looks like. Every day is planned, 
            but you have the flexibility to customize however you want.
          </p>
          <div id="itinerary-content" class="prose prose-lg lg:prose-xl max-w-none mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <p class="text-center text-slate-600">Loading sample itinerary...</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black mb-8 font-display">
            Your Interests → <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Your Adventure</span>
          </h2>
          <p class="text-xl text-slate-300 mb-12 leading-relaxed">
            Stop settling for generic travel. Let's turn your weird passions into something incredible.
          </p>
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="text-left space-y-4">
                <h3 class="text-2xl font-bold font-display">What We Need From You:</h3>
                <ul class="space-y-3 text-slate-300">
                  <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-400 mr-3"></i>Your actual interests (be specific!)</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-400 mr-3"></i>What you want to learn or achieve</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-400 mr-3"></i>Your budget reality check</li>
                  <li class="flex items-center"><i data-lucide="check" class="w-5 h-5 text-emerald-400 mr-3"></i>When you want to go</li>
                </ul>
              </div>
              <div class="text-left space-y-4">
                <h3 class="text-2xl font-bold font-display">What You Get:</h3>
                <ul class="space-y-3 text-slate-300">
                  <li class="flex items-center"><i data-lucide="arrow-right" class="w-5 h-5 text-primary-400 mr-3"></i>5-10 page detailed blueprint</li>
                  <li class="flex items-center"><i data-lucide="arrow-right" class="w-5 h-5 text-primary-400 mr-3"></i>Day-by-day itinerary</li>
                  <li class="flex items-center"><i data-lucide="arrow-right" class="w-5 h-5 text-primary-400 mr-3"></i>Networking opportunities</li>
                  <li class="flex items-center"><i data-lucide="arrow-right" class="w-5 h-5 text-primary-400 mr-3"></i>Learning experiences</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="/contact" class="nav-link bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-primary-500/25 inline-flex items-center">
            <i data-lucide="phone" class="mr-3 w-6 h-6"></i>
            Book Your Blueprint Call
          </a>
          <p class="text-slate-400 text-sm mt-4">15 minutes to change everything.</p>
        </div>
      </div>
    </section>
  `,

  pricing: () => `
    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-display">
            Simple Pricing. <span class="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent">No Bullshit.</span>
          </h1>
          <p class="text-xl text-slate-600 leading-relaxed mb-12">
            You're about to spend thousands on your journey. Spending a few hundred to make sure it's perfect? 
            <span class="font-semibold text-slate-900">That's just smart.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Starter -->
            <div class="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border-2 border-slate-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i data-lucide="map" class="w-8 h-8 text-white"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 mb-2 font-display">Starter</h2>
                <div class="text-4xl font-black text-slate-900 mb-2">$99</div>
                <p class="text-sm text-slate-600">One-page game plan</p>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">High-level strategic overview</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Key destinations & timing</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Top 3 must-do experiences</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Budget framework</span>
                </div>
              </div>
              
              <p class="text-xs text-slate-500 mb-6 italic">Perfect for testing the waters or simple trips.</p>
              
              <a href="/contact" class="nav-link w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 block">
                Get Started
              </a>
            </div>

            <!-- Pro (Most Popular) -->
            <div class="group relative bg-gradient-to-br from-primary-50 to-emerald-50 p-8 rounded-3xl border-2 border-primary-300 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 transform scale-105">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gradient-to-r from-primary-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i data-lucide="compass" class="w-8 h-8 text-white"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 mb-2 font-display">Pro</h2>
                <div class="text-4xl font-black text-slate-900 mb-2">$299</div>
                <p class="text-sm text-slate-600">Complete blueprint (5-10 pages)</p>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Everything in Starter</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="plus" class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Detailed day-by-day itinerary</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="plus" class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Networking events & meetups</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="plus" class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Learning workshops & experiences</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="plus" class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Local contact recommendations</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="plus" class="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Cultural immersion activities</span>
                </div>
              </div>
              
              <p class="text-xs text-slate-500 mb-6 italic">The sweet spot for most transformative journeys.</p>
              
              <a href="/contact" class="nav-link w-full bg-gradient-to-r from-primary-500 to-emerald-500 hover:from-primary-600 hover:to-emerald-600 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg block">
                Get Your Blueprint
              </a>
            </div>

            <!-- Concierge -->
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border-2 border-emerald-300 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300">
              <div class="text-center mb-8">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i data-lucide="crown" class="w-8 h-8 text-white"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 mb-2 font-display">Concierge</h2>
                <div class="text-4xl font-black text-slate-900 mb-2">$599</div>
                <p class="text-sm text-slate-600">Blueprint + live support</p>
              </div>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Everything in Pro</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="star" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">2 hours of live support calls</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="star" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">WhatsApp support during trip</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="star" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Local emergency contacts</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="star" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Priority response (2 hours)</span>
                </div>
                <div class="flex items-start">
                  <i data-lucide="star" class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0"></i>
                  <span class="text-slate-700">Alternative activity recommendations</span>
                </div>
              </div>
              
              <p class="text-xs text-slate-500 mb-6 italic">For high-stakes trips or first-time solo travelers.</p>
              
              <a href="/contact" class="nav-link w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full text-center transition-all duration-300 block">
                Go Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-black text-center text-slate-900 mb-12 font-display">
            Let's Talk <span class="text-primary-600">Value</span>
          </h2>
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div class="bg-gradient-to-br from-primary-50 to-emerald-50 p-8 rounded-2xl border border-primary-100">
                <h3 class="text-2xl font-bold text-slate-900 mb-6 font-display">What You'd Spend Without Us:</h3>
                <div class="space-y-4 text-slate-700">
                  <div class="flex justify-between">
                    <span>20+ hours of research</span>
                    <span class="font-semibold">$1,000+ (your time)</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Generic tour bookings</span>
                    <span class="font-semibold">$500-2,000</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Tourist trap meals</span>
                    <span class="font-semibold">$200-500</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Missed opportunities</span>
                    <span class="font-semibold">Priceless</span>
                  </div>
                  <hr class="border-slate-300">
                  <div class="flex justify-between font-bold text-lg">
                    <span>Total Wasted</span>
                    <span class="text-red-600">$1,700+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="bg-gradient-to-br from-emerald-50 to-primary-50 p-8 rounded-2xl border border-emerald-100">
                <h3 class="text-2xl font-bold text-slate-900 mb-6 font-display">What You Get With RSJ:</h3>
                <div class="space-y-4 text-slate-700">
                  <div class="flex items-center">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>
                    <span>Zero research time (we handle it)</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>
                    <span>Authentic experiences, not tourist traps</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>
                    <span>Network-building opportunities</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>
                    <span>Skill development workshops</span>
                  </div>
                  <div class="flex items-center">
                    <i data-lucide="check" class="w-5 h-5 text-emerald-500 mr-3"></i>
                    <span>Life-changing clarity</span>
                  </div>
                  <hr class="border-slate-300">
                  <div class="flex justify-between font-bold text-lg">
                    <span>Your Investment</span>
                    <span class="text-emerald-600">$99-599</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <p class="text-xl text-slate-600 mb-6">
              You're about to spend thousands on your trip anyway. 
              <span class="font-bold text-slate-900">Why not make sure it's perfect?</span>
            </p>
            <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl max-w-2xl mx-auto">
              <h4 class="font-bold text-amber-800 mb-2">100% Money-Back Guarantee</h4>
              <p class="text-amber-700 text-sm">
                If we don't deliver your blueprint within 5 business days or there are major factual errors, 
                we'll refund every penny. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black mb-8 font-display">
            Stop Planning. <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Start Living.</span>
          </h2>
          <p class="text-xl text-slate-300 mb-12 leading-relaxed">
            You could spend months researching and still get a mediocre trip. 
            <span class="text-white font-semibold">Or you could have your perfect blueprint in 5 days.</span>
          </p>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <div class="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="phone" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">Book Your Call</h3>
                <p class="text-slate-300 text-sm">15 minutes to share your dreams</p>
              </div>
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="file-text" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">Get Your Blueprint</h3>
                <p class="text-slate-300 text-sm">Delivered in 5 business days</p>
              </div>
              <div>
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="rocket" class="w-8 h-8 text-white"></i>
                </div>
                <h3 class="text-xl font-bold mb-2 font-display">Transform Your Life</h3>
                <p class="text-slate-300 text-sm">Come back with purpose</p>
              </div>
            </div>
          </div>
          
          <a href="/contact" class="nav-link bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-primary-500/25 inline-flex items-center">
            <i data-lucide="calendar" class="mr-3 w-6 h-6"></i>
            Book Your Call (Free)
          </a>
          <p class="text-slate-400 text-sm mt-4">What are you waiting for?</p>
        </div>
      </div>
    </section>
  `,

  contact: () => `
    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black mb-8 font-display">
            Ready to Stop <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">Wondering "What If?"</span>
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed mb-12">
            Fifteen minutes. That's all it takes to start designing a journey that could change everything. 
            <span class="text-white font-semibold">No sales pitch. No pressure. Just possibilities.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 class="text-4xl font-black text-slate-900 mb-8 font-display">Here's What We Need to Know</h2>
              <div class="space-y-8">
                <div class="bg-gradient-to-r from-primary-50 to-emerald-50 p-6 rounded-2xl border border-primary-100">
                  <h3 class="text-xl font-bold text-slate-900 mb-3 font-display flex items-center">
                    <i data-lucide="heart" class="w-6 h-6 text-primary-500 mr-3"></i>
                    Your Passions & Interests
                  </h3>
                  <p class="text-slate-600 mb-3">
                    What actually excites you? Be specific. "Travel" isn't an interest. 
                    "Ancient pottery techniques" or "sustainable urban farming" is.
                  </p>
                  <p class="text-sm text-slate-500 italic">
                    Examples: AI ethics, street art, space exploration, podcasting, night photography, 
                    regenerative agriculture, blockchain applications, meditation practices...
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-emerald-50 to-primary-50 p-6 rounded-2xl border border-emerald-100">
                  <h3 class="text-xl font-bold text-slate-900 mb-3 font-display flex items-center">
                    <i data-lucide="target" class="w-6 h-6 text-emerald-500 mr-3"></i>
                    What You're Seeking
                  </h3>
                  <p class="text-slate-600 mb-3">
                    New skills? Career clarity? Adventure? Networking? A break from burnout? 
                    What do you want to be different when you come back?
                  </p>
                  <p class="text-sm text-slate-500 italic">
                    Examples: "Learn new skills for career pivot," "Meet like-minded entrepreneurs," 
                    "Get clarity on next life chapter," "Recharge after burnout"...
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-primary-50 to-emerald-50 p-6 rounded-2xl border border-primary-100">
                  <h3 class="text-xl font-bold text-slate-900 mb-3 font-display flex items-center">
                    <i data-lucide="dollar-sign" class="w-6 h-6 text-primary-500 mr-3"></i>
                    Budget Reality Check
                  </h3>
                  <p class="text-slate-600 mb-3">
                    Be honest about what you can spend (total trip cost, not just our blueprint fee). 
                    This helps us recommend appropriate experiences and destinations.
                  </p>
                  <p class="text-sm text-slate-500 italic">
                    Examples: "Comfortable mid-range, $3-5k total," "Budget-conscious, under $2k," 
                    "Luxury focus, $8k+," "Flexible up to $10k"...
                  </p>
                </div>
                
                <div class="bg-gradient-to-r from-emerald-50 to-primary-50 p-6 rounded-2xl border border-emerald-100">
                  <h3 class="text-xl font-bold text-slate-900 mb-3 font-display flex items-center">
                    <i data-lucide="calendar" class="w-6 h-6 text-emerald-500 mr-3"></i>
                    Timeline & Duration
                  </h3>
                  <p class="text-slate-600 mb-3">
                    When do you want to go and for how long? Specific dates help us plan 
                    seasonal activities and events.
                  </p>
                  <p class="text-sm text-slate-500 italic">
                    Examples: "Two weeks in September," "A week anytime Q1 2024," 
                    "10-14 days, flexible timing," "Long weekend in spring"...
                  </p>
                </div>
              </div>
            </div>
            
            <div class="lg:sticky lg:top-24">
              <div class="bg-gradient-to-br from-primary-500 to-emerald-500 p-8 md:p-12 rounded-3xl text-white shadow-2xl">
                <div class="text-center mb-8">
                  <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i data-lucide="phone" class="w-10 h-10 text-white animate-pulse-slow"></i>
                  </div>
                  <h3 class="text-3xl font-bold mb-4 font-display">Ready for Your Call?</h3>
                  <p class="text-white/90 mb-6">
                    Click below to send us your details. We'll respond within 24 hours to schedule 
                    your free 15-minute blueprint call.
                  </p>
                </div>
                
                <div class="space-y-4 mb-8">
                  <div class="flex items-center text-white/90">
                    <i data-lucide="clock" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                    <span class="text-sm">15 minutes, max</span>
                  </div>
                  <div class="flex items-center text-white/90">
                    <i data-lucide="shield-check" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                    <span class="text-sm">No sales pitch or pressure</span>
                  </div>
                  <div class="flex items-center text-white/90">
                    <i data-lucide="heart" class="w-5 h-5 mr-3 flex-shrink-0"></i>
                    <span class="text-sm">Just us getting excited about your adventure</span>
                  </div>
                </div>
                
                <a href="mailto:hello@readysetjourney.com?subject=Blueprint Call Request&body=Hi RSJ Team,%0D%0A%0D%0AI'm ready to design my perfect journey! Here are my details:%0D%0A%0D%0AMy passions/interests: [Be specific - what actually excites you?]%0D%0A%0D%0AWhat I'm seeking: [New skills? Clarity? Adventure? Networking?]%0D%0A%0D%0AMy budget reality: [Total trip budget, be honest]%0D%0A%0D%0APreferred timeline: [When and for how long?]%0D%0A%0D%0AAny other details: [Constraints, preferences, etc.]%0D%0A%0D%0ALet's make this happen!%0D%0A%0D%0AName: [Your name]%0D%0APhone: [Best number to reach you]%0D%0A%0D%0AThanks!"
                   class="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center">
                  <i data-lucide="mail-plus" class="mr-3 w-6 h-6"></i>
                  Send My Details & Book Call
                </a>
                
                <div class="text-center mt-6">
                  <p class="text-white/80 text-sm">
                    Or email directly: <span class="font-semibold text-white">hello@readysetjourney.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-black text-center text-slate-900 mb-12 font-display">
            What Happens <span class="text-primary-600">Next?</span>
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span class="text-white font-black text-xl">1</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">You Send Details</h3>
              <p class="text-slate-600">
                Click that email button above and tell us about your interests, goals, budget, and timing. 
                The more specific, the better.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span class="text-white font-black text-xl">2</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">We Schedule Your Call</h3>
              <p class="text-slate-600">
                Within 24 hours, we'll respond with available times for your free 15-minute blueprint call. 
                No sales pitch, just clarity.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span class="text-white font-black text-xl">3</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 font-display">Your Adventure Begins</h3>
              <p class="text-slate-600">
                After our call, if we're a good fit, we'll create your custom blueprint. 
                If not, no hard feelings—we'll point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-black text-center text-slate-900 mb-12 font-display">
            Still Have <span class="text-emerald-600">Questions?</span>
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4 font-display">What if I'm not sure about my interests?</h3>
              <p class="text-slate-600 text-sm">
                Perfect! Half our clients come to us feeling stuck or unclear. That 15-minute call 
                is designed to help you discover what actually excites you. We're good at asking the right questions.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4 font-display">Do you handle the bookings?</h3>
              <p class="text-slate-600 text-sm">
                Nope. We design your perfect blueprint, you handle the bookings. This keeps costs down 
                and gives you complete control over flights, hotels, and timing. Plus, you know your preferences better than anyone.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4 font-display">What if I need to change plans?</h3>
              <p class="text-slate-600 text-sm">
                Your blueprint is a guide, not a prison sentence. We build in flexibility and alternatives. 
                Concierge clients get live support during their trip for real-time adjustments.
              </p>
            </div>
            
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 class="text-xl font-bold text-slate-900 mb-4 font-display">Is this just for solo travelers?</h3>
              <p class="text-slate-600 text-sm">
                Not at all! We design blueprints for couples, friends, families, and groups. 
                We charge per traveler (with companion discounts), not per itinerary.
              </p>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <p class="text-lg text-slate-600 mb-6">
              More questions? Just ask during your call or 
              <a href="mailto:hello@readysetjourney.com" class="text-primary-600 hover:text-primary-700 font-semibold transition-colors">send us an email</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-black mb-8 font-display">
            Your Adventure is <span class="bg-gradient-to-r from-primary-400 to-emerald-400 bg-clip-text text-transparent">One Email Away</span>
          </h2>
          <p class="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            You could keep scrolling social media and wondering "what if," 
            or you could take 2 minutes to start designing the journey that changes everything.
          </p>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
            <p class="text-2xl font-bold mb-6 font-display">The only question is:</p>
            <p class="text-xl text-slate-300 mb-8">
              What kind of person do you want to be when you come back?
            </p>
            <a href="mailto:hello@readysetjourney.com?subject=Blueprint Call Request&body=Hi RSJ Team,%0D%0A%0D%0AI'm ready to design my perfect journey! Here are my details:%0D%0A%0D%0AMy passions/interests: [Be specific - what actually excites you?]%0D%0A%0D%0AWhat I'm seeking: [New skills? Clarity? Adventure? Networking?]%0D%0A%0D%0AMy budget reality: [Total trip budget, be honest]%0D%0A%0D%0APreferred timeline: [When and for how long?]%0D%0A%0D%0AAny other details: [Constraints, preferences, etc.]%0D%0A%0D%0ALet's make this happen!%0D%0A%0D%0AName: [Your name]%0D%0APhone: [Best number to reach you]%0D%0A%0D%0AThanks!"
               class="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-primary-500/25 inline-flex items-center">
              <i data-lucide="send" class="mr-3 w-6 h-6"></i>
              Start My Journey Now
            </a>
          </div>
          
          <p class="text-slate-400 text-sm">
            Seriously, what do you have to lose? (Besides the regret of not trying.)
          </p>
        </div>
      </div>
    </section>
  `
};