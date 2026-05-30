import mg47Logo from '../../../mgAssets/mg-47-logo.jpg'
import armor1 from '../../../mgAssets/armor-1.png'
import armor2 from '../../../mgAssets/armor-2.png'
import armor4 from '../../../mgAssets/armor-4.png'
import armor5 from '../../../mgAssets/armor-5.png'
import armor6 from '../../../mgAssets/armor-6.png'

export function ProductsPage() {
  const armorCards = [
    { src: armor1, alt: 'MG-47 armor model 1' },
    { src: armor2, alt: 'MG-47 armor model 2' },
    { src: armor4, alt: 'MG-47 armor model 3' },
    { src: armor4, alt: 'MG-47 armor model 4' },
    { src: armor5, alt: 'MG-47 armor model 5' },
    { src: armor6, alt: 'MG-47 armor model 6' },
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold uppercase text-stone-100 sm:text-3xl md:text-5xl">MG 47 Product Details</h1>
      </div>

      <div className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35">
        <img
          src={mg47Logo}
          alt="MG-47 product presentation"
          className="h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="space-y-4 text-sm text-stone-300 sm:text-base">
        <p>
          The MG 47 concealable body armor vest is designed for reliable everyday protection in a low-profile and comfortable format. Built for discreet wear under clothing, it combines a streamlined shape with ergonomic construction to provide effective torso coverage without restricting movement.
        </p>
        <p>
          The vest features front and back ballistic protection, a flexible structure for improved comfort, and adjustable shoulder and waist fasteners for a secure fit. Its lightweight, body-contouring design makes it suitable for extended wear in professional and operational environments.
        </p>
        <p>
          Designed with practicality in mind, this vest offers a balance of protection, comfort, and concealability, making it a strong choice for security personnel, law enforcement, and users who require discreet personal protection.
        </p>
      </div>

      <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {armorCards.map((card, index) => (
            <article
              key={`${card.alt}-${index}`}
              className="mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-sm bg-stone-900/35 shadow-[0_16px_40px_rgba(7,10,24,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(251,191,36,0.22)]"
            >
              <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
