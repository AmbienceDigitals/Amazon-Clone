import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: any[];
  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(p): void {
    this.shoppingCart.addProduct(p);
  }

}
