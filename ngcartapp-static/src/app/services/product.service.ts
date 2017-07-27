import {Product} from "../models/product.model";

export class ProductService {
  private ProductData:Product[];

  constructor(){
    this.ProductData = [
      new Product(1, "Samsung Galaxy", 6000, "Samsung Mobile"),
      new Product(2, "Sony TV", 30000, "LED TV 40 inches"),
      new Product(3, "LG Washing Machine", 25000, "Front load"),
      new Product(4, "Votas AC", 26000, "5 star")
    ]
  }

  getProducts(){
    return this.ProductData;
  }
}
