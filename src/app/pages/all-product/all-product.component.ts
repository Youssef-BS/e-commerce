import { Product } from './../../components/model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  listProduct: Array<Product> = [];
  filteredProducts: Array<Product> = [];


  constructor(private route: ActivatedRoute , private router: Router , private productService : ProductService ) {}

  ngOnInit() {
    this.listProduct = this.productService.getProducts();
  }

  productDetails(id : number){
    this.router.navigate(["product" , id])
  }

}
