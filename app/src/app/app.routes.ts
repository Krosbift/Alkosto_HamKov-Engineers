import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { OurStores } from './pages/our-stores/our-stores';

export const routes: Routes = [
  {
    path: "**",
    component: Home,
  },
  {
    path: "nuestra-compañia/tiendas",
    component: OurStores,
  }
];
