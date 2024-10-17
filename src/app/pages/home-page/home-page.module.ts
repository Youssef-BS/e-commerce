import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { HomeComponent } from 'src/app/components/categoryHome/category.component';
import { ProductComponent } from 'src/app/components/productHome/product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    ContainerComponent,
    HomeComponent,
    ProductComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule {}
