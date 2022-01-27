import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkoutProducts: any[];

  // Using Output function to emit the deleteEvent to another component
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(public shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {

  }

  deleteItem = (p) => {
    this.shoppingCart.removeItem(p);
    this.deleteEvent.emit(p);
  }

}
