import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { forbiddenNameValidator,forbiddenCardValidator,forbiddenCvvValidator } from 'src/app/heroValidator';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, forbiddenNameValidator(/bob/i)]);
  card = new FormControl('', [Validators.required, forbiddenCardValidator(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/)]);
  cvv = new FormControl('', [Validators.required, forbiddenCvvValidator(/^[0-9]{3,4}$/)]);

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


  constructor() { }

  ngOnInit(): void {
    
  }

}
