import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './demo/index5/home.component';
import { IndexSingle5Component } from './demo/index-single-5/index-single-5.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Helpmore || 5-Charity and Fundraising Template' },
  },
  // Backward-compatibility redirects
  { path: 'index', redirectTo: 'home', pathMatch: 'full' },
  { path: 'index-2', redirectTo: 'home', pathMatch: 'full' },
  { path: 'index-3', redirectTo: 'home', pathMatch: 'full' },
  { path: 'index-4', redirectTo: 'home', pathMatch: 'full' },

  // Optional: keep one-page variant for the chosen home
  {
    path: 'index-single-5',
    component: IndexSingle5Component,
    data: { title: 'Helpmore-Charity and Fundraising Template' },
  },
];
