import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: string;
  listProduct: Array<Product>;

  ngOnInit() {
    this.listProduct = [
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', description : "test", price: 5, available: true },
      // { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', price: 5, available: true },
      // { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', price: 5, available: true },
      // { id: 3, name: 'Category 3', picture: 'https://noonclo.com/cdn/shop/files/2-2_1080x.jpg?v=1708502345', price: 5, available: true }
    ];
  }
}
