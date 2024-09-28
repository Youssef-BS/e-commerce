import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentIndex: number = 0;
  itemsPerSlide: number = 3;
  listCategory: Array<Category>;

  ngOnInit() {
    this.listCategory = [
      { id: 1, name: 'Category 1', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 2, name: 'Category 2', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 4, name: 'Category 4', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 5, name: 'Category 5', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 6, name: 'Category 6', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true }
    ];
  }


  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemsPerSlide;
    }
  }

  next() {
    if (this.currentIndex + this.itemsPerSlide < this.listCategory.length) {
      this.currentIndex += this.itemsPerSlide;
    }
  }

  get currentCategories() {
    return this.listCategory.slice(this.currentIndex, this.currentIndex + this.itemsPerSlide);
  }
}
