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
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-text-muted)]">Product Details</p>
        <h1 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl md:text-5xl">MG 47 Concealable Body Armor Vest</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]">
          <img src={heroVest} alt="MG 47 concealable body armor vest" className="h-full w-full object-cover" />
        </article>
        <article className="overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]">
          <img src={armorLight} alt="MG 47 lightweight vest configuration" className="h-full w-full object-cover" />
        </article>
        <article className="overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]">
          <img src={armor} alt="MG 47 armor configuration" className="h-full w-full object-cover" />
        </article>
      </div>

      <div className="space-y-4 text-sm text-[var(--brand-text)] sm:text-base">
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
        <h2 className="text-xl font-semibold text-[var(--brand-text-strong)] sm:text-2xl">Key Features</h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {keyFeatures.map((feature) => (
            <li
              key={feature}
              className="rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.1),rgba(17,26,60,0.18))] px-4 py-3 text-[var(--brand-text-strong)] shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px]"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}
