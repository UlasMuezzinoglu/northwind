import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = []
  currentCategory :Category;
  dataLoadedForCategories = false

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    console.log("api request Başladı")
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
      this.dataLoadedForCategories = true
    })
    console.log("Method Bitti");
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category
  }
  getCurrentCategoryClass(category:Category){
    if (category == this.currentCategory) {
       return "list-group-item selected"
    }else{
      return "list-group-item"
    }
  }

}
