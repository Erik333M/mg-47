function getSourceType(src) {
  if (src.endsWith('.mov')) return 'video/quicktime'
  return 'video/mp4'
}

export function ProductVideo({ src, sources, poster, title }) {
  const videoSources = sources?.length ? sources : src ? [src] : []

  return (
    <section className="mx-auto w-full max-w-3xl space-y-3">
      {title ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{title}</p> : null}
      <div className="relative aspect-video overflow-hidden rounded-sm border border-stone-500/25 bg-stone-900/35 backdrop-blur-[1px]">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          {videoSources.map((videoSrc) => (
            <source key={videoSrc} src={videoSrc} type={getSourceType(videoSrc)} />
          ))}
        </video>
      </div>
    </section>
  )
}
