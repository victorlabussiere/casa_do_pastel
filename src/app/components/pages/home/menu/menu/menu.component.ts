import { Component, Input } from '@angular/core';
import { PlatesService } from 'src/app/providers/plates/plates.service';
import { Plate, PlateGroups, PlatesKinds } from 'src/types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() plates!: Plate[]
  @Input() groupFilter!: PlateGroups | string
  kindFilter: PlatesKinds = 'salgado'

  pastelList!: Plate[]
  tapiocaList!: Plate[]
  acaiList!: Plate[]

  constructor(private platesServices: PlatesService) {
    this._initPlates()
    this._setLists()
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

  private _initPlates() {
    this.platesServices.getAllPlates().subscribe(plates => {
      this.plates = plates
    })
  }

  private _setLists() {
    this.pastelList = this.plates.filter(i => i.category.kind == this.kindFilter && i.category.group == 'pastel')
    this.tapiocaList = this.plates.filter(i => i.category.kind == this.kindFilter && i.category.group == 'tapioca')
    this.acaiList = this.plates.filter(i => i.category.group === 'acai')
  }

  setKindFilter(kind: PlatesKinds) {
    if (this.groupFilter === 'acai') {
      this.kindFilter = 'doce'
    }

    this.kindFilter = kind
    this._setLists()
  }
}
