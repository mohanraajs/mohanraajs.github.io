// Apps data - Easy to modify and add new apps
const appsData = [
    {
        id: 1,
        name: "Family Tree App",
        type: "Family Connection",
        category: "family",
        description: "Help your family discover their roots! A magical way to create, explore, and share your family tree. Perfect for kids to learn about their heritage and grandparents to preserve precious memories.",
        technologies: ["Android", "Family-Safe", "Memory Preservation"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.mspk.app.ft.familytree&hl=en_IN",
        icon: "🌳",
        featured: true,
        ageGroup: "All Ages",
        safety: ["Ad-Free", "Child-Safe", "Privacy Protected"]
    },
    // Coming soon apps - AI powered adventures
    {
        id: 2,
        name: "AI Learning Adventure",
        type: "Educational Game",
        category: "kids",
        description: "An amazing AI companion that adapts to your child's learning style! Interactive stories, puzzles, and games that grow with your little one.",
        technologies: ["Gemini AI", "Adaptive Learning", "Kid-Safe"],
        icon: "🤖",
        featured: true,
        comingSoon: true,
        ageGroup: "3-12 Years",
        safety: ["AI-Safe", "Ad-Free", "Parent Dashboard"]
    },
    {
        id: 3,
        name: "Smart Business Helper",
        type: "Business Tool",
        category: "business",
        description: "Simple AI-powered tools to help small businesses grow. From inventory tracking to customer management - made beautifully simple.",
        technologies: ["Gemini AI", "Business Analytics", "Easy Setup"],
        icon: "📊",
        featured: false,
        comingSoon: true,
        ageGroup: "Adults",
        safety: ["Secure", "Private", "Reliable"]
    },
    {
        id: 4,
        name: "Story Creator Kids",
        type: "Creative Tool", 
        category: "kids",
        description: "Let your kids create magical stories with AI! Draw characters, build worlds, and watch their imagination come to life in interactive tales.",
        technologies: ["Gemini AI", "Creative Tools", "Imagination"],
        icon: "📚",
        featured: false,
        comingSoon: true,
        ageGroup: "5-12 Years",
        safety: ["Creative-Safe", "Parent Controls", "Ad-Free"]
    }
];

// DOM Elements
const appsGrid = document.getElementById('projectsGrid');
const heroAppsGrid = document.getElementById('heroAppsGrid');
const heroAppsGridDesktop = document.getElementById('heroAppsGridDesktop');
const featuredAppCard = document.getElementById('featuredAppCard');
const contactBtn = document.getElementById('contactBtn');

// Load apps on page load
document.addEventListener('DOMContentLoaded', function() {
    loadApps();
    loadHeroApps();
    loadFeaturedApp();
    initializeInteractions();
    initializeScrollAnimations();
    addMagicalEffects();
});

// Load and display apps in hero section (mobile/tablet)
function loadHeroApps() {
    if (!heroAppsGrid) return;
    
    heroAppsGrid.innerHTML = '';
    
    // Get only featured apps for hero section
    const featuredApps = appsData.filter(app => app.featured);
    
    featuredApps.forEach(app => {
        const heroCard = createHeroAppCard(app);
        heroAppsGrid.appendChild(heroCard);
    });
}

// Load single featured app for desktop hero
function loadFeaturedApp() {
    if (!featuredAppCard) return;
    
    featuredAppCard.innerHTML = '';
    
    // Get the primary featured app (Family Tree App)
    const primaryApp = appsData.find(app => app.id === 1); // Family Tree App
    
    if (primaryApp) {
        const featuredCard = createFeaturedAppCard(primaryApp);
        featuredAppCard.appendChild(featuredCard);
    }
}

// Load and display apps
function loadApps() {
    if (!appsGrid) return;
    
    appsGrid.innerHTML = '';
    
    // Sort apps to show featured ones first
    const sortedApps = [...appsData].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    sortedApps.forEach(app => {
        const appCard = createAppCard(app);
        appsGrid.appendChild(appCard);
    });
}

// Create featured app card for desktop hero
function createFeaturedAppCard(app) {
    const card = document.createElement('div');
    card.className = `featured-app-main ${app.comingSoon ? 'coming-soon' : ''}`;
    
    const appLink = app.comingSoon ? 
        '<div class="featured-app-status">🚀 Coming Soon!</div>' :
        `<a href="${app.playStoreUrl || '#'}" target="_blank" rel="noopener noreferrer" class="featured-app-download">
            <i class="fab fa-google-play"></i> Download Now
        </a>`;
    
    card.innerHTML = `
        <div class="featured-app-icon">${app.icon}</div>
        <h4 class="featured-app-name">${app.name}</h4>
        <div class="featured-app-age">👶 ${app.ageGroup}</div>
        ${appLink}
    `;
    
    // Add click handler for app card
    if (!app.comingSoon && app.playStoreUrl) {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.featured-app-download')) {
                window.open(app.playStoreUrl, '_blank', 'noopener noreferrer');
            }
        });
        card.style.cursor = 'pointer';
    }
    
    return card;
}

