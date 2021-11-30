import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route:ActivatedRoute, private service:MoviesService) {
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

  clickedSeat(slug:string,id:number,index:number,totalTickets:number){
    let selected = this.movie.seats.filter((seat:any) => seat === 'selected').length
    if(selected < totalTickets){
      this.service.reserveSeat(slug,id,index);
      if(this.movie.seats[index-1] === 'reserved'){
        this.movie.seats[index-1] = 'reserved'
        console.log(selected)

  
      }
      else if (this.movie.seats[index-1] === 'available'){
        this.movie.seats[index-1] = 'selected'
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        console.log(selected)


      }
      else if (this.movie.seats[index-1] === 'selected'){

        this.movie.seats[index-1] = 'available'
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        console.log(selected)


      }
    }
    else if(selected === totalTickets){
      this.service.reserveSeat(slug,id,index);
      if(this.movie.seats[index-1] === 'reserved'){
        this.movie.seats[index-1] = 'reserved'
        console.log(selected)

  
      }
      else if (this.movie.seats[index-1] === 'selected'){
        this.movie.seats[index-1] = 'available'
        selected = this.movie.seats.filter((seat:any) => seat === 'selected')
        console.log(selected)


      }

    }
  
  
  }

}
