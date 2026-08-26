import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../components/layout/RootLayout'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default router