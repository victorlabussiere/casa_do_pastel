import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/providers/browserFunctions/functions.service';
import { CategoryService } from 'src/app/providers/categories/category.service';
import { PlatesService } from 'src/app/providers/plates/plates.service';
import { Category } from 'src/mock/categories';
import { Plate, PlateGroups } from 'src/mock/plates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categories!: Category[]
  plates!: Plate[]

  filteredPlates!: Plate[]
  filterGroup!: PlateGroups

  constructor(
    private categoryServices: CategoryService,
    private platesServices: PlatesService,
    private browserFunctions: FunctionsService
  ) { }

  private getAllCategories() {
    return this.categoryServices.getAllCategories()
  }

  private getPlates() {
    return this.platesServices.getAllPlates()
  }

  setPlates(group: PlateGroups) {
    this.getPlates().subscribe(plates => {
      this.plates = plates.filter(plate => plate.category.group == group)
    })
  }

  toggleDisplay() {
    let query = 'div.platesTemplate'
    let hideClass = 'hideElement'
    this.browserFunctions.toggleDisplay(query, hideClass)

    return this
  }

  ngOnInit(): void {
    this.getAllCategories()
      .subscribe(categories => this.categories = categories)

  }


}
