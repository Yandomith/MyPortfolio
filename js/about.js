function renderExperience() {
    const list = document.getElementById('experience-list');
    if (!list) return;

    list.innerHTML = ABOUT_DATA.experience.map((item, index) => `
        <div class="${index < ABOUT_DATA.experience.length - 1 ? 'mb-5' : ''}">
            <div class="d-flex justify-content-between align-items-baseline mb-2">
                <h5 class="mb-0 h4">${item.role}</h5>
                <span class="badge rounded-pill border border-secondary text-muted fw-light">${item.period}</span>
            </div>
            <p class="text-white opacity-75 mb-2">${item.company}</p>
            <p class="text-muted">${item.description}</p>
        </div>
    `).join('');
}

function renderEducation() {
    const list = document.getElementById('education-list');
    if (!list) return;

    list.innerHTML = ABOUT_DATA.education.map(item => `
        <div>
            <div class="d-flex justify-content-between align-items-baseline mb-2">
                <h5 class="mb-0 h4">${item.degree}</h5>
                <span class="badge rounded-pill border border-secondary text-muted fw-light">${item.period}</span>
            </div>
            <p class="text-white opacity-75 mb-2">${item.school}</p>
            <p class="text-muted">${item.description}</p>
        </div>
    `).join('');
}

function renderSkills() {
    const list = document.getElementById('skills-list');
    if (!list) return;

    let html = '';
    const skillGroups = Array.isArray(ABOUT_DATA.skills)
        ? ABOUT_DATA.skills
        : Object.entries(ABOUT_DATA.skills).map(([ category, items ]) => ({ category, items }));

    for (const [ index, group ] of skillGroups.entries()) {
        const category = group.category;
        const skills = group.items || [];
        html += `
            <div class="${index < skillGroups.length - 1 ? 'mb-4' : ''}">
                <p class="categorytitle mb-2">${category}</p>
                <div class="d-flex flex-wrap gap-2">
                    ${skills.map(skill => `
                        <span class="badge bg-white bg-opacity-10 fw-normal p-2">${skill}</span>
                    `).join('')}
                </div>
            </div>
        `;
    }
    list.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if ABOUT_DATA exists
    if (typeof ABOUT_DATA === 'undefined') {
        console.error('ABOUT_DATA is not defined. Make sure about-data.js is loaded.');
        return;
    }

    renderExperience();
    renderEducation();
    renderSkills();
});
