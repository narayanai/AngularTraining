import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ProductListComponent, CartItemsComponent],
  exports:[ProductListComponent, CartItemsComponent],
  providers: [ProductService, CartService]
})
export class ShoppingModule { }
