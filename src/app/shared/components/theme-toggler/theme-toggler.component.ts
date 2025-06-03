import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent implements OnInit {
  themeService = inject(ThemeService);
  
  get isDarkMode(): boolean {
    return this.themeService.getIsDarkMode();
  }

  ngOnInit(): void {
    this.themeService.listenToSystemThemeChanges();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }


  resetToSystemPreference(): void {
    this.themeService.resetToSystemPreference();
  }
}