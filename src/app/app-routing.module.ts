import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AllProductComponent } from './pages/all-product/all-product.component';



const routes: Routes = [
  { path: '', redirectTo : 'home', pathMatch : 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'all-product', component: AllProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
