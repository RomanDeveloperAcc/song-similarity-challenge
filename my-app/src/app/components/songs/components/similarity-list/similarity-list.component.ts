import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { interval, Subscription } from 'rxjs';
import { SongsService } from '../../services/songs.service';
import { SongResponseModel } from '../../../../models/song-response.model';
import { SimilarSongModel } from '../../models/similar-song.model';
import { SongInfoComponent } from '../song-info/song-info.component';
import { SONG_FACTS } from '../../../../constants/song-facts';
import { ThemeService } from "../../../../services/theme-service/theme.service";

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
  public mostSimilar = true;
  public leastSimilar = false;
  public theme = 'dark';
  private songFacts = SONG_FACTS;
  private factInterval = interval(7000);
  private songId: number;
  private factIntervalSubscription: Subscription;
  private similarSongsSubscription: Subscription;
  private songIdSubscription: Subscription;

  constructor(private songsService: SongsService,
              private themeService: ThemeService,
              private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setTheme();
    this.setSongId();
    this.setSongIdSubscription();
    this.setSongsFact();
    this.setSongFactsSubscription();
  }

  public openDialogWindow(song: SimilarSongModel): void {
    this.songsService.setSongInfo(song);
    this.dialog.open(SongInfoComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'custom-dialog-container',
    });
  }

  public chooseMostSimilar(): void {
    this.mostSimilar = true;
    this.leastSimilar = false;
    this.sortSongs();
  }

  public chooseLeastSimilar(): void {
    this.mostSimilar = false;
    this.leastSimilar = true;
    this.sortSongs();
  }

  private setTheme(): void {
    this.themeService.themeSubject
      .subscribe((value: string) => this.theme = value);

    const currentTheme = localStorage.getItem('theme');
    this.themeService.emitValue(currentTheme);
  }

  private sortSongs(): void {
    if (this.mostSimilar) {
      this.similarSongs.sort((a, b) => {
        return b.percentage - a.percentage;
      });
    } else {
      this.similarSongs.sort((a, b) => {
        return a.percentage - b.percentage;
      });
    }
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
