import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AllProductComponent } from './pages/all-product/all-product.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home',component: HomePageComponent },
  { path: 'product/:id',component: ProductDetailsComponent },
  { path: 'all-product',component: AllProductComponent },
  {path : 'cart' ,component : CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
