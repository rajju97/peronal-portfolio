import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

// Icons
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.511 22.547 24 17.941 24 12.5A9.5 9.5 0 0012 .297z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
  };

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;

    if (scrollTop < window.innerHeight * 0.8) {
      setActiveSection("home");
    } else if (scrollTop < window.innerHeight * 1.8) {
      setActiveSection("about");
    } else if (scrollTop < window.innerHeight * 2.8) {
      setActiveSection("experience");
    } else if (scrollTop < window.innerHeight * 3.8) {
      setActiveSection("projects");
    } else {
      setActiveSection("contact");
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gradient-to-br from-dark via-gray-900 to-gray-800' : 'bg-gradient-to-br from-sky-100 via-slate-50 to-white'} ${isDarkMode ? 'text-white' : 'text-gray-900'} overflow-y-scroll h-screen snap-y snap-mandatory`} onScroll={handleScroll}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-dark bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-filter backdrop-blur-lg transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Rajveer Singh
          </motion.h1>
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-300'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={(e) => { e.preventDefault(); document.getElementById(section).scrollIntoView({ behavior: 'smooth' }); }} className={`capitalize ${isDarkMode ? 'hover:text-blue-400' : 'text-gray-700 hover:text-blue-500'} ${activeSection === section ? (isDarkMode ? "text-blue-400 font-medium" : "text-blue-600 font-medium") : (isDarkMode ? "text-white" : "text-gray-700")}`}>
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} px-4 pb-4 space-y-3`}>
              {["home", "about", "experience", "projects", "contact"].map((section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById(section).scrollIntoView({ behavior: 'smooth' }); }} className={`block py-2 capitalize ${isDarkMode ? 'hover:text-blue-400' : 'text-gray-700 hover:text-blue-500'} ${activeSection === section ? (isDarkMode ? "text-blue-400 font-medium" : "text-blue-600 font-medium") : (isDarkMode ? "text-white" : "text-gray-700")}`}>
                    {section}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="snap-start min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
        <Parallax speed={-10}>
          <img src="https://picsum.photos/seed/hero/1920/1080 " alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-transparent opacity-90"></div>
        </Parallax>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`max-w-2xl ${!isDarkMode ? 'bg-slate-100/80 backdrop-blur-md p-6 rounded-lg shadow-lg' : ''}`}>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frontend Developer</h1>
            <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-slate-700'}`}>Building responsive and scalable web applications with modern technologies. 3+ years of experience.</p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Rajveer_Singh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </motion.button>
              <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className={`px-6 py-3 border ${isDarkMode ? 'border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white' : 'border-gray-400 hover:border-blue-600 text-gray-700 hover:text-black'} rounded-lg`}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`snap-start min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Parallax speed={5}>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/seed/profile/600/600 " alt="Profile" className="w-full h-full object-cover" />
              </div>
            </Parallax>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-6 leading-relaxed`}>
                Frontend Developer with 3+ years of experience in building responsive web applications using React, Angular, and Next.js. Expert in creating reusable components, state management with Redux, and integrating RESTful APIs.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-6 leading-relaxed`}>
                Proficient in JavaScript, TypeScript, HTML5, CSS3, and modern UI frameworks. Skilled in performance optimization, responsive design, and implementing best practices for scalable applications. Strong experience with testing frameworks like Jest and Cypress.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h3 className={`text-sm uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Email</h3>
                  <p className="flex items-center gap-2"><MailIcon /> rajveermbic@gmail.com</p>
                </div>
                <div>
                  <h3 className={`text-sm uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Phone</h3>
                  <p className="flex items-center gap-2"><PhoneIcon /> +91 6388192639</p>
                </div>
                <div>
                  <h3 className={`text-sm uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Location</h3>
                  <p>New Delhi, India</p>
                </div>
                <div>
                  <h3 className={`text-sm uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Languages</h3>
                  <p>English, Hindi</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-300'} transition-colors`}><LinkedInIcon /></a>
                <a href="#" className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-blue-600' : 'bg-gray-200 hover:bg-blue-300'} transition-colors`}><GitHubIcon /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`snap-start min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-xl`}>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5/CSS3</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>Responsive Design</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-xl`}>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Node.js</li>
                <li>Express</li>
                <li>RESTful APIs</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>GraphQL</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-6 rounded-xl`}>
              <h3 className="text-xl font-bold mb-4">Tools & Testing</h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Git</li>
                <li>Jest</li>
                <li>Cypress</li>
                <li>Docker</li>
                <li>Webpack</li>
                <li>CI/CD</li>
                <li>Agile/Scrum</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-start min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work Experience
          </motion.h2>
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl relative shadow-lg`}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold">SDE-1 at Lynkit Private Solutions</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>New Delhi | March 2023 - Present</p>
                <ul className={`mt-4 space-y-2 list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Developed OCR module using Tesseract.js to extract and process invoice data with 95% accuracy</li>
                  <li>Built dynamic configuration-driven user management system with role-based access control</li>
                  <li>Created RFQ (Request for Quotation) module with real-time vendor bidding functionality</li>
                  <li>Integrated Google Maps API for geofencing shipyards with custom overlays and markers</li>
                  <li>Implemented RFID tracking system for container management with real-time updates</li>
                  <li>Optimized frontend performance, reducing load times by 40% through code splitting and lazy loading</li>
                  <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl relative shadow-lg`}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold">Product Engineer at Intellect Design Arena</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>Mumbai | June 2022 - January 2023</p>
                <ul className={`mt-4 space-y-2 list-disc pl-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Redesigned corporate banking UI using Angular Material and custom components</li>
                  <li>Implemented comprehensive UI testing with Jasmine and Karma, achieving 85% test coverage</li>
                  <li>Designed and developed Treasury Dashboard with real-time analytics using Highcharts</li>
                  <li>Integrated with backend APIs for transaction processing and reporting</li>
                  <li>Collaborated with UX team to implement responsive designs for mobile banking</li>
                  <li>Participated in agile sprints and daily standups to track project progress</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`snap-start min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Personal Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50 shadow-lg'} rounded-xl overflow-hidden group`}>
              <div className="h-48 overflow-hidden">
                <img src="https://picsum.photos/seed/project1/800/400 " alt="Agri E-commerce" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Agri E-commerce Website</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-4`}>Full-stack e-commerce platform for agricultural products.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded text-sm`}>React</span>
                  <span className={`${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded text-sm`}>Node.js</span>
                  <span className={`${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded text-sm`}>MongoDB</span>
                </div>
                <a href="https://github.com/rajju97/Agri-E-Commerce-Frontend-Project" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} inline-flex items-center gap-1 group`}>
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50 shadow-lg'} rounded-xl overflow-hidden group`}>
              <div className="h-48 overflow-hidden">
                <img src="https://picsum.photos/seed/project2/800/400 " alt="Parking Management" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic Parking Management App</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-4`}>Simple application for managing parking spaces and reservations.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded text-sm`}>React Native</span>
                  <span className={`${isDarkMode ? 'bg-blue-900/50' : 'bg-blue-100 text-blue-700'} px-2 py-1 rounded text-sm`}>Firebase</span>
                </div>
                <a href="https://github.com/rajju97/Parklane" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} inline-flex items-center gap-1 group`}>
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Contact Me
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'} p-6 rounded-xl space-y-6`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Name</label>
                  <input type="text" id="name" className={`w-full ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
                  <input type="email" id="email" className={`w-full ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Subject</label>
                <input type="text" id="subject" className={`w-full ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Message</label>
                <textarea id="message" rows="5" className={`w-full ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Let me know how I can help..."></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={`w-full md:w-auto px-6 py-3 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} rounded-lg font-medium transition-colors shadow-lg`}>
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 ${isDarkMode ? 'bg-dark border-gray-800' : 'bg-gray-100 border-gray-300'} border-t`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>© 2025 Rajveer Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
