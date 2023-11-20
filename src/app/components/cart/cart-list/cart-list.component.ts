import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})
export class CartListComponent {


  cartMenuDisplay: boolean = true

  public toggleCartMenu() {
    this.cartMenuDisplay = !this.cartMenuDisplay
  }

}
