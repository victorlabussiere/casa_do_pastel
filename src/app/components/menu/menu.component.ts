import { Component, Input } from '@angular/core';
import { Plate, PlateGroups, PlatesKinds } from 'src/types';

export type CostumerForm = {
  name: string,
  quantity: number,
  observations: string
}

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

  order: CostumerForm = {} as CostumerForm

  constructor() { }

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
      salgado: 'text-red-400',
      doce: 'text-blue-400'
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
    if (this.order.quantity == null) {
      this.order.quantity = 1
    }

    if (this.order.observations == null) {
      this.order.observations = 'Sem observações'
    }

    console.log(this.order)
    console.log('plate', plate)

  }
}
