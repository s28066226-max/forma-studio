import React from 'react';
import './App.css';

// Concept Projects Data
const PROJECTS = [
  {
    id: 1,
    title: 'Northstar',
    category: 'AI Brand & Platform',
    description: 'Brand identity system and responsive web application designed for an enterprise AI analytics lab.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['UI/UX Design', 'Design System', 'React']
  },
  {
    id: 2,
    title: 'Sunday Supply',
    category: 'E-Commerce Experience',
    description: 'Minimalist storefront with custom cart interactions and editorial layout for a modern lifestyle brand.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    tags: ['E-Commerce', 'Editorial', 'Frontend']
  },
  {
    id: 3,
    title: 'Form & Field',
    category: 'Architecture Showcase',
    description: 'Immersive portfolio layout focusing on spatial architecture, bold typography, and micro-animations.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Portfolio', 'Interaction Design', 'CSS']
  }
];

export default function App() {
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

            {/* Abstract CSS Artwork */}
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
                <article key={project.id} className="project-card">
                  <div className="card-image-wrapper">
                    <img src={project.image} alt={project.title} className="card-image" />
                    <span className="concept-badge">Concept</span>
                  </div>
                  <div className="card-content">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    <div className="card-footer">
                      <span>View Case Study</span>
                      <span>→</span>
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
              {/* REMINDER: Replace with your personal email address */}
              <a href="mailto:hello@example.com" className="contact-email">
                hello@example.com
              </a>
            </div>
          </div>
        </section>
      </main>

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
