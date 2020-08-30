import { Component, OnDestroy, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Router } from '@angular/router';
import { QueryResponseModel } from '../../../../models/query-response.model';
import { SongModel } from '../../models/song.model';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, OnDestroy {
  public songs: SongModel[] = [];
  public areSongsAvailable = false;
  public areSongsLoading = true;
  private songsSubscription: Subscription;

  constructor(private songsService: SongsService,
              private router: Router) { }

  ngOnInit(): void {
    this.setSongs();
  }

  private setSongs(): void {
    this.songsSubscription = this.songsService
      .getSongsByQuery()
      .subscribe((data: QueryResponseModel) => {
        this.songs = [...data.response.results];
        this.areSongsLoading = false;
        this.areSongsAvailable = this.songs.length > 0;
      });
  }

  public viewSimilar(id: number): void {
    this.router.navigate(['/songs/', id]);
  }

  ngOnDestroy(): void {
    this.songsSubscription.unsubscribe();
  }
}
