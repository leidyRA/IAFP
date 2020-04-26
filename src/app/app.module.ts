import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ZonasComponent} from './zonas/zonas.component';
import {
  NbButtonModule, NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import { EstacionesComponent } from './estaciones/estaciones.component';
import {HttpClientModule} from '@angular/common/http';
import {ZonasService} from './zonas/zonas.service';
import {EstacionesService} from './estaciones/estaciones.service';
import { NuevaZonaComponent } from './zonas/nueva-zona/nueva-zona.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ZonasComponent,
    EstacionesComponent,
    NuevaZonaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    HttpClientModule,
    NbInputModule,
    NbCardModule
  ],
  providers: [
    ZonasService,
    EstacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
