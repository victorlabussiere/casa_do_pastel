import { Component, OnInit } from '@angular/core';
import { FunctionsService } from 'src/app/providers/browserFunctions/functions.service';
import { CategoryService } from 'src/app/providers/categories/category.service';
import { Category } from 'src/mock/categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  categories!: Category[]

  constructor(
    private categoryServices: CategoryService,
    private browserFunctions: FunctionsService
  ) { }

  private getAllCategories() {
    return this.categoryServices.getAllCategories()
  }

  ngOnInit(): void {
    this.getAllCategories()
      .subscribe(categories => this.categories = categories)
  }

}
