// STREAM | Core Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after it's shown
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-up to sections and cards
    const fadeElements = document.querySelectorAll('section, .glass-panel, .stat-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(6, 24, 24, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(6, 24, 24, 0.8)';
        }
    });

    // Simple FAQ interaction polish
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Optional: smooth scroll to active item
            if (!btn.classList.contains('collapsed')) {
                setTimeout(() => {
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 400);
            }
        });
    });
});
