import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FoodService } from '../service/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService){
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItme:CartItem){
    this.cartService.removeFromCart(cartItme.food.id);
    this.setCart();
  }

  changeQuantity(cartItme:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItme.food.id, quantity);
    this.setCart();
  }
}
