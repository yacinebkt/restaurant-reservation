import { lazy } from 'react';
import Loadable from '@/components/loading-screen/Loadable';
import AuthGuard from '@/modules/Auth/guards/AuthGuard';
const DashboardLayout = Loadable(lazy(() => import('@/modules/Layout/MainLayout')));
const ReservationsPage = Loadable(lazy(() => import('@/modules/Dashboard/reservations/pages/List')));
const AnalyticsPage = Loadable(lazy(() => import('@/modules/Dashboard/analytics')));
const UserList = Loadable(lazy(() => import('@/modules/Dashboard/users')));

export const dashboardRoutes = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: <ReservationsPage />,
      },

      {
        path: 'users',
        element: <UserList/>,
      },

      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
    ],
  },
];
