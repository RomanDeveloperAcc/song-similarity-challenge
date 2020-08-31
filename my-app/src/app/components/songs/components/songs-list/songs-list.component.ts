import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SongsService } from '../../services/songs.service';
import { QueryResponseModel } from '../../../../models/query-response.model';
import { SongModel } from '../../models/song.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit, OnDestroy {
  public songs: SongModel[] = [];
  public areSongsAvailable = false;
  public areSongsLoading = true;
  public isError = false;
  private query: string;
  private querySubscription: Subscription;
  private songsSubscription: Subscription;

  constructor(private songsService: SongsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setQuerySubscription();
    this.setSongs();
  }

  public viewSimilar(id: number): void {
    this.router.navigate(['/songs/', id]);
  }

  private setQuerySubscription(): void {
    this.querySubscription = this.route.queryParams
      .subscribe(params => this.query = params.query);
  }

  private setSongs(): void {
    this.songsService.setQuery(this.query);
    this.songsSubscription = this.songsService
      .getSongsByQuery()
      .subscribe((data: QueryResponseModel) => {
        this.songs = [...data.response.results];
        this.areSongsLoading = false;
        this.areSongsAvailable = this.songs.length > 0;
      }, () => {
        this.areSongsLoading = false;
        this.isError = true;
        this.areSongsAvailable = true;
      });
  }

  ngOnDestroy(): void {
    this.songsSubscription.unsubscribe();
  }
}
