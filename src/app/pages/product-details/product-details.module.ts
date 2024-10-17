import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { RouterModule , Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    ProductDetailsComponent ,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ProductDetailsModule { }
