import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function MetricsStrip({ metrics }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="grid gap-3 md:grid-cols-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to={metric.to}
            className="group block cursor-pointer rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] px-5 py-6 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-[color:rgba(79,87,81,0.54)] hover:shadow-[0_24px_56px_rgba(17,26,60,0.28)]"
          >
            <p className="text-base font-semibold text-[var(--brand-text-strong)] transition group-hover:text-[var(--brand-text-strong)]">{metric.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--brand-text-muted)]">{metric.label}</p>
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
