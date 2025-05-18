import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

export const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.511 22.547 24 17.941 24 12.5A9.5 9.5 0 0012 .297z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export default function About({ isDarkMode }) {
  return (
    <section id="about" className="snap-start min-h-screen py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Parallax speed={5}>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/profile/600/600" alt="Profile" className="w-full h-full object-cover" />
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
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"><LinkedInIcon /></a>
              <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"><GitHubIcon /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}