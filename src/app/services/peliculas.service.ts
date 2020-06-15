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


  getCartelera()
  {
    let desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate()+7);

    let desdeStr = `${ desde.getFullYear()}-${desde.getMonth()}-${desde.getDate()}}`
    let hastaStr = `${ hasta.getFullYear()}-${hasta.getMonth()}-${hasta.getDate()}}`

    let url= `${this.urlMoviedDB}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`
    

    return this.http.get( url );
  }

  getPopulares()
  {
    let url= `${this.urlMoviedDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`

    return this.http.get( url );
                
  }

  getPopularesKids()
  {
    let url= `${this.urlMoviedDB}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`

    return this.http.get( url );
                
  }
}
