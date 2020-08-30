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
    this.transformLyrics();
  }

  private setSongInfo(): void {
    this.songInfo = { ...this.songsService.getSongInfo() };
  }

  private transformLyrics(): void {
    console.log(this.songInfo.lyrics)
    if (this.songInfo.lyrics[0] === ',') {
      this.songInfo.lyrics = this.songInfo.lyrics.slice(1, this.songInfo.lyrics.length);
    }
    console.log(this.songInfo.lyrics)
    let tempArr = this.songInfo.lyrics.split('');
    tempArr = tempArr.map(elem => elem === ',' ? elem + '\n' : elem);
    this.songInfo.lyrics = tempArr.join('');
    console.log(this.songInfo.lyrics)
  }
}
