import { useLanguage } from '../shared/i18n/LanguageContext'

export function ContactPage() {
  const { t } = useLanguage()

  return (
    <section className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{t.contact.eyebrow}</p>
      <h1 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-5xl">
        {t.contact.title}
      </h1>
      <p className="max-w-3xl text-sm text-stone-300 sm:text-base">{t.contact.body}</p>

      <div className="grid gap-4 md:max-w-3xl md:grid-cols-2">
        <a
          href="mailto:info.mg47military@gmail.com"
          className="group cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 p-4 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40 sm:p-5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{t.contact.email}</p>
          <p className="mt-2 break-all text-stone-100 transition group-hover:text-amber-100">info.mg47military@gmail.com</p>
        </a>
        <a
          href="tel:+37493660704"
          className="group cursor-pointer rounded-sm border border-stone-500/25 bg-stone-900/35 p-4 backdrop-blur-[1px] transition hover:-translate-y-0.5 hover:border-amber-200/40 sm:p-5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{t.contact.phone}</p>
          <p className="mt-2 text-stone-100 transition group-hover:text-amber-100">+374 93 660704</p>
        </a>
      </div>

      <a
        href="https://www.mg-47.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full cursor-pointer justify-center rounded-sm border border-stone-500/25 bg-stone-900/35 px-4 py-2 text-center text-sm text-stone-200 backdrop-blur-[1px] transition hover:border-amber-200/40 hover:text-amber-100 sm:w-fit"
      >
        {t.contact.website}
      </a>
    </section>
  )
}
