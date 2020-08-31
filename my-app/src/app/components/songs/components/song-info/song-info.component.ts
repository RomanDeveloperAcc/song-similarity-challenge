import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongsService } from '../../services/songs.service';
import { ThemeService } from '../../../../services/theme-service/theme.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {
  public songInfo: SimilarSongModel;
  public crossImage = '/assets/img/songs/cross.png';
  public theme = 'dark';

  constructor(private songsService: SongsService,
              private themeService: ThemeService,
              private matDialogRef: MatDialogRef<SongInfoComponent>) { }

  ngOnInit(): void {
    this.setTheme();
    this.setSongInfo();
  }

  public closeDialogWindow(): void {
    this.matDialogRef.close();
  }

  private setTheme(): void {
    this.themeService.themeSubject
      .subscribe((value: string) => this.theme = value);

    const currentTheme = localStorage.getItem('theme');
    this.themeService.emitValue(currentTheme);
  }

  private setSongInfo(): void {
    this.songInfo = { ...this.songsService.getSongInfo() };
  }
}
