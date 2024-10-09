import { Product } from '../model/Product';
import { CartService } from './../../cart.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items : Product [] =  [] ;
  quantity : number ;

  constructor(
    private cartService : CartService
  ){}

  ngOnInit() {
     this.items = this.cartService.getItems() ;
  }

  decrementQuantity(){

  }
  
  incrementQuantity(){

  }

  removeItem(id : number) {
    this.items = this.cartService.removeItem(id) ;
    console.log(id);
  }


}
