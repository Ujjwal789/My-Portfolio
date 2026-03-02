// ===== DATA OBJECTS =====
const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
    'Java', 'Python', 'RESTful APIs', 'GraphQL', 'SQL',
    'MongoDB', 'Git', 'Docker', 'CI/CD'
];

const projects = [
    {
        id: 'project1',
        title: 'AI-Powered Meeting Notes Summarizer',
        image: 'assets/ai-notes summeriser.png',
        details: {
            overview: 'A modern web app that converts meeting transcripts into concise AI-powered summaries. Paste or upload transcripts, generate summaries with customizable instructions, and email them directly — hosted on Vercel for fast access.',
            techStack: ['React.js', 'Next.js', 'Node.js', 'Groq API', 'Nodemailer', 'Vercel'],
            features: [
                'Paste or upload meeting transcripts',
                'AI-generated meeting summaries via Groq LLM',
                'Customizable summary instructions',
                'Send summarized notes via email with Nodemailer'
            ],
            github: 'https://github.com/Ujjwal789/AI-powered-meeting-notes-summarizer-and-sharer.git',
            liveDemo: 'https://ai-powered-meeting-notes-summarizer-ten.vercel.app/'
        }
    },
    {
        id: 'project2',
        title: 'EchoMind – Offline AI Voice Assistant',
        image: 'assets/Echo.png',
        details: {
            overview: 'EchoMind is a sophisticated, enterprise-grade conversational AI assistant combining NLP, voice interaction, file analysis, and multi-user capabilities. Built with a local LLM (Phi-3 Mini), Whisper STT, and Edge TTS — fully offline. No data ever leaves your machine.',
            techStack: ['Python', 'Flask', 'Phi-3 Mini', 'Whisper STT', 'Edge TTS / Piper', 'PyPDF2', 'pytesseract', 'JavaScript', 'Web Speech API'],
            features: [
                'Fully offline — no cloud dependency, no telemetry',
                'Multi-user support with isolated accounts and persistent memory',
                'Voice interface with real-time speech recognition and TTS',
                'File intelligence — analyze PDFs, DOCX, images via OCR',
                'System integration — browser automation and Windows app control',
                'Multi-agent intelligence with contextual memory'
            ],
            github: 'https://github.com/Ujjwal789/EchoMind.git',
            liveDemo: null
        }
    },
    {
        id: 'project3',
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
            github: 'https://github.com/Ujjwal789/Btu-discuision.git',
            liveDemo: null
        }
    },
    {
        id: 'project4',
        title: 'Multilingual FAQ System',
        image: 'assets/faq.PNG',
        details: {
            overview: 'A scalable and multilingual FAQ management platform built with Django. It enables storing, retrieving, and displaying FAQs in multiple languages with REST API support.',
            techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker'],
            features: [
                'Rich text formatting in admin panel',
                'Multilingual support with Google Translate',
                'REST API with language parameter',
                'Redis caching for performance'
            ],
            github: 'https://github.com/Ujjwal789/FaQ',
            liveDemo: null
        }
    },
    {
        id: 'project5',
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
            github: 'https://github.com/Ujjwal789/Taal-taarang',
            liveDemo: null
        }
    },
    {
        id: 'project6',
        title: 'Flappy Pigeon – JavaScript Game',
        image: 'assets/game.PNG',
        details: {
            overview: 'Flappy Pigeon is a fast-paced, browser-based arcade game built entirely using vanilla JavaScript. The game challenges users to control a pigeon flying through a series of pipes.',
            techStack: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
            features: [
                'Smooth character motion with physics',
                'Lightweight and fully responsive',
                'No external dependencies'
            ],
            github: 'https://github.com/Ujjwal789/flappy-pigion.git',
            liveDemo: null
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
    { platform: 'GitHub', url: 'https://github.com/Ujjwal789', icon: 'assets/github.svg' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/Ujjwal789/', icon: 'assets/Linkedin.svg' },
    { platform: 'Email', url: 'mailto:ujjwal.mathuri789@gmail.com', icon: 'assets/svg-image-7.svg' },
    { platform: 'Call Me', url: 'tel:+917404095263', icon: 'assets/svg-image-10.svg' }
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
    setupCursor();
    setupScrollReveal();
});

// ===== CUSTOM CURSOR =====
function setupCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (!cursor || !follower) return;

    let fx = 0, fy = 0;
    let mx = 0, my = 0;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
    });

    function animateFollower() {
        fx += (mx - fx) * 0.12;
        fy += (my - fy) * 0.12;
        follower.style.left = fx + 'px';
        follower.style.top = fy + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Scale on hover interactive elements
    const interactives = document.querySelectorAll('a, button, .project-card, .achievement-card, .connect-card, .skill-box');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            follower.style.width = '56px';
            follower.style.height = '56px';
            follower.style.borderColor = 'rgba(124,106,247,0.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.width = '36px';
            follower.style.height = '36px';
            follower.style.borderColor = 'rgba(124,106,247,0.5)';
        });
    });
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
    const revealEls = document.querySelectorAll('.about, .container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
}

