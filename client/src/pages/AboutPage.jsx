export function AboutPage() {
  return (
    <section className="space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">About MG-47</p>
      <h1 className="max-w-4xl text-2xl font-semibold text-stone-100 sm:text-3xl md:text-5xl">
        Manufacturing Strength, Engineering Discipline, and Long-Term Growth
      </h1>
      <div className="max-w-4xl space-y-4 text-sm text-stone-300 sm:text-base">
        <p>
          MG-47 is presented as a company with strong production-technical, intellectual, and personnel capacity, positioned for stable operations and continuous development.
        </p>
        <p>
          Our internal workflow combines design iteration, materials engineering, controlled assembly, and quality verification to deliver reliable armor systems for high-risk use cases.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-sm border border-stone-500/25 bg-stone-900/35 p-5 backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Core Focus</p>
          <p className="mt-2 text-stone-100">Protective systems for military and tactical operations</p>
        </article>
        <article className="rounded-sm border border-stone-500/25 bg-stone-900/35 p-5 backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Execution</p>
          <p className="mt-2 text-stone-100">Structured production and quality-controlled output</p>
        </article>
        <article className="rounded-sm border border-stone-500/25 bg-stone-900/35 p-5 backdrop-blur-[1px]">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Direction</p>
          <p className="mt-2 text-stone-100">Sustainable growth through technical capability</p>
        </article>
      </div>
    </section>
  )
}
