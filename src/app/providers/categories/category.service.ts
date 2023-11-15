import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import { CATEGORIES } from 'src/mock/categories';
import { Category } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Observable<Category[]> {
    return of(CATEGORIES)
  }
}
