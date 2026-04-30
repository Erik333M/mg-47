import { Link } from 'react-router-dom'
import { ProductVideo } from '../common/ProductVideo'

export function FeaturedProductSection({ videoSrc, videoPoster, productImage }) {
  return (
    <section className="grid gap-8 md:grid-cols-[1.05fr_1fr] md:items-start">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Featured Product</p>
        <h2 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-4xl">MG 47 Concealable Body Armor Vest</h2>
        <p className="text-sm text-stone-300 sm:text-base">
          A discreet, low-profile vest engineered for reliable daily protection, mobility, and long operational comfort.
        </p>
        <ul className="space-y-2 text-sm text-stone-300">
          <li>Concealable low-profile configuration</li>
          <li>Front and back ballistic protection</li>
          <li>Adjustable shoulder and waist closure</li>
        </ul>
        <Link
          to="/products"
          className="inline-flex cursor-pointer rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20"
        >
          View Full Product Details
        </Link>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
          <img src={productImage} alt="MG 47 Concealable Body Armor Vest" className="h-auto w-full object-cover" />
        </div>
        <ProductVideo src={videoSrc} poster={videoPoster} title="MG-47 Product Video" />
      </div>
    </section>
  )
}
