export function Footer() {
  return (
    <footer className="border-t border-[var(--brand-surface-border)] bg-[color:rgba(10,15,35,0.62)] backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-6 text-sm text-[var(--brand-text)] sm:px-6 md:grid-cols-3 md:items-center">
        <p className="font-medium text-[var(--brand-text-strong)]">MG-47 Military Armor Systems</p>
        <a className="w-fit break-all cursor-pointer transition hover:text-[var(--brand-text-strong)]" href="mailto:info.mg47military@gmail.com">
          info.mg47military@gmail.com
        </a>
        <a className="w-fit cursor-pointer transition hover:text-[var(--brand-text-strong)] md:justify-self-end" href="tel:+37493660704">
          +374 93 660704
        </a>
      </div>
    </footer>
  )
}
