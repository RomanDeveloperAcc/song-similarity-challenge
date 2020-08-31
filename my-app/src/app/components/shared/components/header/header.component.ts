import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../../../services/theme-service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public theme = 'dark';

  constructor(private router: Router,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.setDarkTheme();
    this.setGlobalTheme();
    this.setTheme();
  }

  public goToHomepage(): void {
    this.router.navigate(['/home']);
  }

  public changeTheme(): void {
    if (this.theme === 'dark') {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  private setLightTheme(): void {
    localStorage.setItem('theme', 'light');
    this.themeService.emitValue('light');
  }

  private setDarkTheme(): void {
    localStorage.setItem('theme', 'dark');
    this.themeService.emitValue('dark');
  }

  private setGlobalTheme(): void {
    const currentTheme = localStorage.getItem('theme');
    this.themeService.emitValue(currentTheme);
  }

  private setTheme(): void {
    this.themeService.themeSubject
      .subscribe((value: string) => this.theme = value);
  }
}
