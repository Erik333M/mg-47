import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { ProductsPage } from '../pages/ProductsPage'
import { TechnologiesPage } from '../pages/TechnologiesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'technologies', element: <TechnologiesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
