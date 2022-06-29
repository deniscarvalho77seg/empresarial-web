import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  actualPageTitle: String = "";
  constructor() { }

  getActualPageTitle(): String { return this.actualPageTitle; }
}
