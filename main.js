// ===== DATA OBJECTS =====
const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 
    'Java', 'Python', 'RESTful APIs', 'GraphQL', 'SQL', 
    'MongoDB', 'Git', 'Docker', 'CI/CD'
];

const projects = [
    {
        id: 'project1',
        title: 'BTU Page – Real-Time Discussion Platform',
        image: 'assets/chat.PNG',
        details: {
            overview: 'BTU Page is a scalable, real-time discussion platform tailored for engineering students. It enables live conversations, project collaboration, and peer-to-peer support using modern full-stack technologies.',
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'JWT'],
            features: [
                'Real-time messaging for course discussions',
                'JWT-based secure login',
                'Fully responsive design',
                'Optimized for scalability'
            ],
            github: 'https://github.com/Ujjwal789/Btu-discuision.git'
        }
    },
    {
        id: 'project2',
        title: 'Taal Taarang Dance Website',
        image: 'assets/d.PNG',
        details: {
            overview: 'Taal Taarang is a vibrant and interactive web platform for a professional dance academy, designed to showcase dance classes, instructor profiles, upcoming events, and admission forms.',
            techStack: ['Pug', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
            features: [
                'Showcase dance styles and class schedules',
                'Dynamic event listings',
                'Admin panel for management'
            ],
            github: 'https://github.com/Ujjwal789/Taal-taarang'
        }
    },
    {
        id: 'project3',
        title: 'Flappy Pigeon – JavaScript Game',
        image: 'assets/game.PNG',
        details: {
            overview: 'Flappy Pigeon is a fast-paced, browser-based arcade game built entirely using vanilla JavaScript. The game challenges users to control a pigeon flying through a series of pipes.',
            techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
            features: [
                'Smooth character motion',
                'Lightweight and responsive',
                'No external dependencies'
            ],
            github: 'https://github.com/Ujjwal789/flappy-pigion.git'
        }
    },
    {
        id: 'project4',
        title: 'Multilingual FAQ System',
        image: 'assets/faq.PNG',
        details: {
            overview: 'A scalable and multilingual FAQ management platform built with Django. It enables storing, retrieving, and displaying FAQs in multiple languages.',
            techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker'],
            features: [
                'Rich text formatting in admin',
                'Multilingual support with Google Translate',
                'REST API with language parameter'
            ],
            github: 'https://github.com/Ujjwal789/FaQ'
        }
    }
];

const achievements = [
    {
        id: 'achievement1',
        title: 'Goldman Sachs',
        image: 'assets/achivment2.PNG',
        description: 'Won certification in a national-level job simulation organized by Goldman Sachs. Developed an AI-powered solution for smart agriculture using React, Flask, and TensorFlow.'
    },
    {
        id: 'achievement2',
        title: 'Deloitte Cyber Security',
        image: 'assets/achivment1.PNG',
        description: 'Successfully completed the Deloitte Cyber Security certification, demonstrating skills in deploying and managing Cyber security.'
    }
];

const connectLinks = [
    {
        platform: 'GitHub',
        url: 'https://github.com/Ujjwal789',
        icon: 'assets/github.svg'
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/Ujjwal789/',
        icon: 'assets/Linkedin.svg'
    },
    {
        platform: 'Email',
        url: 'mailto:ujjwal.mathuri789@gmail.com',
        icon: 'assets/svg-image-7.svg'
    },
    {
        platform: 'Call Me',
        url: 'tel:+917404095263',
        icon: 'assets/svg-image-10.svg'
    }
];

// ===== DOM ELEMENTS =====
const skillsContainer = document.getElementById('skills-container');
const projectGrid = document.getElementById('project-grid');
const achievementGrid = document.getElementById('achievement-grid');
const connectGrid = document.getElementById('connect-grid');
const modalsContainer = document.getElementById('modals-container');
const particlesContainer = document.getElementById('particles-container');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderConnectLinks();
    setupTypingAnimation();
    setupSmoothScroll();
    setupImageHandling();
});

// ===== PARTICLES BACKGROUND =====
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }
}

// ===== RENDER SKILLS =====
function renderSkills() {
    skills.forEach((skill, index) => {
        const skillElement = document.createElement('span');
        skillElement.className = 'skill-box';
        skillElement.textContent = skill;
        skillElement.style.animation = `scaleIn 0.5s ease-out ${index * 0.05}s forwards`;
        skillElement.style.opacity = '0';
        skillsContainer.appendChild(skillElement);
    });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('onclick', `openModal('${project.id}')`);
        card.style.animation = `scaleIn 0.5s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy" 
                 onerror="this.src='https://via.placeholder.com/280x200/0a0a0a/00d2ff?text=${encodeURIComponent(project.title.substring(0, 10))}'">
            <h3>${project.title}</h3>
        `;
        
        projectGrid.appendChild(card);
        createProjectModal(project);
    });
}

