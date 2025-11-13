import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="relative section overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-neutral-100" />
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-600 shadow-soft backdrop-blur">
            <span>Cambridge, MA · India</span>
            <span className="mx-1">•</span>
            <span>She/Her</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            <span className="gradient-text">Samriddhi Jain</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            Rising | Hult Scholar | Next Genius Scholar — building at the intersection of leadership, innovation, and impact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Hult Scholar (Top 1%)',
              'Co‑founder · Vaktavvya',
              'Digital Marketing · PUMA',
              "Founder’s Associate · REPEAT GUD",
            ].map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-soft"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <a href="#experience" className="rounded-full bg-black px-5 py-2 text-white shadow-glow transition hover:scale-105" style={{ color: '#ffffff' }}>Explore</a>
            <a href="#contact" className="rounded-full border border-neutral-300 px-5 py-2 text-neutral-800 bg-white hover:bg-neutral-50">Contact</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src="/assets/profile.jpg"
            alt="Samriddhi Jain"
            className="w-full max-w-sm mx-auto rounded-3xl shadow-soft border border-neutral-200"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 -right-4 card px-3 py-2 text-xs font-medium text-neutral-700"
          >
            Hult Scholar · Top 1%
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-20 top-10 hidden aspect-square w-96 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200 via-transparent to-transparent blur-3xl sm:block"
      />
    </section>
  )
}
