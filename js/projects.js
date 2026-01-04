// Render projects list from global PROJECTS_DATA
const projectsContainer = document.getElementById("projects-list");

function renderProjects(filter = 'all') {
  if (!projectsContainer) return;

  if (typeof PROJECTS_DATA === 'undefined') {
    console.error("PROJECTS_DATA not found. Make sure projects-data.js is included.");
    return;
  }

  // Clear existing content
  projectsContainer.innerHTML = "";

  const projects = PROJECTS_DATA.filter(project => {
      if (filter === 'all') return true;
      return project.category === filter;
  });

  projects.forEach((project, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4 fade-in-up";
    col.style.animationDelay = `${index * 0.1}s`;

    const card = document.createElement("div");
    card.className = "card h-100";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = project.image || "image/project_image.png";
    img.alt = project.title || "";

    const body = document.createElement("div");
    body.className = "card-body";
    
    // Category Badge
    const badge = document.createElement("span");
    badge.className = "badge bg-secondary mb-2";
    badge.style.backgroundColor = "rgba(212, 175, 55, 0.2)";
    badge.style.color = "#d4af37";
    badge.style.border = "1px solid #d4af37";
    badge.innerText = project.category.toUpperCase();
    
    const h5 = document.createElement("h5");
    h5.className = "card-title mt-2";
    h5.innerText = project.title || "Untitled";
    
    const p = document.createElement("p");
    p.className = "card-text";
    p.innerText = project.summary || "";

    body.appendChild(badge);
    body.appendChild(h5);
    body.appendChild(p);

    const footer = document.createElement("div");
    footer.className = "card-footer bg-transparent";

    const caseA = document.createElement("a");
    caseA.className = "btn button1 w-100";
    // For now, all point to game-project.html (generic project page)
    caseA.href = "game-project.html?id=" + encodeURIComponent(project.id);
    caseA.innerText = "View details";
    footer.appendChild(caseA);

    card.appendChild(img);
    card.appendChild(body);
    card.appendChild(footer);
    col.appendChild(card);
    projectsContainer.appendChild(col);
  });
}



// Filter Button Logic
// Filter Button Logic
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'button1'));
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.add('button2'));
        
        // Add active class to clicked
        btn.classList.remove('button2');
        btn.classList.add('active', 'button1');
        
        const filterValue = btn.getAttribute('data-filter');
        renderProjects(filterValue);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on work.html (has filters)
    if (document.getElementById('projects-list')) {
        renderProjects('all');
    }
    
    // Check if we are on index.html (has featured section)
    if (document.getElementById('featured-projects')) {
        renderFeaturedProjects('featured-projects');
    }
});

// Initial Render
// Render featured projects (top 3)
function renderFeaturedProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (typeof PROJECTS_DATA === 'undefined') {
        console.error("PROJECTS_DATA not found.");
        return;
    }

    // Pick top 3 projects (or specifically curated ones)
    const featured = PROJECTS_DATA.slice(0, 3);
    
    container.innerHTML = "";
    
    featured.forEach((project, index) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4 fade-in-up";
        col.style.animationDelay = `${index * 0.15}s`;

        const card = document.createElement("div");
        card.className = "card h-100 glass-card"; // Using new glass-card class if available, else card

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = project.image || "image/project_image.png";
        img.alt = project.title;

        const body = document.createElement("div");
        body.className = "card-body";
        
        const badge = document.createElement("span");
        badge.className = "badge bg-secondary mb-2";
        badge.innerText = project.category.toUpperCase();
        
        const h5 = document.createElement("h5");
        h5.className = "card-title mt-2";
        h5.innerText = project.title;
        
        const p = document.createElement("p");
        p.className = "card-text";
        p.innerText = project.summary;

        body.appendChild(badge);
        body.appendChild(h5);
        body.appendChild(p);

        const footer = document.createElement("div");
        footer.className = "card-footer bg-transparent border-0";

        const btn = document.createElement("a");
        btn.className = "btn button1 w-100";
        btn.href = "game-project.html?id=" + encodeURIComponent(project.id);
        btn.innerText = "View Project";

        footer.appendChild(btn);
        card.appendChild(img);
        card.appendChild(body);
        card.appendChild(footer);
        col.appendChild(card);
        container.appendChild(col);
    });
}

