import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  public songs = [];
  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.setSongs();
  }

  private setSongs(): void {
    this.songsService.getSongsByQuery()
      .subscribe((data: any) => {
        this.songs = [...data.response.results];
      });
  }

}
