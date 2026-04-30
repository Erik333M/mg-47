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
        className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]"
      >
        <img
          src={image}
          alt="MG-47 product line"
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
        />
      </motion.div>

      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Product Family</p>
        <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl">{title}</h2>
        <p className="text-sm text-stone-300 sm:text-base">{description}</p>
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
                className="group block cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 p-4 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-stone-800/35"
              >
                <h3 className="text-base font-semibold text-stone-100 transition group-hover:text-amber-100">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-300/90">{item.summary}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
