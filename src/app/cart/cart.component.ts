import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itemsList;
  checkOutForm;

  constructor ( private cartService : CartService,
                private formBuilder : FormBuilder )
              {
                this.checkOutForm = this.formBuilder.group({
                  name  : '',
                  email : ''
                })
              }

  ngOnInit () {
    this.itemsList = this.cartService.getItems();
  }
  onSubmit (customerData : any) {
    console.log(customerData)
    this.cartService.clearItems();
    this.checkOutForm.reset()

    window.alert("You Order has been submitted succefully")
  }
}