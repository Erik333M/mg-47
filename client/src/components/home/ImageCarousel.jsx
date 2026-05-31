import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function getRelativePosition(index, activeIndex, total) {
  const forward = (index - activeIndex + total) % total
  if (forward === 0) return 0
  if (forward === 1) return 1
  if (forward === total - 1) return -1
  return forward < total / 2 ? 2 : -2
}

const slideVariants = {
  center: {
    x: '0%',
    scale: 1,
    opacity: 1,
    zIndex: 3,
  },
  left: {
    x: '-46%',
    scale: 0.86,
    opacity: 0.62,
    zIndex: 2,
  },
  right: {
    x: '46%',
    scale: 0.86,
    opacity: 0.62,
    zIndex: 2,
  },
  hiddenLeft: {
    x: '-72%',
    scale: 0.78,
    opacity: 0,
    zIndex: 1,
  },
  hiddenRight: {
    x: '72%',
    scale: 0.78,
    opacity: 0,
    zIndex: 1,
  },
}

export function ImageCarousel({ title, slides, intervalMs = 4200 }) {
  const shouldReduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartXRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs, slides.length])

  const showPreviousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const showNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    const touchStartX = touchStartXRef.current
    const touchEndX = event.changedTouches[0]?.clientX ?? null

    touchStartXRef.current = null

    if (touchStartX === null || touchEndX === null) return

    const swipeDistance = touchStartX - touchEndX
    const swipeThreshold = 40

    if (Math.abs(swipeDistance) < swipeThreshold) return

    if (swipeDistance > 0) {
      showNextSlide()
      return
    }

    showPreviousSlide()
  }

  return (
    <section className="space-y-4">
      {title ? <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">{title}</p> : null}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm px-1 py-4 sm:px-5 sm:py-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[220px] sm:h-[340px] md:h-[500px]">
          {slides.map((slide, index) => {
            const position = getRelativePosition(index, activeIndex, slides.length)
            const isActive = position === 0
            const variant =
              position === 0
                ? 'center'
                : position === -1
                  ? 'left'
                  : position === 1
                    ? 'right'
                    : position < 0
                      ? 'hiddenLeft'
                      : 'hiddenRight'

            return (
              <motion.button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className="absolute left-1/2 top-0 h-full w-[88%] -translate-x-1/2 cursor-pointer overflow-hidden rounded-sm bg-stone-950/50 text-left shadow-[0_22px_60px_rgba(0,0,0,0.35)] focus:outline-none sm:w-[78%] md:w-[72%]"
                initial={false}
                animate={slideVariants[variant]}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.15 }
                    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
                }
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className={`pointer-events-none absolute inset-0 transition ${
                    isActive
                      ? 'bg-gradient-to-t from-stone-950/84 via-stone-950/12 to-transparent'
                      : 'bg-gradient-to-t from-stone-950/92 via-stone-950/48 to-stone-950/18'
                  }`}
                />
              </motion.button>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              title={slide.label}
              className={`h-2.5 rounded-full cursor-pointer transition ${
                activeIndex === index ? 'w-8 bg-amber-300' : 'w-2.5 bg-stone-500 hover:bg-stone-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
