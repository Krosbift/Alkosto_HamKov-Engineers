import { Routes } from '@angular/router';
import { OurStores } from './pages/our-stores/our-stores';
import { Home } from './pages/home/home';
import { LoginOptions } from './pages/login-options/login-options';

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "nuestra-compañia/tiendas",
    component: OurStores,
  },
  {
    path: "login/options",
    component: LoginOptions,
  },
];
