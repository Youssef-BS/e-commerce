import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {


  category : Category [] ;
  constructor(private categoryService : CategoryService) {}
  ngOnInit() {
    this.category = this.categoryService.getCategory() ;
  }

}
