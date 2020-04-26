import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZonasComponent} from './zonas/zonas.component';
import {EstacionesComponent} from './estaciones/estaciones.component';
import {NuevaZonaComponent} from './zonas/nueva-zona/nueva-zona.component';

const routes: Routes = [
  {path: 'zonas', component: ZonasComponent},
  {path: 'estaciones', component: EstacionesComponent},
  {path: 'nueva-zona', component: NuevaZonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
