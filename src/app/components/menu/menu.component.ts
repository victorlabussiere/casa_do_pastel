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

  modalButtonConfirmation: boolean = false
  modalDisplay: boolean = false
  modalPlate: Plate = {} as Plate

  costumerOrder: OrderForm = { quantity: 1, observations: "" } as OrderForm

  constructor(private cartService: CartService) { }

  openModal(plate: Plate) {
    this.modalButtonConfirmation = false
    this.costumerOrder.observations = ''
    this.costumerOrder.quantity = 1
    this.modalPlate = plate
    this.modalDisplay = true
  }

  closeModal() {
    this.modalDisplay = false
    this.modalPlate = {} as Plate
  }

  setStyleByKind(kind: string) {
    const filterColors: any = {
      salgado: 'text-yellow-500',
      doce: 'text-pink-500'
    }

    return kind === this.kindFilter ? filterColors[kind] : 'text-gray-500'
  }

  setStyleBtGroup(group: string) {
    let groups: any = {
      pastel: 'text-amber-600',
      tapioca: 'text-cyan-600',
      acai: 'text-purple-500'
    }
    return group === this.groupFilter ? groups[group] : 'text-gray-500'
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
        salgado: "Açaí",
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
    const finalPlate = new CostumerPlate(plate, this.costumerOrder)
    this.cartService.add(finalPlate)
    this.modalButtonConfirmation = true
    setTimeout(() => {
      this.modalDisplay = !this.modalDisplay
    }, 700);
  }
}
