import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {
  public songInfo: SimilarSongModel;
  public crossImage = '/assets/img/songs/cross.png';

  constructor(private songsService: SongsService,
              private matDialogRef: MatDialogRef<SongInfoComponent>) { }

  ngOnInit(): void {
    this.setSongInfo();
  }

  public closeDialogWindow(): void {
    this.matDialogRef.close();
  }

  private setSongInfo(): void {
    this.songInfo = { ...this.songsService.getSongInfo() };
  }
}
