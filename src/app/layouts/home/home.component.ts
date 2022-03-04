import { Component, OnInit , AfterContentInit} from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

declare var $: any;
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

    });

    $('.single-item').slick({
      slidesToShow: 1,
      dots: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: $('.prev-hero'),
      nextArrow: $('.next-hero'),    
      responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
           
        }
      }
    ]
  })

  $('.center').slick({
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

  clickedMovie(id:number){
    this.router.navigate(['movies',id])
  };



  

}
