import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  movie: any = [];
  
  quantityAdult:number = 0;
  quantityChild:number = 0;
  quantitySenior:number = 0;

  totalTickets:number = this.quantityAdult + this.quantityChild + this.quantitySenior;

  constructor(private route:ActivatedRoute, public service:MoviesService, private router: Router ) {
    console.log(this.movie);
    this.route.paramMap.subscribe(params =>{
      this.movie = service.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = {
          id: movie.id,
          backdrop_path:movie.backdrop_path,
          title:movie.title,
        }
        console.log(this.movie)
      })
    })

   }

  ngOnInit(): void {
  }
 
  clickedPlusAdult()
  {
    this.quantityAdult = this.quantityAdult + 1;
  }
  clickedMinusAdult()
  {
    if(this.quantityAdult != 0)
  {
    this.quantityAdult = this.quantityAdult - 1;
  }
  
  }

  clickedPlusChild()
  {
    this.quantityChild = this.quantityChild + 1;
  }
  clickedMinusChild()
  {
    if(this.quantityChild != 0)
  {
    this.quantityChild =  this.quantityChild - 1;
  }
  
  }

  clickedPlusSenior()
  {
    this.quantitySenior = this.quantitySenior + 1;
  }
  clickedMinusSenior()
  {
    if(this.quantitySenior != 0)
  {
    this.quantitySenior = this.quantitySenior - 1;
  }
  }

  clickedContinue(id:number){
    if(this.quantityAdult === 0 && this.quantityChild===0 && this.quantitySenior ===0){
      alert('Please select your ticket type(s)')
      
    }
    else{
      this.service.TotalTickets = this.quantityAdult + this.quantityChild + this.quantitySenior;
      this.service.quantityAdult = this.quantityAdult;
      this.service.quantityChild = this.quantityChild;
      this.service.quantitySenior = this.quantitySenior;
      console.log(this.service.TotalTickets)
      this.router.navigate(['movies',id,'tickets','schedule'])
    }

  }


}
