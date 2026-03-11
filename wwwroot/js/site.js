// ============================================================
// DRIP SMART USA – Site JavaScript
// ============================================================

(function () {
    'use strict';

    // --- Header scroll shadow ---
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    // --- Mobile nav toggle ---
    const toggle = document.getElementById('mobileNavToggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('open');
            toggle.classList.toggle('open', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!header.contains(e.target) && nav.classList.contains('open')) {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', false);
                document.body.style.overflow = '';
            }
        });

        // Tappable dropdowns on mobile
        document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = link.closest('.has-dropdown');
                    parent.classList.toggle('open');
                }
            });
        });
    }

    // --- Animate stats on scroll (Intersection Observer) ---
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const isPercent = el.dataset.suffix || '';
        const from = 0;

        function update(time) {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(from + (target - from) * eased);
            el.textContent = current + isPercent;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    const statEls = document.querySelectorAll('.stat-number');
    if (statEls.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const text = el.textContent.trim();
                    const numMatch = text.match(/[\d.]+/);
                    if (numMatch) {
                        const num = parseFloat(numMatch[0]);
                        const suffix = text.replace(numMatch[0], '');
                        el.dataset.suffix = suffix;
                        animateCounter(el, num, 1200);
                    }
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statEls.forEach(function (el) { observer.observe(el); });
    }

    // --- Fade-in on scroll ---
    const fadeEls = document.querySelectorAll(
        '.industry-card, .step-card, .story-card, .testimonial-card, .crop-card, .resource-card, .benefit-item'
    );

    if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
        fadeEls.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        const fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    fadeObserver.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

        fadeEls.forEach(function (el) { fadeObserver.observe(el); });
    }

    // --- Sticky progress fill animation (hero) ---
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
        setTimeout(function () {
            progressFill.style.transition = 'width 1.4s ease';
            progressFill.style.width = '78%';
        }, 600);
    }

})();
