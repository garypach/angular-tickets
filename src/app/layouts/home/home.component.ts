import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesDisplay: any = [];

  constructor(private _movie: MoviesService, private router: Router) { }

  ngOnInit(): void {
    this._movie.getAllMovies().subscribe((movie)=>{
      this.moviesDisplay = movie.results;
      console.log(movie.results)
    })

  }

  clickedMovie(id:number){
    this.router.navigate(['movies',id])
  }

}
