/* ========================================
   Scroll Progress Bar
   ======================================== */
function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = scrollPercentage + '%';
}

/* ========================================
   Intersection Observer - Fade In Animations
   ======================================== */
function initScrollAnimations() {
    const chapters = document.querySelectorAll('.chapter-content');

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -100px 0px' // Slight offset for better timing
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Optional: Stop observing after animation (performance)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    chapters.forEach(chapter => {
        observer.observe(chapter);
    });
}

/* ========================================
   Parallax Effect for Images
   ======================================== */
function initParallaxEffect() {
    const images = document.querySelectorAll('.image-wrapper img');

    window.addEventListener('scroll', () => {
        images.forEach(img => {
            const parent = img.closest('.chapter');
            const rect = parent.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only apply parallax when chapter is in view
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Calculate parallax offset
                const scrollPercentage = (windowHeight - rect.top) / (windowHeight + rect.height);
                const parallaxOffset = scrollPercentage * 30; // 30px max offset

                img.style.transform = `translateY(${parallaxOffset}px) scale(1)`;
            }
        });
    });
}

/* ========================================
   Smooth Zoom-In Effect on Image Load
   ======================================== */
function initImageZoomEffect() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    const zoomObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');

                // Add zoom animation
                img.style.transition = 'transform 1.5s ease-out';
                img.style.transform = 'scale(1)';

                zoomObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        img.style.transform = 'scale(1.1)'; // Start slightly zoomed in
        zoomObserver.observe(wrapper);
    });
}

/* ========================================
   Add Hover Effect to Links
   ======================================== */
function enhanceLinkHovers() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.02)';
        });

        link.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1)';
        });
    });
}

/* ========================================
   Debounce Function for Performance
   ======================================== */
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ========================================
   Chapter Number Animation on Scroll
   ======================================== */
function animateChapterNumbers() {
    const chapterNumbers = document.querySelectorAll('.chapter-number');

    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        });
    }, {
        threshold: 0.5
    });

    chapterNumbers.forEach(num => {
        numberObserver.observe(num);
    });
}

/* ========================================
   Initialize All Effects
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Core animations
    initScrollAnimations();
    initParallaxEffect();
    initImageZoomEffect();
    animateChapterNumbers();
    enhanceLinkHovers();

    // Progress bar (debounced for performance)
    window.addEventListener('scroll', debounce(updateProgressBar, 5));

    // Initial progress bar state
    updateProgressBar();

    console.log('✨ Scrollytelling initialized successfully!');
});

/* ========================================
   Optional: Log Current Chapter in View
   ======================================== */
function trackCurrentChapter() {
    const chapters = document.querySelectorAll('.chapter');

    const chapterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chapterNumber = entry.target.dataset.chapter;
                console.log(`📖 Currently viewing: Chapter ${chapterNumber}`);

                // Optional: Update URL hash or analytics
                // window.history.replaceState(null, null, `#chapter-${chapterNumber}`);
            }
        });
    }, {
        threshold: 0.5
    });

    chapters.forEach(chapter => {
        chapterObserver.observe(chapter);
    });
}

// Uncomment to enable chapter tracking
// trackCurrentChapter();

/* ========================================
   Performance Monitoring (Development)
   ======================================== */
if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}
