import {RouterModule, Routes} from '@angular/router';
import {Component } from '@angular/core';
import {HomeComponent} from "./components/home/home.component";
import {BuscarComponent} from "./components/buscar/buscar.component";
import {PeliculaComponent} from "./components/pelicula/pelicula.component";



const app_routes: Routes =[
    {path:'home',component: HomeComponent},
    {path:'buscar',component: BuscarComponent},
    {path:'pelicula',component: PeliculaComponent},
    {path: '**',pathMatch:'full',redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);