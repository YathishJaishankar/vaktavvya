import { motion } from 'framer-motion'
import { education } from '../content'

export function Education() {
  const schoolImages = {
    'Hult International Business School': 'https://brive.com/media/images/brive-hult-international-business-school-san-francisco-5.jpg',
    'Delhi Public School Dhamtari': 'https://www.joonsquare.com/usermanage/image/business/delhi-public-school-dhamtari-11993/delhi-public-school-dhamtari-delhi-public-school-dhamtari-4.jpg',
  }

  return (
    <section id="education" className="section">
      <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i }}
            className="card p-6 relative overflow-hidden"
          >
            {schoolImages[ed.school] && (
              <img
                src={schoolImages[ed.school]}
                alt={`${ed.school} campus`}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
            )}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-neutral-900">{ed.school}</h3>
              {ed.degree && <p className="text-neutral-600">{ed.degree}</p>}
              <p className="text-sm text-neutral-500 mt-1">{ed.duration}</p>
              {ed.highlight && <p className="mt-3 text-neutral-700">{ed.highlight}</p>}
              {ed.level && <p className="text-neutral-700 mt-2">{ed.level}</p>}
              {ed.grade && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-white">
                  <span className="text-xs uppercase tracking-wide opacity-80">Grade</span>
                  <span className="font-semibold">{ed.grade}</span>
                </div>
              )}
              {ed.activities?.length ? (
                <div className="mt-3 text-neutral-700">
                  <span className="font-medium">Activities:</span> {ed.activities.join(', ')}
                </div>
              ) : null}
              {ed.note && <p className="mt-3 text-neutral-600 italic">{ed.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
