import { Component, OnInit,AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
declare var $: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any = [];
  movieCredits:any = [];
  moviesDisplay: any = [];


  constructor(private _singleMovie: MoviesService,private _movieCredits: MoviesService,private _movie: MoviesService,private route: ActivatedRoute, private router: Router ) {
    
   }

   ngOnInit(): void {
    this._movie.getAllMovies().subscribe((movie)=>{
      this.moviesDisplay = movie.results;
    });

    this.route.paramMap.subscribe(params =>{
      this._singleMovie.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = movie;
        console.log(movie)
      })
    })
   

    this.route.paramMap.subscribe(params =>{
      this._movieCredits.getAllMovieCredits(params.get('title')).subscribe((movie)=>{
        this.movieCredits = [];
        for(let i = 0; i < 5; i++){
          this.movieCredits.push(movie.cast[i]);
        }
        console.log(this.movieCredits)
      })
    })
    $('.center').not('.slick-initialized').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,        
      prevArrow: $('.prev-movie'),
      nextArrow: $('.next-movie'),
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

  }

  

  
  clickedGetTickets(id:number){
    this.router.navigate(['movies',id,'tickets'])
  }

  clickedMovie(id:number){
    this.router.navigate(['movies',id])
  };


}
