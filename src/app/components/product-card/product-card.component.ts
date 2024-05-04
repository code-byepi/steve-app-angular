import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'div[product-card]',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',

})
export class ProductCardComponent {

  @Input() product!: Product;

  // Evento click para agregar producto al Carrito
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product): void {
    // paso el obj. product al padre Catalog
    this.productEventEmitter.emit(product);
  }

}
