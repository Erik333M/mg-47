import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Product' },
  { to: '/contact', label: 'Contact' },
]

const desktopNavLinkClass = ({ isActive }) =>
  `group relative overflow-hidden rounded-sm border px-4 py-2 text-sm font-medium backdrop-blur-xl transition duration-300 ${
    isActive
      ? 'border-[color:rgba(244,246,245,0.34)] bg-[linear-gradient(135deg,rgba(52,94,184,0.24),rgba(17,26,60,0.34))] text-[var(--brand-text-strong)] shadow-[0_18px_40px_rgba(7,10,24,0.28)]'
      : 'border-[color:rgba(244,246,245,0.18)] bg-[color:rgba(255,255,255,0.05)] text-[var(--brand-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_32px_rgba(7,10,24,0.18)] hover:-translate-y-0.5 hover:border-[color:rgba(90,132,220,0.52)] hover:text-[var(--brand-text-strong)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_24px_40px_rgba(17,26,60,0.3)]'
  }`

const mobileNavLinkClass = ({ isActive }) =>
  `cursor-pointer rounded-sm border px-3 py-3 text-sm font-medium backdrop-blur-xl transition duration-300 ${
    isActive
      ? 'border-[color:rgba(244,246,245,0.3)] bg-[linear-gradient(135deg,rgba(52,94,184,0.22),rgba(17,26,60,0.32))] text-[var(--brand-text-strong)]'
      : 'border-[var(--brand-surface-border)] bg-[color:rgba(255,255,255,0.05)] text-[var(--brand-text-strong)] hover:border-[color:rgba(90,132,220,0.48)] hover:bg-[linear-gradient(135deg,rgba(52,94,184,0.18),rgba(17,26,60,0.24))]'
  }`

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--brand-surface-border)] bg-[color:rgba(10,15,35,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" aria-label="Go to home page" className="group inline-flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-[color:rgba(255,255,255,0.16)] bg-[linear-gradient(180deg,rgba(79,87,81,0.95),rgba(17,26,60,0.98))] shadow-[0_18px_40px_rgba(6,10,24,0.34)] transition group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_48px_rgba(17,26,60,0.42)]">
            <span className="text-sm font-extrabold tracking-[0.24em] text-[var(--brand-text-strong)]">MG</span>
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-text-strong)] sm:text-base">
              MG-47
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--brand-text-muted)] sm:text-[11px]">
              Military Armor
            </span>
          </span>
        </NavLink>

        <nav className="hidden gap-2 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopNavLinkClass}>
              {({ isActive }) => (
                <>
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-sm"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(52,94,184,0.22), rgba(17,26,60,0.32))'
                        : 'linear-gradient(135deg, rgba(68,116,224,0.42), rgba(17,26,60,0.48))',
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-3 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(244,246,245,0.8),rgba(255,255,255,0))]"
                    initial={false}
                    animate={{ opacity: isActive ? 0.9 : 0.55 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.28 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-[var(--brand-surface-border)] bg-[color:rgba(10,15,35,0.8)] text-[var(--brand-text-strong)] transition hover:border-[color:rgba(79,87,81,0.65)] hover:bg-[color:rgba(79,87,81,0.18)] md:hidden"
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
              className="absolute left-0 right-0 top-full z-40 border-b border-[var(--brand-surface-border)] bg-[color:rgba(10,15,35,0.96)] p-3 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className={mobileNavLinkClass}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
