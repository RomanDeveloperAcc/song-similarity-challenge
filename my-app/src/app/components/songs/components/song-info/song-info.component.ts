import { Component, OnInit } from '@angular/core';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {
  public songInfo: SimilarSongModel;

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.setSongInfo();
  }

  private setSongInfo(): void {
    this.songInfo = { ...this.songsService.getSongInfo() };
  }
}
