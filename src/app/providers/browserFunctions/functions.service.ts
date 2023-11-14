import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  toggleDisplay(query: string, displayClass: string): void {
    const element: HTMLElement | null = document.querySelector(query)
    if (element instanceof HTMLElement) {
      element.classList.toggle(displayClass)
    }
  }
}
