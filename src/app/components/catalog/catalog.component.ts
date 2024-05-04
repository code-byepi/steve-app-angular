import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {ProductCardComponent} from "../product-card/product-card.component";

@Component({
  selector: 'catalog',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',

})
export class CatalogComponent {

  // pasamos instacia de products
  @Input() products: Product[] = [];


  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
  onAddCart(product: Product): void {
    // recibo un product del hijo y se lo paso al padre CartApp
    this.productEventEmitter.emit(product);
  }


}
