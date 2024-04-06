import { createBrowserRouter } from 'react-router-dom'

import AppLayout from './_layout/app'
import AuthLayout from './_layout/auth'
import Dashboard from './app/dashboard'
import SignIn from './auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
