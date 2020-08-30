import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Router } from '@angular/router';
import { QueryResponseModel } from '../../../../models/query-response.model';
import { SongModel } from '../../models/song.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  public songs: SongModel[] = [];

  constructor(private songsService: SongsService,
              private router: Router) { }

  ngOnInit(): void {
    this.setSongs();
  }

  private setSongs(): void {
    this.songsService.getSongsByQuery()
      .subscribe((data: QueryResponseModel) => {
        this.songs = [...data.response.results];
      });
  }

  public viewSimilar(id: number): void {
    this.router.navigate(['/songs/', id]);
  }
}
