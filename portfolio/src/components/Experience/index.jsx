import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="snap-start min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {/* Experience items will be added here */}
        </div>
      </div>
    </section>
  );
}