export function ContactPage() {
  return (
    <section className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-text-muted)]">Contact MG-47</p>
      <h1 className="text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl md:text-5xl">Procurement and Partnership Inquiries</h1>
      <p className="max-w-3xl text-sm text-[var(--brand-text)] sm:text-base">
        For commercial communication, product requests, and cooperation discussions, use the official contact channels below.
      </p>

      <div className="grid gap-4 md:max-w-3xl md:grid-cols-2">
        <a
          href="mailto:info.mg47military@gmail.com"
          className="group cursor-pointer rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] p-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-[color:rgba(79,87,81,0.54)]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">Email</p>
          <p className="mt-2 text-[var(--brand-text-strong)] transition group-hover:text-[var(--brand-text-strong)]">info.mg47military@gmail.com</p>
        </a>
        <a
          href="tel:+37493660704"
          className="group cursor-pointer rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] p-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-[color:rgba(79,87,81,0.54)]"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">Phone</p>
          <p className="mt-2 text-[var(--brand-text-strong)] transition group-hover:text-[var(--brand-text-strong)]">+374 93 660704</p>
        </a>
      </div>

      <a
        href="https://www.mg-47.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex cursor-pointer rounded-sm border border-[var(--brand-surface-border)] bg-[var(--brand-action)] px-4 py-2 text-sm text-[var(--brand-text-strong)] shadow-[0_16px_36px_rgba(17,26,60,0.32)] transition hover:-translate-y-0.5 hover:bg-[color:rgba(17,26,60,0.9)]"
      >
        Official Website: www.mg-47.com
      </a>
    </section>
  )
}
