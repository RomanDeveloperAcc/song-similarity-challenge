import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SongsService } from '../../services/songs.service';
import { SongResponseModel } from '../../../../models/song-response.model';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongInfoComponent } from '../song-info/song-info.component';

@Component({
  selector: 'app-similarity-list',
  templateUrl: './similarity-list.component.html',
  styleUrls: ['./similarity-list.component.scss']
})
export class SimilarityListComponent implements OnInit {
  public similarSongs: SimilarSongModel[] = [];

  constructor(private songsService: SongsService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.setSimilarSongs();
  }

  private setSimilarSongs(): void {
    this.songsService.getSimilarSongs()
      .subscribe((data: SongResponseModel) => this.similarSongs = [...data.response.similarity_list]);
  }

  public openDialogWindow(song: SimilarSongModel): void {
    this.songsService.setSongInfo(song);
    this.dialog.open(SongInfoComponent, {
      maxHeight: '90vh',
      width: '40vw'
    });
  }
}
