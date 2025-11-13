import { motion } from 'framer-motion'
import { experience } from '../content'

export function Experience() {
  const sideImages = [
    '/assets/second.png',
    '/assets/table.png',
  ]

  return (
    <section id="experience" className="section">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-8 grid gap-6">
        {experience.map((e, i) => (
          <motion.div
            key={e.title + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="card p-6"
          >
            <div className={`grid gap-6 md:grid-cols-2 items-center ${i % 2 === 0 ? '' : 'md:grid-cols-2'}`}>
              <div className={i % 2 === 0 ? '' : 'md:order-2'}>
                <h3 className="text-lg font-semibold text-neutral-900">{e.title}</h3>
                <p className="text-neutral-600">{e.org}{e.type ? ' · ' + e.type : ''}</p>
                <div className="text-sm text-neutral-500 mt-1">
                  <p>{e.duration}</p>
                  {e.location && <p className="mt-0.5">{e.location}</p>}
                </div>
                {e.description && (
                  <p className="mt-3 text-neutral-700">{e.description}</p>
                )}
                {e.roles && (
                  <ul className="mt-3 list-disc pl-5 text-neutral-700">
                    {e.roles.map((r) => (
                      <li key={r.role} className="marker:text-neutral-400">
                        <span className="font-medium text-neutral-800">{r.role}</span> — {r.duration}
                      </li>
                    ))}
                  </ul>
                )}
                {e.skills?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.skills.map((s) => (
                      <span key={s} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                        {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              {sideImages[i] && (
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className={i % 2 === 0 ? '' : 'md:order-1'}
                >
                  <img
                    src={sideImages[i]}
                    alt={e.title}
                    className="w-full max-w-xs mx-auto rounded-3xl shadow-soft border border-neutral-200 object-cover"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
