export function ContactPage() {
  return (
    <section className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Contact MG-47</p>
      <h1 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-5xl">Procurement and Partnership Inquiries</h1>
      <p className="max-w-3xl text-sm text-stone-300 sm:text-base">
        For commercial communication, product requests, and cooperation discussions, use the official contact channels below.
      </p>

      <div className="grid gap-4 md:max-w-3xl md:grid-cols-2">
        <a
          href="mailto:info.mg47military@gmail.com"
          className="group cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 p-5 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Email</p>
          <p className="mt-2 text-stone-100 transition group-hover:text-amber-100">info.mg47military@gmail.com</p>
        </a>
        <a
          href="tel:+37493660704"
          className="group cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 p-5 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Phone</p>
          <p className="mt-2 text-stone-100 transition group-hover:text-amber-100">+374 93 660704</p>
        </a>
      </div>

      <a
        href="https://www.mg-47.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 px-4 py-2 text-sm text-stone-200 backdrop-blur-[1px] transition hover:border-amber-200/40 hover:text-amber-100"
      >
        Official Website: www.mg-47.com
      </a>
    </section>
  )
}
