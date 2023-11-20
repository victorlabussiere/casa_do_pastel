import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/providers/cart/cart.service';
import { CostumerPlate } from 'src/entity/CostumerPlate';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html'
})
export class CartListComponent implements OnInit {
  items: CostumerPlate[] = []

  shoppingCartIcon: string = 'shopping_cart_checkout'

  cartMenuDisplay: boolean = false
  subtotal: number = 0

  constructor(private cartService: CartService) { }

  public toggleCartMenu(): void {

    if (this.shoppingCartIcon == 'shopping_cart_checkout') {
      this.shoppingCartIcon = 'close'
    } else {
      this.shoppingCartIcon = 'shopping_cart_checkout'
    }

    this.cartMenuDisplay = !this.cartMenuDisplay
  }

  public getCartItems(): CostumerPlate[] {
    return this.cartService.getAll()
  }

  public removeCartItem(item: CostumerPlate): void {
    this.cartService.remove(item)
    this.items = this.cartService.getAll()
    if (this.items.length == 0) {
      this.shoppingCartIcon = 'shopping_cart_checkout'
    }
  }

  public getSubTotal(): number {
    this.subtotal = 0

    for (let i = 0; i < this.items.length; i++) {
      this.subtotal = this.subtotal + this.items[i].price
    }

    return this.subtotal
  }

  ngOnInit(): void {
    this.items = this.getCartItems()
    this.getSubTotal()
  }
}
