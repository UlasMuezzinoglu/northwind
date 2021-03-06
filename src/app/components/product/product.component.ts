import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = []
  dataLoadedForProducts = false
  filterText: string= '';
  // productResponseModel:ProductResponseModel = {
  //   data : this.products,
  //   message:"",
  //   success:true
  // }


  constructor(private productService: ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts();
      } 
    })

  }

  getProducts() {
    console.log("api request Başladı")
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoadedForProducts = true
    })
    console.log("Method Bitti");
  }
  getProductsByCategory(categoryId:number) {
    console.log("api request Başladı")
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoadedForProducts = true
    })
    console.log("Method Bitti");
  }

  addToCart(product:Product){
    
    this.cartService.addToCart(product);
    this.toastrService.success("Sepete Eklendi",product.productName)
  
  }

}
