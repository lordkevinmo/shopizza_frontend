import { Component } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Shop';
  pizza: Array<Pizza> = [
    {name:"Marguerittes", price:12, url:"https://media-cdn.tripadvisor.com/media/photo-s/0f/84/ba/ec/bon-a-pizza.jpg"},
    {name:"royale", price:14, url:"https://www.marecetteitalienne.com/wp-content/uploads/2012/11/Garniture-pour-Pizza-Royale.jpg"}
  ]
}
