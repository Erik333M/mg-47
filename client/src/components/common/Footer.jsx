export function Footer() {
  return (
    <footer className="border-t border-stone-500/30 bg-stone-900/30 backdrop-blur-[2px]">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-6 text-sm text-stone-300 sm:px-6 md:grid-cols-3 md:items-center">
        <p className="font-medium text-stone-200">MG-47 Military Armor Systems</p>
        <a className="w-fit break-all cursor-pointer transition hover:text-amber-200" href="mailto:info.mg47military@gmail.com">
          info.mg47military@gmail.com
        </a>
        <a className="w-fit cursor-pointer transition hover:text-amber-200 md:justify-self-end" href="tel:+37493660704">
          +374 93 660704
        </a>
      </div>
    </footer>
  )
}
