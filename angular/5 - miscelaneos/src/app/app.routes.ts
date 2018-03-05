import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

import { UsuarioDetalleComponent } from './components/usuarios/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuarios/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuarios/usuario-nuevo.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:10',
    component: UsuariosComponent,
    children:[
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalle', component: UsuarioDetalleComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
