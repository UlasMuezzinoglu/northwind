import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44341/api/Categories/getall"

  constructor(private httpClient:HttpClient) { }


  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient
    .get<ListResponseModel<Category>>(this.apiUrl);
  }
}
