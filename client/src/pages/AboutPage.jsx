export function AboutPage() {
  return (
    <section className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-text-muted)]">About MG-47</p>
      <h1 className="max-w-4xl text-2xl font-semibold text-[var(--brand-text-strong)] sm:text-3xl md:text-5xl">
        Manufacturing Strength, Engineering Discipline, and Long-Term Growth
      </h1>
      <div className="max-w-4xl space-y-4 text-sm text-[var(--brand-text)] sm:text-base">
        <p>
          MG-47 is presented as a company with strong production-technical, intellectual, and personnel capacity, positioned for stable operations and continuous development.
        </p>
        <p>
          Our internal workflow combines design iteration, materials engineering, controlled assembly, and quality verification to deliver reliable armor systems for high-risk use cases.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] p-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">Core Focus</p>
          <p className="mt-2 text-[var(--brand-text-strong)]">Protective systems for military and tactical operations</p>
        </article>
        <article className="rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] p-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">Execution</p>
          <p className="mt-2 text-[var(--brand-text-strong)]">Structured production and quality-controlled output</p>
        </article>
        <article className="rounded-md border border-[var(--brand-surface-border)] bg-[linear-gradient(180deg,rgba(79,87,81,0.12),rgba(17,26,60,0.22))] p-5 shadow-[0_20px_48px_rgba(7,10,24,0.18)] backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">Direction</p>
          <p className="mt-2 text-[var(--brand-text-strong)]">Sustainable growth through technical capability</p>
        </article>
      </div>
    </section>
  )
}
