import { Injectable } from '@angular/core';
import { Product } from './components/model/Product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn : 'root',
})

export class CartService{


items : any = [] ;

constructor(
  private http: HttpClient
){}

addToCart(product : Product){
this.items.push(product);
}

getItems() {
  return this.items;
}

clearItems(){
  this.items = [] ;
  return this.items ;
}

}
