import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs'
import { PLATES, Plate } from 'src/mock/plates';

@Injectable({
  providedIn: 'root'
})
export class PlatesService {

  constructor() { }

  getAllPlates(): Observable<Plate[]> {
    return of(PLATES)
  }
}
