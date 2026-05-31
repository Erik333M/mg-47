import { Link, useParams } from 'react-router-dom'
import { getProductCards } from '../shared/content/productCatalog'
import { useLanguage } from '../shared/i18n/LanguageContext'

export function ProductDetailPage() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const product = getProductCards(t).find((card) => card.slug === slug)
  const imageContainerClass =
    product?.slug === 'vest-2'
      ? 'mx-auto w-full max-w-md overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 sm:max-w-lg md:max-w-xl'
      : 'mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 sm:max-w-md'
  const imageClass =
    product?.slug === 'vest-2'
      ? 'h-[26rem] w-full object-cover sm:h-[30rem] md:h-[34rem]'
      : 'h-auto w-full object-contain'

  if (!product) {
    return (
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold text-stone-100 sm:text-3xl">{t.products.notFoundTitle}</h1>
        <Link
          to="/products"
          className="inline-flex w-full cursor-pointer justify-center rounded-sm border border-amber-300/65 bg-amber-300/12 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/20 sm:w-fit"
        >
          {t.products.backToProducts}
        </Link>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <Link
        to="/products"
        className="inline-flex w-full cursor-pointer justify-center rounded-sm border border-stone-500/25 bg-stone-900/35 px-4 py-2 text-sm font-semibold text-stone-200 transition hover:border-amber-200/40 hover:text-amber-100 sm:w-fit"
      >
        {t.products.backToProducts}
      </Link>

      <h1 className="text-center text-2xl font-semibold leading-tight text-amber-200 sm:text-left sm:text-3xl md:text-5xl">
        {product.title}
      </h1>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
        <div>
          <article className={imageContainerClass}>
            <img
              src={product.src}
              alt={product.title}
              className={imageClass}
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>

        <div className="space-y-6">
          {product.description?.length ? (
            <section className="mx-auto max-w-2xl space-y-3 lg:mx-0 lg:max-w-none">
              <h2 className="text-center text-xl font-semibold text-amber-200 sm:text-left">{t.products.descriptionHeading}</h2>
              <ul className="space-y-2 text-center text-sm leading-relaxed text-stone-300 sm:text-left sm:text-base">
                {product.description.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {product.set?.length ? (
            <section className="mx-auto max-w-2xl space-y-3 lg:mx-0 lg:max-w-none">
              <h2 className="text-center text-xl font-semibold text-amber-200 sm:text-left">{t.products.setHeading}</h2>
              <ul className="space-y-2 text-center text-sm leading-relaxed text-stone-300 sm:text-left sm:text-base">
                {product.set.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </section>
  )
}
