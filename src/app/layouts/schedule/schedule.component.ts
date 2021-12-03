import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  movie:any ={
    id:'',
    backdrop_path:'',
    title:'',
    seats:[]
  };
  
  time = '';
  constructor(private route:ActivatedRoute, public service:MoviesService, private router:Router ) {
    console.log(this.movie);
    this.route.paramMap.subscribe(params =>{
      this.movie = service.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = {
          id: movie.id,
          backdrop_path:movie.backdrop_path,
          title:movie.title,
          seats:[
            'available',
            'available',
            'reserved',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            'reserved',
            'reserved',
            'reserved',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            'reserved',
            'available',
            'available',
            'available',
            'available',
            'reserved',
            'available',
            'reserved',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            'reserved',
            'reserved',
            'reserved',
            'reserved',
            'reserved',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            'available',
            
          ]
        }
        console.log(this.movie)
      })
    })

   }

  ngOnInit(): void {
  }

  clickedTime(time:string){
    this.time=time;
    console.log(time)
  }

  clickedContinue(id:number){
    let selected = this.movie.seats.filter((seat:any) => seat === 'selected').length

    if(this.time==='' || selected === 0){
      alert('Missing time or selected seats')
    }
    else{
      this.router.navigate(['movies',id,'tickets','schedule','checkout'],
      {
        queryParams:{
          adults:this.service.quantityAdult,
          children:this.service.quantityChild,
          seniors:this.service.quantitySenior,
          time:this.time
        }
      })
    }
    
  }

  clickedSeat(slug:string,id:number,index:number,totalTickets:number){
    let selected = this.movie.seats.filter((seat:any) => seat === 'selected').length
    if(selected < totalTickets){
      if(this.movie.seats[index-1] === 'reserved'){
        this.movie.seats[index-1] = 'reserved'
        this.service.reserveSeat(slug,id,index);

      }
      else if (this.movie.seats[index-1] === 'available'){
        this.movie.seats[index-1] = 'selected'
        this.service.seatsReserved.push(index);
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        this.service.reserveSeat(slug,id,index);


      }
      else if (this.movie.seats[index-1] === 'selected'){
        this.movie.seats[index-1] = 'available'
        this.service.seatsReserved.pop(index);
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        this.service.reserveSeat(slug,id,index);


      }
    }
    else if(selected === totalTickets){
      if(this.movie.seats[index-1] === 'reserved'){
        this.movie.seats[index-1] = 'reserved'
        this.service.reserveSeat(slug,id,index);

        console.log(selected)

  
      }
      else if (this.movie.seats[index-1] === 'selected'){
        this.movie.seats[index-1] = 'available'
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        this.service.seatsReserved.pop(index);
        this.service.reserveSeat(slug,id,index);
        console.log(selected)


      }

    }
  
  
  }

}
