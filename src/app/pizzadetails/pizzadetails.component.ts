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

  @Input() pizza: Pizza;
  constructor(
      private activateRoute: ActivatedRoute,
      private location: Location,
      private pizzaService: PizzaService
  ) { }

  ngOnInit() {
  }

}
