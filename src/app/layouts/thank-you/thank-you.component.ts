import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {


  movie: any = [];
  adultTickets:any;
  childTickets :any;
  seniorTickets :any;
  time :any;
  totalPrice:any;
  seatsReserved:any = []
  constructor(private route:ActivatedRoute, public service:MoviesService, private router: Router ) {
    console.log(this.movie);
    this.route.paramMap.subscribe(params =>{
      this.movie = service.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = {
          id: movie.id,
          backdrop_path:movie.backdrop_path,
          title:movie.title,
          poster:movie.poster_path
        }
        console.log(this.movie)
      })
    })

   }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.adultTickets = params.get('adults');
      this.childTickets = params.get('children');
      this.seniorTickets = params.get('seniors');
      this.time = params.get('time');
      this.totalPrice = ((parseFloat(this.adultTickets) * 17.49) + (parseFloat(this.childTickets) * 14.49) + 
      (parseFloat(this.seniorTickets) * 12.49)).toFixed(2);
    })

    this.seatsReserved = this.service.seatsReserved
    
  }
  }