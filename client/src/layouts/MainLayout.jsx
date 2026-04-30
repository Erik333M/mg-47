import { Outlet } from 'react-router-dom'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-stone-100">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8 md:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
