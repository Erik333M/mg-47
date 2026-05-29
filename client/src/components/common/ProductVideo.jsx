import { useState } from 'react'

export function ProductVideo({ src, poster, title = 'MG-47 Product Video' }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-text-muted)]">{title}</p>
      <div className="relative overflow-hidden rounded-md border border-[var(--brand-surface-border)] bg-[var(--brand-surface)] shadow-[0_24px_60px_rgba(7,10,24,0.24)] backdrop-blur-[1px]">
        {!isLoaded && (
          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="group relative block w-full cursor-pointer"
          >
            <img
              src={poster}
              alt="MG-47 product video preview"
              className="h-auto w-full object-cover opacity-88 transition group-hover:opacity-100"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="rounded-sm border border-[color:rgba(79,87,81,0.52)] bg-[color:rgba(17,26,60,0.82)] px-4 py-2 text-sm font-semibold text-[var(--brand-text-strong)] transition group-hover:bg-[color:rgba(17,26,60,0.94)]">
                Load Video
              </span>
            </span>
          </button>
        )}

        {isLoaded && (
          <video
            className="h-auto w-full"
            controls
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  )
}
