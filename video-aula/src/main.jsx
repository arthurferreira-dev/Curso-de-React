import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { TaskPage } from './pages/Pagetask.jsx'
import './App.css'

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