// ===== CREATE PROJECT MODALS =====
function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.id = project.id;
    modal.className = 'project-modal';
    
    modal.innerHTML = `
        <div class="project-content">
            <span class="close-btn" onclick="closeModal('${project.id}')">&times;</span>
            <h1>${project.title}</h1>
            <h2>Project Overview</h2>
            <p>${project.details.overview}</p>
            <h2>Tech Stack</h2>
            <ul>
                ${project.details.techStack.map(tech => `<li>${tech}</li>`).join('')}
            </ul>
            <h2>Key Features</h2>
            <ul>
                ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <h2>Links</h2>
            <ul style="list-style: none; padding-left: 0;">
                <li>
                    <a href="${project.details.github}" target="_blank" rel="noopener noreferrer" 
                       style="display: flex; align-items: center; gap: 8px;">
                        <img src="assets/github.svg" alt="GitHub" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
                        GitHub Repository
                    </a>
                </li>
            </ul>
        </div>
    `;
    
    modalsContainer.appendChild(modal);
}

// ===== RENDER ACHIEVEMENTS =====
function renderAchievements() {
    achievements.forEach((achievement, index) => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.setAttribute('onclick', `openModal('${achievement.id}')`);
        card.style.animation = `scaleIn 0.5s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <img src="${achievement.image}" alt="${achievement.title}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/250x180/0a0a0a/00d2ff?text=${encodeURIComponent(achievement.title)}'">
            <h3>${achievement.title}</h3>
        `;
        
        achievementGrid.appendChild(card);
        createAchievementModal(achievement);
    });
}

// ===== CREATE ACHIEVEMENT MODALS =====
function createAchievementModal(achievement) {
    const modal = document.createElement('div');
    modal.id = achievement.id;
    modal.className = 'project-modal';
    
    modal.innerHTML = `
        <div class="project-content">
            <span class="close-btn" onclick="closeModal('${achievement.id}')">&times;</span>
            <h1>${achievement.title}</h1>
            <img src="${achievement.image}" alt="${achievement.title}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/500x300/0a0a0a/00d2ff?text=${encodeURIComponent(achievement.title)}'">
            <p>${achievement.description}</p>
        </div>
    `;
    
    modalsContainer.appendChild(modal);
}

// ===== RENDER CONNECT LINKS =====
function renderConnectLinks() {
    connectLinks.forEach((link, index) => {
        const card = document.createElement('a');
        card.href = link.url;
        card.target = link.url.startsWith('http') ? '_blank' : '_self';
        card.rel = link.url.startsWith('http') ? 'noopener noreferrer' : '';
        card.className = 'connect-card';
        card.style.animation = `scaleIn 0.5s ease-out ${index * 0.1}s forwards`;
        card.style.opacity = '0';
        
        card.innerHTML = `
            <img src="${link.icon}" alt="${link.platform}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/50x50/0a0a0a/00d2ff?text=${link.platform.charAt(0)}'">
            <h3>${link.platform}</h3>
        `;
        
        connectGrid.appendChild(card);
    });
}

// ===== TYPING ANIMATION =====
function setupTypingAnimation() {
    const words = ['Web Developer', 'Software Engineer', 'Full Stack Developer', 'Problem Solver'];
    const typingText = document.getElementById('typing-text');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingText) return;
        
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }

    setTimeout(typeEffect, 1000);
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== IMAGE HANDLING =====
function setupImageHandling() {
    // Profile image
    const profileImg = document.getElementById('profile-image');
    if (profileImg) {
        profileImg.onload = () => console.log('✅ Profile image loaded');
        profileImg.onerror = () => {
            console.warn('❌ Profile image failed to load, using fallback');
            profileImg.style.display = 'none';
            createFallbackAvatar(profileImg.parentNode);
        };
    }
}

function createFallbackAvatar(container) {
    const fallback = document.createElement('div');
    fallback.className = 'profile-pic';
    fallback.style.cssText = `
        width: 170px;
        height: 170px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00d2ff, #3a7bd5);
        margin: 0 auto 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        font-weight: bold;
        color: white;
        border: 3px solid rgba(255, 255, 255, 0.3);
    `;
    fallback.textContent = 'UG';
    container.insertBefore(fallback, container.querySelector('h1'));
}

// ===== MODAL FUNCTIONS =====
window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// Close modal on outside click
window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// ===== PARALLAX EFFECT =====
document.addEventListener('mousemove', function(e) {
    const spheres = document.querySelectorAll('.gradient-sphere');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerWidth;

    spheres.forEach((sphere, index) => {
        const speed = index === 0 ? 20 : 30;
        const x = (mouseX * speed) - (speed / 2);
        const y = (mouseY * speed) - (speed / 2);
        sphere.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    });
});

// ===== INTERSECTION OBSERVER =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .achievement-card, .connect-card').forEach(el => {
    observer.observe(el);
});