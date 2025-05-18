import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="snap-start min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project items will be added here */}
        </div>
      </div>
    </section>
  );
}