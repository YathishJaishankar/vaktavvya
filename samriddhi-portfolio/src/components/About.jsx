import { motion } from 'framer-motion'
import { profile } from '../content'

export function About() {
  return (
    <section id="about" className="section">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 text-neutral-600">{profile.headline}</p>
          <div className="card mt-6 p-6 leading-relaxed text-neutral-700">
            {profile.bio}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <img
            src="/assets/look.png"
            alt="Samriddhi Jain portrait"
            className="w-full max-w-sm mx-auto rounded-3xl shadow-soft border border-neutral-200"
          />
        </motion.div>
      </div>
    </section>
  )
}
