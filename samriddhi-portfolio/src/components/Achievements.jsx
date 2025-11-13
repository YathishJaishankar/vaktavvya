import { motion, useInView } from 'framer-motion'
import { tests } from '../content'
import { useRef } from 'react'

function Counter({ to }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          {to}
        </motion.span>
      ) : (
        '0'
      )}
    </span>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <h2 className="text-2xl font-semibold tracking-tight">Achievements & Test Scores</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
            <p className="text-sm text-neutral-500">Class XII Board Exam</p>
            <p className="mt-1 text-3xl font-bold text-neutral-900"><Counter to="95.4%" /></p>
            <p className="mt-2 text-neutral-600">Delhi Public School Dhamtari · May 2025</p>
          </motion.div>
          {tests
            .filter((t) => t.name !== 'Class XII Board Exam')
            .map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * (i + 1) }}
                className="card p-6"
              >
                <p className="text-sm text-neutral-500">{t.name}</p>
                <p className="mt-1 text-3xl font-bold text-neutral-900">{t.score}</p>
                {t.date && <p className="mt-2 text-neutral-600">{t.date}</p>}
              </motion.div>
            ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <img
            src="/assets/profile.png"
            alt="Samriddhi Jain"
            className="w-full max-w-sm rounded-3xl shadow-soft border border-neutral-200 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
