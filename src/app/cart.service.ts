import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class CartService {
  items = [];

  constructor(private httpClient: HttpClient) { }

  addToCart (Item:any) {
    this.items.push(Item);
  }

  getItems () {
    return (this.items);
  }

  clearItems () {
    this.items = []
    return (this.items);
  }

  getShippingPrices () {
    return (this.httpClient.get('/assets/shipping.json'));
  }


}