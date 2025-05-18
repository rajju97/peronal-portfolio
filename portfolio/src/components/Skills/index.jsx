import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="snap-start min-h-screen py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Express</li>
              <li>RESTful APIs</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Tools & Testing</h3>
            <ul className="space-y-2 text-gray-300">
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
  );
}