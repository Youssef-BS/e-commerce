import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: string;
  listCategory: Array<Category>;

  ngOnInit() {
    this.listCategory = [
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', nbrLike: 5, available: true },
    ];
  }
}
