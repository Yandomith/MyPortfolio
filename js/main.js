function renderNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer) return;

    // Determine active page
    const currentPath = window.location.pathname;
    const isWork = currentPath.includes('work.html') || currentPath.includes('game-project.html');
    const isAbout = currentPath.includes('about.html');
    const isContact = currentPath.includes('contact.html');

    navbarContainer.innerHTML = `
        <div class="container d-flex justify-content-between align-items-center">
            <a class="navbar-brand" href="index.html">Smith Yando</a>
            
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation" onclick="toggleMobileMenu()">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
            </button>

            <div class="nav-menu" id="navMenu">
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link ${isWork ? 'active' : ''}" href="work.html" onclick="closeMobileMenu()">Work</a></li>
                    <li class="nav-item"><a class="nav-link ${isAbout ? 'active' : ''}" href="about.html" onclick="closeMobileMenu()">About</a></li>
                    <li class="nav-item"><a class="nav-link ${isContact ? 'active' : ''}" href="contact.html" onclick="closeMobileMenu()">Contact</a></li>
                </ul>
            </div>
        </div>
    `;
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.background = 'rgba(5, 5, 5, 0.9)';
                navbar.style.padding = '0.5rem 0';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.background = 'rgba(5, 5, 5, 0.7)';
                navbar.style.padding = '1rem 0';
            }
        });
    }
});

// Custom Interactive Cursor Logic
function initCustomCursor() {
    // Disable on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    // Create DOM elements
    const dot = document.createElement('div');
    dot.classList.add('custom-cursor-dot');
    document.body.appendChild(dot);

    const ring = document.createElement('div');
    ring.classList.add('custom-cursor-ring');
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Immediate update for dot so it feels responsive
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    // Animate ring for smooth trailing effect
    function animateRing() {
        ringX += (mouseX - ringX) * 0.15; // 0.15 is the easing factor (lag)
        ringY += (mouseY - ringY) * 0.15;
        
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Attach hover effects to all clickable elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .card, .glass-card, [role="button"]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('hover');
            ring.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        });
    });

    // Handle elements added dynamically
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                        const newInteractiveElements = node.querySelectorAll('a, button, input, textarea, .card, .glass-card, [role="button"]');
                        newInteractiveElements.forEach(el => {
                            el.addEventListener('mouseenter', () => {
                                dot.classList.add('hover');
                                ring.classList.add('hover');
                            });
                            el.addEventListener('mouseleave', () => {
                                dot.classList.remove('hover');
                                ring.classList.remove('hover');
                            });
                        });
                        if (node.matches('a, button, input, textarea, .card, .glass-card, [role="button"]')) {
                            node.addEventListener('mouseenter', () => {
                                dot.classList.add('hover');
                                ring.classList.add('hover');
                            });
                            node.addEventListener('mouseleave', () => {
                                dot.classList.remove('hover');
                                ring.classList.remove('hover');
                            });
                        }
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
});
