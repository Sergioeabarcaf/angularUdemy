import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { CargaComponent } from './components/carga/carga.component';

const APP_ROUTES: Routes = [
  { path: 'photos', component: PhotosComponent },
  { path: 'carga', component: CargaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
