import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: any[] = [];
  constructor() { }

  // Function to store shopping history to LocalStorage

  addProduct = (product) => {
    const items = this.shoppingCart;

    if (items) {
      items.push(product);
      // using localStorage to save shopping history
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
    else {
      this.shoppingCart.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(this.shoppingCart));
    }

  }


  get_shoppingCartItems = () => {
    const items = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  }

  getCartLength = () => {
    const items = this.get_shoppingCartItems();
    return items ? this.get_shoppingCartItems().length : 0;
  }

  getTotal = () => {
    // Function to get total price of products in cart
    const items = this.get_shoppingCartItems();

    // return the total price of products in the shopping cart using reduce function
    return items?.reduce((amt, item) => amt + item.price, 0);
  }

  removeItem = (p) => {
    // Function to remove products in cart
    const items = this.get_shoppingCartItems();

   // Using findIndex function to return the index of the product to be deleted
    const index = items.findIndex(item => item.id === p.id);
    if (index >= 0) {
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  }
}