// ===== PARTICLES =====
function createParticles() {
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.animationDelay = `${Math.random() * 12}s`;
        p.style.animationDuration = `${12 + Math.random() * 10}s`;
        p.style.width = `${1 + Math.random() * 2}px`;
        p.style.height = p.style.width;
        // Random accent colors
        const colors = ['#7c6af7', '#e85d9e', '#38e8c6'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        particlesContainer.appendChild(p);
    }
}

// ===== SVG FALLBACK =====
function svgFallback(text, width, height) {
    const label = encodeURIComponent(text.substring(0, 18));
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'><rect width='${width}' height='${height}' fill='%2316161d'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='13' fill='%237c6af7'>${label}</text></svg>`;
}

// ===== RENDER SKILLS =====
function renderSkills() {
    skills.forEach((skill, index) => {
        const el = document.createElement('span');
        el.className = 'skill-box';
        el.textContent = skill;
        el.style.animation = `scaleIn 0.5s ease-out ${index * 0.06}s forwards`;
        skillsContainer.appendChild(el);
    });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('onclick', `openModal('${project.id}')`);
        card.style.animation = `scaleIn 0.5s ease-out ${index * 0.08}s forwards`;

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy"
                 onerror="this.onerror=null; this.src='${svgFallback(project.title, 280, 180)}'">
            <div class="project-card-overlay"><div class="view-btn">View Project</div></div>
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

            <h2>Overview</h2>
            <p>${project.details.overview}</p>

            <h2>Tech Stack</h2>
            <ul>
                ${project.details.techStack.map(t => `<li>${t}</li>`).join('')}
            </ul>

            <h2>Key Features</h2>
            <ul class="features-list">
                ${project.details.features.map(f => `<li>${f}</li>`).join('')}
            </ul>

            <h2>Links</h2>
            <div class="modal-links">
                <a href="${project.details.github}" target="_blank" rel="noopener noreferrer" class="modal-link github">
                    <img src="assets/github.svg" alt="GitHub">
                    GitHub Repository
                </a>
                ${project.details.liveDemo ? `
                <a href="${project.details.liveDemo}" target="_blank" rel="noopener noreferrer" class="modal-link live">
                    🔗 Live Demo
                </a>` : ''}
            </div>
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

        card.innerHTML = `
            <img src="${achievement.image}" alt="${achievement.title}" loading="lazy"
                 onerror="this.onerror=null; this.src='${svgFallback(achievement.title, 250, 160)}'">
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
                 onerror="this.onerror=null; this.src='${svgFallback(achievement.title, 500, 280)}'">
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

        card.innerHTML = `
            <img src="${link.icon}" alt="${link.platform}" loading="lazy"
                 onerror="this.onerror=null; this.src='${svgFallback(link.platform[0], 50, 50)}'">
            <h3>${link.platform}</h3>
        `;

        connectGrid.appendChild(card);
    });
}

// ===== TYPING ANIMATION =====
function setupTypingAnimation() {
    const words = ['Web Developer', 'Software Engineer', 'Full Stack Dev', 'Problem Solver'];
    const typingText = document.getElementById('typing-text');
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        if (!typingText) return;
        const currentWord = words[wordIndex];
        typingText.textContent = isDeleting
            ? currentWord.substring(0, charIndex - 1)
            : currentWord.substring(0, charIndex + 1);
        isDeleting ? charIndex-- : charIndex++;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 45 : 90);
        }
    }
    setTimeout(typeEffect, 1000);
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== IMAGE HANDLING =====
function setupImageHandling() {
    const profileImg = document.getElementById('profile-image');
    if (profileImg) {
        profileImg.onerror = () => {
            profileImg.style.display = 'none';
            const inner = document.querySelector('.profile-pic-inner');
            if (inner) {
                inner.style.display = 'flex';
                inner.style.alignItems = 'center';
                inner.style.justifyContent = 'center';
                inner.style.fontSize = '2rem';
                inner.style.fontWeight = '700';
                inner.style.color = '#7c6af7';
                inner.textContent = 'UG';
            }
        };
    }
}

// ===== MODAL FUNCTIONS =====
window.openModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

window.closeModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

window.onclick = function (event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// ===== PARALLAX ORBS =====
document.addEventListener('mousemove', function (e) {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mx = e.clientX / window.innerWidth;
    const my = e.clientY / window.innerHeight;
    orbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform = `translate(${(mx - 0.5) * speed}px, ${(my - 0.5) * speed}px) scale(1)`;
    });
});

// ===== INTERSECTION OBSERVER FOR CARDS =====
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.project-card, .achievement-card, .connect-card').forEach(el => {
    cardObserver.observe(el);
});