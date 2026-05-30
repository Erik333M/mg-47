import logoHha from '../../../mgAssets/logo-hha.png'
import logoMod from '../../../mgAssets/logo-mod.jpg'
import logoPolice from '../../../mgAssets/logo-police.png'

export function AboutPage() {
  const partners = [
    {
      name: 'Defense Integrators',
      description: 'Joint execution on protective system deployment, field adaptation, and program delivery.',
    },
    {
      name: 'Materials Suppliers',
      description: 'Stable sourcing relationships for ballistic-grade inputs and production-critical components.',
    },
    {
      name: 'Research Teams',
      description: 'Applied collaboration on testing methods, design validation, and performance refinement.',
    },
  ]

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center space-y-10 text-center">
      <h1 className="max-w-4xl font-semibold text-amber-200">
        <span className="block text-6xl sm:text-7xl md:text-[6.4rem]">MG 47</span>
        <span className="block text-[1.35rem] sm:text-[1.9rem] md:text-[2.9rem]">MILITARY FACTORY</span>
      </h1>
      <div className="max-w-4xl text-sm leading-relaxed text-stone-300 sm:text-base">
        <p>
          "MG - 47" LLC has more than 30 years of experience in the development, modeling, design and sewing of military ammunition and equipment, production of bulletproof vests, bags and pouches for military use. Products are manufactured from good quality raw materials on the newest high-tech equipment.
        </p>
      </div>

      <section className="flex w-full flex-col items-center space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-amber-200 sm:text-4xl">OUR PARTNERS</h2>
          <p className="text-sm leading-relaxed text-stone-300 sm:text-base">
            MG47 Military Factory proudly collaborates with the Armed Forces of Armenia, the National Security Service, and the Police of the Republic of Armenia. Through innovation, quality, and professionalism, we support the development of reliable solutions that contribute to national defense, security, and public safety.
          </p>
        </div>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-3">
          <div className="flex justify-center">
            <img
              src={logoPolice}
              alt="Police of the Republic of Armenia logo"
              className="h-28 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logoHha}
              alt="Armed Forces of Armenia logo"
              className="h-28 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logoMod}
              alt="Ministry of Defense logo"
              className="h-28 w-auto object-contain sm:h-32"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-3">
          {partners.map((partner) => (
            <article key={partner.name} className="px-4 py-3">
              <p className="text-sm font-semibold text-stone-100">{partner.name}</p>
              <p className="mt-3 text-sm leading-6 text-stone-300">{partner.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
