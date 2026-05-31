import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { LanguageProvider } from '../shared/i18n/LanguageContext'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  return null
}

export function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col text-stone-100">
        <ScrollToTop />
        <Header />
        <main
          className={
            isHomePage
              ? 'w-full flex-1'
              : 'mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8 md:py-10'
          }
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
