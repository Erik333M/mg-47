import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ProductionFlow({ items }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-text-muted)]">Production Process</p>
        <h2 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl">From Raw Materials to Mission-Ready Armor</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={item.to}
              className="group block cursor-pointer rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.1),rgba(17,26,60,0.18))] px-5 py-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-[color:rgba(79,87,81,0.54)] hover:shadow-[0_24px_56px_rgba(17,26,60,0.28)]"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-[var(--brand-text-muted)]">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--brand-text-strong)] transition group-hover:text-[var(--brand-text-strong)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-text)]">{item.text}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
