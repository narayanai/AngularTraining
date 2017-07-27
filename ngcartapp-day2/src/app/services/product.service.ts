import {Product} from "../models/product.model";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";


@Injectable()
export class ProductService {
  private ProductData:Product[];

  restUrl = "http://localhost:2403/wsproducts";
  myHeaders = new Headers({"Content-Type":"application/json"});
  options = new RequestOptions({headers:this.myHeaders});

  constructor(private ht:Http){

  }

  getProducts(){
    return this.ht.get(this.restUrl);
  }

  addProduct(newProduct:Product){
    return this.ht.post(this.restUrl,newProduct, this.options);
  }
  deleteProduct(id:string){
    return this.ht.delete(this.restUrl+"/"+id,this.options);
  }

  getProductById(id:string){
    return this.ht.get(this.restUrl+"/"+id);
  }

}
