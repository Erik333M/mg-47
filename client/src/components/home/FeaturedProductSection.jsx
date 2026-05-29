import { Link } from 'react-router-dom'
import { ProductVideo } from '../common/ProductVideo'

export function FeaturedProductSection({ videoSrc, videoPoster, productImage }) {
  return (
    <section className="grid gap-8 md:grid-cols-[1.05fr_1fr] md:items-start">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-text-muted)]">Featured Product</p>
        <h2 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl md:text-4xl">MG 47 Concealable Body Armor Vest</h2>
        <p className="text-sm text-[var(--brand-text)] sm:text-base">
          A discreet, low-profile vest engineered for reliable daily protection, mobility, and long operational comfort.
        </p>
        <ul className="space-y-2 text-sm text-[var(--brand-text)]">
          <li>Concealable low-profile configuration</li>
          <li>Front and back ballistic protection</li>
          <li>Adjustable shoulder and waist closure</li>
        </ul>
        <Link
          to="/products"
          className="inline-flex cursor-pointer rounded-sm border border-[color:rgba(79,87,81,0.52)] bg-[var(--brand-action)] px-4 py-2 text-sm font-semibold text-[var(--brand-text-strong)] shadow-[0_16px_36px_rgba(17,26,60,0.32)] transition hover:-translate-y-0.5 hover:bg-[color:rgba(17,26,60,0.9)]"
        >
          View Full Product Details
        </Link>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]">
          <img src={productImage} alt="MG 47 Concealable Body Armor Vest" className="h-auto w-full object-cover" />
        </div>
        {videoSrc ? <ProductVideo src={videoSrc} poster={videoPoster} title="MG-47 Product Video" /> : null}
      </div>
    </section>
  )
}