// Create desktop hero app card (specialized for desktop layout)
function createDesktopHeroAppCard(app) {
    const card = document.createElement('div');
    card.className = `desktop-hero-app-card ${app.comingSoon ? 'coming-soon' : ''}`;
    
    const appLink = app.comingSoon ? 
        '<div class="desktop-hero-app-status">🚀 Coming Soon!</div>' :
        `<a href="${app.playStoreUrl || '#'}" target="_blank" rel="noopener noreferrer" class="desktop-hero-app-link">
            <i class="fas fa-download"></i> Download
        </a>`;
    
    card.innerHTML = `
        <div class="desktop-hero-app-header">
            <div class="desktop-hero-app-icon">${app.icon}</div>
            <div class="desktop-hero-app-info">
                <h4 class="desktop-hero-app-name">${app.name}</h4>
                <p class="desktop-hero-app-type">${app.type}</p>
            </div>
        </div>
        <div class="desktop-hero-app-meta">
            <div class="desktop-hero-app-age">👶 ${app.ageGroup}</div>
            <div class="desktop-hero-app-safety">${app.safety[0]}</div>
        </div>
        ${appLink}
    `;
    
    // Add click handler for app cards
    if (!app.comingSoon && app.playStoreUrl) {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.desktop-hero-app-link')) {
                window.open(app.playStoreUrl, '_blank', 'noopener noreferrer');
            }
        });
        card.style.cursor = 'pointer';
    }
    
    return card;
}

// Create hero app card (compact version for hero section)
function createHeroAppCard(app) {
    const card = document.createElement('div');
    card.className = `hero-app-card ${app.comingSoon ? 'coming-soon' : ''}`;
    
    const appLink = app.comingSoon ? 
        '<div class="hero-app-status">🚀 Soon!</div>' :
        `<a href="${app.playStoreUrl || '#'}" target="_blank" rel="noopener noreferrer" class="hero-app-link">
            <i class="fas fa-download"></i>
        </a>`;
    
    card.innerHTML = `
        <div class="hero-app-icon">${app.icon}</div>
        <div class="hero-app-info">
            <h4 class="hero-app-name">${app.name}</h4>
            <p class="hero-app-type">${app.type}</p>
            <div class="hero-app-age">👶 ${app.ageGroup}</div>
        </div>
        ${appLink}
    `;
    
    // Add click handler for app cards
    if (!app.comingSoon && app.playStoreUrl) {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.hero-app-link')) {
                window.open(app.playStoreUrl, '_blank', 'noopener noreferrer');
            }
        });
        card.style.cursor = 'pointer';
    }
    
    return card;
}

