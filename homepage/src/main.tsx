import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Chess } from './pages/Chess/Chess'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/chess',
        element: <Chess />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
