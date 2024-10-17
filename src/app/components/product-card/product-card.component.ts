import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() onProductClick = new EventEmitter<number>();

  handleProductClick() {
    this.onProductClick.emit(this.product.id);
  }
}
