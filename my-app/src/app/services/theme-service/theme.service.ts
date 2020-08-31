import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeSubject = new Subject<string>();

  constructor() { }

  public emitValue(value: string): void {
    this.themeSubject.next(value);
  }
}
