import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { RevealOnScroll } from '../components/common/RevealOnScroll'
import { ImageCarousel } from '../components/home/ImageCarousel'
import armor from '../assets/home/armor.webp'
import armorLight from '../assets/home/armor_light.webp'
import soldier from '../assets/home/soldier.webp'
import heroBg from '../../../mgAssets/hero-bg.png'
import mg47Logo from '../../../mgAssets/mg-47-logo.jpg'

export function HomePage() {
  const aboutSectionRef = useRef(null)

  const carouselSlides = [
    { src: soldier, alt: 'Soldier in field operation with tactical armor', label: 'Field Deployed Operator' },
    { src: armor, alt: 'MG-47 tactical armor configuration', label: 'MG-47 Armor Platform' },
    { src: armorLight, alt: 'Lightweight MG-47 armor configuration', label: 'MG-47 Light Armor' },
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
    <div className="space-y-10 pb-6 sm:pb-8 md:space-y-14 md:pb-10">
      <RevealOnScroll delay={0.05}>
        <section className="relative overflow-hidden bg-stone-950">
          <img
            src={heroBg}
            alt="MG-47 hero background"
            className="h-[100svh] w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,24,0.18),rgba(7,10,24,0.42))]" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <img
              src={mg47Logo}
              alt="MG-47 logo"
              className="max-h-[34svh] w-auto max-w-[min(78vw,32rem)] rounded-sm object-contain shadow-[0_22px_60px_rgba(0,0,0,0.38)]"
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
          className="mx-auto flex w-full max-w-6xl scroll-mt-8 flex-col gap-6 px-4 sm:px-6"
        >
          <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-4xl">ABOUT US</h2>

          <ImageCarousel title="Operational Gallery" slides={carouselSlides} />

          <div className="flex flex-col gap-6">
            <p className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
              "MG - 47" LLC has more than 30 years of experience in the development, modeling, design and
              sewing of military ammunition and equipment, production of bulletproof vests, bags and pouches
              for military use. Products are manufactured from good quality raw materials on the newest
              high-tech equipment.
            </p>

            <Link
              to="/about"
              className="inline-flex w-fit cursor-pointer rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20"
            >
              Open About Page
            </Link>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-4xl">PRODUCT</h2>

          <div className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
            <img
              src={mg47Logo}
              alt="MG-47 product presentation"
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <p className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
            MG-47 products are designed for military use with attention to durability, reliable materials,
            and practical field performance. Our production combines long-term experience, precise sewing,
            modern equipment, and controlled manufacturing standards.
          </p>

          <Link
            to="/products"
            className="inline-flex w-fit cursor-pointer rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20"
          >
            Open Product Page
          </Link>
        </section>
      </RevealOnScroll>
    </div>
  )
}
