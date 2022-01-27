import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeadersComponent } from './Components/headers/headers.component';
import { HomeComponent } from './Pages/home/home.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';
import { BannerComponent } from './Components/banner/banner.component';
import { ApiService } from './Services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Components/products/products.component';
import { CheckoutProductsComponent } from './Components/checkout-products/checkout-products.component';
import { SubtotalComponent } from './Components/subtotal/subtotal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {firebaseConfig} from './Config/firebase.config';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    CheckoutComponent,
    LoginComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    SubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
