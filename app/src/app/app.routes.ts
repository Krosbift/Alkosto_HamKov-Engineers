import { Routes } from '@angular/router';
import { OurStores } from './pages/our-stores/our-stores';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "nuestra-compañia/tiendas",
    component: OurStores,
  }
];
