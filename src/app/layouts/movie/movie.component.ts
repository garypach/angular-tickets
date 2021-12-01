import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any = [];

  constructor(private _singleMovie: MoviesService,private route: ActivatedRoute, private router: Router ) {
    
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this._singleMovie.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = movie;
        console.log(movie)
      })
    })
  
  }
  
  clickedGetTickets(id:number){
    this.router.navigate(['movies',id,'tickets'])
  }


}
