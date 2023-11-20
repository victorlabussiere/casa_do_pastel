import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/providers/cart/cart.service';
import { CostumerPlate } from 'src/entity/CostumerPlate';
import { OrderForm, Plate, PlateGroups, PlatesKinds } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() plates!: Plate[]
  @Input() groupFilter: PlateGroups | string = 'pastel'
  kindFilter: PlatesKinds = 'salgado'

  pastelList!: Plate[]
  tapiocaList!: Plate[]
  acaiList!: Plate[]

  modalDisplay: boolean = false
  modalPlate: Plate = {} as Plate

  formOrder: OrderForm = { quantity: 1, observations: "" } as OrderForm

  constructor(private cartService: CartService) { }

  openModal(plate: Plate) {
    this.modalDisplay = true
    this.modalPlate = plate
  }

  closeModal() {
    this.modalDisplay = false
    this.modalPlate = {} as Plate
  }

  setStyleByKind(kind: string) {
    const filterColors: any = {
      salgado: 'text-amber-600',
      doce: 'text-pink-500'
    }

    return kind === this.kindFilter ? filterColors[kind] : 'text-gray-500'
  }

  setTitleByGroup(group: string, kind: string) {
    const titles: any = {
      pastel: {
        salgado: "Pastéis Salgados",
        doce: "Pastéis Doces"
      },
      tapioca: {
        salgado: "Tapiocas Salgadas",
        doce: "Tapiocas Doces"
      },
      acai: {
        doce: "Açaí",
      }
    }

    return group === this.groupFilter ? titles[group][kind] : 'Selecione um item'
  }

  setKindFilter(kind: PlatesKinds) {
    if (this.groupFilter === 'acai') {
      this.kindFilter = 'doce'
    }

    this.kindFilter = kind
  }

  addToCart(plate: Plate) {
    const finalPlate = new CostumerPlate(plate, this.formOrder)
    this.cartService.add(finalPlate)
    this.modalDisplay = !this.modalDisplay
    this.formOrder.observations = ''
    this.formOrder.quantity = 1
  }
}
