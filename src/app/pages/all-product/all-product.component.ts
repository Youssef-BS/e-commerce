import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/components/model/Product';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  listProduct: Array<Product> = [];
  filteredProducts: Array<Product> = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.queryParams;
    const categoryId = Number(routeParams['categoryId']);

    this.listProduct = [

      { id: 1, name: 'jacket', picture: 'https://www.cdiscount.com/pdt2/5/4/2/1/700x700/mp120401542/rw/veste-femme-marque-de-luxe-couleur-unie-courte.jpg', description: "jacket black", price: 270, available: true, categoryId: 1, rating: 4, photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm"] },

    ];

    if (categoryId) {
      this.filteredProducts = this.listProduct.filter(p => p.categoryId === categoryId);
    } else {
      this.filteredProducts = this.listProduct;
    }
  }

}
