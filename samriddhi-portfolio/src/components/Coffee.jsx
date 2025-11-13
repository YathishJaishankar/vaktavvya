import { motion } from 'framer-motion'

export function Coffee() {
  return (
    <section id="coffee" className="section">
      <div className="card flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-neutral-900">Buy me a coffee</h3>
          <p className="mt-3 text-neutral-600">
            If you enjoy my work and projects, consider buying me a coffee. Your support fuels my learning and creations!
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-6 rounded-full bg-black px-6 py-2 text-white shadow-glow transition"
            style={{ color: '#ffffff' }}
          >
            Support
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <img
            src="/assets/coffee.png"
            alt="Buy me a coffee"
            className="w-48 h-48 rounded-2xl shadow-soft border border-neutral-200 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
