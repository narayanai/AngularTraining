import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart-item.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  /*constructor() {
    let ps = new ProductService();
    this.products = ps.getProducts();
  }*/

  constructor(private productService:ProductService, private cartService:CartService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

  addtoCart(product:Product){
    let cartItem:CartItem = new CartItem(product.id, product.name, product.price, 1);

    this.cartService.addItem(cartItem);
  }

}
