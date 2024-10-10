import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './../model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class HomeComponent implements OnInit {
  list: string;
  listCategory: Array<Category> = [];
  displayedCategories: Array<Category> = [];
  constructor(private router: Router , private categoryService : CategoryService) {}

  ngOnInit() {

    this.listCategory = this.categoryService.getCategory();


this.displayedCategories=this.listCategory.slice(0 , 6) ;

}

categoryDetails(id: number) {
  console.log(`Navigating to product with ID: ${id}`);
  this.router.navigate(['all-product'], { queryParams: { categoryId: id } });
}


}
