import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzadetailsComponent} from './pizzadetails/pizzadetails.component';
import {PizzaComponent} from './pizza/pizza.component';
import {PizzaListComponent} from './pizza-list/pizza-list.component';

const routes: Routes = [
    {path: '', component: PizzaListComponent},
    {path: 'pizzas', component: PizzaComponent},
    {path: 'pizzas/:id', component: PizzadetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
