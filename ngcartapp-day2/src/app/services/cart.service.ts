import {CartItem} from "../models/cart-item.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  private cartItemsData:CartItem[]=[];

  addItem(newItem:CartItem){
    for(let item of this.cartItemsData) {
      if(item.id == newItem.id){
        item.qty++;
        return;
      }
    }
    this.cartItemsData.push(newItem);
  }

  deleteItem(index:number){
    this.cartItemsData.splice(index, 1);
  }

  getCartItems(){
    return this.cartItemsData;
  }
}
