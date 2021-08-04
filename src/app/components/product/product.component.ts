import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = []
  apiUrl = "https://localhost:44341/api/Products/getall"

// productResponseModel:ProductResponseModel = {
//   data : this.products,
//   message:"",
//   success:true
// }


  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    //console.log("init çalıştı");
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data
    });
  }

}
