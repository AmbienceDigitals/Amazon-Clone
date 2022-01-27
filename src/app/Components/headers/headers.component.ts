import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  bars: any = faBars;
  searchIcon: any = faSearch;
  cart: any = faShoppingCart;

  constructor(public shoppingCart: ShoppingCartService,
              public auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {

  }

  signOut(): any {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }

}
