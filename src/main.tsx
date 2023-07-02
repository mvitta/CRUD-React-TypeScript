import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/Error/ErrorPage.tsx'
import { Card } from './components/Card/Card.tsx'
import { Form } from './components/Form/Form.tsx'
import { Update } from './components/Update/Update.tsx'
import { getRecords } from './services/GetRecords.ts'

// los datos estaran desde el primer render de la aplicacion
async function rootLoader() {
  const users = await getRecords('http://localhost:3000')
  return users
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Form />,
      },
      {
        path: 'Show/',
        element: <Card />,
      },
      {
        path: 'Update/',
        element: <Update />,
        loader: rootLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
