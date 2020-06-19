import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import {APP_ROUTING} from './app.routes';


//Mareterial


import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaImagenPipePipe } from './pipes/pelicula-imagen-pipe.pipe';
import { CuadroComponent } from './componets/home/cuadro/cuadro.component';
import { GaleriaComponent } from './componets/home/galeria/galeria.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    NavbarComponent,
    BuscarComponent,
    PeliculaImagenPipePipe,
    CuadroComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
