import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-similarity-list',
  templateUrl: './similarity-list.component.html',
  styleUrls: ['./similarity-list.component.scss']
})
export class SimilarityListComponent implements OnInit {
  public similarSongs = [];

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.setSimilarSongs();
  }

  private setSimilarSongs(): void {
    this.songsService.getSimilarSongs()
      .subscribe((data: any) => this.similarSongs = [...data.response.similarity_list]);
  }
}
