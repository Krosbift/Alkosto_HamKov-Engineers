import { Routes } from '@angular/router';
import { OurStores } from './pages/our-stores/our-stores';
import { Home } from './pages/home/home';
import { LoginOptions } from './pages/login-options/login-options';
import { Register } from './pages/register/register';
import { EmailVerification } from './pages/email-verification/email-verification';
import { SearchView } from './pages/search-view/search-view';
import { HelpPage } from './pages/help-page/help-page';

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
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'emailVerification',
    component: EmailVerification,
  },
  {
    path: 'search-view',
    component: SearchView,
  },
  {
    path: 'help-page',
    component: HelpPage,
  }
];
