import { Component, Input, OnInit } from '@angular/core';
import { SimilarSongModel } from '../../../models/similar-song.model';
import { ThemeService } from '../../../../../services/theme-service/theme.service';

@Component({
  selector: 'app-similarity-list-item',
  templateUrl: './similarity-list-item.component.html',
  styleUrls: ['./similarity-list-item.component.scss']
})
export class SimilarityListItemComponent implements OnInit {
  @Input() public song: SimilarSongModel;
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
