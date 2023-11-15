import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import { PLATES } from 'src/mock/plates';
import { Plate } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor() { }

  getAllPlates(): Observable<Plate[]> {
    return of(PLATES)
  }
}
