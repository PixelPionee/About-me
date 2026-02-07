(function() {
    'use strict';

    async function fetchProjects() {
        try {
            const response = await fetch('assets/data/projects.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.projects;
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    function createProjectCard(project) {
        const statusBadge = project.status 
            ? `<span class="project-status">${project.status}</span>` 
            : '';

        return `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.thumbnail}" 
                         alt="Preview do projeto ${project.title}" 
                         loading="lazy"
                         width="400"
                         height="250">
                </div>
                <div class="project-content">
                    <div class="project-meta">
                        <span class="project-category">${project.category}</span>
                        <span class="project-year">${project.year}</span>
                        ${statusBadge}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-tagline">${project.tagline}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                    <a href="project-pages/${project.id}.html" class="project-link" aria-label="Ver detalhes completos do projeto ${project.title}">
                        Ver Case Study →
                    </a>
                </div>
            </article>
        `;
    }

    function renderProjects(projects) {
        const container = document.getElementById('projects-container');
        
        if (!container) {
            console.warn('Projects container not found');
            return;
        }

        if (projects.length === 0) {
            container.innerHTML = '<p class="no-projects">Nenhum projeto disponível no momento.</p>';
            return;
        }

        container.innerHTML = projects.map(createProjectCard).join('');
    }

    async function init() {
        const projects = await fetchProjects();
        renderProjects(projects);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
