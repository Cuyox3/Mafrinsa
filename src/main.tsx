import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Maquinaria from './Maquinaria.tsx';
import Contacto from './Contacto.tsx';
import AboutUs from './AboutUs.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/maquinaria",
    element: <Maquinaria/>,
  }, 
  {
    path: "/mantenimiento",
    element: <div className="min-h-screen bg-black text-white p-8">Página de Mantenimiento Industrial</div>,
  },
  {
    path: "/ingenieria",
    element: <div className="min-h-screen bg-black text-white p-8">Página de Soportes de Ingeniería</div>,
  },
  {
    path: "/refacciones",
    element: <div className="min-h-screen bg-black text-white p-8">Página de Refaccionamiento</div>,
  },
  {
    path: "/manufactura",
    element: <div className="min-h-screen bg-black text-white p-8">Página de Manufactura</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);