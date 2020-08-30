import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { SongResponseModel } from '../../../../models/song-response.model';
import { SimilarSongModel } from '../../models/similar-song.model';

@Component({
  selector: 'app-similarity-list',
  templateUrl: './similarity-list.component.html',
  styleUrls: ['./similarity-list.component.scss']
})
export class SimilarityListComponent implements OnInit {
  public similarSongs: SimilarSongModel[] = [];

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.setSimilarSongs();
  }

  private setSimilarSongs(): void {
    this.songsService.getSimilarSongs()
      .subscribe((data: SongResponseModel) => this.similarSongs = [...data.response.similarity_list]);
  }
}
