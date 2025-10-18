import { Routes } from '@angular/router';
import { OurStores } from './pages/our-stores/our-stores';

export const routes: Routes = [
  {
    path: "**",
    component: OurStores,
  },
  {
    path: "nuestra-compañia/tiendas",
    component: OurStores,
  }
];
