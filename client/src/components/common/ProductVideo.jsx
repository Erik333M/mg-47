import { useState } from 'react'

export function ProductVideo({ src, poster, title = 'MG-47 Product Video' }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{title}</p>
      <div className="relative overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
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
              <span className="rounded-sm border border-amber-300/60 bg-stone-900/70 px-4 py-2 text-sm font-semibold text-amber-100 transition group-hover:bg-stone-900/80">
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
