import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { APP_ROUTESUSUARIOS } from './components/usuarios/usuario.routes';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:10',
    component: UsuariosComponent,
    children: APP_ROUTESUSUARIOS
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
