import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';

@Component({
  selector: 'app-pizzadetails',
  templateUrl: './pizzadetails.component.html',
  styleUrls: ['./pizzadetails.component.css']
})
export class PizzadetailsComponent implements OnInit {
  pizza: Pizza;
  constructor(
      private activateRoute: ActivatedRoute,
      private location: Location,
      private pizzaService: PizzaService
  ) { }

  ngOnInit() {
      this.getPizza();
  }

  getPizza(): void {
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.getPizza(id)
          .subscribe(pizza => this.pizza = pizza);
    }

    goBack(): void {
      this.location.back();
    }

}
