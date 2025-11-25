import { createBrowserRouter, Navigate } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Aminoacidos } from './pages/Aminoacidos'
import { Carboidratos } from './pages/Carboidratos'
import { Pretreino } from './pages/Pre-treino'
import { Proteinas } from './pages/Proteinas'
import { Acessorios } from './pages/Acessorios'
import { Vitaminas } from './pages/Vitaminas'
import { Outlet } from './pages/Outlet'
import { Termogenicos } from './pages/Termogenicos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,

    children: [
      {
        path: '/',
        element: <Navigate to="/aminoacidos" />,
      },
      {
        path: '/aminoacidos',
        element: <Aminoacidos />,
      },
      {
        path: '/carboidratos',
        element: <Carboidratos />,
      },
      {
        path: '/pretreino',
        element: <Pretreino />,
      },
      {
        path: '/proteinas',
        element: <Proteinas />,
      },
      {
        path: '/acessorios',
        element: <Acessorios />,
      },
      {
        path: '/vitaminas',
        element: <Vitaminas />,
      },
      {
        path: '/outlet',
        element: <Outlet />,
      },
      {
        path: '/termogenicos',
        element: <Termogenicos />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>Página não encontrada</h1>,
  },
])
