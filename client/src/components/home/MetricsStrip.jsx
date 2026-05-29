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
            className="group block cursor-pointer rounded-sm border border-stone-400/25 bg-stone-800/35 px-5 py-6 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-stone-700/35"
          >
            <p className="text-base font-semibold text-amber-200 transition group-hover:text-amber-100">{metric.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-300/85">{metric.label}</p>
          </Link>
        </motion.div>
      ))}
    </section>
  )
}
