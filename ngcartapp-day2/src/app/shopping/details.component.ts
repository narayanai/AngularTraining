import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  template:`
    <h3>Product Details !</h3>
    <br/>ID: {{product.id}}
    <br/>Name: {{product.name}}
    <br/>Price: {{product.price}}
    <br/>Description: {{product.description}}
    <br/><button class="btn btn-success" (click)="goBack()">Go Back</button>
    
  `
})

export class DetailsComponent {
  product:Product = new Product("","",0,"");
  constructor(private ar:ActivatedRoute, private ps:ProductService, private router: Router){
    let paramId = ar.snapshot.params["id"];
    console.log("Param ID: ", paramId);
    ps.getProductById(paramId).subscribe(
      (data)=> this.product = data.json(),
      (error)=> console.log("Error while retrieving product ny id", error)
    )
  }

  goBack(){
    this.router.navigate(["list"], {skipLocationChange:true});
  }
}
