import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App.tsx'
import Contact from './components/contact/Contact.tsx'
import Hijo from './components/hijo/Hijo.tsx'

const rutas = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {path: "/contact", Component: Contact },
      {path: "/hijo", Component: Hijo }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
    
  <StrictMode>
    <RouterProvider router={rutas} />
  </StrictMode>,
)
