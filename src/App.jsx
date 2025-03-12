import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/layout/Layout'
import Error from './pages/Error'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { CartContextProvider } from "./contexts/CartContext"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:title',
        element: <ProductsDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/contactus',
        element: <Contact />
      },
      {
        path: '/aboutus',
        element: <About />
      }

    ]
  }
])

function App({ children }) {

  return (

    <ThemeContextProvider>
      <CartContextProvider>
        <RouterProvider router={router}>
          {children}
        </RouterProvider>
      </CartContextProvider>
    </ThemeContextProvider>
  )
}

export default App
