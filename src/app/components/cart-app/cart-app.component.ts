import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";
import {CatalogComponent} from "../catalog/catalog.component";
import {CartComponent} from "../cart/cart.component";
import {CartItem} from "../../models/cartItem";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [CatalogComponent, CartComponent, NavbarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{

  // inicializo lista de productos, que se pasa por el service
  products: Product[] = [];

  // manejar el estado de los items de carro compras
  items: CartItem[] = [];

  // inicializo el total
  //total: number = 0;

  showCart: boolean = false;

  // inyección de dependencia. Service
  constructor(private service: ProductService) {}

  // inicializo. Recuperación de datos del servicio.
  ngOnInit(): void {
    this.products = this.service.findAll();
    // recuperar los items de la session
    this.items = JSON.parse(sessionStorage.getItem('cart') || '[]');
    //this.calculateTotal();
  }

  // recibo product desde Catalog por evento realizado
  onAddCart(product: Product): void {
    // para chequear si el product ya esta agregar al carrito solo
    const hasItem = this.items.find(item => {
      return item.product.id === product.id;
    })
    if (hasItem) {
      // map devuelve una nueva instancia de los items, pero modificado
      this.items = this.items.map(item => {
        if (item.product.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item;
      })
    } else {
      // actualizamos la linea de productos. Con los product existentes y paso los nuevos al arreglo con su cantidad
      this.items = [...this.items, {product: {...product}, quantity: 1}]; //inmutabilidad
    }

    //this.calculateTotal();
    //this.saveSession();
  }


  onDeleteCart(id: any): void {
    this.items = this.items.filter(item => item.product.id !== id);
    if (this.items.length == 0) {
      sessionStorage.removeItem('cart');
    }
    //this.saveSession();
  }


  openCart(): void {
    this.showCart = !this.showCart;

  }
}
