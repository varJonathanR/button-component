import React from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import All from './Routes/All';
import Colors from './Routes/Colors';
import Size from './Routes/Size';
import Icon from './Routes/Icon';
import Error from './Routes/Error';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <All />,
      errorElement: <Error />,
      /* children: [
        {
          path: "contact/:contactid",
          element: <h3>Contact</h3>
        }
      ] */
    },
    {
      path: '/colors',
      element: <Colors />
    },
    {
      path: '/size',
      element: <Size />
    },
    {
      path: '/icon',
      element: <Icon />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
