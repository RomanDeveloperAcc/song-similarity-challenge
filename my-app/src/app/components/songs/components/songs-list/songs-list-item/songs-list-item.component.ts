import { Component, Input, OnInit } from '@angular/core';
import { SongModel } from '../../../models/song.model';
import { ThemeService } from '../../../../../services/theme-service/theme.service';

@Component({
  selector: 'app-songs-list-item',
  templateUrl: './songs-list-item.component.html',
  styleUrls: ['./songs-list-item.component.scss']
})
export class SongsListItemComponent implements OnInit {
  @Input() public song: SongModel;
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

}
