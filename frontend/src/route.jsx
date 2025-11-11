import { createBrowserRouter, Navigate } from 'react-router-dom'

import { DefaultLayout } from "./layout/DefaultLayout";
import { Aminoacidos } from './pages/Aminoacidos';
import { Carboidratos } from './pages/Carboidratos';
import { Pretreino } from './pages/Pre-treino';
import { Proteinas } from './pages/Proteinas';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,

    children: [
      {
        path: '/',
        element: <Navigate to='/aminoacidos'/>,
      },
      {
        path: '/aminoacidos',
        element: <Aminoacidos/>
      },
      {
        path: '/carboidratos',
        element: <Carboidratos/>
      },
      {
        path: '/pretreino',
        element: <Pretreino/>
      },
      {
        path: '/proteinas',
        element: <Proteinas/>
      },
    ],
  },
  {
    path: '*',
    element: <h1>Página não encontrada</h1>,
  },
])