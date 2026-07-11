import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

// Asset imports
import profileImg from './assets/profile.jpg'
import launchmlLogo from './assets/launchml.png'
import devtechLogo from './assets/devtech.jpg'
import lubnaLogo from './assets/lubna.jpg'

// Inline SVG Icons for premium and fast loading
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
)

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
)

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <div className="app-container">
      {/* Ambient background glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Glassmorphic Navbar */}
      <header>
        <div className="logo-text gradient-text">Estifanos Abera</div>
        <nav>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>About</a></li>
            <li><a href="#timeline" className={activeSection === 'timeline' ? 'active' : ''} onClick={() => setActiveSection('timeline')}>Timeline</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setActiveSection('experience')}>Experience</a></li>
          </ul>
        </nav>
        <a href="#contact" className="contact-btn-nav">Get in Touch</a>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home">
          <motion.div 
            className="hero-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-content" variants={itemVariants}>
              <h1 className="gradient-text">
                The only way to<br />predict the future<br />is to build it.
              </h1>
              <p className="hero-subtitle">
                High school student & AI/ML enthusiast. I build real-world systems at the intersection of technology, sports, education, and more.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="primary-btn">
                  Explore Work
                  <ExternalLinkIcon />
                </a>
                <a href="/resume.pdf" target="_blank" className="secondary-btn">
                  <FileIcon />
                  View Resume
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="hero-image-area"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="portrait-frame">
                <img src={profileImg} alt="Estifanos Abera" className="portrait-img" />
                <div className="glow-overlay"></div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Quick Facts Section */}
        <section id="about">
          <h2 className="section-title">Quick Facts</h2>
          <div className="facts-grid">
            <motion.div 
              className="fact-card glass-panel neon-glow-blue"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="fact-icon">🎓</span>
              <span className="fact-title">Education</span>
              <span className="fact-value">Saint Joseph School</span>
            </motion.div>

            <motion.div 
              className="fact-card glass-panel neon-glow-pink"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="fact-icon">🐍</span>
              <span className="fact-title">Primary Tool</span>
              <span className="fact-value">Python & ML Stack</span>
            </motion.div>

            <motion.div 
              className="fact-card glass-panel neon-glow-blue"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="fact-icon">✨</span>
              <span className="fact-title">Dream College</span>
              <span className="fact-value">Bowdoin College</span>
            </motion.div>

            <motion.div 
              className="fact-card glass-panel neon-glow-pink"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="fact-icon">🥋</span>
              <span className="fact-title">Fun Facts</span>
              <span className="fact-value">Football & Taekwondo</span>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline">
          <h2 className="section-title">My Journey</h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content glass-panel"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-year">2024</div>
                <h3 className="timeline-title">The Spark & The Pause</h3>
                <p className="timeline-desc">
                  Took my first steps into programming. Got highly discouraged midway and stepped back, finding my path before committing.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content glass-panel"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-year">2025</div>
                <h3 className="timeline-title">ML Internship & Mentorships</h3>
                <p className="timeline-desc">
                  Returned to code. Landed an ML Internship at Devtech, studied neuroscience at Lubna Foundation, and mentored students in English.
                </p>
              </motion.div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <motion.div 
                className="timeline-content glass-panel"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-year">2026</div>
                <h3 className="timeline-title">Research & LaunchML</h3>
                <p className="timeline-desc">
                  Published a systematic research paper on real estate prediction, founded LaunchML to bring AI/ML to high school students, and mastering python daily.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="section-title">Featured Projects & Publications</h2>
          
          {/* LaunchML Showcase */}
          <motion.div 
            className="featured-project glass-panel neon-glow-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-card-featured">
              <div className="project-logo-area">
                <img src={launchmlLogo} alt="LaunchML" className="project-logo-img" />
              </div>
              <div>
                <span className="gradient-text" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>Founder & Creator</span>
                <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>LaunchML</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  A free, 4-week AI/ML mentorship program for high school students in Ethiopia. Designed to pair students with experienced professionals to learn Python basics, core regression and classification models, and build graduation projects.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">Mentorship</span>
                  <span className="tech-tag">Education</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="projects-grid">
            {/* Research Paper */}
            <motion.div 
              className="project-card glass-panel neon-glow-pink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <span className="gradient-text" style={{ fontSize: '0.8rem', fontWeight: 700 }}>PUBLISHED PAPER</span>
                <h3 style={{ marginTop: '0.5rem' }}>ML for Ethiopian Real Estate</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  A systematic research study comparing Linear Regression, Ridge, Random Forest, and Gradient Boosting on a dataset of 500 Addis Ababa homes. Evaluated feature importance in the local housing market.
                </p>
                <ul className="project-features">
                  <li>Best model: Gradient Boosting (R² = 0.962)</li>
                  <li>Identified locational features & ring road premiums</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="/research-paper.pdf" target="_blank" className="secondary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Read PDF</a>
                <a href="https://zenodo.org/records/20367970" target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  Zenodo
                  <ExternalLinkIcon />
                </a>
              </div>
            </motion.div>

            {/* House Price Predictor */}
            <motion.div 
              className="project-card glass-panel neon-glow-blue"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div>
                <span className="gradient-text" style={{ fontSize: '0.8rem', fontWeight: 700 }}>ML TOOLKIT</span>
                <h3 style={{ marginTop: '0.5rem' }}>House Price Predictor</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  An end-to-end price prediction system built during my Devtech internship and updated with my research findings. Enables users to estimate property prices.
                </p>
                <ul className="project-features">
                  <li>Features neighborhood, area, condition</li>
                  <li>Interactive web deployment on Streamlit</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://github.com/Estifanos-Abera/house-price-predictor" target="_blank" rel="noopener noreferrer" className="primary-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  GitHub
                  <ExternalLinkIcon />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title">Experiences & Internships</h2>
          <div className="exp-grid">
            <motion.div 
              className="exp-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="exp-logo">
                <img src={devtechLogo} alt="Devtech" className="exp-logo-img" />
              </div>
              <div>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">Machine Learning Intern</h3>
                    <span className="exp-org">Devtech</span>
                  </div>
                  <span className="exp-meta">June 2025 - Aug 2025</span>
                </div>
                <ul className="exp-bullets">
                  <li>Developed a Linear Regression model in Python using scikit-learn to predict property prices based on key factors.</li>
                  <li>Cleaned and analyzed Kaggle datasets using pandas and NumPy, setting up baseline validation pipelines.</li>
                  <li>Achieved model performance R² ~0.90, gaining complete end-to-end project workflow mastery.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="exp-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="exp-logo">
                <img src={lubnaLogo} alt="Lubna Foundation" className="exp-logo-img" />
              </div>
              <div>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">Neurology Mentee</h3>
                    <span className="exp-org">Lubna Foundation</span>
                  </div>
                  <span className="exp-meta">Sep 2025 - Nov 2025</span>
                </div>
                <ul className="exp-bullets">
                  <li>Studied complex neurological conditions including Spina bifida, hydrocephalus, and neuroplasticity mechanisms.</li>
                  <li>Guided by professional practitioners, developing a foundational clinical research and observation mindset.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="exp-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="exp-logo">
                <div style={{ fontSize: '24px' }}>🏫</div>
              </div>
              <div>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">Volunteer English Instructor</h3>
                    <span className="exp-org">Org for Learning & Development</span>
                  </div>
                  <span className="exp-meta">Jul 2025 - Aug 2025</span>
                </div>
                <ul className="exp-bullets">
                  <li>Delivered custom curriculum for 30+ students focused on improving literacy and academic mastery.</li>
                  <li>Enhanced leadership skills by adapting pedagogical styles to fit diverse classroom learning speeds.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contacts-wrapper glass-panel" style={{ padding: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              I'm always excited to discuss machine learning, research opportunities, or potential academic collaborations. Feel free to reach out directly!
            </p>
            <div className="email-box">
              <a href="mailto:estifanos2712@gmail.com" className="email-link">estifanos2712@gmail.com</a>
            </div>
            <div className="social-links-row">
              <a href="https://www.linkedin.com/in/estifanos-abera-2a0702387" target="_blank" rel="noopener noreferrer" className="social-pill">
                <LinkedinIcon />
                LinkedIn
              </a>
              <a href="https://github.com/Estifanos-Abera" target="_blank" rel="noopener noreferrer" className="social-pill">
                <GithubIcon />
                GitHub
              </a>
              <a href="https://t.me/Urestifo" target="_blank" rel="noopener noreferrer" className="social-pill">
                <TelegramIcon />
                Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p className="footer-quote">"The only way to predict the future is to build it."</p>
        <p>© 2026 Estifanos Abera. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
