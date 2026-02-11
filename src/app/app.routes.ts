import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      // Exemplo de Lazy Loading para Standalone:
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('./modules/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES),
      // },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
