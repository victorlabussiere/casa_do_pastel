import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/providers/browserFunctions/functions.service';
import { CategoryService } from 'src/app/providers/categories/category.service';
import { PlatesService } from 'src/app/providers/plates/plates.service';
import { Category, CategoryInfo } from 'src/mock/categories';
import { Plate, PlateGroups, PlatesKinds } from 'src/mock/plates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categories!: Category[]
  plates!: Plate[]
  groupFilter: string = 'pastel'

  constructor(
    private categoryServices: CategoryService,
    private platesServices: PlatesService,
    private browserFunctions: FunctionsService
  ) { }

  private _getAllCategories() {
    return this.categoryServices.getAllCategories()
  }

  setGroupFilter(group: string) {
    this.groupFilter = group
    return this
  }

  ngOnInit(): void {
    this._getAllCategories()
      .subscribe(categories => this.categories = categories)

    this.platesServices.getAllPlates().subscribe(plate => this.plates = plate)
  }
}
