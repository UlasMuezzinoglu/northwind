import { ProductService } from './../../services/product.service';
import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = []
  dataLoaded = false
  // productResponseModel:ProductResponseModel = {
  //   data : this.products,
  //   message:"",
  //   success:true
  // }


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //console.log("init çalıştı");
    this.getProducts();
  }

  getProducts() {
    console.log("api request Başladı")
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true
    })
    console.log("Method Bitti");
  }

}
