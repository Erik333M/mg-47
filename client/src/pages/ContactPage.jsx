import { useLanguage } from '../shared/i18n/LanguageContext'

function ContactIcon({ children }) {
  return (
    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">
      {children}
    </span>
  )
}

export function ContactPage() {
  const { t } = useLanguage()

  return (
    <section className="space-y-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">{t.contact.eyebrow}</p>
      <h1 className="text-2xl font-semibold text-stone-100 sm:text-3xl md:text-5xl">{t.contact.title}</h1>
      <p className="max-w-3xl text-sm leading-relaxed text-stone-300 sm:text-base">{t.contact.body}</p>

      <div className="w-full max-w-4xl border-t border-stone-500/20">
        <a
          href="mailto:info.mg47millitary@gmail.com"
          className="group flex items-start gap-4 border-b border-stone-500/20 py-5 transition hover:text-amber-100"
        >
          <ContactIcon>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16" />
              <path d="m4 6 8 7 8-7" />
              <rect x="4" y="6" width="16" height="12" rx="2" />
            </svg>
          </ContactIcon>
          <div className="min-w-0 space-y-1 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">{t.contact.email}</p>
            <p className="break-all text-base text-stone-100 transition group-hover:text-amber-100">
              info.mg47millitary@gmail.com
            </p>
          </div>
        </a>

        <a
          href="tel:+37493660704"
          className="group flex items-start gap-4 border-b border-stone-500/20 py-5 transition hover:text-amber-100"
        >
          <ContactIcon>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.61a2 2 0 0 1-.45 2.11L8.07 9.91a16 16 0 0 0 6 6l1.47-1.27a2 2 0 0 1 2.11-.45c.83.33 1.71.56 2.61.68A2 2 0 0 1 22 16.92z" />
            </svg>
          </ContactIcon>
          <div className="min-w-0 space-y-1 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">{t.contact.phone}</p>
            <p className="text-base text-stone-100 transition group-hover:text-amber-100">+374 93 660704</p>
          </div>
        </a>

        <div className="flex items-start gap-4 border-b border-stone-500/20 py-5">
          <ContactIcon>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </ContactIcon>
          <div className="min-w-0 space-y-1 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
              {t.contact.address ?? 'Address'}
            </p>
            <p className="text-base leading-relaxed text-stone-100">
              Gajegortsneri 30 Yerevan, Republic of Armenia
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://www.mg-47.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex text-sm text-stone-300 transition hover:text-amber-100"
      >
        {t.contact.website}
      </a>
    </section>
  )
}
