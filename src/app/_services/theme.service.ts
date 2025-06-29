import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  theme: string = 'dark';

  changeTheme() {
    this.theme == 'dark' ? 'light' : 'dark';
  }
}
