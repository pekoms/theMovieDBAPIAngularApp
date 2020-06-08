import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  private apikey:string ="28d91bd8ad818f02cb27ea16762a3974";
  private urlMoviedDB:string="https://api.themoviedb.org/3";  
  constructor(private http:HttpClient) { }

  getPopulares()
  {
    let url= `${this.urlMoviedDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`

    return this.http.get( url );
                
  }
}
