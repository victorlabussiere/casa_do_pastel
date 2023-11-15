import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/providers/categories/category.service';
import { PlatesService } from 'src/app/providers/plates/plates.service';
import { Category, Plate } from 'src/types';
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
  ) { }

  private _getAllCategories() {
    return this.categoryServices.getAllCategories()
  }

  setGroupFilter(group: string) {
    this.groupFilter = group
    return this
  }
  setStyle(category: string, target: string) {
    const filterColors: any = {
      pastel: 'pastel',
      tapioca: 'tapioca',
      acai: 'acai'
    };

    return category === this.groupFilter ? filterColors[category] : `${target}-gray-500`;
  }

  ngOnInit(): void {
    this._getAllCategories()
      .subscribe(categories => this.categories = categories)

    this.platesServices.getAllPlates().subscribe(plate => this.plates = plate)
  }
}
