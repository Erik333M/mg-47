import { RevealOnScroll } from '../components/common/RevealOnScroll'
import { FeaturedProductSection } from '../components/home/FeaturedProductSection'
import { HeroSection } from '../components/home/HeroSection'
import { ImageCarousel } from '../components/home/ImageCarousel'
import { MetricsStrip } from '../components/home/MetricsStrip'
import { ProductionFlow } from '../components/home/ProductionFlow'
import { ProductShowcase } from '../components/home/ProductShowcase'
import armor from '../assets/home/armor.webp'
import armorLight from '../assets/home/armor_light.webp'
import fieldOperation from '../assets/home/field-operation.webp'
import heroVest from '../assets/home/hero-vest.webp'
import productLine from '../assets/home/product-line.webp'
import soldier from '../assets/home/soldier.webp'
import mg47ProductVideo from '../assets/product/mg_47_product.mp4'
import {
  heroContent,
  productHighlights,
  productionFlow,
  protectionMetrics,
} from '../shared/content/homeContent'

export function HomePage() {
  const carouselSlides = [
    { src: soldier, alt: 'Soldier in field operation with tactical armor', label: 'Field Deployed Operator' },
    { src: armor, alt: 'MG-47 tactical armor configuration', label: 'MG-47 Armor Platform' },
    { src: armorLight, alt: 'Lightweight MG-47 armor configuration', label: 'MG-47 Light Armor' },
  ]

  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection {...heroContent} backgroundImage={fieldOperation} productImage={heroVest} />
      <RevealOnScroll delay={0.05}>
        <MetricsStrip metrics={protectionMetrics} />
      </RevealOnScroll>
      <RevealOnScroll delay={0.08}>
        <ImageCarousel title="Operational Gallery" slides={carouselSlides} />
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <FeaturedProductSection
          videoSrc={mg47ProductVideo}
          videoPoster={heroVest}
          productImage={armorLight}
        />
      </RevealOnScroll>
      <RevealOnScroll delay={0.12}>
        <ProductShowcase
          title="Configurable Armor Platforms"
          description="The MG-47 line provides scalable protection profiles, rapid accessory integration, and operator-centered ergonomics across multiple mission categories."
          image={productLine}
          highlights={productHighlights}
        />
      </RevealOnScroll>
      <RevealOnScroll delay={0.14}>
        <ProductionFlow items={productionFlow} />
      </RevealOnScroll>
    </div>
  )
}
