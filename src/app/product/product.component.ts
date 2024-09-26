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
      { id: 3, name: 'jacket', picture: 'https://www.cdiscount.com/pdt2/5/4/2/1/700x700/mp120401542/rw/veste-femme-marque-de-luxe-couleur-unie-courte.jpg', description : "jacket black", price: 5, available: true , categoryId : 1 , rating: 4},
      { id: 3, name: 'Category 3', picture: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/z/23/5c02215d-b9f8-4c81-b449-188455b7ded5.png', description : "test", price: 5, available: true , categoryId : 1 , rating: 5},
      { id: 3, name: 'Category 3', picture: 'https://marquage-avenue.fr/205330-large_default/veste-vintage-molleton-doublee-sherpa-homme-a-personnaliser.jpg', description : "test", price: 5, available: false , categoryId : 1 ,  rating: 5},
      { id: 3, name: 'Category 3', picture: 'https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/4/d/6/4d6a1848c3657479c896400626998857.jpg', description : "test", price: 5, available: true , categoryId : 1 ,  rating: 4},
      { id: 3, name: 'Category 3', picture: 'https://s.alicdn.com/@sc04/kf/U56edfc05bfaa469e87d7dce5bd6bf6b3k.jpg_720x720q50.jpg', description : "test", price: 5, available: true , categoryId : 1 , rating: 3},
      { id: 3, name: 'Category 3', picture: 'https://www.peaksports.tn/29276-medium_default/capuche-i-can-play-vert.jpg', description : "test", price: 5, available: false , categoryId : 1 , rating: 2},
    ];
  }
}
