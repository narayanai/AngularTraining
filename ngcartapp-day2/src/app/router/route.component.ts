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
  formProduct:Product = new Product("","",0,"");

  constructor(private ps:ProductService) {
    ps.getProducts().subscribe((data)=>this.mcproducts = data.json(),
      (err)=> console.log("Error", err)
    );
  }

  saveProduct(){
    this.ps.addProduct(this.formProduct).subscribe(
      (resp)=> {
        console.log(this.formProduct);
        if(this.formProduct.id == "") {
          this.mcproducts.push(resp.json())
        } else {
          let ind = this.mcproducts.findIndex(x=>x.id === this.formProduct.id);
          this.mcproducts[ind]=resp.json();
        }

        this.formProduct = new Product("","",0,"");
      },
          (err)=> console.log("Error", err)
    )
  }

  delete(index:string, i:number){
    this.ps.deleteProduct(index).subscribe(
      (resp)=>this.mcproducts.splice(i,1),
      (err)=>console.log("Delete error", err)
    )
  }

  edit(selectedProduct:Product){
    //this.formProduct = selectedProduct;
    Object.assign(this.formProduct, selectedProduct);
  }
}
