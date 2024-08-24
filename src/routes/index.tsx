import { Navigate, useRoutes } from 'react-router-dom';
import { dashboardRoutes } from './dashboard';

import { authRoutes } from './auth';

export default function Router() {
  return useRoutes([
    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
}
