import { useLanguage } from '../shared/i18n/LanguageContext'

export function TechnologiesPage() {
  const { t } = useLanguage()

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">{t.technologies.title}</h1>
      <p className="max-w-3xl text-stone-300">{t.technologies.body}</p>
    </section>
  )
}
