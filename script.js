// ===================================
// CrystalCore Cleaning Systems
// Interactive Functionality
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Spline 3D Animation Integration
    // ===================================
    // The Spline animation is now embedded via iframe
    // No additional JavaScript needed for basic integration


    // ===================================
    // Service Tiers Rendering & Filtering
    // ===================================
    let currentCategory = 'small';

    function renderTiers(category) {
        const container = document.getElementById('tiersContainer');
        const tiers = serviceTiers[category];

        // Fade out animation
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';

        setTimeout(() => {
            container.innerHTML = '';

            tiers.forEach((tier, index) => {
                const tierCard = createTierCard(tier, index);
                container.appendChild(tierCard);
            });

            // Fade in animation
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 50);
        }, 300);
    }

    function createTierCard(tier, index) {
        const card = document.createElement('div');
        card.className = 'tier-card';
        if (tier.popular) card.classList.add('popular');
        if (tier.premium) card.classList.add('premium');
        if (tier.archetype) card.classList.add(`archetype-${tier.archetype}`);
        card.style.animationDelay = `${index * 0.1}s`;

        const priceDisplay = typeof tier.price === 'number'
            ? `$${tier.price.toLocaleString()}`
            : `$${tier.price}`;

        const basePriceDisplay = tier.basePrice
            ? (typeof tier.basePrice === 'number' ? `$${tier.basePrice.toLocaleString()}` : `$${tier.basePrice}`)
            : null;

        // Get badge styling
        const badgeStyle = badgeColors && tier.badge ? badgeColors[tier.badge] : null;
        const badgeHTML = badgeStyle ? `
            <div class="tier-badge" style="background: ${badgeStyle.background}; color: ${badgeStyle.color}; ${badgeStyle.border ? `border: ${badgeStyle.border};` : ''}">
                ${badgeStyle.label}
            </div>
        ` : '';

        // Compliance certifications
        const certsHTML = tier.complianceCerts ? `
            <div class="tier-compliance">
                ${tier.complianceCerts.map(cert => `<span class="cert-badge">${cert}</span>`).join('')}
            </div>
        ` : '';

        // Value proposition
        const valueHTML = tier.valueProposition ? `
            <p class="tier-value-prop">${tier.valueProposition}</p>
        ` : '';

        // Pricing breakdown tooltip
        const pricingBreakdownHTML = tier.basePrice && tier.monthlyHours && tier.hourlyRate ? `
            <div class="pricing-breakdown">
                <small>Base: $${tier.hourlyRate}/hr × ${tier.staff} staff × ${tier.monthlyHours} hrs = ${basePriceDisplay}</small>
                <small>After 28% overhead + 15% annual discount</small>
            </div>
        ` : '';

        card.innerHTML = `
      <div class="tier-header">
        ${badgeHTML}
        <span class="tier-number">Tier ${tier.tier}</span>
        <h3 class="tier-name">${tier.name}</h3>
        ${valueHTML}
        <p class="tier-size">${tier.size}</p>
        <div class="tier-price">${priceDisplay}</div>
        <p class="tier-price-label">per month</p>
        ${pricingBreakdownHTML}
        <div class="tier-staff">
          <svg style="width: 20px; height: 20px; flex-shrink: 0;" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${tier.staff} staff member${tier.staff > 1 || tier.staff === '13–16+' || tier.staff === '10–12' ? 's' : ''}</span>
        </div>
        ${certsHTML}
      </div>
      <ul class="tier-services">
        ${tier.services.map(service => `<li>${service}</li>`).join('')}
      </ul>
      ${tier.note ? `<p class="tier-note"><small>${tier.note}</small></p>` : ''}
      <button class="tier-cta" onclick="requestQuote('${tier.name}')">Request Quote</button>
    `;

        return card;
    }

    // Initialize with small tiers
    renderTiers('small');

    // Tab switching
    const tierTabs = document.querySelectorAll('.tier-tab');

    tierTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tierTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Get category and render tiers
            const category = this.getAttribute('data-category');
            currentCategory = category;
            renderTiers(category);
        });
    });

    // ===================================
    // Intersection Observer for Scroll Animations
    // ===================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');

                // For service cards, add staggered animation
                if (entry.target.classList.contains('service-card')) {
                    const delay = entry.target.style.animationDelay || '0s';
                    entry.target.style.animationDelay = delay;
                }

                // Trigger counter animation for statistics
                if (entry.target.classList.contains('stat-item')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber && !statNumber.classList.contains('counted')) {
                        animateCounter(statNumber);
                        statNumber.classList.add('counted');
                    }
                }

                // Unobserve after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Observe stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        observer.observe(item);
    });

    // ===================================
    // Counter Animation for Statistics
    // ===================================
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;

            if (current < target) {
                element.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };

        updateCounter();
    }

    // ===================================
    // Form Submission Handler
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const facilitySize = document.getElementById('facility-size').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Get submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            try {
                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';

                // Send to backend API
                const response = await fetch('http://localhost:3000/api/send-quote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        facilitySize,
                        message
                    })
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    // Show success message
                    showNotification('Thank you! We\'ll contact you shortly with a customized quote.', 'success');

                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message
                    showNotification(data.message || 'Failed to send quote request. Please try again.', 'error');
                }

            } catch (error) {
                console.error('Error submitting form:', error);
                showNotification('Failed to send quote request. Please make sure the server is running.', 'error');
            } finally {
                // Restore button state
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    // ===================================
    // Notification System
    // ===================================
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            background: type === 'success'
                ? 'linear-gradient(90deg, #4169E1 0%, #00C853 100%)'
                : 'linear-gradient(135deg, hsl(0, 70%, 55%) 0%, hsl(20, 70%, 45%) 100%)',
            color: 'white',
            fontWeight: '600',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.5s ease-out',
            maxWidth: '300px'
        });

        document.body.appendChild(notification);

        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 4000);
    }

    // ===================================
    // Button Ripple Effect
    // ===================================
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ===================================
    // Service Card Hover Effect Enhancement
    // ===================================
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            this.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // ===================================
    // Page Load Animation
    // ===================================
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===================================
    // Add CSS for Animations
    // ===================================
    const style = document.createElement('style');
    style.textContent = `
    @keyframes ripple {
      to {
        width: 300px;
        height: 300px;
        opacity: 0;
      }
    }
    
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(20px);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .btn {
      position: relative;
      overflow: hidden;
    }
    
    .tiers-container {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: hsl(180, 15%, 95%);
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, hsl(177, 100%, 41%) 0%, hsl(9, 100%, 64%) 100%);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, hsl(177, 100%, 36%) 0%, hsl(9, 100%, 59%) 100%);
    }
  `;
    document.head.appendChild(style);

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c✨ CrystalCore Cleaning Systems', 'color: #00ced1; font-size: 24px; font-weight: bold;');
    console.log('%cProfessional Corporate Cleaning Services', 'color: #ff6347; font-size: 14px;');

});

// ===================================
// Global Helper Functions
// ===================================

// Scroll to section helper
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Request quote helper
function requestQuote(tierName) {
    // Scroll to contact form
    scrollToSection('contact');

    // Show notification
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.textContent = `Requesting quote for: ${tierName}`;
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            background: 'linear-gradient(90deg, #4169E1 0%, #00C853 100%)',
            color: 'white',
            fontWeight: '600',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.5s ease-out'
        });

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }, 500);
}

// Throttle function for performance
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// Debounce function for performance
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
