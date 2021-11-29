import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl='https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-11-22&api_key=def4f9ac2beb10d1686640969bf52c0b'
  public movieUrl=`https://api.themoviedb.org/3/movie/{{slug}}?api_key=def4f9ac2beb10d1686640969bf52c0b&language=en-US`

  public get(url: string) {
    return this.http.get(url);
  }
  
  constructor(private http:HttpClient) { }
  getAllMovies():Observable<any> {
    return this.http.get(this.apiUrl)
  }

  getMovieData(id:any):Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/'+ id.toString() + '?api_key=def4f9ac2beb10d1686640969bf52c0b&language=en-US')
  }
}