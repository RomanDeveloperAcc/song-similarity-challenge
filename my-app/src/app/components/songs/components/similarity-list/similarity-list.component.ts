import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subscription } from 'rxjs';
import { SongsService } from '../../services/songs.service';
import { SongResponseModel } from '../../../../models/song-response.model';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongInfoComponent } from '../song-info/song-info.component';
import { SONG_FACTS } from '../../../../constants/song-facts';

@Component({
  selector: 'app-similarity-list',
  templateUrl: './similarity-list.component.html',
  styleUrls: ['./similarity-list.component.scss']
})
export class SimilarityListComponent implements OnInit, OnDestroy {
  public similarSongs: SimilarSongModel[] = [];
  public areSongsAvailable = false;
  public areSongsLoading = true;
  public isError = false;
  public songFact = '';
  private songFacts = SONG_FACTS;
  private factInterval = interval(7000);
  private songId: number;
  private factIntervalSubscription: Subscription;
  private similarSongsSubscription: Subscription;
  private songIdSubscription: Subscription;

  constructor(private songsService: SongsService,
              private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setSongId();
    this.setSongIdSubscription();
    this.setSongsFact();
    this.setSongFactsSubscription();
  }

  public openDialogWindow(song: SimilarSongModel): void {
    this.songsService.setSongInfo(song);
    this.dialog.open(SongInfoComponent, {
      maxHeight: '90vh',
      width: '40vw'
    });
  }

  private setSongId(): void {
    this.songId = this.route.snapshot.params.id;
  }

  private setSongIdSubscription(): void {
    this.songIdSubscription = this.route.paramMap
      .subscribe(params => {
        this.songId = +params.get('id');
        this.setSimilarSongs();
      });
  }

  private setSimilarSongs(): void {
    this.similarSongsSubscription = this.songsService
      .getSimilarSongs(this.songId)
      .subscribe((data: SongResponseModel) => {
        this.similarSongs = [...data.response.similarity_list];
        this.areSongsLoading = false;
        this.areSongsAvailable = this.similarSongs.length > 0;
      }, () => {
        this.factIntervalSubscription.unsubscribe();
        this.areSongsLoading = false;
        this.isError = true;
      });
  }

  private setSongFactsSubscription(): void {
    this.factIntervalSubscription = this.factInterval
      .subscribe(() => this.setSongsFact());
  }

  private setSongsFact(): void {
    this.songFact = this.songFacts[Math.floor(Math.random() * this.songFacts.length)];
  }

  ngOnDestroy(): void {
    this.similarSongsSubscription.unsubscribe();
    this.songIdSubscription.unsubscribe();
  }
}
