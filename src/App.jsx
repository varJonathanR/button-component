import React from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Home</h1>,
      errorElement: <h1>Error</h1>
    },
    {
      path: '/about',
      element: <h1>About</h1>,
    },
    {
      path: '/contact',
      element: <h1>Contact</h1>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
