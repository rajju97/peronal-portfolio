import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <section id="home" className="snap-start min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <Parallax speed={-10}>
        <img src="https://picsum.photos/seed/hero/1920/1080" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-transparent opacity-90"></div>
      </Parallax>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Frontend Developer</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Building responsive and scalable web applications with modern technologies. 3+ years of experience.</p>
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
              className="px-6 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}