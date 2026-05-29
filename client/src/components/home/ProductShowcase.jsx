import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ProductShowcase({ title, description, image, highlights }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
      <motion.div
        initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -22 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]"
      >
        <img
          src={image}
          alt="MG-47 product line"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
        />
      </motion.div>

      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-text-muted)]">Product Family</p>
        <h2 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl">{title}</h2>
        <p className="text-sm text-[var(--brand-text)] sm:text-base">{description}</p>
        <div className="space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={item.to}
                className="group block cursor-pointer rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.1),rgba(17,26,60,0.18))] p-4 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-[color:rgba(79,87,81,0.54)] hover:shadow-[0_24px_56px_rgba(17,26,60,0.28)]"
              >
                <h3 className="text-base font-semibold text-[var(--brand-text-strong)] transition group-hover:text-[var(--brand-text-strong)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--brand-text)]">{item.summary}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
