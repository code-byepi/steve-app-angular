import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {CartAppComponent} from "./components/cart-app/cart-app.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CartAppComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'frontend';
}
