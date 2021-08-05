import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44341/api/";

  constructor(private httpClient:HttpClient) { }


  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getall";
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "Products/getbycategory?categoryId="+categoryId;
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath);
  }
}
