import type { PortfolioData } from "@/types/portfolio"

export function generatePortfolioCode(data: PortfolioData): string {
  // Always generate the enhanced template regardless of the template type
  return generateEnhancedTemplate(data)
}

function generateEnhancedTemplate(data: PortfolioData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${data.description.substring(0, 160)}">
  <title>${data.name} - ${data.title}</title>
  <style>
    /* Modern CSS Reset */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
      margin: 0;
    }
    
    /* Custom Properties */
    :root {
      --color-primary: #3b82f6;
      --color-primary-dark: #2563eb;
      --color-primary-light: #60a5fa;
      --color-secondary: #8b5cf6;
      --color-secondary-dark: #7c3aed;
      --color-accent: #f43f5e;
      --color-text: #1f2937;
      --color-text-light: #6b7280;
      --color-text-lighter: #9ca3af;
      --color-background: #ffffff;
      --color-background-alt: #f9fafb;
      --color-border: #e5e7eb;
      --color-border-light: #f3f4f6;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --transition: all 0.3s ease;
      --container-width: 1200px;
      --header-height: 70px;
      --section-spacing: 5rem;
      --border-radius: 0.5rem;
      --border-radius-lg: 1rem;
    }
    
    /* Base Styles */
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: var(--font-sans);
      color: var(--color-text);
      line-height: 1.6;
      background-color: var(--color-background);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    img {
      max-width: 100%;
      display: block;
    }
    
    a {
      color: var(--color-primary);
      text-decoration: none;
      transition: var(--transition);
    }
    
    a:hover {
      color: var(--color-primary-dark);
    }
    
    /* Typography */
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--color-text);
    }
    
    h1 {
      font-size: 3rem;
      letter-spacing: -0.025em;
    }
    
    h2 {
      font-size: 2.25rem;
      letter-spacing: -0.025em;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    h4 {
      font-size: 1.25rem;
    }
    
    p {
      margin-bottom: 1.5rem;
    }
    
    /* Layout */
    .container {
      width: 100%;
      max-width: var(--container-width);
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .section {
      padding: var(--section-spacing) 0;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -0.75rem;
      left: 50%;
      transform: translateX(-50%);
      width: 5rem;
      height: 0.25rem;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      border-radius: 9999px;
    }
    
    /* Header */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: var(--header-height);
      background-color: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: var(--shadow-sm);
      z-index: 100;
      transition: var(--transition);
    }
    
    .header.scrolled {
      box-shadow: var(--shadow);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text);
      display: flex;
      align-items: center;
    }
    
    .logo-gradient {
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .nav {
      display: flex;
      align-items: center;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .nav-item {
      margin-left: 2rem;
    }
    
    .nav-link {
      color: var(--color-text);
      font-weight: 500;
      position: relative;
    }
    
    .nav-link:hover {
      color: var(--color-primary);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -0.25rem;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-primary);
      transition: var(--transition);
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-link.active {
      color: var(--color-primary);
    }
    
    .nav-link.active::after {
      width: 100%;
    }
    
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      color: var(--color-text);
    }
    
    /* Hero Section */
    .hero {
      padding-top: calc(var(--header-height) + 5rem);
      padding-bottom: 5rem;
      background: linear-gradient(to bottom right, var(--color-background-alt), var(--color-background));
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: -10%;
      right: -10%;
      width: 50%;
      height: 70%;
      background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
      border-radius: 50%;
      z-index: 0;
    }
    
    .hero-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 1;
    }
    
    .hero-content {
      max-width: 600px;
    }
    
    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
    
    .hero-description {
      font-size: 1.125rem;
      color: var(--color-text-light);
      margin-bottom: 2rem;
    }
    
    .hero-cta {
      display: inline-block;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      color: white;
      padding: 0.75rem 2rem;
      border-radius: 9999px;
      font-weight: 600;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }
    
    .hero-cta:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      color: white;
    }
    
    .hero-image {
      width: 350px;
      height: 350px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      border: 5px solid white;
      position: relative;
    }
    
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .hero-image-placeholder {
      width: 100%;
      height: 100%;
      background-color: var(--color-background-alt);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-light);
    }
    
    /* About Section */
    .about {
      background-color: var(--color-background);
    }
    
    .about-content {
      max-width: 800px;
      margin: 0 auto;
      font-size: 1.125rem;
    }
    
    /* Projects Section */
    .projects {
      background-color: var(--color-background-alt);
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .project-card {
      background-color: var(--color-background);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }
    
    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-md);
    }
    
    .project-image {
      height: 200px;
      background-color: var(--color-background-alt);
      position: relative;
    }
    
    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .project-image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-light);
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    .project-description {
      color: var(--color-text-light);
      margin-bottom: 1rem;
    }
    
    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .project-tag {
      background-color: var(--color-background-alt);
      color: var(--color-text);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .project-link {
      display: inline-flex;
      align-items: center;
      color: var(--color-primary);
      font-weight: 500;
    }
    
    .project-link svg {
      margin-left: 0.25rem;
      transition: var(--transition);
    }
    
    .project-link:hover svg {
      transform: translateX(3px);
    }
    
    /* Skills Section */
    .skills {
      background-color: var(--color-background);
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 2rem;
    }
    
    .skill-card {
      background-color: var(--color-background);
      border: 1px solid var(--color-border-light);
      border-radius: var(--border-radius);
      padding: 1.5rem;
      text-align: center;
      transition: var(--transition);
    }
    
    .skill-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow);
      border-color: var(--color-primary-light);
    }
    
    .skill-icon {
      width: 4rem;
      height: 4rem;
      background-color: var(--color-background-alt);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      color: var(--color-primary);
    }
    
    .skill-name {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .skill-level {
      width: 100%;
      height: 0.5rem;
      background-color: var(--color-background-alt);
      border-radius: 9999px;
      overflow: hidden;
      margin-top: 0.75rem;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      border-radius: 9999px;
    }
    
    /* Experience & Education Section */
    .experience {
      background-color: var(--color-background-alt);
    }
    
    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--color-primary), var(--color-secondary));
    }
    
    .timeline-item {
      position: relative;
      padding-left: 2.5rem;
      padding-bottom: 3rem;
    }
    
    .timeline-item:last-child {
      padding-bottom: 0;
    }
    
    .timeline-dot {
      position: absolute;
      top: 0;
      left: -0.5rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      border: 2px solid white;
    }
    
    .timeline-content {
      background-color: var(--color-background);
      border-radius: var(--border-radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
    }
    
    .timeline-date {
      display: inline-block;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }
    
    .timeline-title {
      font-size: 1.25rem;
      margin-bottom: 0.25rem;
    }
    
    .timeline-subtitle {
      color: var(--color-primary);
      font-weight: 500;
      margin-bottom: 0.75rem;
    }
    
    /* Contact Section */
    .contact {
      background-color: var(--color-background);
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    
    .contact-info {
      background-color: var(--color-background);
      border-radius: var(--border-radius);
      padding: 2rem;
      box-shadow: var(--shadow);
    }
    
    .contact-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
    
    .contact-icon {
      width: 3rem;
      height: 3rem;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      color: white;
      flex-shrink: 0;
    }
    
    .contact-label {
      font-size: 0.875rem;
      color: var(--color-text-light);
      margin-bottom: 0.25rem;
    }
    
    .contact-value {
      font-weight: 500;
    }
    
    .contact-value a {
      color: var(--color-text);
    }
    
    .contact-value a:hover {
      color: var(--color-primary);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    .social-link {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background-alt);
      color: var(--color-text);
      transition: var(--transition);
    }
    
    .social-link:hover {
      transform: translateY(-3px);
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      color: white;
    }
    
    .contact-form {
      background-color: var(--color-background);
      border-radius: var(--border-radius);
      padding: 2rem;
      box-shadow: var(--shadow);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .form-input,
    .form-textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--color-border);
      border-radius: var(--border-radius);
      background-color: var(--color-background);
      color: var(--color-text);
      font-family: inherit;
      font-size: 1rem;
      transition: var(--transition);
    }
    
    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .form-textarea {
      min-height: 150px;
      resize: vertical;
    }
    
    .form-button {
      display: inline-block;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      color: white;
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      cursor: pointer;
      transition: var(--transition);
      width: 100%;
    }
    
    .form-button:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow);
    }
    
    /* Footer */
    .footer {
      background-color: var(--color-background-alt);
      padding: 3rem 0;
      text-align: center;
    }
    
    .footer-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .footer-logo {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .footer-social {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1.5rem 0;
    }
    
    .footer-social-link {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-background);
      color: var(--color-text);
      transition: var(--transition);
    }
    
    .footer-social-link:hover {
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      color: white;
    }
    
    .footer-copyright {
      color: var(--color-text-light);
      font-size: 0.875rem;
    }
    
    /* Responsive Styles */
    @media (max-width: 1024px) {
      .hero-title {
        font-size: 3rem;
      }
      
      .hero-image {
        width: 300px;
        height: 300px;
      }
    }
    
    @media (max-width: 768px) {
      :root {
        --section-spacing: 4rem;
      }
      
      .section-title {
        margin-bottom: 2rem;
      }
      
      .hero-container {
        flex-direction: column;
        text-align: center;
      }
      
      .hero-content {
        margin-bottom: 3rem;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-image {
        width: 250px;
        height: 250px;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
      }
      
      .nav-list {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .mobile-menu {
        position: fixed;
        top: var(--header-height);
        left: 0;
        right: 0;
        background-color: var(--color-background);
        padding: 1.5rem;
        box-shadow: var(--shadow);
        z-index: 99;
      }
      
      .mobile-menu .nav-list {
        display: flex;
        flex-direction: column;
      }
      
      .mobile-menu .nav-item {
        margin: 0;
        margin-bottom: 1rem;
      }
      
      .mobile-menu .nav-item:last-child {
        margin-bottom: 0;
      }
    }
    
    @media (max-width: 640px) {
      :root {
        --section-spacing: 3rem;
      }
      
      h1 {
        font-size: 2.25rem;
      }
      
      h2 {
        font-size: 1.75rem;
      }
      
      .hero-title {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
      }
      
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  </style>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Header scroll effect
      const header = document.querySelector('.header');
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      
      // Mobile menu toggle
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }
          }
        });
      });
      
      // Active nav link highlighting
      const sections = document.querySelectorAll('section[id]');
      
      function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
          const sectionHeight = section.offsetHeight;
          const sectionTop = section.offsetTop - 100;
          const sectionId = section.getAttribute('id');
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.add('active');
          } else {
            document.querySelector('.nav-link[href="#' + sectionId + '"]').classList.remove('active');
          }
        });
      }
      
      window.addEventListener('scroll', highlightNavLink);
    });
  </script>
