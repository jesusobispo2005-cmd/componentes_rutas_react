import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App.tsx'

const rutas = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: []
  }
])

createRoot(document.getElementById('root')!).render(
    
  <StrictMode>
    <RouterProvider router={rutas} />
  </StrictMode>,
)
