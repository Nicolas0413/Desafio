import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'funcionalidades',
    loadComponent: () => import('./desafio2/desafio2').then(m => m.desafioComponent2)
  },
];
