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

    // ============================================================
    // NAV — Unified desktop hover-intent + mobile accordion
    // ============================================================
    const toggle = document.getElementById('mobileNavToggle');
    const nav    = document.getElementById('mainNav');
    const MOBILE_BP = 960;

    // Close all dropdowns
    function closeAll() {
        document.querySelectorAll('.has-dropdown.is-open').forEach(function (li) {
            li.classList.remove('is-open');
        });
    }

    // Open mobile nav
    function openMobileNav() {
        nav.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    // Close mobile nav
    function closeMobileNav() {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        closeAll();
    }

    if (toggle && nav) {
        // Hamburger toggle
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            nav.classList.contains('open') ? closeMobileNav() : openMobileNav();
        });

        // Close mobile nav on outside click
        document.addEventListener('click', function (e) {
            if (nav.classList.contains('open') && !header.contains(e.target)) {
                closeMobileNav();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeMobileNav();
                closeAll();
            }
        });
    }

    // ---- Desktop: hover-intent with leave delay ----
    var hoverTimers = {};

    document.querySelectorAll('.has-dropdown').forEach(function (li, idx) {
        var link = li.querySelector(':scope > a');

        // Desktop hover open
        li.addEventListener('mouseenter', function () {
            if (window.innerWidth <= MOBILE_BP) return;
            clearTimeout(hoverTimers[idx]);
            closeAll();
            li.classList.add('is-open');
        });

        // Desktop hover close — small delay so mouse can travel to dropdown
        li.addEventListener('mouseleave', function () {
            if (window.innerWidth <= MOBILE_BP) return;
            hoverTimers[idx] = setTimeout(function () {
                li.classList.remove('is-open');
            }, 120);
        });

        // Mobile: tap nav link to toggle accordion, don't navigate
        if (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth > MOBILE_BP) return; // desktop: let href work
                e.preventDefault();
                var isOpen = li.classList.contains('is-open');
                closeAll();
                if (!isOpen) li.classList.add('is-open');
            });
        }
    });

    // Close desktop dropdowns when clicking links inside them
    document.querySelectorAll('.dropdown a').forEach(function (a) {
        a.addEventListener('click', function () {
            closeAll();
            closeMobileNav();
        });
    });

    // Close dropdown when tabbing away (accessibility)
    document.querySelectorAll('.has-dropdown').forEach(function (li) {
        li.addEventListener('focusout', function (e) {
            if (window.innerWidth <= MOBILE_BP) return;
            setTimeout(function () {
                if (!li.contains(document.activeElement)) {
                    li.classList.remove('is-open');
                }
            }, 50);
        });
    });

    // ---- Inject mobile CTA row into nav ----
    if (nav) {
        var ctaRow = document.createElement('div');
        ctaRow.className = 'mobile-cta-row';
        ctaRow.innerHTML =
            '<a href="/find-a-dealer" class="btn-outline">Find a Dealer</a>' +
            '<a href="/contact" class="btn-primary">Get a Quote</a>';
        nav.appendChild(ctaRow);
    }

    // ============================================================
    // Animate stats on scroll (Intersection Observer)
    // ============================================================
    function animateCounter(el, target, duration) {
        const start = performance.now();
        const from = 0;

        function update(time) {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(from + (target - from) * eased);
            el.textContent = current + (el.dataset.suffix || '');
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

    // ============================================================
    // Fade-in on scroll
    // ============================================================
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
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

        fadeEls.forEach(function (el) { fadeObserver.observe(el); });
    }

    // ============================================================
    // Hero progress bar animation
    // ============================================================
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = '0%';
        setTimeout(function () {
            progressFill.style.transition = 'width 1.4s ease';
            progressFill.style.width = '78%';
        }, 600);
    }

})();

