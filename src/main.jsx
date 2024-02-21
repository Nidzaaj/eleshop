import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import store from './store/store.js'

//pages
import HomePage from './pages/HomePage.jsx'
import CatalogPage from './pages/CatalogPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import AllProductsPage from './pages/AllProductsPage.jsx'
import AboutusPage from './pages/AboutusPage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/catalog',
        element: <CatalogPage />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
      {
        path: '/allproducts',
        element: <AllProductsPage />
      },
      {
        path: '/aboutus',
        element: <AboutusPage />
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetailsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode >,
)
