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
