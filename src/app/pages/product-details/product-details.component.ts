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

  constructor(private route: ActivatedRoute , private cartService : CartService ,private productService : ProductService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.listProduct = [
      { id: 1, name: 'jacket', picture: 'https://www.cdiscount.com/pdt2/5/4/2/1/700x700/mp120401542/rw/veste-femme-marque-de-luxe-couleur-unie-courte.jpg', description : "jacket black", price: 270, available: true , categoryId : 1 , rating: 4 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
      { id: 2, name: ' 3', picture: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/z/23/5c02215d-b9f8-4c81-b449-188455b7ded5.png', description : "test", price: 235, available: true , categoryId : 1 , rating: 5 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
      { id: 3, name: ' 3', picture: 'https://marquage-avenue.fr/205330-large_default/veste-vintage-molleton-doublee-sherpa-homme-a-personnaliser.jpg', description : "test", price: 205, available: false , categoryId : 1 ,  rating: 5 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
      { id: 4, name: 'C 3', picture: 'https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/4/d/6/4d6a1848c3657479c896400626998857.jpg', description : "colourful rebel jack sen baseball bomber jacket en rouge", price: 95, available: true , categoryId : 1 ,  rating: 4 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
      { id: 5, name: 'test 3', picture: 'https://s.alicdn.com/@sc04/kf/U56edfc05bfaa469e87d7dce5bd6bf6b3k.jpg_720x720q50.jpg', description : "colourful rebel jack sen baseball bomber jacket en rouge", price: 130, available: true , categoryId : 1 , rating: 3 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
      { id: 6, name: 'Category 3', picture: 'https://www.peaksports.tn/29276-medium_default/capuche-i-can-play-vert.jpg', description : "colourful rebel jack sen baseball bomber jacket en rouge", price: 136, available: false , categoryId : 1 , rating: 2 , photos : ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByqKw2-dzQXy6n7Vs5u6wGu7VHKsdBSeSYcySLpgtMGjRPlcm","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw66c0fed2/81/P104681/207766_2.jpg?sw=850&sh=850&sm=fit","https://www.omoda.be/dw/image/v2/BCCT_PRD/on/demandware.static/-/Sites-omoda-master/default/dw211f5212/81/P104681/207766_3.jpg?sw=850&sh=850&sm=fit"]},
    ];

    this.product = this.listProduct.find(p => p.id = productIdFromRoute);

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
