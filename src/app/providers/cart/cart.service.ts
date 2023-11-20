import { Injectable } from '@angular/core';
import { CostumerPlate } from 'src/entity/CostumerPlate';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemList: CostumerPlate[] = []

  constructor() { }

  add(costumerPlate: CostumerPlate): void {
    this.itemList.push(costumerPlate)
  }

  getAll(): CostumerPlate[] {
    return this.itemList
  }

  remove(item: CostumerPlate) {
    this.itemList = this.itemList.filter(i => i != item)
  }
}
