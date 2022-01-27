import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: any[];

  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.get_ShoppingCart();
  }

  get_ShoppingCart(): void {
    this.products = this.shoppingCart.get_shoppingCartItems();
  }

  deleteItemEvent(p)  {
    this.get_ShoppingCart();
  }

}
