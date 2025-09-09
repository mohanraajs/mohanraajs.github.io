// Projects data - Easy to modify and add new projects
const projectsData = [
    {
        id: 1,
        name: "Family Tree App",
        type: "Android Application",
        description: "A beautifully designed mobile application that helps families create, maintain, and share their family trees. Built with a focus on simplicity and usability, making it easy for anyone to preserve their family history.",
        technologies: ["Android", "Mobile Development", "UI/UX Design"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.mspk.app.ft.familytree&hl=en_IN",
        icon: "📱",
        featured: true
    },
    // Add more projects here as you create them
    {
        id: 2,
        name: "Coming Soon",
        type: "Next Project",
        description: "Another practical solution in development. Stay tuned for more tools that solve real problems and make your day better.",
        technologies: ["Innovation", "Problem Solving"],
        icon: "🚀",
        featured: false,
        comingSoon: true
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const contactBtn = document.getElementById('contactBtn');

// Load projects on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    initializeInteractions();
    initializeScrollAnimations();
});

// Load and display projects
function loadProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    // Sort projects to show featured ones first
    const sortedProjects = [...projectsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    sortedProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.featured ? 'featured' : ''}`;
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const projectLinks = project.comingSoon ? 
        '<div class="project-links"><span class="coming-soon">Coming Soon</span></div>' :
        `<div class="project-links">
            ${project.playStoreUrl ? `<a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fab fa-google-play"></i> View on Play Store
            </a>` : ''}
        </div>`;
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">${project.icon}</div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <div class="project-type">${project.type}</div>
            </div>
        </div>
        <div class="project-description">${project.description}</div>
        <div class="project-tech">${techTags}</div>
        ${projectLinks}
    `;
    
    return card;
}

// Initialize interactive elements
function initializeInteractions() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact button interaction
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // You can customize this to open email client, contact form, or external link
            alert('Ready to collaborate! Please reach out through your preferred communication method.');
        });
    }
    
    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('.about, .projects, .contact').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe project cards for staggered animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Utility function to add new projects (for future use)
function addProject(projectData) {
    projectsData.push(projectData);
    loadProjects();
    initializeInteractions();
}

// Utility function to update featured status
function updateFeaturedProjects(projectIds) {
    projectsData.forEach(project => {
        project.featured = projectIds.includes(project.id);
    });
    loadProjects();
    initializeInteractions();
}

// Export functions for potential external use
window.portfolioManager = {
    addProject,
    updateFeaturedProjects,
    projectsData
};