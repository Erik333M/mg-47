import logoHha from '../../../mgAssets/logo-hha.png'
import mg47Logo from '../../../mgAssets/mg-47-logo.png'
import logoMod from '../../../mgAssets/logo-mod.png'
import logoPolice from '../../../mgAssets/logo-police.png'
import { useLanguage } from '../shared/i18n/LanguageContext'

export function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center space-y-8 px-4 text-center sm:space-y-10 sm:px-6">
      <h1 className="max-w-4xl font-semibold text-amber-200">
        <span className="block text-4xl leading-none sm:text-7xl md:text-[6.4rem]">MG 47</span>
        <span className="mt-2 block text-sm leading-tight sm:text-[1.9rem] md:text-[2.9rem]">{t.about.factory}</span>
      </h1>
      <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-stone-300 sm:text-base">
        {t.about.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="w-full max-w-2xl sm:max-w-3xl">
        {/*
        <ProductVideo src="/videos/Artadranq.mov" poster={mg47Logo} />
        */}
        <div className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
          <img
            src={mg47Logo}
            alt="MG-47 video placeholder"
            className="mx-auto h-auto w-full max-w-[22rem] object-contain sm:max-w-[28rem]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <section className="flex w-full flex-col items-center space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-amber-200 sm:text-4xl">{t.about.partnersTitle}</h2>
          <p className="text-sm leading-relaxed text-stone-300 sm:text-base">{t.about.partnersBody}</p>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          <div className="flex w-full items-center justify-center">
            <img
              src={logoPolice}
              alt="Police of the Republic of Armenia logo"
              className="h-24 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              src={logoHha}
              alt="Armed Forces of Armenia logo"
              className="h-24 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              src={logoMod}
              alt="Ministry of Defense logo"
              className="h-24 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {t.about.partnerCards.map((partner) => (
            <article key={partner.name} className="flex w-full flex-col items-center px-2 py-2 text-center">
              <p className="text-sm font-semibold text-stone-100">{partner.name}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
