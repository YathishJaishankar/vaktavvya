import { motion } from 'framer-motion'
import { interests } from '../content'

export function Interests() {
  return (
    <section id="interests" className="section">
      <h2 className="text-2xl font-semibold tracking-tight">Interests</h2>
      <div className="mt-8 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: ['0%', '-50%'] }}
          viewport={{ once: true }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          className="flex gap-6"
        >
          {[...interests, ...interests].map((p, i) => (
            <div key={p.name + i} className="card shrink-0 px-5 py-3">
              <p className="text-sm font-medium text-neutral-800">{p.name}</p>
              <p className="text-xs text-neutral-600">{p.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
