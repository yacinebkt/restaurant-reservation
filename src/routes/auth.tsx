import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import NonAuthGuard from '@/modules/Auth/guards/NonAuthGuard';
import { PATH_AFTER_LOGIN } from '@/config/global-config';
const Login = lazy(() => import('@/modules/Auth/pages/Login'));
const ForgotPassword = lazy(() => import('@/modules/Auth/pages/Password/Forgot'));

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <NonAuthGuard redirectTo={PATH_AFTER_LOGIN}>
        <Outlet />
      </NonAuthGuard>
    ),
    children: [
      {
        path: 'signin',
        element: <Login />,
      },
      {
        path: 'password/forgot',
        element: <ForgotPassword />,
      },
      
    ],
  },
];
