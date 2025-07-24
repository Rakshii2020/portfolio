// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    bindEvents() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const icon = this.themeToggle.querySelector('i');
        if (this.theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('.section');
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveLink();
    }

    bindEvents() {
        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = this.header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveLink();
            this.updateHeaderBackground();
        });
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + this.header.offsetHeight + 50;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    updateHeaderBackground() {
        const scrolled = window.scrollY > 50;
        this.header.style.background = scrolled 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'rgba(10, 10, 10, 0.95)';
            
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            this.header.style.background = scrolled 
                ? 'rgba(255, 255, 255, 0.98)' 
                : 'rgba(255, 255, 255, 0.95)';
        }
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.addCardHoverEffects();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll([
            '.skill-category',
            '.project-card',
            '.certification-card',
            '.publication-item',
            '.contact-item'
        ].join(', '));

        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    addCardHoverEffects() {
        // Add ripple effect to cards
        const cards = document.querySelectorAll([
            '.skill-category',
            '.project-card',
            '.certification-card',
            '.contact-item'
        ].join(', '));

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Skill Tag Animation
class SkillTagManager {
    constructor() {
        this.skillTags = document.querySelectorAll('.skill-tag');
        this.init();
    }

    init() {
        this.addHoverEffects();
    }

    addHoverEffects() {
        this.skillTags.forEach((tag, index) => {
            // Staggered animation delay
            tag.style.animationDelay = `${index * 0.1}s`;
            
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-3px) scale(1.05)';
                tag.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.3)';
            });

            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.boxShadow = 'none';
            });
        });
    }
}

// Contact Form Enhancement
class ContactManager {
    constructor() {
        this.contactLinks = document.querySelectorAll('.contact-details a');
        this.socialLinks = document.querySelectorAll('.social-link');
        this.init();
    }

    init() {
        this.enhanceContactLinks();
        this.enhanceSocialLinks();
    }

    enhanceContactLinks() {
        this.contactLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Add click animation
                link.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    link.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    enhanceSocialLinks() {
        this.socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px) rotate(5deg)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0) rotate(0deg)';
            });
        });
    }
}

// Loading Animation
class LoadingManager {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            this.showContent();
        });
    }

    showContent() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    }
}

// Mobile Menu Manager
class MobileMenuManager {
    constructor() {
        this.init();
    }

    init() {
        this.handleMobileNavigation();
    }

    handleMobileNavigation() {
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // If mobile menu is open, close it
                if (window.innerWidth <= 768) {
                    // Add any mobile menu closing logic here
                }
            });
        });
    }
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.addLazyLoading();
    }

    optimizeImages() {
        // Add lazy loading to images if any are added in the future
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    addLazyLoading() {
        // Implement lazy loading for heavy elements
        if ('IntersectionObserver' in window) {
            const lazyElements = document.querySelectorAll('[data-lazy]');
            const lazyObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.classList.add('loaded');
                        lazyObserver.unobserve(element);
                    }
                });
            });

            lazyElements.forEach(element => {
                lazyObserver.observe(element);
            });
        }
    }
}

// Error Handler
class ErrorManager {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('error', (e) => {
            console.warn('An error occurred:', e.error);
            // Gracefully handle errors without breaking the user experience
        });
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new NavigationManager();
    new AnimationManager();
    new SkillTagManager();
    new ContactManager();
    new LoadingManager();
    new MobileMenuManager();
    new PerformanceManager();
    new ErrorManager();

    // Add custom cursor effect for interactive elements (optional enhancement)
    const interactiveElements = document.querySelectorAll([
        'button',
        'a',
        '.project-card',
        '.skill-tag',
        '.certification-card'
    ].join(', '));

    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
    });

    // Console welcome message
    console.log('%c👋 Welcome to Rakshitha S A\'s Portfolio!', 
        'color: #3b82f6; font-size: 16px; font-weight: bold;'
    );
    console.log('%cBuilt with HTML, CSS, and JavaScript', 
        'color: #666; font-size: 12px;'
    );
});

// Add smooth reveal animation for sections
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.section');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
});

// Add typing effect for the header title (optional enhancement)
class TypingEffect {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    start() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Initialize typing effect for header title
setTimeout(() => {
    const titleElement = document.querySelector('.header-info .title');
    if (titleElement) {
        const typingEffect = new TypingEffect(titleElement, 'Aspiring Software Developer', 50);
        typingEffect.start();
    }
}, 1000);
