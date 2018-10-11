import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzadetailsComponent} from './pizzadetails/pizzadetails.component';
import {PizzaComponent} from './pizza/pizza.component';

const routes: Routes = [
    {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    {path: 'pizzas', component: PizzaComponent},
    {path: 'pizzas/:id', component: PizzadetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
