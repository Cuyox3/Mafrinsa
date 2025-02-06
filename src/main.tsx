import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Maquinaria from './Maquinaria.tsx';
import Mantenimiento from './Mantenimiento.tsx';
import Soportes from './Soportes.tsx';
import Refacciones from './Refacciones.tsx';
import Manufactura from './Manufactura.tsx';
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
    element: <Mantenimiento/>,
  }, 
  {
    path: "/ingenieria",
    element: <Soportes/>,
  },
  {
    path: "/refacciones",
    element: <Refacciones/>,
  },
  {
    path: "/manufactura",
    element: <Manufactura/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);