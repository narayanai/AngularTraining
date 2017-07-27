import { Component, OnInit } from '@angular/core';
import {CartItem} from "../../models/cart-item.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html'
})

export class CartItemsComponent implements OnInit {

  cartItems:CartItem[] = [];

  constructor(private cs:CartService) {
    //let cs:CartService = new CartService();
    this.cartItems = cs.getCartItems();
  }

  cancelItem(i){
    this.cs.deleteItem(i);
  }
  ngOnInit() {
  }
  totalAmount(){
    let tot = 0;
    for(let item of this.cartItems){
      tot += (item.price * item.qty);
    }
    return tot;
  }
}
