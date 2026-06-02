import vestBackground from '../../../mgAssets/mg-vest.png'
import { useLanguage } from '../shared/i18n/LanguageContext'

function ContactIcon({ children }) {
  return (
    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-300/20 bg-amber-300/10 text-amber-200">
      {children}
    </span>
  )
}

function ContactRow({ href, label, value, children }) {
  const content = (
    <>
      <ContactIcon>{children}</ContactIcon>
      <div className="min-w-0 space-y-1 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">{label}</p>
        <p className="break-all text-base text-stone-100 transition group-hover:text-amber-100">{value}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className="group flex items-start gap-4 border-b border-stone-500/20 py-5 transition hover:text-amber-100">
        {content}
      </a>
    )
  }

  return <div className="group flex items-start gap-4 border-b border-stone-500/20 py-5">{content}</div>
}

export function ContactPage() {
  const { t } = useLanguage()

  return (
    <section className="relative isolate min-h-[calc(100svh-6rem)] w-full overflow-hidden bg-stone-950 sm:min-h-[calc(100svh-7rem)]">
      <img
        src={vestBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-28 blur-[2px] scale-[1.03]"
        loading="eager"
        decoding="async"
      />
      <img
        src={vestBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain object-center"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(7,10,24,0.9),rgba(7,10,24,0.7),rgba(7,10,24,0.88))]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-6xl items-center px-4 py-8 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:py-10 md:py-12">
        <div className="max-w-2xl rounded-sm border border-stone-500/20 bg-stone-950/72 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-6">
          <div className="border-t border-stone-500/20">
            <ContactRow href="mailto:info.mg47military@gmail.com" label={t.contact.email} value="info.mg47military@gmail.com">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16" />
                <path d="m4 6 8 7 8-7" />
                <rect x="4" y="6" width="16" height="12" rx="2" />
              </svg>
            </ContactRow>

            <ContactRow href="tel:+37477411747" label={t.contact.phone} value="+374 77 411747">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.61a2 2 0 0 1-.45 2.11L8.07 9.91a16 16 0 0 0 6 6l1.47-1.27a2 2 0 0 1 2.11-.45c.83.33 1.71.56 2.61.68A2 2 0 0 1 22 16.92z" />
              </svg>
            </ContactRow>

            <ContactRow href="tel:+37493660704" label={t.contact.additionalPhone} value="+374 93 660704">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.61a2 2 0 0 1-.45 2.11L8.07 9.91a16 16 0 0 0 6 6l1.47-1.27a2 2 0 0 1 2.11-.45c.83.33 1.71.56 2.61.68A2 2 0 0 1 22 16.92z" />
              </svg>
            </ContactRow>

            <ContactRow label={t.contact.address} value="Gyulikevkhyan 10/2">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </ContactRow>
          </div>

          <a
            href="https://www.mg-47.com"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm text-stone-300 transition hover:text-amber-100"
          >
            {t.contact.website}
          </a>
        </div>
      </div>
    </section>
  )
}
