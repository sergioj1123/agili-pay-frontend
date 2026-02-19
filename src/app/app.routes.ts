import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './modules/auth/login/login';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },

  {
    path: '',
    component: MainLayout,
    //Use guard when already implemented
    children: [
      // {
      //   path: 'dashboard',
      //   loadComponent: () =>
      //     import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      // },
      // // Redireciona a raiz para o dashboard apenas se estiver dentro do MainLayout
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full',
      // },
    ],
  },

  // 3. Wildcard (Rota não encontrada)
  {
    path: '**',
    redirectTo: 'login',
  },
];
