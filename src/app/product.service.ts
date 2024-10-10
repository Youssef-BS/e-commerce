import { Injectable } from '@angular/core';
import { Product } from './components/model/Product';


@Injectable({
    providedIn : 'root'
  })


export class ProductService {

  listProducts : Product[] = [];

  createProduct(product : Product) : void {
   this.listProducts.push(product);
  }

  deleteProduct(id : number){
     return this.listProducts.filter(product => product.id !== id) ;
  }

  findProductById(productId : number) {
   return this.listProducts.find(p => p.id === productId) ;

  }

}
