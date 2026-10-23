import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../components/layout/RootLayout'
import Home from '../pages/home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      
      {
        path: '/work',
        element: <Projects />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },

    ],
  },
])

export default router