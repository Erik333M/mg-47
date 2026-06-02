import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/common/Header'
import { LanguageProvider } from '../shared/i18n/LanguageContext'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const resetScroll = () => window.scrollTo(0, 0)

    resetScroll()
    window.addEventListener('beforeunload', resetScroll)

    return () => window.removeEventListener('beforeunload', resetScroll)
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  return null
}

export function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isContactPage = location.pathname === '/contact'

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col text-stone-100">
        <ScrollToTop />
        <Header />
        <main
          className={
            isHomePage
              ? 'w-full flex-1'
              : isContactPage
                ? 'w-full flex-1 pt-24 sm:pt-28'
                : 'mx-auto w-full max-w-6xl flex-1 px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 md:pb-10'
          }
        >
          <Outlet />
        </main>
      </div>
    </LanguageProvider>
  )
}
