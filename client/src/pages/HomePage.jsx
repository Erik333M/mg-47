import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { RevealOnScroll } from '../components/common/RevealOnScroll'
import { ImageCarousel } from '../components/home/ImageCarousel'
import armor from '../assets/home/armor.webp'
import armorLight from '../assets/home/armor_light.webp'
import heroMain from '../../../mgAssets/hero-main.png'
import heroMobile from '../../../mgAssets/hero-mobile.png'
import mg47Logo from '../../../mgAssets/mg-47-logo.png'
import tec1 from '../../../mgAssets/tec-1.png'
import tec2 from '../../../mgAssets/tec-2.png'
import tec3 from '../../../mgAssets/tec-3.png'
import tec4 from '../../../mgAssets/tec-4.png'
import { useLanguage } from '../shared/i18n/LanguageContext'

export function HomePage() {
  const aboutSectionRef = useRef(null)
  const { t } = useLanguage()

  const carouselSlides = [
    { src: tec1, alt: `${t.home.carouselAltPrefix} 1`, label: `${t.home.carouselLabelPrefix} 1` },
    { src: tec2, alt: `${t.home.carouselAltPrefix} 2`, label: `${t.home.carouselLabelPrefix} 2` },
    { src: tec3, alt: `${t.home.carouselAltPrefix} 3`, label: `${t.home.carouselLabelPrefix} 3` },
    { src: tec4, alt: `${t.home.carouselAltPrefix} 4`, label: `${t.home.carouselLabelPrefix} 4` },
  ]

  const scrollToAbout = () => {
    const aboutSection = aboutSectionRef.current

    if (!aboutSection) return

    window.requestAnimationFrame(() => {
      const top = aboutSection.getBoundingClientRect().top + window.scrollY - 55
      window.scrollTo({ top, behavior: 'smooth' })
    })
  }

  return (
    <div className="space-y-8 pb-6 sm:space-y-10 sm:pb-8 md:space-y-14 md:pb-10">
      <RevealOnScroll delay={0.05}>
        <section className="relative overflow-hidden bg-stone-950">
          <picture>
            <source media="(max-width: 639px)" srcSet={heroMobile} />
            <img
              src={heroMain}
              alt="MG-47 hero background"
              className="h-[100svh] w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,24,0.18),rgba(7,10,24,0.42))]" />
          <div className="absolute inset-0 flex items-center justify-start px-8 py-4 sm:px-12 sm:py-6 md:px-16">
            <img
              src={mg47Logo}
              alt="MG-47 logo"
              className="max-h-[24svh] w-auto max-w-[min(68vw,24rem)] rounded-sm object-contain shadow-[0_22px_60px_rgba(0,0,0,0.38)] sm:max-h-[28svh] sm:max-w-[min(50vw,28rem)] md:max-h-[34svh] md:max-w-[min(38vw,32rem)]"
              loading="eager"
              decoding="async"
            />
          </div>
          <button
            type="button"
            aria-label="Scroll to About section"
            onClick={scrollToAbout}
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
          </button>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.08}>
        <section
          id="home-about"
          ref={aboutSectionRef}
          className="mx-auto flex w-full max-w-6xl scroll-mt-8 flex-col gap-5 px-4 sm:gap-6 sm:px-6"
        >
          <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-4xl">{t.home.aboutTitle}</h2>

          <div className="flex flex-col gap-5 sm:gap-6">
            <p className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
              {t.home.aboutBody}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 pt-[20px] sm:gap-6 sm:px-6">
          <p className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
            {t.home.technologyBody}
          </p>

          <ImageCarousel slides={carouselSlides} />

          <Link
            to="/about"
            className="inline-flex w-full cursor-pointer justify-center rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20 sm:w-fit"
          >
            {t.home.aboutCta}
          </Link>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.12}>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 sm:gap-6 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-4xl">{t.home.productTitle}</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
              <img
                src={armor}
                alt={t.home.productCardArmorAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </article>
            <article className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
              <img
                src={armorLight}
                alt={t.home.productCardArmorLightAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </article>
          </div>

          <p className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
            {t.home.productBody}
          </p>

          <Link
            to="/products"
            className="inline-flex w-full cursor-pointer justify-center rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20 sm:w-fit"
          >
            {t.home.productCta}
          </Link>
        </section>
      </RevealOnScroll>
    </div>
  )
}
