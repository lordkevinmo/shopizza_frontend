import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzadetailsComponent } from './pizzadetails/pizzadetails.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    PizzadetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
