import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TaskPage } from './pages/Pagetask.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/task",
      element: <TaskPage/>
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);