// Create individual app card
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = `project-card ${app.featured ? 'featured' : ''} ${app.comingSoon ? 'coming-soon' : ''}`;
    
    const techTags = app.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const safetyBadges = app.safety.map(badge => 
        `<span class="safety-badge">✅ ${badge}</span>`
    ).join('');
    
    const appLinks = app.comingSoon ? 
        '<div class="project-links"><div class="coming-soon-label">🚀 Coming Soon!</div></div>' :
        `<div class="project-links">
            ${app.playStoreUrl ? `<a href="${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fab fa-google-play"></i> Download Now
            </a>` : ''}
        </div>`;
    
    const ageGroupBadge = app.ageGroup ? `<div class="age-group">👶 Ages: ${app.ageGroup}</div>` : '';
    
    card.innerHTML = `
        <div class="project-header">
            <div class="project-icon">${app.icon}</div>
            <div class="project-info">
                <h3>${app.name}</h3>
                <div class="project-type">${app.type}</div>
                ${ageGroupBadge}
            </div>
        </div>
        <div class="project-description">${app.description}</div>
        <div class="project-tech">${techTags}</div>
        <div class="safety-badges">${safetyBadges}</div>
        ${appLinks}
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
            // Fun, family-friendly contact interaction
            const messages = [
                '🎉 Ready to create something amazing together! Let\'s chat about your magical app idea!',
                '✨ Got a brilliant idea? I\'d love to help bring it to life for families everywhere!',
                '🚀 Let\'s build the next wonderful app that kids and parents will absolutely love!'
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
        });
    }
    
    // Add magical hover effects to app cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Add sparkle effect on hover
            createSparkleEffect(this);
        });
        
        // Add click effect for mobile
        card.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
        });
    });
    
    // Add magical hover effects to hero app cards
    document.querySelectorAll('.hero-app-card').forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Add sparkle effect on hover
            createSparkleEffect(this);
        });
        
        // Add click effect for mobile
        card.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);
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
                
                // Add special effects for different sections
                if (entry.target.classList.contains('mission')) {
                    addFloatingHearts();
                }
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('.mission, .apps, .connect').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Observe app cards for staggered animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Observe hero app cards for staggered animation
    document.querySelectorAll('.hero-app-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Add magical effects
function addMagicalEffects() {
    // Create floating particles
    createFloatingParticles();
    
    // Add rainbow effect to featured apps
    setInterval(addRainbowGlow, 3000);
}

// Create sparkle effect on hover
function createSparkleEffect(element) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * element.offsetWidth + 'px';
            sparkle.style.top = Math.random() * element.offsetHeight + 'px';
            sparkle.style.fontSize = '1rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '10';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            
            element.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 100);
    }
}

// Create floating particles effect
function createFloatingParticles() {
    const particles = ['⭐', '🌟', '💫', '✨', '🎈', '🎉'];
    
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            const particle = document.createElement('div');
            particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            particle.style.fontSize = '1.5rem';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1';
            particle.style.animation = 'floatUp 4s linear forwards';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 4000);
        }
    }, 2000);
}

// Add floating hearts effect
function addFloatingHearts() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1';
            heart.style.animation = 'floatUp 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 500);
    }
}

// Add rainbow glow to featured apps
function addRainbowGlow() {
    const featuredCards = document.querySelectorAll('.project-card.featured');
    featuredCards.forEach(card => {
        card.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.6)';
        setTimeout(() => {
            card.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
        }, 1000);
    });
}

// Utility functions for easy app management

// Add new app
function addApp(appData) {
    appsData.push(appData);
    loadApps();
    initializeInteractions();
}

// Update featured apps
function updateFeaturedApps(appIds) {
    appsData.forEach(app => {
        app.featured = appIds.includes(app.id);
    });
    loadApps();
    initializeInteractions();
}

// Filter apps by category
function filterApps(category) {
    const filteredApps = category === 'all' ? appsData : appsData.filter(app => app.category === category);
    return filteredApps;
}

// Search apps
function searchApps(query) {
    const searchTerm = query.toLowerCase();
    return appsData.filter(app => 
        app.name.toLowerCase().includes(searchTerm) ||
        app.description.toLowerCase().includes(searchTerm) ||
        app.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    );
}

// Export functions for easy management
window.appsManager = {
    addApp,
    updateFeaturedApps,
    filterApps,
    searchApps,
    appsData,
    loadApps
};

// Add CSS animations dynamically
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
    
    @keyframes floatUp {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    .project-card.clicked {
        transform: scale(0.95) !important;
    }
    
    .safety-badges {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
        flex-wrap: wrap;
    }
    
    .safety-badge {
        background: linear-gradient(135deg, #48bb78, #38a169);
        color: white;
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .age-group {
        color: #667eea;
        font-size: 0.9rem;
        font-weight: 600;
        margin-top: 0.5rem;
    }
    
    .coming-soon-label {
        background: linear-gradient(135deg, #fbd38d, #ed8936);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-weight: 600;
        display: inline-block;
        animation: bounce 2s ease-in-out infinite;
    }
    
    .project-card.coming-soon {
        position: relative;
        opacity: 0.9;
    }
    
    .project-card.coming-soon::before {
        background: linear-gradient(135deg, #fbd38d, #ed8936, #48bb78);
    }
`;
document.head.appendChild(styleSheet);