import { motion } from 'framer-motion'
import { skills } from '../content'

export function Skills() {
  const items = skills.notable
  return (
    <section id="skills" className="section">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {items.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03 * i }}
            className="card flex items-center justify-center p-4 text-center text-sm font-medium text-neutral-800 hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
