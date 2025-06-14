class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });
    
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.nav-link') || e.target.closest('.nav-link')) {
        e.preventDefault();
        const link = e.target.matches('.nav-link') ? e.target : e.target.closest('.nav-link');
        const path = link.getAttribute('href');
        this.navigate(path);
      }
    });
  }
  
  addRoute(path, handler) {
    this.routes[path] = handler;
  }
  
  navigate(path) {
    if (path !== this.currentRoute) {
      window.history.pushState({}, '', path);
      this.handleRoute(path);
    }
  }
  
  handleRoute(path) {
    this.currentRoute = path;
    
    // Update SEO elements
    if (window.seoManager) {
      window.seoManager.generateBreadcrumbs(path);
      window.seoManager.trackPageView(path, document.title);
    }
    
    // Update active nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('text-brand-orange', 'font-semibold');
      link.classList.add('text-slate-600');
      
      if (link.getAttribute('href') === path) {
        link.classList.remove('text-slate-600');
        link.classList.add('text-brand-orange', 'font-semibold');
      }
    });
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
    
    // Handle route
    const handler = this.routes[path];
    if (handler) {
      handler();
    } else {
      // Default to home if route not found
      this.routes['/']();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
  
  init() {
    // Handle initial page load
    this.handleRoute(window.location.pathname);
  }
}

// Create global router instance
window.router = new Router();