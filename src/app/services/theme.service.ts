import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(Theme.LIGHT);
  theme$: Observable<Theme> = this.themeSubject.asObservable();

  constructor() {}
  onInit() {
    let localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme !== Theme.DARK && localStorageTheme !== Theme.LIGHT) {
      localStorageTheme = this.currentTheme;
    }
    this.themeSubject.next(localStorageTheme as Theme);
    this.setTheme(localStorageTheme);
  }
  private setTheme(theme: string) {
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.remove(Theme.DARK, Theme.LIGHT);
    bodyElement?.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
  toggleTheme() {
    if (this.currentTheme === Theme.DARK) {
      this.themeSubject.next(Theme.LIGHT);
      this.setTheme(Theme.LIGHT);
    } else {
      this.themeSubject.next(Theme.DARK);
      this.setTheme(Theme.DARK);
    }
  }
  get currentTheme() {
    return this.themeSubject.value;
  }
}
