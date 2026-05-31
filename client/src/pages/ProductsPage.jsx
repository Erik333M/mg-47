import { Link } from 'react-router-dom'
import mg47Logo from '../../../mgAssets/mg-47-logo.png'
import { getProductCards } from '../shared/content/productCatalog'
import { useLanguage } from '../shared/i18n/LanguageContext'

export function ProductsPage() {
  const { t } = useLanguage()
  const productCards = getProductCards(t)

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold uppercase leading-tight text-stone-100 sm:text-3xl md:text-5xl">
          {t.products.title}
        </h1>
      </div>

      <div className="w-full max-w-3xl">
        {/*
        <ProductVideo src="/videos/mg_47_product.mp4" poster={mg47Logo} />
        */}
        <div className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
          <img
            src={mg47Logo}
            alt={t.products.imageAlt}
            className="mx-auto h-auto max-h-[16rem] w-full object-contain sm:max-h-[22rem]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="space-y-4 text-sm text-stone-300 sm:text-base">
        {t.products.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="space-y-4">
        <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3">
          {productCards.map((card) => (
            <Link
              key={card.slug}
              to={`/products/${card.slug}`}
              className="mx-auto flex h-full w-full max-w-[280px] flex-col overflow-hidden rounded-sm bg-stone-900/35 shadow-[0_16px_40px_rgba(7,10,24,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(251,191,36,0.22)] min-[520px]:max-w-none"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={card.src} alt={card.title} className="h-full w-full object-cover" />
              </div>
              <div className="border-t border-stone-500/20 px-4 py-4 text-center">
                <p className="text-sm font-semibold leading-snug break-words text-stone-100">{card.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