</head>
<body>
  <header class="header">
    <div class="container header-container">
      <a href="#" class="logo">
        <span class="logo-gradient">${data.name}</span>
      </a>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
          ${data.projects.length > 0 ? `<li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>` : ""}
          ${data.skills.length > 0 ? `<li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>` : ""}
          ${data.experience.length > 0 || data.education.length > 0 ? `<li class="nav-item"><a href="#experience" class="nav-link">Experience</a></li>` : ""}
          <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </div>
    <div class="mobile-menu hidden">
      <ul class="nav-list">
        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        ${data.projects.length > 0 ? `<li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>` : ""}
        ${data.skills.length > 0 ? `<li class="nav-item"><a href="#skills" class="nav-link">Skills</a></li>` : ""}
        ${data.experience.length > 0 || data.education.length > 0 ? `<li class="nav-item"><a href="#experience" class="nav-link">Experience</a></li>` : ""}
        <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </header>

  <section id="hero" class="hero">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Hi, I'm ${data.name}</h1>
        <p class="hero-subtitle">${data.title}</p>
        <p class="hero-description">${data.description.substring(0, 150)}${data.description.length > 150 ? "..." : ""}</p>
        <a href="#contact" class="hero-cta">Get In Touch</a>
      </div>
      <div class="hero-image">
        <div class="hero-image-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p>${data.description}</p>
      </div>
    </div>
  </section>

  ${
    data.projects.length > 0
      ? `
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        ${data.projects
          .map(
            (project) => `
        <div class="project-card">
          <div class="project-image">
            ${
              project.image
                ? `<img src="${project.image}" alt="${project.title}">`
                : `
            <div class="project-image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>`
            }
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              ${project.technologies
                .map(
                  (tech) => `
              <span class="project-tag">${tech}</span>
              `,
                )
                .join("")}
            </div>
            ${
              project.link
                ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            `
                : ""
            }
          </div>
        </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
  `
      : ""
  }

  ${
    data.skills.length > 0
      ? `
  <section id="skills" class="section skills">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      <div class="skills-grid">
        ${data.skills
          .map(
            (skill) => `
        <div class="skill-card">
          <div class="skill-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h3 class="skill-name">${skill.name}</h3>
          <div class="skill-level">
            <div class="skill-progress" style="width: ${(skill.level / 5) * 100}%;"></div>
          </div>
        </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
  `
      : ""
  }

  ${
    data.experience.length > 0 || data.education.length > 0
      ? `
  <section id="experience" class="section experience">
    <div class="container">
      <h2 class="section-title">Experience & Education</h2>
      <div class="timeline">
        ${data.experience
          .map(
            (exp) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">
              ${new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
              ${exp.endDate ? new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
            </div>
            <h3 class="timeline-title">${exp.position}</h3>
            <p class="timeline-subtitle">${exp.company}</p>
            <p>${exp.description}</p>
          </div>
        </div>
        `,
          )
          .join("")}
        
        ${data.education
          .map(
            (edu) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-date">
              ${new Date(edu.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })} - 
              ${edu.endDate ? new Date(edu.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present"}
            </div>
            <h3 class="timeline-title">${edu.institution}</h3>
            <p class="timeline-subtitle">${edu.degree} in ${edu.field}</p>
          </div>
        </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </section>
  `
      : ""
  }

  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <h3 class="contact-title">Contact Information</h3>
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <p class="contact-label">Email</p>
              <p class="contact-value">
                <a href="mailto:${data.contact.email}">${data.contact.email}</a>
              </p>
            </div>
          </div>
          
          ${
            data.contact.phone
              ? `
          <div class="contact-item">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p class="contact-label">Phone</p>
              <p class="contact-value">${data.contact.phone}</p>
            </div>
          </div>
          `
              : ""
          }
          
          <div class="social-links">
            ${
              data.contact.linkedin
                ? `
            <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            `
                : ""
            }
            
            ${
              data.contact.github
                ? `
            <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            `
                : ""
            }
            
            ${
              data.contact.website
                ? `
            <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </a>
            `
                : ""
            }
          </div>
        </div>
        
        <div class="contact-form">
          <h3 class="contact-title">Send a Message</h3>
          <form>
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-input" placeholder="Your name">
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-input" placeholder="Your email">
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" class="form-textarea" placeholder="Your message"></textarea>
            </div>
            <button type="submit" class="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">${data.name}</div>
        <p>${data.title}</p>
        <div class="footer-social">
          ${
            data.contact.linkedin
              ? `
          <a href="${data.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          `
              : ""
          }
          
          ${
            data.contact.github
              ? `
          <a href="${data.contact.github}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          `
              : ""
          }
          
          ${
            data.contact.website
              ? `
          <a href="${data.contact.website}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
          `
              : ""
          }
        </div>
        <div class="footer-copyright">
          &copy; ${new Date().getFullYear()} ${data.name}. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`
}

