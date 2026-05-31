import { motion, useReducedMotion } from 'framer-motion'

export function HeroSection({
  eyebrow,
  title,
  description,
  backgroundImage,
  scrollTargetId,
}) {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0 },
  }

  const handleScroll = () => {
    if (!scrollTargetId) return
    document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-[calc(100vh-7.5rem)] overflow-hidden rounded-sm bg-stone-900 shadow-[0_28px_80px_rgba(7,10,24,0.34)]">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,24,0.5),rgba(7,10,24,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,153,92,0.18),transparent_44%)]" />

      <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 py-14 text-center sm:px-6 sm:py-16 md:px-10 md:py-20">
        <div className="max-w-3xl space-y-5 md:space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-300"
          >
            {eyebrow}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto flex h-36 w-36 items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,rgba(28,35,56,0.92),rgba(10,15,35,0.98))] shadow-[0_26px_60px_rgba(8,12,28,0.42)] sm:h-44 sm:w-44 md:h-52 md:w-52"
          >
            <div className="flex h-[80%] w-[80%] items-center justify-center rounded-[22px] bg-white/5">
              <span className="text-4xl font-extrabold tracking-[0.28em] text-stone-50 sm:text-5xl md:text-6xl">
                MG
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl md:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll to next section"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          whileHover={shouldReduceMotion ? undefined : { y: 3 }}
          onClick={handleScroll}
          className="group absolute bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-stone-950/70 text-stone-50 shadow-[0_16px_40px_rgba(6,10,24,0.34)] transition hover:bg-stone-900"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 transition group-hover:translate-y-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m6 13 6 6 6-6" />
          </svg>
        </motion.button>
      </div>
    </section>
  )
}
