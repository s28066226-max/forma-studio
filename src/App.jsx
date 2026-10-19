import React, { useState } from 'react';
import './App.css';

// Expanded Concept Projects Data with Case Study Details
const PROJECTS = [
  {
    id: 1,
    title: 'Northstar',
    category: 'AI Brand & Platform',
    description: 'Brand identity system and responsive web application designed for an enterprise AI analytics lab.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['UI/UX Design', 'Design System', 'React'],
    caseStudy: {
      clientOverview: 'Northstar is a fictional enterprise AI laboratory that builds predictive data tools for research teams.',
      challenge: 'Creating a high-tech visual identity that feels human-centered, precise, and approachable rather than overly complex.',
      solution: 'Developed a custom dark-mode interface system featuring high-contrast visual hierarchy, custom metrics widgets, and structured grid navigation.',
      deliverables: ['Design System', 'Responsive Web App', 'Interactive Dashboard Prototype'],
      toolsUsed: ['Figma', 'React', 'CSS Grid', 'Vite']
    }
  },
  {
    id: 2,
    title: 'Sunday Supply',
    category: 'E-Commerce Experience',
    description: 'Minimalist storefront with custom cart interactions and editorial layout for a modern lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-Commerce', 'Editorial', 'Frontend'],
    caseStudy: {
      clientOverview: 'Sunday Supply is a concept luxury skincare and lifestyle brand focused on sustainable organic ingredients.',
      challenge: 'Balancing heavy imagery with fast mobile load speeds while maintaining an unhurried, magazine-style editorial aesthetic.',
      solution: 'Implemented lazy-loaded media, smooth micro-interactions, bold visual hierarchy, and an effortless single-page slide-out checkout bag.',
      deliverables: ['E-Commerce Layout', 'Mobile First Cart UI', 'Brand Typography Hierarchy'],
      toolsUsed: ['React', 'CSS Transitions', 'JavaScript ES6']
    }
  },
  {
    id: 3,
    title: 'Form & Field',
    category: 'Architecture Showcase',
    description: 'Immersive portfolio layout focusing on spatial architecture, bold typography, and micro-animations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Portfolio', 'Interaction Design', 'CSS'],
    caseStudy: {
      clientOverview: 'Form & Field is an architectural practice specializing in minimalist residential design and sustainable spatial planning.',
      challenge: 'Displaying ultra-high-resolution architectural photography without overwhelming user navigation or breaking mobile responsiveness.',
      solution: 'Designed an asymmetrical layout grid paired with subtle hover animations, clear image captions, and full-screen preview modals.',
      deliverables: ['Architectural Showcase', 'Interactive Project Gallery', 'Mobile-First Layout'],
      toolsUsed: ['React', 'CSS Flexbox/Grid', 'Responsive Web Standards']
    }
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Replace this with your preferred active email address
  const CONTACT_EMAIL = "shanmukhi2300@gmail.com";
  const EMAIL_SUBJECT = encodeURIComponent("Inquiry regarding Forma Studio");
  

  return (
    <div className="app">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="brand-logo">
            FORMA<span className="brand-dot">.</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li><a href="#work" className="nav-link">Work</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <a href="#contact" className="nav-btn">Get in Touch</a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="hero-badge">Web Design & Development Studio</span>
              <h1 className="hero-title">Good ideas deserve great design.</h1>
              <p className="hero-subtitle">
                Forma Studio creates visual digital experiences, brand identities, and high-performance modern web interfaces.
              </p>
              <div className="hero-cta-group">
                <a href="#work" className="primary-btn">Explore Work</a>
                <a href="#about" className="secondary-btn">Our Approach</a>
              </div>
            </div>

            {/* Abstract Artwork */}
            <div className="artwork-container" aria-hidden="true">
              <div className="art-shape-1"></div>
              <div className="art-shape-2"></div>
              <div className="art-shape-3"></div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Portfolio</span>
              <h2 className="section-title">Selected Concept Work</h2>
            </div>

            <div className="projects-grid">
              {PROJECTS.map((project) => (
                <article 
                  key={project.id} 
                  className="project-card clickable"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="card-image-wrapper">
                    <img src={project.image} alt={project.title} className="card-image" />
                    <span className="concept-badge">Concept</span>
                  </div>
                  <div className="card-content">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-footer button-style">
                      <span>View Case Study</span>
                      <span className="arrow-icon">→</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container">
          <div className="about-section">
            <div className="about-grid">
              <div>
                <span className="section-tag">About Studio</span>
                <h2 className="about-title">Crafting digital experiences with clarity and purpose.</h2>
              </div>
              <div>
                <p className="about-text">
                  Forma Studio is a practice focused on web design, user experience evaluation, and modern frontend implementation.
                </p>
                <p className="about-text">
                  We bridge the gap between creative visual design and structured code—evaluating layout composition, typography hierarchy, and interaction design.
                </p>

                <div className="stats-grid">
                  <div>
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Responsive Layouts</div>
                  </div>
                  <div>
                    <div className="stat-number">03</div>
                    <div className="stat-label">Concept Showcases</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-card">
              <span className="section-tag">Get In Touch</span>
              <h2 className="contact-title">Have a project in mind?</h2>
              <p className="hero-subtitle" style={{ margin: '0 auto' }}>
                Currently open for freelance design inquiries and technical web design opportunities.
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              ✕
            </button>
            <span className="card-category">{selectedProject.category}</span>
            <h2 className="modal-title">{selectedProject.title} — Case Study</h2>
            
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              
              <div className="modal-section">
                <h4>Project Overview</h4>
                <p>{selectedProject.caseStudy.clientOverview}</p>
              </div>

              <div className="modal-section">
                <h4>The Design Challenge</h4>
                <p>{selectedProject.caseStudy.challenge}</p>
              </div>

              <div className="modal-section">
                <h4>Execution & Solution</h4>
                <p>{selectedProject.caseStudy.solution}</p>
              </div>

              <div className="modal-meta-grid">
                <div>
                  <h4>Deliverables</h4>
                  <ul>
                    {selectedProject.caseStudy.deliverables.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Tools & Tech</h4>
                  <ul>
                    {selectedProject.caseStudy.toolsUsed.map((tool, idx) => (
                      <li key={idx}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button className="primary-btn full-width" onClick={() => setSelectedProject(null)}>
              Close Case Study
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Forma Studio. Created as a portfolio concept project.</p>
          <span className="footer-disclaimer">Self-Initiated Concept Work</span>
        </div>
      </footer>
    </div>
  );
}
