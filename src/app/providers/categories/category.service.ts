import { Injectable } from '@angular/core';
import { CATEGORIES, Category } from 'src/mock/categories';
import { of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Observable<Category[]> {
    return of(CATEGORIES)
  }
}
