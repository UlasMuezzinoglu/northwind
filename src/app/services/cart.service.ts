import { cartItems } from './../models/cartItems';
import { CartItem } from './../models/cartItem';
import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = cartItems.find
    (c => c.product.productId === product.productId);
    if (item) {
      item.quantity +=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      cartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item: CartItem = cartItems.find
    (c => c.product.productId === product.productId);

    if (item.quantity>1) {
      item.quantity -=1;
      
    }else{
      cartItems.splice(cartItems.indexOf(item),1);
    }

    
  }


  list():CartItem[]{
    return cartItems; // be careful
  }
}
