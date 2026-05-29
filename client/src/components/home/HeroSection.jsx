import { motion, useReducedMotion } from 'framer-motion'

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  productImage,
}) {
  const shouldReduceMotion = useReducedMotion()
  const titleWords = title.split(' ')

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative overflow-hidden rounded-sm border border-stone-700 bg-stone-900">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/30" />

      <div className="relative grid gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-10 md:px-10 md:py-16">
        <div className="max-w-2xl space-y-5 md:space-y-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.03, delayChildren: 0.15 } },
            }}
            className="text-3xl font-semibold leading-tight text-stone-50 sm:text-4xl md:text-6xl"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mr-[0.35ch] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <motion.button
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full cursor-pointer rounded-sm bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-200 sm:w-auto"
            >
              {primaryAction}
            </motion.button>
            <motion.button
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="w-full cursor-pointer rounded-sm border border-stone-500 px-5 py-3 text-sm font-semibold text-stone-200 transition hover:border-stone-300 hover:text-stone-100 sm:w-auto"
            >
              {secondaryAction}
            </motion.button>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.img
            src={productImage}
            alt="MG-47 tactical armor"
            className="h-auto w-full max-w-sm rounded-sm border border-stone-700 bg-stone-950/70 p-2 shadow-2xl sm:max-w-md sm:p-3"
            loading="eager"
            decoding="async"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          />
        </div>
      </div>
    </section>
  )
}
