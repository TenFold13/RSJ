// SEO and Analytics utilities
class SEOManager {
  constructor() {
    this.initializeAnalytics();
    this.setupStructuredData();
  }

  initializeAnalytics() {
    // Google Analytics 4 (placeholder - replace with actual GA4 ID)
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }

  trackPageView(path, title) {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
        page_title: title
      });
    }
  }

  trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  }

  updateMetaTags(title, description, path = '') {
    // Update page title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://readysetjourney.com${path}`);
    }
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  }

  setupStructuredData() {
    // FAQ Schema for pricing page
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why three tiers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We keep choices simple: one week, three weeks, or one month of design depth. Each tier is optimized for different journey lengths and support needs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I upgrade later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—pay the difference anytime before your first coaching call. Many clients start with Explorer Blueprint and upgrade to Guided Pathfinder."
          }
        },
        {
          "@type": "Question",
          "name": "What if I need a longer journey?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can extend any blueprint for +$125 per additional week (maximum 56 days total)."
          }
        }
      ]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Transformational Travel Blueprints",
      "description": "Personalized travel experiences designed for career growth and personal development",
      "provider": {
        "@type": "Organization",
        "name": "Ready Set Journey"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Travel Blueprint Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Explorer Blueprint"
            },
            "price": "179",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guided Pathfinder"
            },
            "price": "449",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transformation Pro"
            },
            "price": "949",
            "priceCurrency": "USD"
          }
        ]
      }
    };

    // Add schemas to page
    this.addStructuredData('faq-schema', faqSchema);
    this.addStructuredData('service-schema', serviceSchema);
  }

  addStructuredData(id, schema) {
    let existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  generateBreadcrumbs(path) {
    const pathSegments = path.split('/').filter(segment => segment);
    const breadcrumbs = [
      { name: 'Home', url: 'https://readysetjourney.com/' }
    ];

    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
      breadcrumbs.push({
        name: name,
        url: `https://readysetjourney.com${currentPath}`
      });
    });

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };

    this.addStructuredData('breadcrumb-schema', breadcrumbSchema);
  }
}

// Initialize SEO manager
window.seoManager = new SEOManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEOManager;
}