import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { forbiddenNameValidator,forbiddenCardValidator,forbiddenCvvValidator } from 'src/app/heroValidator';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, forbiddenNameValidator(/bob/i)]);
  card = new FormControl('', [Validators.required, forbiddenCardValidator(/^4[0-9]{12}(?:[0-9]{3})?$/)]);
  cvv = new FormControl('', [Validators.required, forbiddenCvvValidator(/^[0-9]{4}$/)]);

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }


  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getCardErrorMessage() {
    if (this.card.hasError('required')) {
      return 'You must enter a value';
    }

    return this.card.hasError('card') ? 'Not a valid card number' : '';
  }

  getCvvErrorMessage() {
    if (this.cvv.hasError('required')) {
      return 'You must enter a value';
    }

    return this.cvv.hasError('cvv') ? 'Not a valid cvv' : '';
  }



  movie: any = [];
  adultTickets:any;
  childTickets :any;
  seniorTickets :any;
  time :any;
  totalPrice:any;

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
    this.route.queryParamMap.subscribe(params => {
      this.adultTickets = params.get('adults');
      this.childTickets = params.get('children');
      this.seniorTickets = params.get('seniors');
      this.time = params.get('time');
      this.totalPrice = ((parseFloat(this.adultTickets) * 17.49) + (parseFloat(this.childTickets) * 14.49) + 
      (parseFloat(this.seniorTickets) * 12.49)).toFixed(2);
    })
    
  }

  checkoutContinue(id:number){
    if(this.getNameErrorMessage() === '' && this.getEmailErrorMessage() === '' && this.getCardErrorMessage() === '' && this.getCvvErrorMessage() === ''){
      this.router.navigate(['movies',id,'tickets','schedule','checkout','thankyou'],
      {
        queryParams:{
          adults:this.adultTickets,
          children:this.childTickets,
          seniors:this.seniorTickets,
          time:this.time
        }
      })    }
    else{
      alert('Please fill missing fields')
    }
  }

}
