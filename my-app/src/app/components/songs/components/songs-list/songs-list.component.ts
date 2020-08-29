import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  public songs = [];
  constructor(private songsService: SongsService,
              private router: Router) { }

  ngOnInit(): void {
    this.setSongs();
  }

  private setSongs(): void {
    this.songsService.getSongsByQuery()
      .subscribe((data: any) => {
        this.songs = [...data.response.results];
      });
  }

  public viewSimilar(id: number): void {
    this.songsService.setSongId(id);
    this.router.navigate(['/songs/', id]);
  }
}
