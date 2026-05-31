import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import mg47Logo from '../../../../mgAssets/mg-47-logo.png'
import { useLanguage } from '../../shared/i18n/LanguageContext'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()
  const navItems = [
    { to: '/products', label: t.nav.products },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (isMenuOpen) {
        setIsHeaderVisible(true)
        lastScrollY = currentScrollY
        return
      }

      if (currentScrollY <= 16) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY + 8) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY - 8) {
        setIsHeaderVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  return (
    <header
      className={`${isHomePage ? 'fixed left-0 right-0 top-0' : 'sticky top-0'} z-40 ${isHomePage ? 'border-b border-white/10 bg-stone-950/18' : 'border-b border-stone-500/30 bg-stone-900/35'} backdrop-blur-[2px] transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" aria-label="Go to home page" className="inline-flex items-center">
          <img
            src={mg47Logo}
            alt="MG-47 logo"
            className="h-10 w-auto max-w-[11.5rem] object-contain sm:h-11 sm:max-w-[12.5rem]"
            loading="eager"
            decoding="async"
          />
        </NavLink>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex gap-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `cursor-pointer rounded px-3 py-2 transition ${
                    isActive
                      ? 'bg-amber-300 text-stone-900'
                      : 'text-stone-200 hover:bg-stone-700/55 hover:text-stone-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-300">
            <span>{t.language.label}</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-sm border border-stone-500/40 bg-stone-950/70 px-2 py-2 text-xs font-medium tracking-normal text-stone-100 outline-none transition hover:border-amber-200/50"
            >
              <option value="en">{t.language.english}</option>
              <option value="ru">{t.language.russian}</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-stone-500/40 bg-stone-900/55 text-stone-100 transition hover:border-amber-200/50 hover:text-amber-100 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/45 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.nav
              className="absolute left-0 right-0 top-full z-40 max-h-[calc(100svh-4.5rem)] overflow-y-auto border-b border-stone-500/30 bg-stone-950/95 p-3 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `cursor-pointer rounded-sm px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'bg-amber-300 text-stone-900'
                          : 'text-stone-100 hover:bg-stone-800 hover:text-amber-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <label className="mt-2 grid gap-2 rounded-sm border border-stone-500/30 px-3 py-3 text-left text-xs font-medium uppercase tracking-[0.18em] text-stone-300">
                  <span>{t.language.label}</span>
                  <select
                    value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                    className="rounded-sm border border-stone-500/40 bg-stone-950/70 px-2 py-2 text-sm font-medium tracking-normal text-stone-100 outline-none"
                  >
                    <option value="en">{t.language.english}</option>
                    <option value="ru">{t.language.russian}</option>
                  </select>
                </label>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
