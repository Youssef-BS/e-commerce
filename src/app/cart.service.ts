import { Injectable } from '@angular/core';
import { Product } from './components/model/Product';

@Injectable({
  providedIn : 'root',
})

export class CartService{

items : Product [] = [] ;

addToCart(product : Product){
this.items.push(product);
}

getItems() {
  return this.items;
}

clearItems(){
  return this.items = [] ;
}

removeItem(id : number) {
  return this.items.filter(item => item.id !== id);
}

}
