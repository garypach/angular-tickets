import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  movie:any;
  constructor(private route:ActivatedRoute, service:MoviesService) {
    this.route.paramMap.subscribe(params =>{
      this.movie = service.getMovieData(params.get('title')).subscribe((movie)=>{
        this.movie = movie;
        console.log(movie)
      })
    })
   }

  ngOnInit(): void {
  }

}
