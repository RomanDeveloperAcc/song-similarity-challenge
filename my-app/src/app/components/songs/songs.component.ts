import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './songs-routing.animations';
import { ThemeService } from '../../services/theme-service/theme.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
  animations: [fader]
})
export class SongsComponent implements OnInit {
  public theme = 'dark';

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.setTheme();
  }

  private setTheme(): void {
    this.themeService.themeSubject
      .subscribe((value: string) => this.theme = value);

    const currentTheme = localStorage.getItem('theme');
    this.themeService.emitValue(currentTheme);
  }

  public prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
