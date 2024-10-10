import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/categoryHome/category.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { ProductComponent } from './components/productHome/product.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AllProductComponent } from './pages/all-product/all-product.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { ProductDetailsModule } from './pages/product-details/product-details.module';
import { AllProductModule } from './pages/all-product/all-product.module';
import { CartModule } from './components/cart/cart.module'





@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent , HomeComponent , FooterComponent, ContainerComponent, ProductComponent, StarRatingComponent, HomePageComponent, ProductDetailsComponent, AllProductComponent, FiltreComponent, ProductCardComponent, CartComponent, SideBarComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule , HttpClientModule, HomePageModule, ProductDetailsModule, AllProductModule, CartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
