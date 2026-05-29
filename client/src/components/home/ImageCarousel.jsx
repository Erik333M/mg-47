import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ImageCarousel({ title, slides, intervalMs = 4200 }) {
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs, slides.length])

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-2 sm:gap-4">
        <h2 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl">{title}</h2>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-text-muted)] sm:text-xs">Visual Overview</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[260px] overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px] sm:h-[340px] md:h-[500px]"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[activeIndex].src}
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.995 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:rgba(7,10,24,0.94)] to-transparent p-3 sm:p-6">
          <p className="text-xs font-medium text-[var(--brand-text-strong)] sm:text-sm">{slides[activeIndex].label}</p>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              title={slide.label}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                activeIndex === index ? 'bg-[var(--brand-action)]' : 'bg-[color:rgba(229,235,233,0.36)] hover:bg-[var(--brand-primary)]'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
