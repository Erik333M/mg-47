import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ProductionFlow({ items }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Production Process</p>
        <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl">From Raw Materials to Mission-Ready Armor</h2>
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
              className="group block cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 px-5 py-5 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-stone-800/35"
            >
              <p className="text-xs font-semibold tracking-[0.25em] text-stone-400">{item.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-stone-100 transition group-hover:text-amber-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-300/90">{item.text}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
