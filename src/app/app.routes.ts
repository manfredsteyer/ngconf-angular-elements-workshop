import { TabsPageComponent } from './tab-example/tabs-page/tabs-page.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'tabs',
    component: TabsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
