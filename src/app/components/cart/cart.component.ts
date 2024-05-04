import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {Product} from "../../models/product";

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnChanges{
  // items del carro compras



  @Input() items: CartItem[] = []; // arreglo de varios objetos
  @Output() idProductEventEmitter = new EventEmitter<Product>();


  total = 0;

  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();

  }

  onDeleteCart(id: any): void {
    this.idProductEventEmitter.emit(id);
  }

  calculateTotal(): void {
    this.total = this.items.reduce((accumulator, item) =>
      accumulator + item.quantity * item.product.price, 0);

  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }




}
