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



@NgModule({
  declarations: [AppComponent, AuthComponent, HeaderComponent , HomeComponent , FooterComponent, ContainerComponent, ProductComponent, StarRatingComponent, HomePageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
