import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../pizza';
import {PizzaService} from '../pizza.service';
import {PayPalConfig, PayPalEnvironment, PayPalIntegrationType} from 'ngx-paypal';
import {of} from 'rxjs';

@Component({
  selector: 'app-pizzadetails',
  templateUrl: './pizzadetails.component.html',
  styleUrls: ['./pizzadetails.component.css']
})
export class PizzadetailsComponent implements OnInit {
  public payPalConfig?: PayPalConfig;
  pizza: Pizza;
  constructor(
      private activateRoute: ActivatedRoute,
      private location: Location,
      private pizzaService: PizzaService
  ) { }

  ngOnInit() {
      this.getPizza();
      this.initConfig();
  }

  getPizza(): void {
      const id = +this.activateRoute.snapshot.paramMap.get('id');
      this.pizzaService.getPizza(id)
          .subscribe(pizza => this.pizza = pizza);
    }

    goBack(): void {
      this.location.back();
    }

    private initConfig(): void {
        this.payPalConfig = new PayPalConfig(
            PayPalIntegrationType.ClientSideREST,
            PayPalEnvironment.Sandbox,
            {
                commit: true,
                client: {
                    sandbox:
                        'AQZmArIDEAcMF-rfs47XKVp_zdGbfTiL76_8kXizmXAnpYs5iXBg0ptV-_RWGT_znpHolGQjbjlPjSe7'
                },
                button: {
                    label: 'paypal',
                    layout: 'vertical'
                },
                onAuthorize: (data, actions) => {
                    console.log('Authorize');
                    return of(undefined);
                },
                onPaymentComplete: (data, actions) => {
                    console.log('OnPaymentComplete');
                },
                onCancel: (data, actions) => {
                    console.log('OnCancel');
                },
                onError: err => {
                    console.log('OnError');
                },
                onClick: () => {
                    console.log('onClick');
                },
                validate: (actions) => {
                    console.log(actions);
                },
                transactions: [
                    {
                        amount: {
                            total: 30.11,
                            currency: 'USD',
                            details: {
                                subtotal: 30.00,
                                tax: 0.07,
                                shipping: 0.03,
                                handling_fee: 1.00,
                                shipping_discount: -1.00,
                                insurance: 0.01
                            }
                        },
                        custom: 'Custom value',
                        item_list: {
                            items: [
                                {
                                    name: 'hat',
                                    description: 'Brown hat.',
                                    quantity: 5,
                                    price: 3,
                                    tax: 0.01,
                                    sku: '1',
                                    currency: 'USD'
                                },
                                {
                                    name: 'handbag',
                                    description: 'Black handbag.',
                                    quantity: 1,
                                    price: 15,
                                    tax: 0.02,
                                    sku: 'product34',
                                    currency: 'USD'
                                }],
                            shipping_address: {
                                recipient_name: 'Brian Robinson',
                                line1: '4th Floor',
                                line2: 'Unit #34',
                                city: 'San Jose',
                                country_code: 'US',
                                postal_code: '95131',
                                phone: '011862212345678',
                                state: 'CA'
                            },
                        },
                    }
                ],
                note_to_payer: 'Contact us if you have troubles processing payment'
            }
        );
    }
}
