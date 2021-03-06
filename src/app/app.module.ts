import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './layouts/home/home.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { ThankYouComponent } from './layouts/thank-you/thank-you.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MoviesService } from './core/services/movies.service';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { TicketsComponent } from './layouts/tickets/tickets.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ScheduleComponent,
    CheckoutComponent,
    ThankYouComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    TicketsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
