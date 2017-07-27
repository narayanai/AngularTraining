import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";

@Component ({
  template:"<h3>Welcome to shopping App !</h3>"
})

export class HomeComponent {}

@Component ({
  template:`
      <div class="col-sm-6">
    <product-list></product-list>
  </div>
  <div class="col-sm-6 well">
    <cart-items></cart-items>
  </div>
  `
})

export class ListComponent {}

@Component({
  template:"<h1>Oops ! The page you are accessing is not present.</h1>"
})

export class NotFoundComponent {}


@Component({
  templateUrl:"../manage.component.html"
})

export class ManageProductComponent {
  mcproducts:Product[] = [];

  constructor(private ps:ProductService) {
    this.mcproducts = ps.getProducts();
  }
}
