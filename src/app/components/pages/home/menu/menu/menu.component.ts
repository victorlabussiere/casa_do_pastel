import { Component, Input } from '@angular/core';
import { FunctionsService } from 'src/app/providers/browserFunctions/functions.service';
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

  constructor(
    private platesServices: PlatesService
  ) {
    this._initPlates()
    this._setLists()
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
    this.kindFilter = kind
    this._setLists()
  }
}
