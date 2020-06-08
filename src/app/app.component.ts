import { Component } from '@angular/core';
import  {PeliculasService} from '../app/services/peliculas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filmApp';
  peliculas: any[]=[];
  
  constructor(private peliculasService:PeliculasService ){

    this.peliculasService.getPopulares().subscribe( (data:any)=>{
      this.peliculas=data.results
      console.log(this.peliculas);
      //this.loading=false
    }, (errorServicio)=>{
      //this.loading=false;
      //this.error=true;
      console.log(errorServicio);
    });
  }


  

  
}
