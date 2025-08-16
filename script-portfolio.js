// Simple, clean JavaScript for portfolio site
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Simple fade in on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe work items and project cards
    document.querySelectorAll('.work-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // Update established year dynamically
    const establishedYear = 2017;
    const currentYear = new Date().getFullYear();
    const yearsInBusiness = currentYear - establishedYear;
    
    // Update footer to show years in business
    const footerText = document.querySelector('.footer p');
    if (footerText && yearsInBusiness > 7) {
        footerText.innerHTML = footerText.innerHTML.replace('Established 2017', `Established 2017 · ${yearsInBusiness} Years in Business`);
    }
    
    // Handle obfuscated contact clicks
    document.querySelectorAll('.contact-method[data-contact]').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function() {
            const type = this.getAttribute('data-contact');
            if (type === 'email') {
                window.location.href = 'mailto:' + 'zach' + '@' + 'zmpd.app';
            } else if (type === 'phone') {
                window.location.href = 'tel:+1' + '970' + '452' + '9404';
            }
        });
    });
});

// Console message
console.log('%cZMPD Professional Development Services', 'font-size: 16px; font-weight: bold; color: #0969da;');
console.log('Resort Technology Integration Specialists');