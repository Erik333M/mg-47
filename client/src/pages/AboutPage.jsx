import shirtImage from '../../../mgAssets/mg-shirt.png'
import artadranqIntro from '../../../mgAssets/intro-2.png'
import logoHha from '../../../mgAssets/logo-hha.png'
import logoMod from '../../../mgAssets/logo-mod.png'
import logoPolice from '../../../mgAssets/logo-police.png'
import { ProductVideo } from '../components/common/ProductVideo'
import { useLanguage } from '../shared/i18n/LanguageContext'

export function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center space-y-8 px-4 text-center sm:space-y-10 sm:px-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-sm border border-stone-500/20 bg-stone-900/35 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
        <img
          src={shirtImage}
          alt="MG-47 military factory shirt"
          className="h-auto w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-stone-300 sm:text-base">
        {t.about.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="w-full max-w-2xl sm:max-w-3xl">
        <ProductVideo src="/videos/Artadranq.mp4" poster={artadranqIntro} />
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
      </section>
    </section>
  )
}
