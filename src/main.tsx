import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/Error/ErrorPage.tsx'
import { getRecords } from './services/GetRecords.ts'
// los datos estaran desde el primer render de la aplicacion
async function rootLoader() {
  const users = await getRecords('http://localhost:3000')
  return users
}

const Form = React.lazy(() => import('./components/Form/Form.tsx'))
const Card = React.lazy(() => import('./components/Card/Card.tsx'))
const Update = React.lazy(() => import('./components/Update/Update.tsx'))

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
