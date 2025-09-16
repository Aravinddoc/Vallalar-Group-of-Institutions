// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
const navClose = document.querySelector('.nav-close');

if (toggle && nav) {
  const openNav = () => {
    nav.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };
  
  const closeNav = () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restore scroll
  };
  
  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });
  
  // Close button functionality
  if (navClose) {
    navClose.addEventListener('click', closeNav);
  }
  
  // Close nav when clicking on nav links
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });
  
  // Close nav when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeNav();
    }
  });
}

// Update footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll fix for offset (if header is sticky)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.length <= 1) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 72; // approximate header height
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Apple-style Scroll Animations with Intersection Observer
class AppleStyleAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupAnimations());
    } else {
      this.setupAnimations();
    }
  }

  setupAnimations() {
    // Add animation classes to elements
    this.addAnimationClasses();
    
    // Create intersection observer
    this.createObserver();
    
    // Add parallax scroll effect
    this.setupParallax();
  }

  addAnimationClasses() {
    // Hero sections - pull in from bottom
    const heroes = document.querySelectorAll('.hero, .page-hero');
    heroes.forEach(hero => {
      hero.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // All sections - consistent pull from bottom
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      section.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Cards with staggered animation - pull from bottom
    const cardContainers = document.querySelectorAll('.grid.four, .grid.three, .grid.two');
    cardContainers.forEach(container => {
      container.classList.add('stagger-children');
    });

    // Individual cards - pull from bottom
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Features - all pull from bottom consistently
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
      feature.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Gallery items - pull from bottom
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Streams - pull from bottom
    const streams = document.querySelectorAll('.stream');
    streams.forEach((stream, index) => {
      stream.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Forms - pull from bottom
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
      form.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Section headers - pull from bottom
    const sectionHeaders = document.querySelectorAll('.section-head');
    sectionHeaders.forEach(header => {
      header.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Footer - pull from bottom
    const footer = document.querySelector('.site-footer');
    if (footer) {
      footer.classList.add('animate-on-scroll', 'animate-fade-up');
    }

    // Page-specific elements - all pull from bottom
    // About page quote - pull from bottom
    const aboutQuote = document.querySelector('.about-quote');
    if (aboutQuote) {
      aboutQuote.classList.add('animate-on-scroll', 'animate-fade-up');
    }

    // Pill groups (for skills, values, etc.)
    const pillGroups = document.querySelectorAll('.pill-group');
    pillGroups.forEach(group => {
      group.classList.add('stagger-children');
    });

    // Individual pills - pull from bottom
    const pills = document.querySelectorAll('.pill');
    pills.forEach((pill, index) => {
      pill.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Apply CTA sections - pull from bottom
    const applyCtas = document.querySelectorAll('.apply-cta');
    applyCtas.forEach(cta => {
      cta.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Map wrapper - pull from bottom
    const mapWraps = document.querySelectorAll('.map-wrap');
    mapWraps.forEach(map => {
      map.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Hero CTAs - staggered from bottom
    const heroCtas = document.querySelectorAll('.hero-ctas');
    heroCtas.forEach(cta => {
      cta.classList.add('stagger-children');
    });

    // Hero visual elements - pull from bottom
    const heroVisuals = document.querySelectorAll('.hero-visual');
    heroVisuals.forEach(visual => {
      visual.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Trust note (on homepage) - pull from bottom
    const trustNote = document.querySelector('.trust-note');
    if (trustNote) {
      trustNote.classList.add('animate-on-scroll', 'animate-fade-up');
    }

    // Hero image - pull from bottom
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      heroImage.classList.add('animate-on-scroll', 'animate-fade-up');
    }

    // Stream head elements - pull from bottom
    const streamHeads = document.querySelectorAll('.stream-head');
    streamHeads.forEach(head => {
      head.classList.add('animate-on-scroll', 'animate-fade-up');
    });

    // Stream pills containers - staggered animation
    const streamPills = document.querySelectorAll('.stream-pills');
    streamPills.forEach(pillsContainer => {
      pillsContainer.classList.add('stagger-children');
    });

    // Checklist items (used across multiple pages) - staggered from bottom
    const checklists = document.querySelectorAll('.checklist');
    checklists.forEach(list => {
      list.classList.add('stagger-children');
    });
  }

  createObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, options);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    animatedElements.forEach(el => this.observer.observe(el));
  }

  setupParallax() {
    // Add subtle parallax to hero elements (excluding hero-image for unified scrolling)
    const parallaxElements = document.querySelectorAll('.hero-visual, .hero-blob');
    parallaxElements.forEach(el => el.classList.add('parallax-element'));

    // Throttled scroll handler for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          
          parallaxElements.forEach(el => {
            el.style.transform = `translate3d(0, ${rate}px, 0)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}

// Initialize Apple-style animations
const appleAnimations = new AppleStyleAnimations();



