import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme-preference';
  private isDarkMode: boolean = false;

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = this.getSystemPreference();
      this.saveThemeToStorage();
    }

    this.applyThemeToBody();
  }

  private getSystemPreference(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private saveThemeToStorage(): void {
    localStorage.setItem(this.THEME_KEY, this.isDarkMode ? 'dark' : 'light');
  }

  private applyThemeToBody(): void {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.saveThemeToStorage();
    this.applyThemeToBody();
    console.log('Dark mode is now:', this.isDarkMode);
  }

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  setDarkMode(enabled: boolean): void {
    this.isDarkMode = enabled;
    this.saveThemeToStorage();
    this.applyThemeToBody();
  }

  listenToSystemThemeChanges(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (!savedTheme) {
        this.isDarkMode = e.matches;
        this.applyThemeToBody();
      }
    });
  }


  resetToSystemPreference(): void {
    localStorage.removeItem(this.THEME_KEY);
    this.isDarkMode = this.getSystemPreference();
    this.applyThemeToBody();
  }
}