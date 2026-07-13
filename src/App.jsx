import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Asset imports
import profileImg from './assets/profile.jpg';
import launchmlLogo from './assets/launchml.png';
import devtechLogo from './assets/devtech.jpg';
import lubnaLogo from './assets/lubna.jpg';

// Custom component imports
import FadingVideo from './components/FadingVideo';
import Magnet from './components/Magnet';
import BlurText from './components/BlurText';

// SVGs for premium look (pure SVG, no external icon packs)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
);

function App() {
  const containerVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: (custom) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.7, delay: custom }
    })
  };

  const projectList = [
    {
      id: 1,
      num: "01",
      name: "LaunchML Mentorship",
      category: "Education & AI/ML",
      desc: "A free, 4-week program pairing high schoolers in Ethiopia with industry professionals to master Python basics, core regression and classification models, and deploy graduation projects.",
      tags: ["Python", "AI/ML", "Mentorship", "Education"],
      link: "https://www.linkedin.com/search/results/companies/?keywords=LaunchML&origin=SWITCH_SEARCH_VERTICAL",
      // linkLabel removed as not applicable
      logo: launchmlLogo
    },
    {
      id: 2,
      num: "02",
      name: "Comparing Machine Learning Approaches for Ethiopian Real Estate Price Prediction",
      category: "Academic Paper",
      desc: "A systematic study benchmarking Linear/Ridge Regression, Random Forest, and Gradient Boosting on 500 Addis Ababa properties, identifying key geographic drivers like Ring Road proximity and diaspora investment.",
      tags: ["Research", "Gradient Boosting", "Scikit-Learn", "Zenodo"],
      link: "https://zenodo.org/records/20367970",
      linkLabel: "Zenodo Publication",
      logo: profileImg // using headshot / profile for research representation
    },
    {
      id: 3,
      num: "03",
      name: "Ethiopian House Price Predictor",
      category: "Machine Learning Tool",
      desc: "An end-to-end price prediction engine built with Gradient Boosting (R² of 0.968) enabling users to input property variables and calculate property value estimates in ETB.",
      tags: ["Streamlit", "Python", "Predictive Analytics", "Deployments"],
      link: "https://house-price-predictor-dyf3qdexzipf4tn7noq4ls.streamlit.app/",
      linkLabel: "Launch Live App",
      logo: devtechLogo
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-[#f3f4f6] font-sans selection:bg-electric-blue selection:text-black">
      {/* Ambient background glows */}
      <div className="glow-blob-1"></div>
      <div className="glow-blob-2"></div>

      {/* Global Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 max-w-7xl mx-auto">
        <a href="#home" className="flex h-12 w-12 items-center justify-center rounded-full liquid-glass text-xl font-heading italic font-bold">
          <span className="text-white">e</span>
        </a>
        
        <ul className="hidden md:flex items-center space-x-2 liquid-glass px-2 py-1.5 rounded-full border border-white/5">
          <li><a href="#about" className="px-4 py-2 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-all">About</a></li>
          <li><a href="#capabilities" className="px-4 py-2 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-all">Capabilities</a></li>
          <li><a href="#projects" className="px-4 py-2 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-all">Projects</a></li>
          <li><a href="#experience" className="px-4 py-2 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-all">Experience</a></li>
        </ul>

        <div className="flex items-center">
          <a href="#contact" className="liquid-glass-strong px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center z-10 overflow-hidden">
        {/* Background Space Travel Looping Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-center z-0 opacity-20 video-mask"
          style={{ width: "100%", height: "100%" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            custom={0.2}
            className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 mb-6 border border-white/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-electric-blue animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-medium text-white/95">AI & Machine Learning Pioneer</span>
          </motion.div>

          {/* Headline with word-by-word BlurText */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black italic text-white leading-none max-w-4xl tracking-tight uppercase">
            <BlurText 
              words="The only way to predict the future is to build it"
              delay={0.4}
            />
          </h1>

          <motion.p 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            custom={0.8}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            High school student at Saint Joseph School, Addis Ababa. Engineering real-world predictive models and building access channels for high school AI education.
          </motion.p>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            custom={1.0}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#projects" className="liquid-glass-strong bg-white/5 border border-white/20 hover:border-white/40 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2 transition-all">
              Explore Projects <ArrowUpRight />
            </a>
            <a href="/resume.pdf" target="_blank" className="text-xs text-white/60 hover:text-white uppercase tracking-widest font-semibold flex items-center gap-2 transition-all">
              <FileIcon /> View Resume
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            custom={1.2}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full"
          >
            <div className="liquid-glass p-6 flex flex-col items-center justify-center border border-white/5">
              <div className="text-3xl md:text-4xl font-heading italic font-bold text-white">0.962</div>
              <div className="mt-1 text-2xs uppercase tracking-wider text-white/50">Gradient Boosting R²</div>
            </div>
            <div className="liquid-glass p-6 flex flex-col items-center justify-center border border-white/5">
              <div className="text-3xl md:text-4xl font-heading italic font-bold text-white">500+</div>
              <div className="mt-1 text-2xs uppercase tracking-wider text-white/50">Property Samples</div>
            </div>
            <div className="col-span-2 md:col-span-1 liquid-glass p-6 flex flex-col items-center justify-center border border-white/5">
              <div className="text-3xl md:text-4xl font-heading italic font-bold text-white">4-Week</div>
              <div className="mt-1 text-2xs uppercase tracking-wider text-white/50">LaunchML Program</div>
            </div>
          </motion.div>

          {/* Collaborative Footnote */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible" 
            custom={1.4}
            className="mt-16 border-t border-white/10 pt-6 w-full flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/45 mb-4">Grounded in studies and projects with</span>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-heading font-medium tracking-widest text-white/60">
              <span className="hover:text-white transition-all uppercase">Devtech</span>
              <span className="hover:text-white transition-all uppercase">Lubna Foundation</span>
              <span className="hover:text-white transition-all uppercase">ALX Hackathons</span>
              <span className="hover:text-white transition-all uppercase">Learning & Dev</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-black py-16 overflow-hidden relative">
        <div className="flex gap-4 whitespace-nowrap">
          <div className="flex gap-4 animate-marquee">
            {Array(4).fill(null).map((_, idx) => (
              <React.Fragment key={idx}>
                <div className="inline-block liquid-glass border border-white/5 px-8 py-4 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Designing and delivering responsive, high‑performance websites for corporate clients using modern web technologies, focusing on SEO, accessibility, and seamless user experience.
                </div>
                <div className="inline-block liquid-glass border border-white/5 px-8 py-4 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Dataset Engineering
                </div>
                <div className="inline-block liquid-glass border border-white/5 px-8 py-4 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Scientific Papers
                </div>
                <div className="inline-block liquid-glass border border-white/5 px-8 py-4 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  LaunchML Academy
                </div>
                <div className="inline-block liquid-glass border border-white/5 px-8 py-4 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Neurological Studies
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Section: About Me */}
      <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Area */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-soft-pink"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Developer Journey</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-6 uppercase italic">
              About Me
            </h2>

            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light mb-6">
              I am an AI/ML developer focused on designing and applying intelligence models to real-world complexities. By combining predictive research, localized real estate market studies, and scientific inquiry, I build tools that map patterns and expand regional technological structures.
            </p>
            
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
              As the founder of LaunchML, I established a dedicated education framework helping high school students across Ethiopia access AI mentorship and foundational curriculum. I continuously iterate, benchmark, and scale ML networks to deploy robust solutions.
            </p>
          </div>

          {/* Magnetic Frame Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative p-3 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-[300px] sm:w-[350px] aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[24px]">
                <Magnet
                  src={profileImg}
                  alt="Estifanos Abera"
                  padding={150}
                  strength={5}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Capabilities */}
      <section id="capabilities" className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-blue"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Core Strengths</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase italic">
            Capabilities
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "ML Research & Benchmarking",
              desc: "Constructing and validating predictive models (Linear/Ridge Regression, Random Forest, Gradient Boosting). Benchmarking performance using MAE, RMSE, and R² scores with robust cross-validation."
            },
            {
              num: "02",
              title: "Developing Websites for Businesses",
            desc: "Designing and delivering responsive, high‑performance websites for corporate clients using modern web technologies, focusing on SEO, accessibility, and seamless user experience.",
                },
            {
              num: "03",
              title: "Interactive Prototypes",
              desc: "Deploying machine learning systems into intuitive, custom frontend systems and Streamlit dashboards for real-time model interaction."
            },
            {
              num: "04",
              title: "Neurological Study",
              desc: "Investigating complex medical scenarios such as spina bifida, hydrocephalus, and neuroplasticity pathways under professional clinical observation."
            },
            {
              num: "05",
              title: "Technical Leadership & Mentoring",
              desc: "Authoring curriculum, structuring educational workshops, and managing cross-disciplinary groups at LaunchML and ALX Wellness Hackathons."
            }
          ].map((c, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 border-b border-white/10 pb-8 pt-4 hover:border-white/20 transition-all group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-xl md:text-2xl font-heading font-bold text-white/35 group-hover:text-electric-blue transition-all">
                {c.num}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:text-white/90 transition-all uppercase tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Projects (Sticky Card Stack) */}
      <section id="projects" className="relative py-24 bg-black z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-soft-pink"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Selected Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase italic">
              Projects & Publications
            </h2>
          </div>

          <div className="space-y-12">
            {projectList.map((p, idx) => (
              <div key={p.id} className="liquid-glass border border-white/5 p-6 md:p-8 hover:border-white/15 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-electric-blue">{p.category}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mt-1 uppercase tracking-wide">{p.name}</h3>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 liquid-glass-strong border border-white/10 hover:border-white/20 px-5 py-2.5 text-xs uppercase tracking-widest font-bold text-white transition-all w-fit"
                  >
                    {p.linkLabel} <ArrowUpRight />
                  </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-xs font-mono border border-white/10 bg-white/5 px-3 py-1 rounded-md text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex justify-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3 flex items-center justify-center">
                      <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Experience */}
      <section id="experience" className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-blue"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-white/50">History & Milestones</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white uppercase italic">
            Experiences
          </h2>
        </div>

        <div className="space-y-8">
          {[
            {
              role: "Machine Learning Intern",
              org: "Devtech",
              period: "June 2025 - August 2025",
              logo: devtechLogo,
              bullets: [
                "Programmed house price estimation system using scikit-learn models.",
                "Acquired, cleaned, and evaluated Kaggle housing data arrays utilizing pandas and NumPy APIs.",
                "Demonstrated predictive model calibration reaching validation metrics of R² ~0.90."
              ]
            },
            {
              role: "Neurology Mentee",
              org: "Lubna Foundation",
              period: "September 2025 - November 2025",
              logo: lubnaLogo,
              bullets: [
                "Studied clinical pathways of spina bifida, hydrocephalus, and neuroplastic repair structures.",
                "Guided by certified clinical specialists to outline neurological baseline reports."
              ]
            },
            {
              role: "Volunteer English Instructor",
              org: "Organization for Learning & Development",
              period: "July 2025 - August 2025",
              logo: null,
              bullets: [
                "Instructed over 30 students to improve basic grammatical skills and academic performance.",
                "Tailored classroom plans according to varying team speeds and language competencies."
              ]
            }
          ].map((exp, idx) => (
            <div key={idx} className="liquid-glass border border-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center p-2">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.org} className="max-w-full max-h-full object-contain rounded-lg" />
                ) : (
                  <span className="text-2xl font-heading">🏫</span>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-white uppercase tracking-wide">{exp.role}</h3>
                    <span className="text-sm font-semibold text-electric-blue">{exp.org}</span>
                  </div>
                  <span className="text-xs text-white/50 font-semibold">{exp.period}</span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-white/70 font-light">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="relative py-24 px-6 md:px-12 max-w-3xl mx-auto z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-soft-pink"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Mission Control</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-6 uppercase italic">
          Get in Touch
        </h2>
        <p className="text-white/60 font-light max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed">
          I am always open to discussing new research, collaborations in ML/AI models, academic opportunities, or educational programs. Feel free to reach out directly.
        </p>

        <div className="email-box mb-12">
          <a href="mailto:estifanos2712@gmail.com" className="email-link tracking-wide">
            estifanos2712@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/estifanos-abera-⦗-⚑-ɢᴏᴀᴛᴇᴅ-⚑-⦘-2a0702387"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill hover:text-white hover:border-white/20 transition-all text-white/70 text-xs font-semibold uppercase tracking-widest"
          >
            <LinkedinIcon /> LinkedIn
          </a>
          <a
            href="https://github.com/Estifanos-Abera"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill hover:text-white hover:border-white/20 transition-all text-white/70 text-xs font-semibold uppercase tracking-widest"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href="https://t.me/Urestifo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill hover:text-white hover:border-white/20 transition-all text-white/70 text-xs font-semibold uppercase tracking-widest"
          >
            <TelegramIcon /> Telegram
          </a>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="relative z-10 bg-black border-t border-white/5 py-12 text-center text-xs text-white/40">
        <p className="font-heading italic font-semibold text-white/60 tracking-wider uppercase mb-2">
          "The only way to predict the future is to build it"
        </p>
        <p>&copy; {new Date().getFullYear()} Estifanos Abera. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
