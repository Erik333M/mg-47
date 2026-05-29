import armor from '../assets/home/armor.webp'
import armorLight from '../assets/home/armor_light.webp'
import heroVest from '../assets/home/hero-vest.webp'

export function ProductsPage() {
  const keyFeatures = [
    'Concealable low-profile design',
    'Front and back ballistic protection',
    'Comfortable ergonomic fit',
    'Adjustable shoulder and waist closure',
    'Flexible construction for better mobility',
    'Suitable for extended daily wear',
  ]

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Product Details</p>
        <h1 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-5xl">MG 47 Concealable Body Armor Vest</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
          <img src={heroVest} alt="MG 47 concealable body armor vest" className="h-full w-full object-cover" />
        </article>
        <article className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
          <img src={armorLight} alt="MG 47 lightweight vest configuration" className="h-full w-full object-cover" />
        </article>
        <article className="overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
          <img src={armor} alt="MG 47 armor configuration" className="h-full w-full object-cover" />
        </article>
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

      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-stone-100 sm:text-2xl">Key Features</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {keyFeatures.map((feature) => (
            <li
              key={feature}
              className="rounded-sm border border-stone-500/25 bg-stone-900/35 px-4 py-3 text-stone-200 backdrop-blur-[1px]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}
