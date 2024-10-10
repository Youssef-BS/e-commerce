import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/components/model/Product';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  listProduct: Array<Product>;
  mainPhoto : string ;

  constructor(private route: ActivatedRoute , private cartService : CartService , private productService : ProductService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.listProduct = this.productService.getProducts()
    this.product = this.productService.findProductById(productIdFromRoute);
    console.log(this.product?.photos)

 if (this.product)
   this.mainPhoto = this.product?.picture ;
  }

  changeMainPhoto(image: string) {
    this.mainPhoto = image;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart !');
  }

}
