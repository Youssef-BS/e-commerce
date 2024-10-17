import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { AllProductComponent } from './all-product.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';


const routes : Routes = [
{path : '' , component : AllProductComponent}
]

@NgModule({
  declarations: [
    AllProductComponent,
    SideBarComponent ,
    ProductCardComponent
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes)
  ]
})

export class AllProductModule { }
