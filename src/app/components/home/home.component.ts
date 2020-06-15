import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesKids:any;
  constructor(public _ps:PeliculasService) {
    this._ps.getCartelera()
        .subscribe(data=>{
          //console.log(data[0]);
          this.cartelera=data;
        
        })

        
        this._ps.getPopulares()
        .subscribe(data=>{
          //console.log(data[0]);
          this.populares=data;
        
        })

        this._ps.getPopularesKids()
        .subscribe(data=>{
          //console.log(data[0]);
          this.popularesKids=data;
        
        })
   }

  ngOnInit(): void {
  }

}
